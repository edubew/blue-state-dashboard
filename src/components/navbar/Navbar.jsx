import "./navbar.scss";
import { BiSearchAlt } from "react-icons/bi";
import { AiOutlineAppstore, AiOutlineExpand } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";
import { MdSettingsSuggest } from "react-icons/md";
import user from "../../assets/user.jpg";

const Navbar = () => {
  return (
    <div className="navbar__container">
      <div className="logo">
        <h2>Blue State</h2>
      </div>
      <div className="navbar__icons">
        <BiSearchAlt className="icon" />
        <AiOutlineAppstore className="icon" />
        <AiOutlineExpand className="icon" />
        <div className="notifications">
          <IoMdNotifications className="icon" />
          <span>1</span>
        </div>
        <div className="user__container">
          <img src={user} alt="profile" />
          <span>Edube</span>
        </div>
        <MdSettingsSuggest className="icon" />
      </div>
    </div>
  )
}

export default Navbar
