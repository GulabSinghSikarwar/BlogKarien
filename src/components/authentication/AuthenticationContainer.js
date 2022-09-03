import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import LoginFormContainer from './loginScreen/loginFormContainer'
import SignUpFormContainer from './signupScreen/signUpFormContainer'

import styles from './AuthenticationContainer.module.css'

function AuthenticationContainer() {
  return (
    <div>
      <h1> Hello Authentications </h1>

      <div className={styles.buttonOuterContainer}>
      <div className={styles.authButtonContainer} >
        <Link to={'/login'} ><Button>Login</Button></Link>
        <Link to={'/login'} ><Button>SignUp</Button></Link>

      </div>
      </div>
      <LoginFormContainer/>
      <SignUpFormContainer/>
      

    </div>
  )
}

export default AuthenticationContainer
