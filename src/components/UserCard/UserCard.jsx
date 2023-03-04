import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { MyButton } from "../UI/Button/MyButton";
import { getUserAlbums, getUserName } from "../../store/usersSlice";
import styles from './userCard.module.css'

const UserCard = ({ u, setModal }) => {
  const history = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className={styles.card}>
      <article className={styles.cardItem}>
        <h2>User {u.id} Information</h2>
        <ul>
          <li>
            <b>Name:</b> {u.name}
          </li>
          <li>
            <b>User Name:</b> {u.username}
          </li>
          <li>
            <b>Address:</b>
            <ul>
              <li>
                <i>city:</i> {u.address.city}
              </li>
              <li>
                <i>street:</i> {u.address.street}
              </li>
            </ul>
          </li>
          <li>
            <b>Website:</b> {u.website}
          </li>
          <li>
            <b>Company:</b> {u.company.name}
          </li>
          <li>
            <b>Email:</b> {u.email}
          </li>
          <li>
            <b>Phone:</b> {u.phone}
          </li>
        </ul>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <MyButton
            onClick={() => {
              history(`/users/${u.id}/posts`);
              dispatch(getUserName(u.name));
            }}
          >
            see posts
          </MyButton>
          <MyButton
            onClick={() => {
              dispatch(getUserAlbums(u.id));
              setModal(true);
              dispatch(getUserName(u.name));
            }}
          >
            see albums
          </MyButton>
        </div>
      </article>
    </div>
  );
};

export default UserCard;
