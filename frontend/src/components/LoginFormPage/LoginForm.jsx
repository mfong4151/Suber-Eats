import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/session";
import { Redirect, Link } from "react-router-dom";
import GoogleLogo from "./SVGs/GoogleLogo";
import './LoginFormPage.css'
import AppleLogo from "./SVGs/AppleLogo";
import FacebookLogo from "./SVGs/FacebookLogo";
import { handlePhoneNumberErrors, handleEmailErrors } from "./utils/handleErrors";
const LoginForm = ({credential, setCredential, setValidCredential}) => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user)

    const [errors, setErrors] = useState([]);
    const optOut = 'By proceeding, you consent to get calls, WhatsApp or SMS messages, including by automated dialer, from Uber and its affiliates to the number provided. Text “STOP” to 89203 to opt out.'
    
    


    const  handleSubmit = e => {

        if (!credential) {
            setErrors(['Please enter a phone number or email'])
            return
        }else if (credential.includes('-') && handlePhoneNumberErrors(credential)){
            setErrors(['Please insert a valid phone number'])
            return
        } else if (!credential.includes('-') && handleEmailErrors(credential)){
            setErrors(['Please provide a valid email address'])
            return
        } 
        
        //throwing issues with detecting errors, maybe due to async ness
        if (errors.length === 0) { 
             setValidCredential(true)
        }
        
        
    } 

    useEffect(()=>{
        setErrors([])
    },[credential])
      

    const handleDemoUser = e => {
        e.preventDefault();
        setErrors([]);

        return dispatch(login({
            credential:'demo@user.io', 
            password:'password'}))
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
    if (sessionUser) return <Redirect to='/deliverypickup' />


    return(
        <div className="sign-in-main">

            <h1 className="head-text">What's your phone number or email?</h1>
            <div id="username-email">
                <form className='login-form '> 
                    <input className='form-contents' type='text' name='location' placeholder='Enter your email or phone number' onChange={e => setCredential(e.target.value)}/> 
                </form>
            </div>
            {errors.length > 0 
                ? <div className="errors-segment udc"> <span className="errors-text">{errors.length ? errors[0] : ''}</span></div> 
                :<div className="errors-segment udc"/>
            }

            <button htmlFor='submit-username' className='button-sq login-button' id="button-continue" onClick={handleSubmit}>Continue</button>
            <hr className="divider-thin"/>

            <button className='button-sq login-button' onClick={handleDemoUser}><GoogleLogo/><span className="login-text">Continue with Google</span></button>
            <button className='button-sq login-button' onClick={handleDemoUser}><AppleLogo/><span className="login-text">Continue with Apple</span></button>
            <button className='button-sq login-button' onClick={handleDemoUser}><FacebookLogo/><span className="login-text">Continue with Facebook</span></button>
            <button className='button-sq login-button' onClick={handleDemoUser}>Continue with Demo User</button>
            
            <div className='text-spacing'>
                <p className="terms-cond">
                    {optOut}
                </p>
            </div>
            <div>
                <p className="terms-cond">
                    This site is protected by reCAPTCHA and the Google <Link className='apply-underline' to="/">Privacy Policy</Link> and <Link className='apply-underline'to="/">Terms of Service</Link> apply.
                </p>
            </div>
            
        </div>
    )

}



export default LoginForm