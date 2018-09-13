import {get} from './index'

export const getScopes = (jwt) => {
  return get(
    'ajax/scopes', jwt
  );
};
