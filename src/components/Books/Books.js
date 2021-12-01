import React, { useState, useEffect } from "react";
import Post from "../Post/Post";
import { getAllPost, } from "../Api/Api";
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import FormPost from "../FormPost/FormPost";
import {Col} from 'react-bootstrap'

const Books = () => {
    const { t, i18n } = useTranslation();
    const handleClick = (lang) => {
        i18n.changeLanguage(lang);
    }
    const [postList, setPostList] = useState([]);

    useEffect(() => {
        getAllPost().then((res) => {
            setPostList(res);
        });
    }, []);

    const isLogin = useSelector(({ isLogin }) => isLogin);

    return (
            <div>
                {isLogin ?
                <div className="information col-lg-9" >
                    <FormPost />
                    {postList
                        .filter((post) =>( 
                            post.category === 'Книги'
                                ))
                        .map((post)=>{       
                            return  <Post post={post} key={post.id}  />           
                    })} 
                     {postList
                        .filter((post) =>( 
                            post.category === 'Books'
                                ))
                        .map((post)=>{       
                            return  <Post post={post} key={post.id}  />           
                    })}                                
                   </div>               
                    :
                    <div>
                        <Col>  
                        {postList
                            .filter((post) => (
                                post.category === 'Книги'
                            ))
                            .map((post) => {
                                return <Post post={post} key={post.id} />
                            })}
                            {postList
                            .filter((post) => (
                                post.category === 'Books'
                            ))
                            .map((post) => {
                                return <Post post={post} key={post.id} />
                            })}                      
                         </Col>
                   </div>
    
                   
                }   
                       
            </div>       
    )
}

export default Books