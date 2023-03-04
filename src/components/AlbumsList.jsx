import React from "react";
import { useSelector } from "react-redux";
import AlbumCard from "./AlbumCard";

const AlbumsList = () => {
  const { userAlbums, userName } = useSelector((state) => state.users);

  return (
    <div>
      <h2>{userName}`s Albums:</h2>
      <ul style={{ padding: 0 }}>
        {userAlbums.map((a) => (
          <AlbumCard a={a} key={a.id} />
        ))}
      </ul>
    </div>
  );
};

export default AlbumsList;
