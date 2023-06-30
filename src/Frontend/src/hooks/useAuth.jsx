import jwt_decode from "jwt-decode";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AxiosClient from "../config/AxiosClient";
import authContext from "../context/auth/authContext";

const useAuth = () => {
  const AuthContext = useContext(authContext);
  const navigate = useNavigate();
  const { authToken, deauthToken, expiredTokenCkeck, token, auth } = AuthContext;
  
  const authUser = async (user) => {
    try {
      const { Username, Password } = user;
      const url = `/employee/${Username}/${Password}`;
      const { data } = await AxiosClient.get(url);
      authToken(data.token);
      return data;
    } catch (exception) {
      console.log(exception);
    }
  };
  
  const deauthUser = () => {
    localStorage.removeItem('auth-token');
    deauthToken();
  };

  const expiredSesion = (token) => {
    const decode = jwt_decode(token);
    if (decode.exp <= Date.now() / 1000) {
      console.log('Decode: ', decode.exp);
      console.log('Now: ', Date.now() / 1000);
      return true;
    }
    return false;
  };

  return { authUser, deauthUser, expiredSesion };
};

export default useAuth;
