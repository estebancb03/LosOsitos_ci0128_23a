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
import useUser from "../hooks/useUser";

const UserList = () => {
  const [user, setUser] = useState({});
  const [viewModal, setViewModal] = useState(false);
  const { users, fetchUsers , createUser, deleteUser } = useUser();
  const tableColumns = [
    "Id",
    "Username",
    "Employee",
    "Email",
    "Gender",
    "Type",
    "Delete"
  ];

  const exitMethod = () => {
    setUser(createUser());
    fetchUsers();
  };

  const deleteSelectedUser = async (selectedUser) => {
    if (confirm("Are you sure to delete this user?")) {
      await deleteUser(selectedUser);
      await fetchUsers();
    }
  };

  useEffect(() => setUser(createUser()), []);

  return (
    <>
      <NavMenu />
      <Container>
        <Title name="User List" />
        <div className="mt-5 mb-3 grid grid-cols-4 sm:grid-cols-1">
          <Button datacy="createuser-button" text="Create user" type="" onclickFunction={() => setViewModal(true)} />
        </div>
        <CreateUser
          viewModal={viewModal}
          setViewModal={setViewModal}
          user={user}
          setUser={setUser}
          exitMethod={exitMethod}
        />
        <Table colums={tableColumns}>
          {users.map((user, index) => (
            <TableItem
              datacy={user.Username+"-tr"}
              key={index}
              number={index}
              data={[
                user.ID,
                user.Username,
                user.Name + " " + user.LastName1 + " " + user.LastName2,
                user.Email,
                user.Gender === 0 ? "Male" :
                user.Gender === 1 ? "Female" :
                user.Gender === 2 ? "Non-Binary" : "Other",
                user.Type === 0 ? "Admin" : "Operator",
                <Button
                  datacy={"delete-"+user.Username+"-button"}
                  text="Delete"
                  type="delete"
                  onclickFunction={(e) => deleteSelectedUser(user)}
                />
              ]}
            />
          ))}
        </Table>
      </Container>
      <Footer />
    </>
  );  
};

export default UserList;
