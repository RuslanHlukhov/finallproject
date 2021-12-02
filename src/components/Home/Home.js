import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../redux/action";
import { getAllPost } from "../Api/Api";
import FormPost from "../FormPost/FormPost";
import Post from "../Post/Post";

const Home = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector(({ isLogin }) => isLogin);
  const [postList, setPostList] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    getAllPost().then((res) => {
      console.log(res);
      dispatch(getPosts(res));
      setPostList(res);
    });
  }, [dispatch]);

  useEffect(() => {
    if (isUpdate) {
      getAllPost().then((res) => {
        dispatch(getPosts(res));
        setPostList(res);
        setIsUpdate(false);
      });
    }
  }, [isUpdate, postList.length, dispatch]);

  return (
    <div>
      <div className="information col-lg-9">
        {isLogin ? <FormPost setIsUpdate={setIsUpdate} /> : null}
        {postList.map((post) => {
          return <Post post={post} key={post.id} setIsUpdate={setIsUpdate}/>;
        })}
      </div>
    </div>
  );
};

export default Home;
