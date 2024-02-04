import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";

function HeroSection() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        // alignItems: 'center',
        marginTop: "3rem",
        minHeight: "75vh",
        backgroundColor: "primary.main",
        boxSizing: "border-box",
      }}
    >
      <Box sx={{ padding: 2, margin: "2 auto" }}>
        <Typography sx={{ fontSize: "4rem", color: "text.light" }}>
          Hello There,
          <br /> Im Shreyash Gupta
        </Typography>
        <Typography sx={{ fontSize: "2.1rem", color: "text.light" }}>
          Aspiring Software Developer
        </Typography>
        <Typography
          sx={{ fontSize: "1.3rem", color: "text.primary", marginTop: "1rem" }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
          reiciendis in doloribus, voluptas repellendus cupiditate temporibus
          vitae, labore vero quibusdam accusantium aliquam eligendi
          exercitationem necessitatibus. Earum minus, illum molestiae porro
          fugit exercitationem sapiente consequuntur, blanditiis molestias
          praesentium quae amet ipsum consectetur veniam, aperiam itaque iure
          aut. Incidunt aliquid sequi ab totam tenetur voluptatum nostrum aut
          harum quo numquam perferendis reprehenderit officia obcaecati commodi
          consequuntur illum qui, cum ut. Eos, dolores.
        </Typography>
        <Button sx={{my: '2rem', borderWidth: '2px'}} variant="outlined" color="buttonCustom">
          Resume
        </Button>
      </Box>
    </Box>
  );
}

export default HeroSection;
