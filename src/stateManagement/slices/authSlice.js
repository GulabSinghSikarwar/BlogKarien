import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    token: null,
    user: null,

}





const authSlice = createSlice({
    name: 'authState',
    initialState: initialState,
   
   
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload
        },


        logout: (state, action) => {
            state.token = null
        },
        
        
        login:   (state, action) => {
          
          const response={...action.payload}
      state.user={...response.user}
     
            



        },
        signUp: (state, action) => {

            const signUpUrl = `http://localhost:5000/auth/signup`

            const method = 'POST'

            const headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json; charset=utf-8'
            };



            const body = JSON.stringify({ ...action.payload })




            fetch(signUpUrl, { method, body, headers, credentials: "include" }).then((result) => {
                return result.json()
            }).then((createdUser) => {


                console.log(createdUser);
                // update user state 


                state.user = { ...createdUser };
            }).catch((Error) => {
                console.log(Error);
            })

            //  signup --> fetch  requet for signup 
            /**
             * 
             * payload= {
             * userInput :{
             * email :entered email 
             * password  : entered password 
             * }
             * 
             * call fetch request 
             * get user personel info and update user state  
             * }
             */

            // user state--> updation of  user state 

            state.user = { ...action.payload.user };
        }
    }


})
export const { logout, setToken, login, signUp } = authSlice.actions

export default authSlice;
