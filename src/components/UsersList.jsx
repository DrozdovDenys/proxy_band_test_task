import React from "react";
import UserCard from "./UserCard/UserCard";

const UsersList = ({ users, setModal }) => {
  return (
    <>
      <h1>Users:</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {users.map((u) => (
          <UserCard key={u.id} u={u} setModal={setModal} />
        ))}
      </div>
    </>
  );
};

export default UsersList;
