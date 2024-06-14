import { useState, useEffect, FC } from "react";

import { useTranslation } from "react-i18next";
import { Box, Button, List, ListItem, Typography } from "@mui/material";
import { LangSwitcherProps, Language } from "../../utils/types";

const LangSwitcher: FC<LangSwitcherProps> = ({ lang, setLang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n } = useTranslation();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage) {
      if (storedLanguage === "UA") setLang({ code: "ua", label: "UA" });
      if (storedLanguage === "DE") setLang({ code: "de", label: "DE" });
      if (storedLanguage === "EN") setLang({ code: "en", label: "EN" });
      i18n.changeLanguage(storedLanguage);
    }
  }, []);

  const handleLanguageChange = (language: Language) => {
    setLang(language);
    i18n.changeLanguage(language.label);
    localStorage.setItem("language", language.label);
    setIsOpen(false);
  };

  const languageOptions = [
    { code: "ua", label: "UA" },
    { code: "en", label: "EN" },
  ];

  const selectedOptionIndex = languageOptions.findIndex(
    (option) => option.code === lang.code
  );
  if (selectedOptionIndex !== -1) {
    const selectedOption = languageOptions.splice(selectedOptionIndex, 1);
    languageOptions.unshift(selectedOption[0]);
  }

  return (
    <Box sx={{ position: "relative", display: "inline-block", width: "70px" }}>
      <Button
        onClick={toggleDropdown}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f8f8f8",
          border: "none",
          cursor: "pointer",
          zIndex: 10,
          width: "100%",
          lineHeight: "1.6rem",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Inter",
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: "14px",
            color: "#241917",
            lineHeight: "1.6rem",
          }}
        >
          {lang.label}
        </Typography>
      </Button>
      {isOpen && (
        <List
          sx={{
            zIndex: 0,
            position: "absolute",
            top: 0,
            left: 0,
            listStyle: "none",
            padding: 0,
            backgroundColor: "#ffffff",
            display: "flex",
            flexDirection: "column",
            boxShadow: "0px 4px 11px rgba(0, 0, 0, 0.13)",
            width: "100%",
            justifyContent: "center",
          }}
        >
          {languageOptions.map((option) => (
            <ListItem
              key={option.code}
              onClick={() => handleLanguageChange(option)}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: 600,
                fontSize: "14px",
                color: "#241917",
                transition: "background-color 0.3s ease",
                borderRadius: "0 0 8px 8px",
                "&:hover": {
                  backgroundColor: "#f2f2f2",
                },
              }}
            >
              {option.label}
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
};

export default LangSwitcher;
