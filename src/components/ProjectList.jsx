import React from "react";
import projects from "../assets/projectDetails";
import ProjectCard from "./ProjectCard";
import {Typography , Grid, Box} from "@mui/material";

export default function ProjectList() {
  return (
    <Box>
      <Typography
        variant="h2"
        sx={{ color: "text.light", my: 3 }}
        id="projects"
      >
        Projects
      </Typography>
      <Grid container spacing={3} padding={5} justifyContent="center">
        {projects.map((project) => {
          return (
            <Grid item xs={6} md={4} key={project.title} >
              <ProjectCard project={project} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
