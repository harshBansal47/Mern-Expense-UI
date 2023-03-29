import { Route,Routes } from "react-router-dom"
import LandingPage from "../Pages/Landing_Page/LandingPage"
import Registration from "../Pages/Forms/Registration/Registration"
import Login from "../Pages/Forms/Login/Login"
import Layout from "./Layout"
import Dashboard from "../Pages/Dashboard/Dashboard"
import { useContext } from "react"
import { AppContext } from "../Context/AppContext"

const Router = () => {
const {login_state} = useContext(AppContext)
  return (
        <Routes>
        <Route path ="/" element = {<Layout/>}>
        <Route index element = {<LandingPage/>}/>
        {
          !login_state.isLogIn &&
          <>
          <Route path="register" element = {<Registration/>}/>
          <Route path="login"  element = {<Login/>} />
          </>
        }
        {
          login_state.isLogIn &&
          <>
            <Route path="dashboard" element= {<Dashboard/>}/>
          </>
        }
        
        </Route>
        </Routes>
  )
}

export default Router