import { FC } from "react";
import { Box, Container, Typography } from "@mui/material";

const Footer: FC = () => {
  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{ textAlign: "center", paddingBlock: "2rem" }}
      >
        <Typography color="black" variant="h5">
          All right reserved
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
