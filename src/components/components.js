import React, { useEffect, useState } from 'react'
import LoginFormContainer from './authentication/loginScreen/loginFormContainer'
import SignUpFormContainer from './authentication/signupScreen/signUpFormContainer'
import NavbarComponent from './navbar/NavbarComponent'
import { useSelector, useDispatch } from 'react-redux'
import AuthenticationContainer from './authentication/AuthenticationContainer'

import { Routes,Route}  from 'react-router-dom'
function Components() {
  let user=useSelector((state) => {
    return state.authSlice.user
    
  })


  return (
    <div>
      
      <Routes>
     <Route path="/" element={(!user)?<AuthenticationContainer/>:<NavbarComponent/>}/> 
      </Routes>
      


    </div>
  )
}

export default Components
