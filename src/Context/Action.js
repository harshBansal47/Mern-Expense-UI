//Loading Actions

const PageLoading = ()=>{
    console.log("Loading started")
    return {
        type:'PageLoading'
    }
}
const RouteLoading =()=>{
    console.log('route login started')
    return{
        type:'RouteLoading'
    }
}
const LoadingEnd=()=>{
    console.log('login ended')
    return{
        type:'LoadingEnd'
    }
}

// Login Logout actions
const LOGIN = ()=>{
    return{
        type:'LOG_IN'
    }
}
const LOGOUT = ()=>{
    return {
        type:'LOG_OUT'
    }
}

export {PageLoading,RouteLoading,LoadingEnd}
export {LOGIN,LOGOUT}