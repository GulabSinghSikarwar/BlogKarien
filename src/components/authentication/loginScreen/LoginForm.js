import {React ,useState} from 'react'
import { Form ,Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import  styles from './loginForm.module.css'

import { login,signUp } from '../../../stateManagement/slices/authSlice'

function LoginForm() {
   
  
    const [ user,setUser]= useState({email:"",password:""})

    const dispatch = useDispatch();



    const emailChangeHandeler = (e) => {
        let enteredEmail = e.target.value.trim();
       

        setUser((user)=>{
           return  {...user , email:enteredEmail}
        })
        console.log(user);
    }
    const passwordChangeHandeler = (event) => {
        let enteredPassword = event.target.value.trim();
       
        setUser((user)=>{
            return  {...user , password:enteredPassword}
        })
        console.log(user);
    }

    
    const submitForm=( event )=>{
        alert(" LOGIN submit is called ")
        event.preventDefault ();



       
        dispatch(login(user))
        

    }

    return (
        <div className={styles.formContainer}> 
        <div className={styles.pageHeadingCotainer}>
            <h3  className={styles.pageHeading }>
                LOGIN PAGE FORM 
            </h3>
        </div>
          
        <form class="row g-3"  onSubmit={submitForm}>
                <div class="col-auto">
                    <label for="staticEmail2" class="visually-hidden">Email</label>
                    <input onChange={emailChangeHandeler} 
                    placeholder="E-mail"
                     type="text"  class="form-control-plaintext" id="staticEmail2"
                     />
                </div>
                <div class="col-auto">
                    <label for="inputPassword2" class="visually-hidden">Password</label>
                    <input onChange={passwordChangeHandeler} type="password" 
                    class="form-control" id="inputPassword2" placeholder="Password"/>
                </div>
                <div class="col-auto">
                    <button type="submit" class="btn btn-primary mb-3">Confirm identity</button>
                </div>
            </form>
        </div>
    )
}

export default LoginForm
