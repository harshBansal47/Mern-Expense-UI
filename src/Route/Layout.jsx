import Nav from "../Pages/Landing_Page/Navbar/Nav"
import Footer from "../Pages/Landing_Page/Footer/Footer"
import { Outlet } from "react-router-dom"
const Layout = () => {
  return (
    <>
        <Nav/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Layout