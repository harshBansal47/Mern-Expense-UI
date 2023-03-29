import { createContext ,useReducer,useState} from "react";
import {LoginReducer,LoadingReducer} from "./Reducer";

const AppContext = createContext({})

const AppProvider = ({children})=>{

    //To show or hide password
    const [passwordVisible,setPasswordvisible] = useState('false');
    const toggle = ()=>{setPasswordvisible(!passwordVisible)}

    //To handle loading between routes
    const [state,dispatch] = useReducer(LoadingReducer,{isLoading:false})
    const [login_state,setLogin_state] = useReducer(LoginReducer,{isLogIn:true})


    //To handle validation of registration form and error handelling
    const [errors_r,setError_r] = useState({});
    const validation_r = (data)=>{
        const errors = {};
        if(!data.name){
          errors.name = 'Name is required'
        }
        if(!data.email){
          errors.email='Email is required'
        }else if(!/\S+@\S+\.\S+/.test(data.email)){
          errors.email='Enter valid email'
        }
        if(!data.password){
          errors.password='Password is required'
        }else if(data.password.length<4){
          errors.password='Password should be min. 4 char.'
        }
        setError_r(errors)
        return errors;
      }

      //To handle validation of login form and error handelling
      const [errors_l,setErrors_l] = useState({})
      const validation_l = (data)=>{
        let errors = {}
        if(!data.email){
          errors.email = "Enter your Email"
        }else if (!/\S+@\S+\.\S+/.test(data.email)){
          errors.email = 'Email is invalid';
        }
        if(!data.password){
          errors.password="Enter your Password"
        }
        setErrors_l(errors)
        return errors;
      }



    return(
        <AppContext.Provider  value={
            {state,
            dispatch,
            login_state,
            setLogin_state,
            passwordVisible,
            toggle,
            errors_r,
            setError_r,
            validation_r,
            errors_l,
            setErrors_l,
            validation_l,
            }
        }>
        {children}
        </AppContext.Provider>
    )
}

export {
   AppProvider,
   AppContext
}