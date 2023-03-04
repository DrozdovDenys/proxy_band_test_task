import React from "react";

const AlbumCard = ({ a }) => {
  return (
    <li
      style={{
        border: "2px solid",
        margin: "10px",
        padding: "10px",
        listStyleType: "none",
      }}
    >
      <h5>
        {a.id}. {a.title}
      </h5>
    </li>
  );
};

export default AlbumCard;
