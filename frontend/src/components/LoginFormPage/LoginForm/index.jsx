import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../store/session";
import { Redirect, Link } from "react-router-dom";
import './LoginForm.css'


const LoginForm = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user)
    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([])
    const optOut = 'By proceeding, you consent to get calls, WhatsApp or SMS messages, including by automated dialer, from Uber and its affiliates to the number provided. Text “STOP” to 89203 to opt out.'
    if (sessionUser) return <Redirect to='/deliverypickup' />
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // const user = {
        //     credential,
        //     password
        // }
        // dispatch(login(user))
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
                <form className='button-sq'> 
                    <input className='form-contents' type='text' name='location' placeholder='Enter phone number or email'/> 
            
                </form>
            </div>

            <button className='button-sq login-button' id="button-continue">Continue</button>
            <hr className="divider-thin"/>

            <button className='button-sq login-button'>Continue with Google</button>
            <button className='button-sq login-button'>Continue with Apple</button>
            <button className='button-sq login-button'>Continue with Facebook</button>
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