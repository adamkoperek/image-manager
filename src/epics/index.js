import {LOGIN_SUCCESS, LOGIN} from "../actions/types";
import {combineEpics, ofType} from 'redux-observable'
import {mergeMap, map} from 'rxjs/operators'
import {ajaxPost} from "rxjs/internal/observable/dom/AjaxObservable";

function login(email, password) {
  return ajaxPost(
    'http://localhost:3000/login',
    JSON.stringify({auth: {email, password}}),
    {'Content-type': 'application/json'}
  )
}

const loginEpic = action$ => action$.pipe(
  ofType(LOGIN),
  mergeMap(action =>
    login(action.payload.email, action.payload.password).pipe(
      map(response => (response.response)),
      map(response => {
        return ({
          type: LOGIN_SUCCESS,
          payload:
            {
              username: action.payload.email,
              jwt: response.jwt
            }
        });
      })
    )
  )
);

export default combineEpics(
  loginEpic
);
