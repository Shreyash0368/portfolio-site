import React from "react";
import projects from "../assets/projectDetails";
import ProjectCard from "../components/ProjectCard";
import { Typography, Grid } from "@mui/material";

export default function ProjectList() {
  return (
    <>
      <Typography
        variant="h2"
        sx={{ color: "text.light", my: 3 }}
        id="projects"
      >
        Projects
      </Typography>
      <Grid
        container
        spacing={3}
        justifyContent="space-evenly"
        alignItems="center"
      >
        {projects.map((project, index) => {
          return (
            <Grid
              item
              xs={12}
              md={3}
              key={project.title}
              style={{ display: "flex", justifyContent: "space-evenly" }}
            >
              <ProjectCard project={project} delay={index}/>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
