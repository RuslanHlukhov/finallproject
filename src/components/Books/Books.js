import React, { useEffect, useState } from "react";
import { getAllPost } from "../Api/Api";
import Post from "../Post/Post";

const Books = () => {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    getAllPost().then((res) => {
      setPostList(res);
    });
  }, []);

  return (
    <div className="information col-lg-9">
      {postList
        .filter((post) => post.category === "Книги")
        .map((post) => {
          return <Post post={post} key={post.id} />;
        })}
      {postList
        .filter((post) => post.category === "Books")
        .map((post) => {
          return <Post post={post} key={post.id} />;
        })}
    </div>
  );
};

export default Books;
