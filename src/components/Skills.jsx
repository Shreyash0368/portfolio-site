import React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";

const skills = [
  "Java",
  "HTML",
  "CSS",
  "JS",
  "React",
  "MongoDB",
  "Express",
  "Nodejs",
  "Material UI",
  "Data Strucures ",
  "Algorithms",
];

export default function Skills() {
  return (
    <Box>
      <Typography variant="h2" sx={{ my: 3, color: "text.light" }} id="skills">
        Skills
      </Typography>
      <Grid
        container
        spacing={3}
        justifyContent="center"
        alignItems="center"
        padding={4}
      >
        {skills.map((skill) => {
          return (
            <Grid item key={skill} xs={4} md={3}>
              <Paper elevation={3} sx={{ minHeight: 20 }}>
                {skill}
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
