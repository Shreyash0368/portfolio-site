import React from "react";
import projects from "../assets/projectDetails";
import ProjectCard from "./ProjectCard";
import { Typography, Grid} from "@mui/material";

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
        justifyContent="center"
        alignItems="center"        
        padding={4}
      >
        {projects.map(project => {
          return (
            <Grid item xs={12} md={3} key={project.title}>
              <ProjectCard project={project}/>
            </Grid>
          )
        })}
      </Grid>
    </>
  );
}
