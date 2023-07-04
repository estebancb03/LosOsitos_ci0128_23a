import AxiosClient from "./AxiosClient";

const AuthToken = (token) => {
  if (token) {
    AxiosClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete AxiosClient.defaults.headers.common['Authorization'];
  }
};

export default AuthToken;
