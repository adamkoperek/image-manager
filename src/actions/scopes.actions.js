import {GET_SCOPES, GET_SCOPES_SUCCESS, CREATE_SCOPE, CREATE_SCOPE_SUCCESS, REMOVE_SCOPE, REMOVE_SCOPE_SUCCESS} from "./types";

export const getScopes = () => ({
  type: GET_SCOPES
});

export const getScopesSuccess = (scopes) => ({
  type: GET_SCOPES_SUCCESS,
  payload: scopes
});

export const createScope = (scopeName) => ({
  type: CREATE_SCOPE
});

export const createScopeSuccess = (scopeName) => ({
  type: CREATE_SCOPE_SUCCESS
});

export const removeScope = (scopeId) => ({
  type: REMOVE_SCOPE,
  payload: scopeId
});

export const removeScopeSuccess = () => ({
  type: REMOVE_SCOPE_SUCCESS
});
