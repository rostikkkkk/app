import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import { FC } from "react";
import { Box, Container } from "@mui/material";

const Layout: FC = () => {
  return (
    <Container
      sx={{
        bgcolor: "white",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header />
      <Box component="main" sx={{ flex: 1, mb: "3rem" }}>
        <Outlet />
      </Box>
      <Footer />
    </Container>
  );
};

export default Layout;
