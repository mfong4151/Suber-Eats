import React from 'react'
import {  useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import ArrowLeft from './SVGs/ArrowLeft';
import ArrowRight from './SVGs/ArrowRight';
import './LoginFormPage.css'
import { signUp } from '../../store/session';



const SignUpEntry = () => {
    const dispatch = useDispatch();
    const history = useHistory()
    const sessionUser = useSelector(state => state.session.user)
    const [username, setUsername] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [nextId, setNextId] = useState('btn-next')
    const [errors, setErrors] = useState([]);


    if(sessionUser) return <Redirect to="/deliverypickup" />;

    const handleGoBack = ()=>{
        history.push('/')

    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        if (password === confirmPassword){
            setErrors([]);
            dispatch(signUp({email, username, password, name, phone_number:phoneNumber}))
                .catch(async (res) =>{
                    let data; 
                    try {
                        data = await res.clone().json();
                    } catch {
                        data = await res.text();
                    }
                    if (data?.errors) setErrors(data.errors);
                    else if (data) setErrors([data]);
                    else setErrors([res.statusText]);
                }) 
        }
        setErrors(['Make sure your password fields match!']);
    }

    return (
    <div className="sign-in-main">

            <h1 className="head-text user-auth-h">Ready to experience Suber Eats?</h1>
            <div className="username-email">

                <form className='login-form'> 
                    
                    <input className='form-contents sign-up-form-spacing' type='text' name='location' placeholder='Enter your email' onChange={e => setEmail(e.target.value)} required/> 
                    <input className='form-contents sign-up-form-spacing' type='text' name='location' placeholder='Enter your phone number' onChange={e => setPhoneNumber(e.target.value)} required/> 
                    <input className='form-contents sign-up-form-spacing' type='text' name='location' placeholder='Enter your name' onChange={e => setName(e.target.value)} required/> 
                    <input className='form-contents sign-up-form-spacing' type='password' name='location' placeholder='Enter your password' onChange={e => setPassword(e.target.value)} required/> 
                    <input className='form-contents sign-up-form-spacing' type='password' name='location' placeholder='Please confirm your password' onChange={e => setConfirmPassword(e.target.value)} required/> 

                </form>

            </div>
            <div className="errors-segment">
                <span className="errors-text">{errors.length ? errors[0] : ''}</span>
            </div>
            
            <div className='login-options'> 
                <div className="button-hold-l">
                    <button className='auth-buttons auth-circle' onClick={handleGoBack}>
                        <ArrowLeft/>
                    </button>
                </div>

                <div className='button-hold-r'>
                    <button htmlFor='sign-up-form' className='auth-buttons' id={nextId} onClick={handleSubmit}>
                        <p className="next-text">Next</p>
                        <ArrowRight/>
                    </button>
                </div>

            </div>

           
            
        </div>
  )
}

export default SignUpEntry