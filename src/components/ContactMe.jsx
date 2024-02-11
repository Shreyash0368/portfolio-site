import React, { useState } from "react";
import { Grid, Typography, TextField, Button, IconButton } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function ContactMe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here (e.g., send email, display success message)
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "name") setName(value);
    else if (name === "email") setEmail(value);
    else if (name === "message") setMessage(value);
  };

  return (
    <Grid container spacing={2} py={8} px={10}>
      <Grid item xs={12}>
        <Typography variant="h2" color={"text.light"} id="contact-me">
          Contact Me
        </Typography>
      </Grid>
      <Grid item xs={12} display="flex" justifyContent="center">
        <IconButton href="mailto:shreyashgpt0503@gmail.com">
          <EmailIcon />
        </IconButton>
        <IconButton href="https://github.com/Shreyash0368" target="_blank">
          <GitHubIcon />
        </IconButton>
        <IconButton href="https://www.linkedin.com/in/shreyash-gupta-b96189263/" target="_blank">
          <LinkedInIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
}

export default ContactMe;
