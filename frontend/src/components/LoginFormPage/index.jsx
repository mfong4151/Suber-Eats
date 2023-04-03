import React, { useEffect } from 'react';
import LoginForm from './LoginForm.jsx';
import LoginHeader from './LoginHeader.jsx';
import LoginSignupHandler from './LoginSignupHandler.jsx';
import {useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUsers} from '../../store/user.js';

const LoginFormPage = () => {

    const [credential, setCredential] = useState('');
    const [validCredential, setValidCredential] = useState(false)

    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(fetchUsers())
    }, [])
    

    return (
        <>
                <LoginHeader/> 
                {!validCredential && <LoginForm credential={credential} setCredential={setCredential} setValidCredential={setValidCredential}/>}
                {validCredential && <LoginSignupHandler credential={credential}/>}
        </>
    )
    
}

export default LoginFormPage