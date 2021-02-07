import { NavLink } from "react-router-dom";
import style from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={style.header}>
      <img
        src="https://secure.meetupstatic.com/photos/event/7/3/9/d/highres_469109597.jpeg"
        alt="logo"
      />
      <div className={style.loginBlock}>
        {props.isAuth ? props.login : <NavLink to={"/login"}>Login</NavLink>}
      </div>
    </header>
  );
};

export default Header;
