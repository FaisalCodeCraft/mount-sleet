import { Box, Container, Typography } from "@mui/material";
import React from "react";

const NewsHeader = () => {
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
            Stay updated with the latest news, trail conditions, weather updates, and stories 
            from Mount Sleet. Discover tips, adventure highlights, and insights from our expert 
            guides to make the most of your mountain experience.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default NewsHeader;
