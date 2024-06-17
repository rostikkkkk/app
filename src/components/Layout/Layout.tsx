import { FC } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout: FC = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 mb-12">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
