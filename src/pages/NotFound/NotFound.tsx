import { Box, Link, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const { t } = useTranslation();
  return (
    <Box
      component="section"
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Typography
        variant="h1"
        sx={{ fontSize: "2rem", mb: "1.5rem", color: "#ff0000" }}
      >
        {t("Отакої, сторінки не існує")}
      </Typography>
      <Link
        href="/"
        sx={{
          fontSize: "1.25em",
          color: "#000",
          textDecoration: "none",
          border: "3px solid #000",
          padding: "0.625rem 1rem",
          borderRadius: "0.8rem",
          "&:hover": {
            color: "#0000FF",
            borderColor: "#0000FF",
          },
        }}
      >
        {t("Повернутися на головну сторінку")}
      </Link>
    </Box>
  );
};
export default NotFound;
