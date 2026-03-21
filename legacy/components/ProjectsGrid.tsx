import { useState } from 'react';
import {
  Box,
  Grid,
  Typography,
  Tabs,
  Tab,
  Container,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { Project } from '../types';

interface ProjectsGridProps {
  projects: Project[];
}

const ProjectsGrid = ({ projects }: ProjectsGridProps) => {
  const [filter, setFilter] = useState('all');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Extract unique technology tags from all projects
  const allTechnologies = Array.from(
    new Set(projects.flatMap((project) => project.technologies))
  ).slice(0, 7); // Limit to prevent too many tabs

  const handleFilterChange = (_event: React.SyntheticEvent, newValue: string) => {
    setFilter(newValue);
  };

  const filteredProjects = projects.filter((project) => {
    if (filter === 'all') return true;
    if (filter === 'featured') return project.featured;
    return project.technologies.includes(filter);
  });

  return (
    <Container maxWidth="lg" id="projects">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Typography variant="h3" component="h2" gutterBottom align="center" sx={{ mb: 4 }}>
          My Projects
        </Typography>
      </motion.div>

      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
        <Tabs
          value={filter}
          onChange={handleFilterChange}
          variant={isMobile ? 'scrollable' : 'standard'}
          scrollButtons={isMobile ? 'auto' : undefined}
          allowScrollButtonsMobile
          centered={!isMobile}
          sx={{ '& .MuiTabs-flexContainer': { flexWrap: isMobile ? 'nowrap' : 'wrap' } }}
        >
          <Tab label="All" value="all" />
          <Tab label="Featured" value="featured" />
          {allTechnologies.map((tech) => (
            <Tab key={tech} label={tech} value={tech} />
          ))}
        </Tabs>
      </Box>

      <Grid container spacing={4}>
        {filteredProjects.map((project, index) => (
          <Grid item key={project.id} xs={12} sm={6} md={4}>
            <ProjectCard project={project} index={index} />
          </Grid>
        ))}
        {filteredProjects.length === 0 && (
          <Grid item xs={12}>
            <Box
              sx={{
                textAlign: 'center',
                py: 5,
                borderRadius: 2,
                bgcolor: 'background.paper',
              }}
            >
              <Typography variant="h6" color="text.secondary">
                No projects found with the selected filter.
              </Typography>
            </Box>
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default ProjectsGrid;