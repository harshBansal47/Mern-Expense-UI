import { useContext, useEffect} from "react"
import "./App.css"
import Splash from './Pages/Splash/Splash'
import { PageLoading ,LoadingEnd} from "./Context/Action"
import { AppContext } from "./Context/AppContext"
import Router from './Route/Router'
function App(){ 
  const {state,dispatch} = useContext(AppContext)
  useEffect(()=>{
    dispatch(PageLoading())
    setTimeout(()=>{
      dispatch(LoadingEnd())
    },3000)
  },[])
  return (
   <>
   {state.isLoading?<Splash URL={state.ImgUrl}/>:
   <Router/>
   }
   </>
  );
}
export default App;