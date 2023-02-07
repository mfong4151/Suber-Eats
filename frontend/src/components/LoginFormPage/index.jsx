import React, { useEffect } from 'react';
import LoginForm from './LoginForm.jsx';
import LoginHeader from './LoginHeader.jsx';
import LoginSignupHandler from './LoginSignupHandler.jsx';
import {useState } from 'react';
import { UsernameContext } from './UsernameContext.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers, getUsers } from '../../store/user.js';
import { aggregateUserCredentials } from './utils/compileUserSet.jsx';
import Footer from '../generalDesignComponents/Footer/index.jsx';

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