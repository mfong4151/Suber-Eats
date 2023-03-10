import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from '../../store/user';
import PasswordEntry from './PasswordEntry';
import SignUpEntry from './SignUpEntry';
import { getUsers } from '../../store/user';
import { aggregateUserCredentials } from './utils/compileUserSet';

const LoginSignupHandler = ({credential}) => {
    const [loginSignup, setLoginSignup] = useState(null)
    const allUsers = useSelector(getUsers)
    let userSet = aggregateUserCredentials(allUsers)
    const dispatch = useDispatch();


    useEffect(()=> {

        dispatch(fetchUsers())
        if(userSet.has(credential)) setLoginSignup(true)
        else setLoginSignup(false)
    },[])
    

  return (
    <div>
        {loginSignup && <PasswordEntry credential={credential}/>}
        {!loginSignup && <SignUpEntry/>}
    </div>
  )
}

export default LoginSignupHandler;