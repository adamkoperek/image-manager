import {LOGIN_SUCCESS, LOGOUT} from "../actions/types";

const initialState = {
  user: null
};

export default function (state = initialState, action) {
  switch (action.type) {

    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload
      };

    case LOGOUT:
      return {
        ...state,
        user: null
      };

    default:
      return state;
  }
}
