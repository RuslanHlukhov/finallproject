import React, { useState, useEffect } from "react";
import './FormPost.css'
import { DropdownButton, Dropdown, Form, InputGroup, FormControl, Button, Row, Col } from 'react-bootstrap'
import Post from "../Post/Post";
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { addTest, getAllPost } from "../Api/Api";
import {getPosts} from '../../redux/action'


const FormPost = (props) => {
    const { t, i18n } = useTranslation();
    const handleClick = (lang) => {
        i18n.changeLanguage(lang);
    }  


    const dispatch = useDispatch();
 
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');   
    const [category, setCategory] = useState('');
    const [isUpdate, setIsUpdate] = useState(false);
    const [postList, setPostList] = useState([]);
    const [image, setImage] = useState('');
    const [id, setId] = useState('')
    const addPost = () =>{
        if(title && text){
        addTest ({
            name:name,
            title:title,
            category: category,
            text:text,
            image:image,
            
        })  
         setIsUpdate(true)     
    }else{
        console.log('Заполните все поля');
    }
    
    }

    const posts = useSelector(({ posts }) => posts);
    
    useEffect(() => {
        if(isUpdate){
        getAllPost().then((res)=>{ 
            dispatch(getPosts(res));
            setPostList(res); 
            setIsUpdate(true)             
        });
    }
    }, [isUpdate]);

    // useEffect(() => {
    
    //     getAllPost().then((res)=>{ 
    //         dispatch(getPosts(res));
    //         setPostList(res); 
                   
    //     });
    
    // }, [postList]);

    const uploadImage = async e =>{
        const files = e.target.files
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'jmz8vdyg')
        const res = await fetch(
            'https://api.cloudinary.com/v1_1/dzkpy4oac/upload',
            {
                method: 'POST',
                body: data
            }
        )
        const file = await res.json()

        setImage(file.secure_url)
    }


    const handleSelect=(e)=>{
      console.log(e);
      setCategory(e)
    }

    const name = useSelector(({user}) => {
        return user.nameUser
        
    })

    return (
        <div сlassName='form' style={{width:'60%'}}>            
            
                <Col>
                <Form className="">
                
                    <div className="name">{name}</div>
                    <InputGroup className="mb-3">
                        <DropdownButton
                            name="category"
                            variant="outline-secondary"
                            title={category}
                            id="dropdown-menu-align-right"
                            onSelect={handleSelect}
                            onChange={(event) => {
                                setCategory(handleSelect)
                            }}
                        >
                            <Dropdown.Item eventKey={t('games.1')}>{t('games.1')}
                          
                            </Dropdown.Item>
                            <Dropdown.Item eventKey={t('films.1')}>{t('films.1')}
                          
                            </Dropdown.Item>
                            <Dropdown.Item eventKey={t('books.1')}>{t('books.1')}
                          
                            </Dropdown.Item>
                            <Dropdown.Divider />
                        </DropdownButton>
                        <FormControl aria-label="Text input with dropdown button" />
                        <Button variant="outline-secondary" id="button-addon2">
                            Tags
                        </Button>
                    </InputGroup>
                    <Form.Group>
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="title" placeholder=""
                            onChange={(event) => {
                                setTitle(event.target.value)
                            }
                            }
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Select text</Form.Label>
                        <Form.Control as="textarea" rows={3}
                            onChange={(event) => {
                                setText(event.target.value)
                            }
                            }
                        />
                    </Form.Group>
                    <Row>
                        <Col>
                        <Form.Group controlId="formFile" className="mb-3">
                            {/* <Form.Label>Default file input example</Form.Label> */}
                            <Form.Control type="file"
                             name="file"
                             placeholder="Upload an Image"
                             onChange={uploadImage}
                              />
                        </Form.Group>
                        </Col>
                            <Col>  <img className="imgpost" src={image} style={{width:'200px', textAlign: 'center'}} /> </Col>
                            <Col>
                            <Button className="btn__send" as="input" type="button" value="Input"
                                onClick={addPost}
                            />
                            </Col>
                       
                        
                    </Row>
                </Form>      
                </Col>                                                    
                                                
        </div>
        
    )
}

export default FormPost;