import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/session";
import { Redirect, Link } from "react-router-dom";
import GoogleLogo from "./SVGs/GoogleLogo";
import './LoginFormPage.css'
import AppleLogo from "./SVGs/AppleLogo";
import FacebookLogo from "./SVGs/FacebookLogo";


const LoginForm = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user)
    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);
    const optOut = 'By proceeding, you consent to get calls, WhatsApp or SMS messages, including by automated dialer, from Uber and its affiliates to the number provided. Text “STOP” to 89203 to opt out.'
    if (sessionUser) return <Redirect to='/deliverypickup' />
    
    const handleSubmit = e => {
        e.preventDefault();
      
        setErrors([]);
        return dispatch(login({credential, password}))
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

    const handleDemoUser = e => {
        e.preventDefault();
        setErrors([]);

        return dispatch(login({
            credential:'Demo-lition', 
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


    return(
        <div className="sign-in-main">
            <h1 className="head-text">What's your phone number or email?</h1>
            <div className="username-email">
                <form className='button-sq login-form'> 
                    <input id='submit-username' className='form-contents' type='text' name='location' placeholder='Enter your username' onChange={e => setCredential(e.target.value)}/> 
                    {/* might wanna get rid of this at some point, it looks stupid */}
                    {/* <input id='submit-username' className='form-contents' type='text' name='location' placeholder='Enter your password' onChange={e => setPassword(e.target.value)}/>  */}
                </form>
            </div>
            {errors.length ? errors[0] : ''}
            <button for='submit-username' className='button-sq login-button' id="button-continue" onClick={handleSubmit}>Continue</button>
            <hr className="divider-thin"/>

            <button className='button-sq login-button'><GoogleLogo/><span className="login-text">Continue with Google</span></button>
            <button className='button-sq login-button'><AppleLogo/><span className="login-text">Continue with Apple</span></button>
            <button className='button-sq login-button'><FacebookLogo/><span className="login-text">Continue with Facebook</span></button>
            <button className='button-sq login-button' onClick={handleDemoUser}>Continue with Demo User</button>
            
            <div class='text-spacing'>
                <p class="terms-cond">{optOut}
                </p>
            </div>
            <div>
                <p className="terms-cond">

                    This site is protected by reCAPTCHA and the Google <Link className='apply-underline' to="/">Privacy Policy</Link> and <Link className='apply-underline'to="/">Terms of Service</Link> apply.

                </p>

            </div>
            
        </div>
    )


    //for reference
    // return (

    //     <form onSubmit={handleSubmit}>
    //         <ul>
    //             {errors.map(error => <li key={error}>{error}</li>)}
    //         </ul>
    //         <label>
    //             Username or Email
    //             <input
    //                 type="text"
    //                 value={credential}
    //                 onChange={(e) => setCredential(e.target.value)}
    //                 required
    //             />
    //         </label>
    //         <label>
    //             Password
    //             <input
    //                 type="password"
    //                 value={password}
    //                 onChange={(e) => setPassword(e.target.value)}
    //                 required
    //             />
    //         </label>
    //         <button type="submit">Log In</button>
    //     </form>
    // );
}



export default LoginForm