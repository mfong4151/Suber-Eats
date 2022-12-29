import React from 'react'
import './SplashHeader.css'
import {useHistory} from 'react-router-dom'

const SplashHeader = () => {
  const history = useHistory();
  
  const goTo = (url)=>{
    history.push(url)
  }

  const goToLogin = ()=>{
      goTo('/login')
  }
  
  const goToSignUp = ()=>{
    goTo('/signup')
  }
  
  return (
     <header id="splash-header" className="univ-padding">

            <div className="logo">
                <h1 className='suber'>Suber <span className="eats">Eats</span></h1>
            </div>

            {/* <form>
              <input type='text' name='location' placeholder='Enter pickup address'/> 

            </form> */}


            <div id="buttons">
                <button id="log-in" className="btn-round" onClick={goToLogin}>Log In</button>
                <button id="sign-up"className='btn-round' onClick={goToSignUp}>Sign Up</button>
            </div>

       </header>
  )
}

export default SplashHeader
