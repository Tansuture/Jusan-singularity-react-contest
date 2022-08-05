import React, { FC } from "react";
import { useUpdatePostMutation } from "../store/postApi";

interface Props {
  id: number;
  title: string;
  body: string;
  show: boolean;
  setTitle: (str: string) => void;
  setBody: (str: string) => void;
  setShow: (value: boolean) => void;
}
const EditTask: FC<Props> = ({
  title,
  body,
  id,
  show,
  setShow,
  setBody,
  setTitle,
}) => {
  const [updatePost] = useUpdatePostMutation();
  const handleUpdateTask = () => {
    const post = {
      title,
      body,
      id: id,
    };

    updatePost(post);
  };
  return (
    <div>
      {show && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "300px",
            marginTop: "10px",
          }}
        >
          <textarea
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            placeholder="edit title"
          ></textarea>
          <textarea
            placeholder="edit title"
            onChange={(e) => setBody(e.target.value)}
            value={body}
          ></textarea>
          <button onClick={handleUpdateTask}>update post</button>
          <button onClick={() => setShow(false)}>X</button>
        </div>
      )}
    </div>
  );
};

export default EditTask;
