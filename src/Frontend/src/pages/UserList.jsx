import React from "react";
import { useEffect, useState } from "react";

import Title from "../components/Title";
import Table from "../components/Table/Table";
import Footer from "../components/Footer/Footer";
import Button from "../components/Buttons/Button";
import NavMenu from "../components/NavMenu/NavMenu";
import TableItem from "../components/Table/TableItem";
import Container from "../components/Containers/Container";
import CreateUser from "../components/UserList/CreateUser";

const UserList = () => {
  const [user, setUser] = useState({});
  const [viewModal, setViewModal] = useState(false);
  const tableColumns = [
    "Id",
    "Name",
    "Lastname 1",
    "Lastname 2",
    "Email",
    "Gender",
    "Type",
    "Delete"
  ];

  return (
    <>
      <NavMenu />
      <Container>
        <Title name="User List" />
        <div className="mt-5 mb-3 grid grid-cols-4 sm:grid-cols-1">
          <Button text="Create user" type="" onclickFunction={() => {}} />
        </div>
        <CreateUser
          viewModal={viewModal}
          setViewModal={setViewModal}
          user={user}
          setUser={setUser}
          exitMethod={() => {}}
        />
      </Container>
      <Footer />
    </>
  );  
};

export default UserList;
