import jwt_decode from "jwt-decode";
import { LOG_IN, LOG_OUT } from "../../types/index";

export default (state, action) => {
  switch(action.type) {
    case LOG_IN: {
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
  case LOG_OUT: {
    localStorage.removeItem('auth-token');
    return {
      ...state,
      token: null,
      user: null,
      type: null,
      auth: null
    };
  }
    default:
      return state;
  }    
};
