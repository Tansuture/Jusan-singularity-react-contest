import React, { FC } from "react";

interface Props {
  post: PostType;
}
const Post: FC<Props> = ({ post }) => {
  return (
    <div>
      <div>
        <h1>{post.title}</h1>
        <p>{post.title}</p>
      </div>
    </div>
  );
};

export default Post;
