import React, { useRef, useState } from "react";
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
  Link,
} from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import LanguageIcon from '@mui/icons-material/Language';
import useIntersectionObserver from "../hooks/intersectionObserver";

export default function ProjectCard({ project, delay = 0}) {
  const { title, description, image, github, video, youtube, website } = project;
  const [isOpen, setIsOpen] = useState(false);
  const ytLink = `https://www.youtube.com/embed/${youtube}`;
  const ref = useRef(null);
  const {isVisible} = useIntersectionObserver(ref);

  const handleImageClick = () => setIsOpen(true);
  const handleLightboxClose = () => setIsOpen(false);
  const handleLightboxOpen = () => setIsOpen(true);


  return (
    <div
      ref={ref}
      className={
        isVisible ? "show" : `hide move-${delay % 2 ? "left" : "right"}`
      }
      style={{ "--animation-delay": `${1500 + delay * 120}ms` }}
    >
      <Card sx={{ maxWidth: 350, minWidth: 300 }}>
        <CardMedia
          component="img"
          image={image.src}
          alt={image.alt}
          onClick={handleImageClick}
          sx={{ cursor: "pointer", height: 200, objectFit: "cover" }}
          loading="lazy"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ color: "text.light" }}
          >
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          {github && <Link variant="button" href={github} target="_blank" sx={{ mx: 1.5 }}>
            <GitHubIcon
              fontSize="large"
              sx={{ color: "white", "&:hover": { color: "text.light" } }}
            />
          </Link>}
          {youtube && <Button onClick={handleLightboxOpen}>
            <OndemandVideoIcon
              fontSize="large"
              sx={{ color: "white", "&:hover": { color: "text.light" } }}
            />
          </Button>}
          {website && <Link variant="button" href={website} target="_blank" sx={{ mx: 1.5 }}>
            <LanguageIcon
              fontSize="large"
              sx={{ color: "white", "&:hover": { color: "text.light" } }}
            />
          </Link>}
        </CardActions>
      </Card>

      <Dialog
        open={isOpen}
        onClose={handleLightboxClose}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>{"Demonstartion Video"}</DialogTitle>
        <DialogContent
          style={{
            width: "100%",
            height: "35rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <iframe
            width="100%"
            height="100%" /* Base height for tablet/laptop */
            src={ytLink}
            frameborder="0"
            allowFullScreen
          ></iframe>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleLightboxClose} sx={{ color: "text.light" }}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
