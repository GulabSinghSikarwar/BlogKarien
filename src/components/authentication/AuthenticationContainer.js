import React from 'react'
import LoginFormContainer from './loginScreen/loginFormContainer'
import SignUpFormContainer from './signupScreen/signUpFormContainer'


function AuthenticationContainer() {
  return (
    <div>
      <h1> Hello Authentications </h1>
      <LoginFormContainer/>
      <SignUpFormContainer/>
      

    </div>
  )
}

export default AuthenticationContainer
