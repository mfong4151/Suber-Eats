import React, { useEffect } from 'react'
import { useContext, useState } from 'react';
import { UsernameContext } from "./UsernameContext";
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import { login } from "../../store/session";
import ArrowLeft from './SVGs/ArrowLeft';
import ArrowRight from './SVGs/ArrowRight';
import './LoginFormPage.css'

// Assuming the user exists in our set of users we render here
const PasswordEntry = () => {
    const dispatch = useDispatch();
    const history = useHistory()
    const sessionUser = useSelector(state => state.session.user)
    const {credential} = useContext(UsernameContext)
    const [password, setPassword] = useState('')
    const [passwordView, setPasswordView] = useState('password')
    const [nextId, setNextId] = useState('btn-next')
    const [errors, setErrors] = useState([]);

    const handleGoBack = ()=>{
        history.push('/')

    }
    const handleSubmit = e => {
        e.preventDefault();
      
        setErrors([]);
        
        return dispatch(login({credential: credential, password}))
            .catch(async res => {
                let data; 
                try {
                    data = await res.clone().json();
                } catch {
                    data = await res.text();
                }
                if (data?.errors) setErrors(data.errors);
                else if (data) setErrors([data]);
                else setErrors([res.statusText]);
            });
    }

    useEffect(()=>{
        if (password.length === 0) setNextId('btn-next')
        else setNextId('btn-next-clickable')

    }, [password])

    if (sessionUser) return <Redirect to='/deliverypickup' />


  return (
    <div className="sign-in-main">

        {/* edit this to say welcome back x afterwords */}
        <div className='password-upper'> 
            <h1 className="head-text user-auth-h">Welcome back</h1>
            <div className="username-email">
                <form className='login-form'> 
                    <input id='submit-username' className='form-contents' type={passwordView} name='location' placeholder='Enter your password' onChange={e => setPassword(e.target.value)}/> 

                </form>
            </div>
            <div className="errors-sign-in">
                <span className="errors-text">{errors.length ? errors[0] : ''}</span>
            </div>
        </div>


        <div className='login-options'> 
            <button htmlFor='submit-username' className='auth-buttons auth-circle' onClick={handleGoBack}><ArrowLeft/></button>

            <button htmlFor='submit-username' className='auth-buttons' id={nextId} onClick={handleSubmit}><p className="next-text">Next</p><ArrowRight/></button>

        </div>

    
    </div>
  )
}

export default PasswordEntry
