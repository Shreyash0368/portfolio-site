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
} from "@mui/material";

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

export default function ProjectCard({ project }) {
  const {title, description, images} = project;
  const [isOpen, setIsOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  const handleImageClick = () => setIsOpen(true);
  const handleLightboxClose = () => setIsOpen(false);

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
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </Card>

      <Dialog open={isOpen} onClose={handleLightboxClose}>
        <DialogTitle>{images[imageIndex].alt}</DialogTitle>
        <DialogContent>
          <img
            src={images[imageIndex].src}
            alt={images[imageIndex].alt}
            style={{ maxWidth: "100%" }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handlePreviousImage} disabled={imageIndex === 0}>
            <KeyboardArrowLeftIcon />
          </Button>
          <Button
            onClick={handleNextImage}
            disabled={imageIndex === images.length - 1}
          >
            <KeyboardArrowRightIcon />
          </Button>
          <Button onClick={handleLightboxClose} sx={{color:"text.light"}}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
