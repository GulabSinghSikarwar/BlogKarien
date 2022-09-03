import { React, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import styles from './loginForm.module.css'

import { login, signUp } from '../../../stateManagement/slices/authSlice'

function LoginForm() {


    const [user, setUser] = useState({ email: "", password: "" })

    const dispatch = useDispatch();



    const emailChangeHandeler = (e) => {
        let enteredEmail = e.target.value.trim();


        setUser((user) => {
            return { ...user, email: enteredEmail }
        })
        console.log(user);
    }
    const passwordChangeHandeler = (event) => {
        let enteredPassword = event.target.value.trim();

        setUser((user) => {
            return { ...user, password: enteredPassword }
        })
        console.log(user);
    }
    const callApiLogin = async (userDatabody) => {
        const url = `http://localhost:5000/auth/login`



        const body = JSON.stringify(userDatabody)
        console.log(" login body : ", body);

        const method = 'POST'

        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json; charset=utf-8',


        }


        let result = await fetch(url, {
            method,
            body,
            headers, credentials: 'include'

        })

        let response = await result.json();
        console.log("RESPONSE : -->", response);
        return response
    }



    const submitForm = (event) => {
        alert(" LOGIN submit is called ")
        event.preventDefault();


        callApiLogin(user).then((response) => {
            dispatch(login(response))

        }).catch((e) => {
            console.log(e);
        })



    }

    return (
        <div className={styles.formContainer}>
            <div className={styles.pageHeadingCotainer}>
                <h3 className={styles.pageHeading}>
                    LOGIN PAGE FORM
                </h3>
            </div>

            <div className={styles.mainFormContainer} >
                <form class="row g-3" onSubmit={submitForm}>

                    <div className={styles.formControlGroup}>

                        <div class="col-auto">
                            <label for="staticEmail2" class="visually-hidden">Email</label>
                            <input onChange={emailChangeHandeler}
                                placeholder="E-mail"
                                type="text" class="form-control-plaintext" id="staticEmail2"
                            />
                        </div>
                    </div>
                    <div className={styles.formControlGroup}>

                        <div class="col-auto">
                            <label for="inputPassword2" class="visually-hidden">Password</label>
                            <input onChange={passwordChangeHandeler} type="password"
                                class="form-control" id="inputPassword2" placeholder="Password" />
                        </div>
                    </div>
                    <div className={styles.formControlGroup}>
                        <div class="col-auto">
                            <button type="submit" class="btn btn-primary mb-3">Confirm identity</button>
                        </div>

                    </div>



                </form>
            </div>
        </div>
    )
}

export default LoginForm
