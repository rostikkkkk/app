import { FC, MouseEvent } from "react";
import { useLocation } from "react-router-dom";
import { AppBar, Box, Link } from "@mui/material";

const Header: FC = () => {
  const location = useLocation();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname === "/") {
      event.preventDefault();
    }
  };

  return (
    <AppBar
      variant="outlined"
      position="static"
      sx={{
        padding: "1.25rem 2rem",
        backgroundColor: "#FFFFFF",
        border: "none",
      }}
    >
      <Box>
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
      </Box>
    </AppBar>
  );
};

export default Header;
