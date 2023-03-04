import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import PostsList from "../components/PostsList/PostsList";
import { Loader } from "../components/UI/Loader/Loader";
import { getUserPosts } from "../store/usersSlice";

const UserPosts = () => {
  const { id } = useParams();
  const { userPosts, isUserPLoading, userPError, userName } = useSelector(
    (state) => state.users
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserPosts(id));
  }, [id]);

  return (
    <div style={{ textAlign: "center" }}>
      {userPError ? (
        <h1>{userPError}</h1>
      ) : (
        <>
          {isUserPLoading ? (
            <Loader />
          ) : (
            <div>
              <h1>{userName}`s Posts:</h1>
              <PostsList posts={userPosts} />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default UserPosts;
