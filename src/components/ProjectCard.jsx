import React, { useState } from "react";
import {
  Button,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  CardActions,
  Link
} from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';

export default function ProjectCard({ project }) {
  const { title, description, images, github, video} = project;
  const [isOpen, setIsOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  const handleImageClick = () => setIsOpen(true);
  const handleLightboxClose = () => setIsOpen(false);
  const handleLightboxOpen = () => setIsOpen(true);

  const handleNextImage = () => setImageIndex(imageIndex + 1);
  const handlePreviousImage = () => setImageIndex(imageIndex - 1);

  return (
    <>
      <Card sx={{ maxWidth: 350 }}>
        <CardMedia
          component="img"
          image={images[imageIndex].src}
          alt={images[imageIndex].alt}
          onClick={handleImageClick}
          sx={{ cursor: "pointer", height: 200, objectFit: "cover" }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{color: "text.light"}}>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Link
            variant="button"
            href= {github}
            target="_blank"
            sx={{ mx: 1.5 }}
          >
            <GitHubIcon fontSize="large" sx={{color: "white", "&:hover": { color: "text.light" }}} />
          </Link>
          <Button onClick={handleLightboxOpen}>
            <OndemandVideoIcon fontSize="large" sx={{color: "white", "&:hover": { color: "text.light" }}} />
          </Button>
        </CardActions>
      </Card>

      <Dialog open={isOpen} onClose={handleLightboxClose} maxWidth="md">
        <DialogTitle>{"Demonstartion Video"}</DialogTitle>
        <DialogContent style={{display: "flex"}}>         
          <video style={{height: "100%", width: "100%"}} src={video} controls autoPlay muted loop></video>
        </DialogContent>
        <DialogActions>          
          <Button onClick={handleLightboxClose} sx={{ color: "text.light" }}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
