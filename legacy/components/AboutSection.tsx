import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import { motion } from 'framer-motion';

const skills = [
  'Multimodal LLMs',
  'RLxF',
  'Large Distributed Systems',
  'TypeScript',
  'Pathways',
  'Jax',
  'Python',
  'C++',
];

const AboutSection = () => {
  return (
    <Box
      id="about"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: 'background.paper',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: '-100px' }}
              style={{ textAlign: 'center' }}
            >
              <Avatar
                src="/images/placeholder.jpg"
                alt="Profile Picture"
                sx={{
                  width: { xs: 200, md: 300 },
                  height: { xs: 200, md: 300 },
                  mx: 'auto',
                  boxShadow: 6,
                  border: '5px solid white',
                }}
              />
            </motion.div>
          </Grid>
          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              <Typography variant="h3" component="h2" gutterBottom>
                About Me
              </Typography>
              <Typography variant="body1" paragraph sx={{ mb: 3 }}>
                As a Research Engineer at Google DeepMind, I contribute to the Gemini Thinking project.
                My work leverages strong engineering and software design skills to tackle cutting-edge research questions, aiming to push the boundaries of Gemini's capabilities.
              </Typography>
              <Typography variant="body1" paragraph>
                My approach as a Research Engineer involves balancing the need for high-quality, maintainable code in large systems with the agility required for rapid research prototyping.
                I'm an effective communicator and perform best in collaborative, cutting-edge environments.
                I have a strong aptitude for quickly mastering new frameworks and complex codebases, and I proactively seek opportunities to enhance system performance and stability.
              </Typography>

              <Typography variant="h5" gutterBottom sx={{ mt: 4, mb: 2 }}>
                Skills & Technologies
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 4 }}>
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <Chip
                      label={skill}
                      variant="outlined"
                      color="primary"
                      sx={{ borderRadius: 4, px: 1 }}
                    />
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          </Grid>
        </Grid>

        <Grid container spacing={4} sx={{ mt: 6 }}>
          {[
            { title: 'Education', content: 'Master of Science in Physics', place: 'Technical University of Munich' },
            { title: 'Experience', content: 'Research Engineer', place: 'Google DeepMind' },
            { title: 'Location', content: 'London, UK', place: '' },
          ].map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: '-50px' }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    height: '100%',
                    borderRadius: 4,
                    border: '1px solid',
                    borderColor: 'divider',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: 3,
                    },
                  }}
                >
                  <Typography variant="h6" gutterBottom color="primary">
                    {item.title}
                  </Typography>
                  <Typography variant="body1" gutterBottom fontWeight={500}>
                    {item.content}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.place}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutSection;