import { useState } from "react";
import Post from "./component/Post";

import { useAddPostMutation, usePostsQuery } from "./store/postApi";

const App = () => {
  const { data, isLoading, error, isSuccess } = usePostsQuery("s");

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [addPost, result] = useAddPostMutation();
  const handleAddTask = async () => {
    const task = {
      title,
      body,
      id: Math.random(),
      userId: Math.random(),
    };
    await addPost(task);
  };
  console.log(data);

  return (
    <div>
      <input
        placeholder="enter the title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></input>
      <input
        placeholder="enter the body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      ></input>
      <button onClick={handleAddTask}>Add task</button>
      <div>
        {error && <p>An error occured</p>}
        {isLoading && <p>Loading...</p>}
      </div>
      {isSuccess && (
        <>
          {data.map((post: PostType) => (
            <Post key={post.id} post={post} />
          ))}
        </>
      )}
    </div>
  );
};

export default App;
