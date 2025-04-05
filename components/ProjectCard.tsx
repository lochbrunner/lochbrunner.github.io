import { useState } from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Chip,
  IconButton,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import CloseIcon from '@mui/icons-material/Close';
import { motion } from 'framer-motion';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);

  const handleOpenDetails = () => {
    setDetailsOpen(true);
  };

  const handleCloseDetails = () => {
    setDetailsOpen(false);
  };

  const handleOpenVideo = () => {
    setVideoOpen(true);
  };

  const handleCloseVideo = () => {
    setVideoOpen(false);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true, margin: '-50px' }}
      >
        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ position: 'relative' }}>
            {project.videoUrl && (
              <IconButton
                aria-label="play video"
                onClick={handleOpenVideo}
                sx={{
                  position: 'absolute',
                  bottom: 8,
                  right: 8,
                  backgroundColor: 'rgba(0, 0, 0, 0.3)',
                  '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.5)' },
                  color: 'white',
                }}
              >
                <PlayCircleIcon />
              </IconButton>
            )}
          </Box>
          <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
            <Typography gutterBottom variant="h5" component="h2">
              {project.title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                display: '-webkit-box',
                overflow: 'hidden',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 3,
                mb: 2,
                flexGrow: 1,
              }}
            >
              {project.description}
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
              {project.technologies.slice(0, 3).map((tech) => (
                <Chip key={tech} label={tech} size="small" variant="outlined" />
              ))}
              {project.technologies.length > 3 && (
                <Chip
                  label={`+${project.technologies.length - 3}`}
                  size="small"
                  variant="outlined"
                />
              )}
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Button size="small" onClick={handleOpenDetails}>
                View Details
              </Button>
              <Box>
                {project.githubUrl && (
                  <IconButton
                    aria-label="github"
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="small"
                  >
                    <GitHubIcon fontSize="small" />
                  </IconButton>
                )}
                {project.liveUrl && (
                  <IconButton
                    aria-label="live site"
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="small"
                  >
                    <LaunchIcon fontSize="small" />
                  </IconButton>
                )}
              </Box>
            </Box>
          </CardContent>
        </Card>
      </motion.div>

      {/* Details Dialog */}
      <Dialog
        open={detailsOpen}
        onClose={handleCloseDetails}
        maxWidth="md"
        fullWidth
        scroll="paper"
        aria-labelledby="project-details-title"
      >
        <DialogTitle id="project-details-title">
          {project.title}
          <IconButton
            aria-label="close"
            onClick={handleCloseDetails}
            sx={{ position: 'absolute', right: 8, top: 8 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <Box sx={{ display: 'flex', overflow: 'auto', mb: 2 }}>
            {project.images.map((image, i) => (
              <Box
                key={i}
                component="img"
                src={image}
                alt={`${project.title} screenshot ${i + 1}`}
                sx={{
                  height: 200,
                  mr: 1,
                  borderRadius: 1,
                  boxShadow: '0px 2px 8px rgba(0,0,0,0.1)',
                }}
              />
            ))}
          </Box>
          <Typography variant="body1" paragraph>
            {project.description}
          </Typography>
          <Typography variant="h6" gutterBottom>
            Technologies Used
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
            {project.technologies.map((tech) => (
              <Chip key={tech} label={tech} />
            ))}
          </Box>
        </DialogContent>
        <DialogActions>
          {project.githubUrl && (
            <Button
              startIcon={<GitHubIcon />}
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Button>
          )}
          {project.liveUrl && (
            <Button
              startIcon={<LaunchIcon />}
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
            >
              Live Demo
            </Button>
          )}
        </DialogActions>
      </Dialog>

      {/* Video Dialog */}
      <Dialog
        open={videoOpen}
        onClose={handleCloseVideo}
        maxWidth="md"
        fullWidth
        aria-labelledby="project-video"
      >
        <DialogContent sx={{ p: 0 }}>
          {project.videoUrl && (
            <Box
              component="video"
              src={project.videoUrl}
              controls
              autoPlay
              sx={{ width: '100%', display: 'block' }}
            />
          )}
          {project.youtubeUrl && (
            <Box
              component="iframe"
              src={project.youtubeUrl}
              frameBorder="0"
              allowFullScreen
              sx={{ width: '100%', height: '500px', display: 'block' }}
            />
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseVideo}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ProjectCard;