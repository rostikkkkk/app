import { FC, MouseEvent } from "react";
import { useLocation } from "react-router-dom";
import { AppBar, Box, Link, Toolbar, Typography } from "@mui/material";

const Header: FC = () => {
  const location = useLocation();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname === "/") {
      event.preventDefault();
    }
  };

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#f5f5f5", mb: "3rem", boxShadow: "none" }}
    >
      <Toolbar variant="dense">
        <Typography variant="h6" color="inherit" component="div">
          <Link
            href="/"
            onClick={handleClick}
            sx={{
              fontSize: "1.25em",
              color: "#000",
              textDecoration: "none",
              "&:hover": {
                color: "#0000FF",
              },
            }}
          >
            Home page
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
