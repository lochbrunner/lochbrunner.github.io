import { Box, Container, Grid, Typography, Avatar, Chip, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const skills = [
  'React', 
  'TypeScript', 
  'Node.js', 
  'Material UI', 
  'Next.js',
  'GraphQL',
  'MongoDB',
  'AWS',
  'Docker',
  'Git',
  'Figma',
  'Jest'
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
                I'm a passionate software developer with expertise in creating modern web and mobile applications. 
                With over 5 years of experience in the industry, I've had the opportunity to work on diverse projects, 
                from small startups to enterprise applications, helping businesses solve real-world problems through technology.
              </Typography>
              <Typography variant="body1" paragraph>
                My approach combines clean code principles with user-centered design, ensuring that the applications 
                I build are not only technically sound but also intuitive and enjoyable to use. I'm constantly learning 
                and staying updated with the latest technologies and best practices in the field.
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
            { title: 'Education', content: 'Bachelor of Science in Computer Science', place: 'University Name, 2015-2019' },
            { title: 'Experience', content: 'Senior Software Engineer', place: 'Company Name, 2019-Present' },
            { title: 'Location', content: 'San Francisco, CA', place: 'Available for remote work' },
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