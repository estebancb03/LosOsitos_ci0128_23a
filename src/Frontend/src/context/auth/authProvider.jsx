import { useReducer } from "react";
import jwt_decode from "jwt-decode";
import authContext from "./authContext";
import authReducer from "./authReducer";
import { AUTH_TOKEN } from "../../types/index";

const AuthProvider = (props) => {
  const { children } = props;
  const localStorageToken = localStorage.getItem('auth-token');
  const decoded = jwt_decode(localStorageToken);
  const initialState = {
    token: localStorageToken ? localStorageToken : null,
    auth: localStorageToken ? true : null,
    user: localStorageToken ? decoded.Username : null,
    type: localStorageToken ? decoded.Type : null,
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
