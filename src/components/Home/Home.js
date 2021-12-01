import React, { useState, useEffect } from "react";
import { DropdownButton, Dropdown, Form, InputGroup, FormControl, Button, Row, Col } from 'react-bootstrap'
import Post from "../Post/Post";
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { addTest, getAllPost, } from "../Api/Api";
import FormPost from "../FormPost/FormPost";


const Home = (props) => {
    const { t, i18n } = useTranslation();
    const handleClick = (lang) => {
        i18n.changeLanguage(lang);
    }  
    const [postList, setPostList] = useState([]);

    useEffect(() => {
        getAllPost().then((res)=>{ 
            setPostList(res);
        });
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