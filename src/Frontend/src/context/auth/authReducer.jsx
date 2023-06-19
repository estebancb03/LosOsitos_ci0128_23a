import jwt_decode from "jwt-decode";
import { AUTH_TOKEN } from "../../types/index";

export default (state, action) => {
  switch(action.type) {
    case AUTH_TOKEN: {
      if (action.payload) {
        localStorage.setItem('auth-token', action.payload);
        const decoded = jwt_decode(action.payload);
        return {
          ...state,
          token: action.payload,
          user: decoded.Username,
          type: decoded.Type,
          auth: true
        };
      } else {
        return {
          ...state,
          token: null,
          user: null,
          type: null,
          auth: null
        };
      }
    }
    default:
      return state;
  }    
};
