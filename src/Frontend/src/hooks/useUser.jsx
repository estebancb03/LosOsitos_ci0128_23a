import React from "react";
import AxiosClient from "../config/AxiosClient";

const useUser = () => {
  const createUser = () => {
    return {
      ID: "",
      Name: "",
      LastName1: "",
      LastName2: "",
      Gender: 0,
      Email: "",
      Country_Name: "Costa Rica",
      Birth_Date: new Date().toISOString(),
      State: "",
      Username: "",
      Password: "",
      Type: 0
    };
  };

  const modifyUserData = (type, value, user) => {
    const newUser = {...user};
    if (type === "usertype") {
      if (value === "Admin") {
        newUser.Type = 0;
      } else {
        newUser.Type = 1;
      }
    } else if (type === "username") {
      newUser.Username = value;
    } else if (type === "userpassword") {
      newUser.Password = value;
    }
    return newUser;
  };

  return { createUser, modifyUserData };
};

export default useUser;