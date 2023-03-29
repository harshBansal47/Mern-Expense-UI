import animation_r from '../Assets/lotties/r-login.json'
import animation_p from '../Assets/lotties/p-login.json'


const LoginReducer = (state,action)=>{
    switch(action.type){
        case "LOG_IN":
            return {...state , isLogIn:true}
        
        case "LOG_OUT":
            return {...state, isLogIn:false}  
            
        default:
            return state  
    }
}

const LoadingReducer = (state,action)=>{
    switch(action.type){
        case "PageLoading":
            return {
                ...state,isLoading:true,ImgUrl:animation_p
            }
        case "RouteLoading":
            return {
                ...state,isLoading:true,ImgUrl:animation_r
            }
        case "LoadingEnd" :
            return{
                ...state,isLoading:false,ImgUrl:""
            }     
        default:
            return state     
    }
}

export {LoginReducer,LoadingReducer}