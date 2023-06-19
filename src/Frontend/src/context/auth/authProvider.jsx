import { useReducer } from "react";
import authContext from "./authContext";
import authReducer from "./authReducer";
import { AUTH_TOKEN } from "../../types/index";

const AuthProvider = (props) => {
  const { children } = props;
  const initialState = {
    token: null,
    auth: null,
    user: null,
    type: null
  };
  const [state, dispatch] = useReducer(authReducer, initialState);
  
  const authToken = (token) => {
    dispatch({
      type: AUTH_TOKEN,
      payload: token
    });
  };
  
  return (
    <authContext.Provider
      value={{
        token: state.token,
        auth: state.auth,
        user: state.user,
        type: state.type,
        authToken
      }}  
    >
      { children }
    </authContext.Provider>
  );
};

export default AuthProvider;
