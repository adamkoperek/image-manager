import {LOGIN} from "../actions/types"
import {combineEpics, ofType} from 'redux-observable'
import {of} from 'rxjs'
import {mergeMap, map, catchError} from 'rxjs/operators'
import {login} from '../services/auth.service'
import {loginSuccess, loginError} from '../actions/auth.actions'

const loginEpic = action$ => action$.pipe(
  ofType(LOGIN),
  mergeMap(action =>
    login(action.payload.email, action.payload.password).pipe(
      map(
        ({response}) => {
          if (response.error) { return loginError(response.error); }
          return loginSuccess(action.payload.email, response.jwt);
        }
      ),
      catchError(({response}) => of(loginError(response.error)))
    )
  )
);

export default combineEpics(
  loginEpic
);
