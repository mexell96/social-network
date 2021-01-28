import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <img
        src="https://secure.meetupstatic.com/photos/event/7/3/9/d/highres_469109597.jpeg"
        alt="logo"
      />
    </header>
  );
};

export default Header;
