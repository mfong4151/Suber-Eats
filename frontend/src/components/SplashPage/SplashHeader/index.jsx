import React from 'react'
import "../SplashPage.css"
import {useHistory} from 'react-router-dom'

const SplashHeader = () => {
  const history = useHistory();
  

  const goToLogin = ()=>{
    history.push('/login')
  }

  
  return (
     <header id="splash-header" className="univ-padding">

            <div className="logo header-left">
                <div>
                  <svg width="22" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                </div>
                <div>
                  <h1 className='suber'>Suber <span className="eats">Eats</span></h1>
                </div>
            </div>

            {/* <form>
              <input type='text' name='location' placeholder='Enter pickup address'/> 

            </form> */}


            <div id="user-auth-buttons">
                <button id="log-in" className="btn-round header-btn-round" onClick={goToLogin}>
                  <svg aria-hidden="true" focusable="false" viewBox="0 0 26 26" className='button-icon'><path fillRule="evenodd" clipRule="evenodd" 
                    d="M18.958 7.042a5.958 5.958 0 11-11.916 0 5.958 5.958 0 0111.916 0zM3.25 21.667c0-3.575 2.925-6.5 6.5-6.5h6.5c3.575 0 6.5 2.925 6.5 6.5v3.25H3.25v-3.25z"></path>
                  </svg>
                  Log In</button>
                <button id="sign-up"className='btn-round header-btn-round' onClick={goToLogin}>Sign Up</button>
            </div>

       </header>
  )
}

export default SplashHeader
