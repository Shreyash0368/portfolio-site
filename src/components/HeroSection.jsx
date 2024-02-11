import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";

function HeroSection() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        marginTop: "3rem",
        minHeight: "65vh",
        boxSizing: "border-box",
      }}
    >
      <Box sx={{ padding: 2, margin: "2 auto" }}>
        <Typography sx={{ fontSize: "4rem", color: "text.light" }}>
          Hello There,
          <br /> I am Shreyash Gupta
        </Typography>
        <Typography sx={{ fontSize: "2.1rem", color: "text.light", my: '2rem' }}>
        Aspiring Software Developer, Currently Pursuing BTech in Information Technology at Madhav Institute of Technology and Science.
        </Typography>        
        <Button sx={{my: '4rem', borderWidth: '2px'}} variant="outlined" href="/resume/Shreyash_Gupta_Resume.pdf" download color="buttonCustom">
          Resume
        </Button>
      </Box>
    </Box>
  );
}

export default HeroSection;
