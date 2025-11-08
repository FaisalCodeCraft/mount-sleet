import { Box, Container, Typography } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <Box>
      <Container maxWidth={"md"}>
        <Box textAlign={"center"} py={{ md: 12 }}>
          <Typography
            variant="h1"
            fontSize={{ md: "4.5rem", sm: "2.5rem", xs: "1.5rem" }}
            fontWeight={{ md: 700, sm: 500, xs: 400 }}
            pt={2}
          >
            About the Mountain
          </Typography>
          <Typography
            width={{ md: "40%", sm: "58%", xs: "70%" }}
            m={"auto"}
            pt={{ md: 3, sm: 2, xs: 1 }}
            letterSpacing={{ md: 1 }}
            lineHeight={{ md: 1.5, sm: 0 }}
            fontWeight={"light"}
            fontSize={{ md: "1em", xs: ".7em" }}
          >
            Mount Sleet stands as a testament to nature's grandeur, offering adventurers 
            unparalleled access to pristine alpine environments. Learn about our mountain's 
            rich history, diverse ecosystems, and the incredible experiences that await you.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
