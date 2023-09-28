import React from 'react'
import { useHistory } from 'react-router-dom'
import './LoginFormPage.css'

const LoginHeader = () => {
  const history = useHistory();

  return (
    <header id="login-suber-eats">
        <div className="logo login-logo cursor-events" onClick={()=> history.push('/')}>
            <h1 className='suber header-text'>Suber <span className="eats eats-green">Eats</span></h1>
        </div>

    </header>
  )
}

export default LoginHeader;
