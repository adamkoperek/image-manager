import {ofType} from "redux-observable";
import {GET_SCOPES} from "../actions/types";
import {of} from "rxjs";
import {catchError, map, mergeMap} from "rxjs/operators";
import {getScopes} from '../services/scopes.service'
import {getScopesSuccess} from "../actions/scopes.actions";

const getScopesEpic = (action$, store) => action$.pipe(
  ofType(GET_SCOPES),
  mergeMap(action => getScopes(store.value.auth.user.jwt).pipe(
    map(
      ({response}) => {
        return getScopesSuccess(response)
      }
    ),
    catchError(({response}) => of(getScopesSuccess(response.error)))
    )
  )
);

export default [
  getScopesEpic
];
