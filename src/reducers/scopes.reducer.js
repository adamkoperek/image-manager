import {GET_SCOPES_SUCCESS} from "../actions/types";

const initialState = {
  scopes: [],
  currentScope: null
};

export default function (state = initialState, action) {
  switch (action.type) {

    case GET_SCOPES_SUCCESS:
      return {
        ...state,
        scopes: action.payload
      };

    default:
      return state;
  }
}
