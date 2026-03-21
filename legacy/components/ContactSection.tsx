import { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WorkIcon from '@mui/icons-material/Work';
import { motion } from 'framer-motion';

const ContactSection = () => {
  const contactLinks = [
    {
      icon: <EmailIcon />,
      text: 'matthias_lochbrunner@web.de',
      link: 'mailto:matthias_lochbrunner@web.de',
      label: 'Email'
    },
    {
      icon: <GitHubIcon />,
      text: 'GitHub Profile',
      link: 'https://github.com/lochbrunner',
      label: 'GitHub'
    },
    {
      icon: <LinkedInIcon />,
      text: 'LinkedIn',
      link: 'https:www.linkedin.com/in/matthias-lochbrunner-b8412711b',
      label: 'LinkedIn'
    },
    {
      icon: <WorkIcon />,
      text: 'Google DeepMind',
      link: 'https://deepmind.google/',
      label: 'Current Employer'
    },
    {
      icon: <LocationOnIcon />,
      text: 'London, UK',
      link: undefined,
      label: 'Location'
    },
  ];

  return (
    <Box
      id="contact"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: 'background.default',
      }}
    >
      <Container maxWidth="xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Typography variant="h3" component="h2" gutterBottom align="center" sx={{ mb: 6 }}>
            Get In Touch
          </Typography>
        </motion.div>

        <Grid container spacing={4} justifyContent="center">
          {contactLinks.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
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
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'primary.main',
                        color: 'white',
                        width: 50,
                        height: 50,
                        borderRadius: '50%',
                        mb: 2,
                        boxShadow: 2,
                      }}
                    >
                      {item.icon}
                    </Box>
                    <Typography variant="h6" gutterBottom color="primary">
                      {item.label}
                    </Typography>
                    {item.link ? (
                      <Link
                        href={item.link}
                        underline="hover"
                        color="inherit"
                        target={item.link.startsWith('mailto') ? undefined : "_blank"}
                        rel="noopener noreferrer"
                        variant="body1"
                        fontWeight={500}
                        sx={{ transition: 'color 0.3s' }}
                      >
                        {item.text}
                      </Link>
                    ) : (
                      <Typography variant="body1" gutterBottom fontWeight={500}>
                        {item.text}
                      </Typography>
                    )}
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactSection;