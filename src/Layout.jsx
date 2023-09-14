import Navbar from "./components/navbar/Navbar";
import Menu from "./components/menu/Menu";
import Footer from "./components/footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="main__container">
      <Navbar />
      <div className="container">
      <div className="menu__container">
        <Menu />
      </div>
      <div className="content__container">
        <Outlet />
      </div>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
