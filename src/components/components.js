import React, { useEffect, useState } from 'react'
import LoginFormContainer from './authentication/loginScreen/loginFormContainer'
import SignUpFormContainer from './authentication/signupScreen/signUpFormContainer'
import NavbarComponent from './navbar/NavbarComponent'
import { useSelector, useDispatch } from 'react-redux'

function Components() {
  let user=useSelector((state) => {
    return state.authSlice.user
    
  })


  return (
    <div>
      {
        (user) ? <NavbarComponent /> : 
        <><LoginFormContainer />
          <SignUpFormContainer />
        </>
      }


    </div>
  )
}

export default Components
