import { useReducer } from "react";
import authContext from "./authContext";
import authReducer from "./authReducer";
import { AUTHENTICATED_USER } from "../../types/index";

const AuthProvider = (props) => {
  const { children } = props;
  const initialState = {
    token: "",
    auth: null,
    user: null,
    type: null,
    message: null
  };
  const [state, dispatch] = useReducer(authReducer, initialState);
  
  const authenticatedUser = (name) => {
    dispatch({
      type: AUTHENTICATED_USER,
      payload: name
    });
  };
  
  return (
    <authContext.Provider
      value={{
        token: state.token,
        auth: state.auth,
        user: state.user,
        message: state.message,
        authenticatedUser
      }}  
    >
      { children }
    </authContext.Provider>
  );
};

export default AuthProvider;
