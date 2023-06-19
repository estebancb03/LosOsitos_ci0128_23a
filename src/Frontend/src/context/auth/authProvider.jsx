import { useReducer } from "react";
import jwt_decode from "jwt-decode";
import authContext from "./authContext";
import authReducer from "./authReducer";
import { LOG_IN, LOG_OUT } from "../../types/index";

const AuthProvider = (props) => {
  const { children } = props;
  const localStorageToken = localStorage.getItem('auth-token');
  const decoded = localStorageToken ? jwt_decode(localStorageToken) : null;
  const initialState = {
    token: localStorageToken ? localStorageToken : null,
    auth: localStorageToken ? true : null,
    user: localStorageToken ? decoded.Username : null,
    type: localStorageToken ? decoded.Type : null,
  };
  const [state, dispatch] = useReducer(authReducer, initialState);
  
  const authToken = (token) => {
    dispatch({
      type: LOG_IN,
      payload: token
    });
  };

  const deauthToken = () => {
    dispatch({
      type: LOG_OUT,
      payload: null
    });
  };

  return (
    <authContext.Provider
      value={{
        token: state.token,
        auth: state.auth,
        user: state.user,
        type: state.type,
        authToken,
        deauthToken
      }}  
    >
      { children }
    </authContext.Provider>
  );
};

export default AuthProvider;
