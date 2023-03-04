import React from "react";

const PostCard = ({ p }) => {
  return (
    <article style={{ border: "2px solid", margin: "10px", padding: "10px" }}>
      <h5>
        {p.id}. {p.title}
      </h5>
      <p>{p.body}</p>
    </article>
  );
};

export default PostCard;
