import React from "react";
import { useNavigate } from "react-router-dom";
import PostCard from "../PostCard";
import { MyButton } from "../UI/Button/MyButton";
import styles from './postsList.module.css'

const UserPosts= ({ posts }) => {
  const history = useNavigate();
  return (
    <div className={styles.postsList}>
      {posts.map((p) => (
        <PostCard key={p.id} p={p} />
      ))}
      <MyButton onClick={() => history(`/users`)}>Back to Users List</MyButton>
    </div>
  );
};

export default UserPosts;
