import React, { FC, useState } from "react";
import EditTask from "./EditTask";

interface Props {
  post: PostType;
  title: string;
  body: string;
}
const Post: FC<Props> = ({ post, title, body }) => {
  const [show, setShow] = useState(false);
  const [editTitle, setTitle] = useState(title);
  const [editbody, setBody] = useState(body);

  return (
    <div>
      <div>
        <h1>{post.title}</h1>
        <p>{post.title}</p>
        <button onClick={() => setShow(true)}>edit post</button>
        <EditTask
          show={show}
          title={title}
          setBody={setBody}
          setTitle={setTitle}
          body={editbody}
          id={post.id}
          setShow={setShow}
        />
      </div>
    </div>
  );
};

export default Post;
