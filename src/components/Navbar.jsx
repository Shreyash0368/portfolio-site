import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Grid, Link } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Navbar() {
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
              "&:hover": { color: "text.disabled" },
            }}
          >
            SG
          </Typography>
          <Grid sx={{display: 'flex', alignItems:'center', height: '100%'}}>
            <Link sx={{mx:1.5, "&:hover": { color: "text.disabled" }}}>
              <GitHubIcon fontSize="large" />
            </Link>
            <Link sx={{mx: 1.5,"&:hover": { color: "text.disabled" }}}>
              <LinkedInIcon fontSize="large" />
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5, "&:hover": { color: "text.disabled" } }}
            >
              Education
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5, "&:hover": { color: "text.disabled" } }}
            >
              Skills
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5, "&:hover": { color: "text.disabled" } }}
            >
              Projects
            </Link>
          </Grid>
        </Toolbar>
      </AppBar>
    </nav>
  );
}

export default Navbar;
