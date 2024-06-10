import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import { FC } from "react";
import classes from "./Layout.module.scss";
const Layout: FC = () => {
  return (
    <div className={classes.layout}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
