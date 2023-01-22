import React, { useEffect } from 'react';
import LoginForm from './LoginForm.jsx';
import LoginHeader from './LoginHeader.jsx';
import LoginSignupHandler from './LoginSignupHandler.jsx';
import {useState } from 'react';
import { UsernameContext } from './UsernameContext.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers, getUsers } from '../../store/user.js';
import { aggregateUserCredentials } from './utils/compileUserSet.jsx';

const LoginFormPage = () => {


    const [credential, setCredential] = useState('');
    const [validCredential, setValidCredential] = useState(false)
    const dispatch = useDispatch();
    const allUsers = useSelector(getUsers)

    useEffect(()=>{
        dispatch(fetchUsers())
    }, [])

    let userSet = aggregateUserCredentials(allUsers)
    return (
        <>
            <UsernameContext.Provider value={{credential, setCredential, validCredential,setValidCredential, userSet}}>
                <LoginHeader/> 
                {!validCredential && <LoginForm/>}
                {validCredential && <LoginSignupHandler/>}
            </UsernameContext.Provider>

        </>
    )
    
}

export default LoginFormPage