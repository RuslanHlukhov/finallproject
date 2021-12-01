import React, { useState, useEffect } from "react";
import { Col } from 'react-bootstrap'
import Post from "../Post/Post";
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { addTest, getAllPost, } from "../Api/Api";
import FormPost from "../FormPost/FormPost";



const Home = (props) => {
    const dispatch = useDispatch();
    const { t, i18n } = useTranslation();
    const handleClick = (lang) => {
        i18n.changeLanguage(lang);
    }  
    const [postList, setPostList] = useState([]);
    // const [isUpdate, setIsUpdate] = useState(false);

    useEffect(() => {
        // if(isUpdate){
        getAllPost().then((res)=>{ 
            // dispatch(getPosts(res));
            setPostList(res);
            // setIsUpdate(true) 
        });
    // }
    }, []);

    const isLogin = useSelector(({ isLogin }) => isLogin);
    return (
        <div>
            {isLogin ?
            <div className="information col-lg-9" >
                <FormPost />
                    {postList.map((post)=>{
                    return  <Post post={post} key={post.id}  />           
                     })}   
                                                     
               </div>               
                :
                <div>
                    <Col>  
                    {postList.map((post)=>{
                    return  <Post post={post} key={post.id} />                   
                     })}                      
                     </Col>
               </div>

               
            }   
                   
        </div>
        
    )
}

export default Home;