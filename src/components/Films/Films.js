import React, { useEffect, useState } from "react";
import { getAllPost } from "../Api/Api";
import Post from "../Post/Post";

const Films = () => {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    getAllPost().then((res) => {
      setPostList(res);
    });
  }, []);

  return (
    <div>
      {postList
        .filter((post) => post.category === "Фильмы")
        .map((post) => {
          return <Post post={post} key={post.id} />;
        })}
      {postList
        .filter((post) => post.category === "Films")
        .map((post) => {
          return <Post post={post} key={post.id} />;
        })}
    </div>
  );
};

export default Films;
