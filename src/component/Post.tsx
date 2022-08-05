import { styled } from "@mui/material";
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

  const MainDiv = styled("div")`
    border: 1px solid black;
    margin-left: 10px;
    margin-top: 10px;
    padding: 10px;
  `;
  return (
    <MainDiv>
      <div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <button onClick={() => setShow(true)}>edit post</button>
        <EditTask
          show={show}
          title={editTitle}
          setBody={setBody}
          setTitle={setTitle}
          body={editbody}
          id={post.id}
          setShow={setShow}
        />
      </div>
    </MainDiv>
  );
};

export default Post;
