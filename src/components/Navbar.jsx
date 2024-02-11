import * as React from "react";
import { Grid, Link, AppBar, Typography, Toolbar } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Navbar() {
  const onButtonClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    element.scrollIntoView({behavior: "smooth"});
  }
  return (
    <nav>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{
          borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
          width: "100vw",
          borderRadius: "2px",
          backgroundColor: "primary.dark",
        }}
      >
        <Toolbar sx={{ flexWrap: "wrap" }}>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            sx={{
              flexGrow: 1,
              textAlign: "left",
              "&:hover": { color: "text.light" },
            }}
          >
            SG
          </Typography>
          <Grid sx={{display: 'flex', alignItems:'center', height: '100%'}}>
            <Link variant="button" href="https://github.com/Shreyash0368" target="_blank" sx={{mx:1.5, "&:hover": { color: "text.light" }}}>
              <GitHubIcon fontSize="large" />
            </Link>
            <Link variant="button" href="https://www.linkedin.com/in/shreyash-gupta-b96189263/" target="_blank" sx={{mx: 1.5,"&:hover": { color: "text.light" }}}>
              <LinkedInIcon fontSize="large" />
            </Link>
            <Link
              variant="button"
              color="text.primary"              
              onClick = {(e) => {onButtonClick(e, "education")}}
              sx={{ my: 1, mx: 1.5, "&:hover": { color: "text.light" } }}
            >
              Education
            </Link>
            <Link
              variant="button"
              color="text.primary"
              onClick = {(e) => {onButtonClick(e, "skills")}}
              sx={{ my: 1, mx: 1.5, "&:hover": { color: "text.light" } }}
            >
              Skills
            </Link>
            <Link
              variant="button"
              color="text.primary"
              onClick = {(e) => {onButtonClick(e, "projects")}}
              sx={{ my: 1, mx: 1.5, "&:hover": { color: "text.light" } }}
            >
              Projects
            </Link>
            <Link
              variant="button"
              color="text.primary"
              onClick = {(e) => {onButtonClick(e, "contact-me")}}
              sx={{ my: 1, mx: 1.5, "&:hover": { color: "text.light" } }}
            >
              Contact Me
            </Link>
          </Grid>
        </Toolbar>
      </AppBar>
    </nav>
  );
}

