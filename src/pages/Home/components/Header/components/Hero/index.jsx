import { Box, Button, Typography } from "@mui/material";
import { light } from "@mui/material/styles/createPalette";
import React from "react";

const Hero = () => {
  return (
    <Box position={"relative"}>
      <Box position={"absolute"} zIndex={"-1"} width={"100%"} height={"300px"}>
        <img
          src="https://images.pexels.com/photos/709496/pexels-photo-709496.jpeg?cs=srgb&dl=pexels-ph-m-tung-223235-709496.jpg&fm=jpg"
          alt="header image"
          width={"100%"}
          style={{ height: { md: "100%" },filter:"brightness(55%)" }}
        />
      </Box>

      <Box textAlign={"center"} py={{ md: 18 }} color={"white"}>
        <Typography
          variant="h1"
          fontSize={{ md: "4.5rem", sm: "2.5rem", xs: "1.5rem" }}
          fontWeight={{ md: 700, sm: 500, xs: 400 }}
          pt={2}
        >
          Welcome to Mount Sleet
        </Typography>
        <Typography
          width={{ md: "40%", sm: "58%", xs: "70%" }}
          m={"auto"}
          py={{ md: 4, sm: 2, xs: 1 }}
          letterSpacing={{ md: 1 }}
          lineHeight={{ md: 1.5, sm: 0 }}
          fontWeight={"light"}
          fontSize={{ md: "1em", xs: ".7em" }}
        >
          Discover breathtaking mountain trails and unforgettable winter adventures. 
          Experience the thrill of snowshoeing, skiing, and exploring pristine alpine landscapes 
          with expert guides who know every path.
        </Typography>

        <Button
          variant="contained"
          sx={{
            bgcolor: "white",
            color: "black",
            mt: { md: 3, xs: 1 },
            fontWeight: light,
            px: 3,
            border:"1px solid white",
            "&:hover":{
              bgcolor:"transparent",
              color:"white",
              border:"1px solid white"
            }
          }}
        >
          Book a Trail
        </Button>
      </Box>
    </Box>
  );
};

export default Hero;
