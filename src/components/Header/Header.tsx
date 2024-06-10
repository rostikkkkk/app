import { FC } from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.scss";
const Header: FC = () => {
  return (
    <header className={classes.header}>
      <Link to="/">Home page</Link>
    </header>
  );
};
export default Header;
