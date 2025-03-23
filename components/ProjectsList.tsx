import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { Project } from '../types';

interface ProjectsListProps {
  projects: Project[];
}

const ProjectsList: React.FC<ProjectsListProps> = ({ projects }) => {
  const [expandedVideo, setExpandedVideo] = useState<string | null>(null);
  const theme = useTheme();

  const handleToggleVideo = (projectId: string) => {
    if (expandedVideo === projectId) {
      setExpandedVideo(null);
    } else {
      setExpandedVideo(projectId);
    }
  };

  return (
    <Box component="section" id="projects" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Typography variant="h3" component="h2" gutterBottom align="center" sx={{ mb: 6 }}>
            My Projects
          </Typography>
        </motion.div>

        <Box
          sx={{
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: { xs: '50%', md: 'calc(50% - 1px)' },
              width: '2px',
              backgroundColor: theme.palette.divider,
              transform: 'translateX(-50%)',
              zIndex: 0,
            },
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ 
                opacity: 0, 
                y: 100,
                scale: 0.9
              }}
              whileInView={{ 
                opacity: 1,
                y: 0,
                scale: 1
              }}
              transition={{ 
                duration: 0.8, 
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true, margin: '-50px', amount: 0.3 }}
            >
              <Box 
                sx={{ 
                  mb: 12,
                  scrollMarginTop: '80px',
                  position: 'relative',
                  zIndex: 1,
                }}
                id={`project-${project.id}`}
              >
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.3,
                    type: "spring",
                    stiffness: 300,
                    damping: 15
                  }}
                  viewport={{ once: true }}
                >
                  <Box
                    sx={{
                      width: 20,
                      height: 20,
                      borderRadius: '50%',
                      backgroundColor: 'primary.main',
                      position: 'absolute',
                      top: 0,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      zIndex: 2,
                      boxShadow: 3,
                      border: `3px solid ${theme.palette.background.default}`,
                    }}
                  />
                </motion.div>

                {/* Project title */}
                <Typography 
                  variant="subtitle1" 
                  color="primary" 
                  fontWeight="bold"
                  align="center"
                  sx={{ mb: 4 }}
                >
                  {index === 0 ? 'Latest Project' : `Project ${index + 1}`}
                </Typography>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.2,
                    ease: "easeOut" 
                  }}
                  viewport={{ once: true }}
                >
                  <Card
                    elevation={3}
                    sx={{
                      borderRadius: 4,
                      overflow: 'visible',
                      position: 'relative',
                      backgroundColor: 'background.paper',
                      transition: 'transform 0.3s, box-shadow 0.3s',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: 6,
                      },
                    }}
                  >
                    <Grid container>
                      <Grid item xs={12}>
                        <Box sx={{ p: 3 }}>
                          <Typography variant="h4" component="h3" gutterBottom color="primary" fontWeight="bold">
                            {project.title}
                          </Typography>
                          <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                            {project.featured ? 'Featured Project' : 'Project'}
                          </Typography>
                        </Box>
                      </Grid>

                      <Grid item xs={12} md={6} sx={{ p: 3, pt: 0 }}>
                        <Box sx={{ position: 'relative' }}>
                          <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 10 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ 
                              duration: 0.6, 
                              delay: 0.3,
                              ease: "easeOut" 
                            }}
                            viewport={{ once: true }}
                          >
                            <Card 
                              elevation={2} 
                              sx={{ 
                                borderRadius: 3,
                                overflow: 'hidden',
                              }}
                            >
                              <CardMedia
                                component="img"
                                height="300"
                                image={project.images[0] || '/images/placeholder.jpg'}
                                alt={project.title}
                                sx={{ objectFit: 'cover' }}
                              />
                              {project.videoUrl && (
                                <IconButton
                                  aria-label="play video"
                                  onClick={() => handleToggleVideo(project.id)}
                                  sx={{
                                    position: 'absolute',
                                    bottom: 16,
                                    right: 16,
                                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                                    '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.5)' },
                                    color: 'white',
                                    zIndex: 2,
                                  }}
                                >
                                  <PlayCircleIcon fontSize="large" />
                                </IconButton>
                              )}
                            </Card>
                          </motion.div>
                          
                          {/* Additional project images in a horizontal scroll */}
                          {project.images.length > 1 && (
                            <Box 
                              sx={{ 
                                display: 'flex', 
                                mt: 2, 
                                overflowX: 'auto',
                                '&::-webkit-scrollbar': {
                                  height: 6,
                                },
                                '&::-webkit-scrollbar-thumb': {
                                  backgroundColor: 'rgba(0,0,0,0.2)',
                                  borderRadius: 3,
                                },
                                pb: 1,
                              }}
                            >
                              {project.images.slice(1).map((image, imgIndex) => (
                                <motion.div
                                  key={imgIndex}
                                  whileHover={{ scale: 1.05 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  <Box
                                    component="img"
                                    src={image}
                                    alt={`${project.title} image ${imgIndex + 2}`}
                                    sx={{
                                      height: 80,
                                      mr: 1,
                                      borderRadius: 1,
                                      cursor: 'pointer',
                                    }}
                                  />
                                </motion.div>
                              ))}
                            </Box>
                          )}
                        </Box>
                      </Grid>

                      <Grid item xs={12} md={6} sx={{ p: 3, pt: { xs: 2, md: 0 } }}>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                          viewport={{ once: true }}
                        >
                          <Typography variant="body1" paragraph>
                            {project.description}
                          </Typography>
                          
                          <Typography variant="subtitle2" gutterBottom sx={{ mt: 2 }}>
                            Technologies Used:
                          </Typography>
                        </motion.div>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                          {project.technologies.map((tech, techIndex) => (
                            <motion.div
                              key={tech}
                              initial={{ opacity: 0, y: 10, scale: 0.9 }}
                              whileInView={{ opacity: 1, y: 0, scale: 1 }}
                              transition={{ 
                                duration: 0.4, 
                                delay: 0.3 + (techIndex * 0.05),
                                ease: "easeOut" 
                              }}
                              viewport={{ once: true }}
                            >
                              <Chip
                                label={tech}
                                variant="outlined"
                                color="primary"
                                size="small"
                                sx={{ borderRadius: 2 }}
                              />
                            </motion.div>
                          ))}
                        </Box>
                        
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.8, delay: 0.5 }}
                          viewport={{ once: true }}
                        >
                          <Box sx={{ display: 'flex', gap: 2, mt: 4 }}>
                            {project.liveUrl && (
                              <motion.div 
                                whileHover={{ scale: 1.05 }} 
                                whileTap={{ scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                              >
                                <Button
                                  variant="contained"
                                  startIcon={<LaunchIcon />}
                                  component={Link}
                                  href={project.liveUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  size="large"
                                >
                                  Live Demo
                                </Button>
                              </motion.div>
                            )}
                            {project.githubUrl && (
                              <motion.div 
                                whileHover={{ scale: 1.05 }} 
                                whileTap={{ scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                              >
                                <Button
                                  variant="outlined"
                                  startIcon={<GitHubIcon />}
                                  component={Link}
                                  href={project.githubUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  size="large"
                                >
                                  Source Code
                                </Button>
                              </motion.div>
                            )}
                          </Box>
                        </motion.div>
                      </Grid>
                    </Grid>
                    
                    {/* Video section that expands when clicked */}
                    {project.videoUrl && expandedVideo === project.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Box sx={{ p: 3, pt: 0 }}>
                          <Card elevation={1}>
                            <Box
                              component="video"
                              src={project.videoUrl}
                              controls
                              width="100%"
                              sx={{ display: 'block' }}
                            />
                          </Card>
                        </Box>
                      </motion.div>
                    )}
                  </Card>
                </motion.div>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ProjectsList;