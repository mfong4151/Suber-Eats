import React, { useEffect } from 'react'
import { useState, useContext } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { UsernameContext } from './UsernameContext';
import { fetchUsers } from '../../store/user';
import PasswordEntry from './PasswordEntry';
import SignUpEntry from './SignUpEntry';


const LoginSignupHandler = () => {
    const [loginSignup, setLoginSignup] = useState(null)
    const dispatch = useDispatch();
    const {credential, userSet} = useContext(UsernameContext)


    useEffect(()=> {

        dispatch(fetchUsers())
        if(userSet.has(credential)) setLoginSignup(true)
        else setLoginSignup(false)
    },[])
    

  return (
    <div>
        {loginSignup && <PasswordEntry/>}
        {!loginSignup && <SignUpEntry/>}
    </div>
  )
}

export default LoginSignupHandler;