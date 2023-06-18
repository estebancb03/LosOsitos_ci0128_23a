import { AUTHENTICATED_USER } from "../../types/index";

export default (state, action) => {
  switch(action.type) {
    case AUTHENTICATED_USER:
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }    
};
