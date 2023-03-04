import React, { useEffect, useState } from "react";

import { MyModal } from "../components/UI/MyModal/MyModal";
import AlbumsList from "../components/AlbumsList";
import UsersList from "../components/UsersList";
import { Loader } from "../components/UI/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../store/usersSlice";

const Users = () => {
  const [modal, setModal] = useState(false);
  const {
    users,
    isUsersLoading,
    usersError,
    isUserALoading,
    userAError,
  } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <>
      {usersError || userAError ? (
        <h1>{usersError || userAError}</h1>
      ) : (
        <div>
          {isUserALoading ? (
            <Loader />
          ) : (
            <MyModal visible={modal} setVisible={setModal}>
              <AlbumsList />
            </MyModal>
          )}
          {isUsersLoading ? (
            <Loader />
          ) : (
            <UsersList users={users} setModal={setModal} />
          )}
        </div>
      )}
    </>
  );
};

export default Users;
