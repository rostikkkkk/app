import { FC, MouseEvent, useState } from "react";
import { useLocation } from "react-router-dom";
import { AppBar, Box, Link, Toolbar, Typography } from "@mui/material";
import LangSwitcher from "../LangSwitcher/LangSwitcher";
import { useTranslation } from "react-i18next";
const Header: FC = () => {
  const location = useLocation();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname === "/") {
      event.preventDefault();
    }
  };
  const { t } = useTranslation();
  const [lang, setLang] = useState({ code: "ua", label: "UA" });
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
            {t("Головна сторінка")}
          </Link>
          <LangSwitcher lang={lang} setLang={setLang} />
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
