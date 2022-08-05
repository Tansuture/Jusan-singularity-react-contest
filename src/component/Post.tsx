import React, { FC, useState } from "react";

interface Props {
  post: PostType;
}
const Post: FC<Props> = ({ post }) => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div>
        <h1>{post.title}</h1>
        <p>{post.title}</p>
        <button onClick={() => setShow(true)}>edit</button>
      </div>
    </div>
  );
};

export default Post;
