import { useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/session";
import { Redirect, Link } from "react-router-dom";
import GoogleLogo from "./SVGs/GoogleLogo";
import './LoginFormPage.css'
import AppleLogo from "./SVGs/AppleLogo";
import FacebookLogo from "./SVGs/FacebookLogo";
import { UsernameContext } from "./UsernameContext";

const LoginForm = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user)
    const {credential, setCredential, setValidCredential } = useContext(UsernameContext)

    const [errors, setErrors] = useState([]);
    const optOut = 'By proceeding, you consent to get calls, WhatsApp or SMS messages, including by automated dialer, from Uber and its affiliates to the number provided. Text “STOP” to 89203 to opt out.'
    
    if (sessionUser) return <Redirect to='/deliverypickup' />
    

    const handle_phone_number_errors = phone_number => {
        // let region, phone_number;
        // region, phone_number = credential.split(' ')
   
        // Edit this if we ever add other countries
        //   if region != 1
        //     render json:{ errors:['Demo does not support regions outside of the United States']}, status: :unauthorized
        //     return
        //   # elsif region == 1 && phone_number.length != 12
        let splitNumber = phone_number.split('-');
        if (splitNumber[0].length !== 3 || splitNumber[1].length !== 3 || splitNumber[2].length !== 4)return false;
        return true;

    }

    const handle_email_errors = email => {
        email = email.split('')

        let atSym = false, period = false, atSymIndex, periodIndex;
        for(const[idx, c] of email.entries()){

            if(c === '@'){
                atSym = true;
                atSymIndex = idx;
            }

            if(c === '.'){

                period = true;
                periodIndex = idx;
            }
        }
        if (atSymIndex > periodIndex || !atSym || !period) return true;
        return false;
    }


    const handleSubmit = e => {
        e.preventDefault();
        setErrors([]);

        if (credential === ''){
            setErrors(['Please enter a phone number or email'])

        } else if ((credential.match(/-/g)|| []).length === 2){

            if (handle_phone_number_errors) setErrors(['Please insert a valid phone number'])
                        
        } else if (handle_email_errors(credential)) setErrors(['Please provide a valid email address'])
         else if (errors.length === 0) setValidCredential(true)
        
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
                <form className='login-form'> 
                    <input className='form-contents' type='text' name='location' placeholder='Enter your email or phone number' onChange={e => setCredential(e.target.value)}/> 
               
                </form>
            </div>
            <div className="errors-segment">
                <span className="errors-text">{errors.length ? errors[0] : ''}</span>
            </div>
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