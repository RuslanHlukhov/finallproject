import React, { useEffect, useState } from "react";
import { getAllPost } from "../Api/Api";
import Post from "../Post/Post";

const Games = () => {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    getAllPost().then((res) => {
      setPostList(res);
    });
  }, []);

  return (
    <div>
      {postList
        .filter((post) => post.category === "Игры")
        .map((post) => {
          return <Post post={post} key={post.id} />;
        })}
      {postList
        .filter((post) => post.category === "Games")
        .map((post) => {
          return <Post post={post} key={post.id} />;
        })}
    </div>
  );
};

export default Games;
