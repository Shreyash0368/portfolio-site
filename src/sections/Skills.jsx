import React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import AnimatedSkillCard from "../components/AnimatedSkillCard";

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
  "Redux",
  "Firebase",
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
        justifyContent="space-evenly"
        alignItems="center"
        padding={4}
      >
        {skills.map((skill, index) => {
          return (
            <Grid
              item
              key={skill}
              xs={5}
              md={2}
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <AnimatedSkillCard skill={skill} delay={index} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
