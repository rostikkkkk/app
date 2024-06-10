import { FC, MouseEvent } from "react";
import { Link, useLocation } from "react-router-dom";
import classes from "./Header.module.scss";

const Header: FC = () => {
  const location = useLocation();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname === "/") {
      event.preventDefault();
    }
  };

  return (
    <header className={classes.header}>
      <Link to="/" onClick={handleClick}>
        Home page
      </Link>
    </header>
  );
};

export default Header;
