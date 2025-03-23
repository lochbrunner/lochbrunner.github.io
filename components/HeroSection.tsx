import { Box, Typography, Button, Container, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const HeroSection = () => {
  return (
    <Box
      id="home"
      sx={{
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'background.default',
        pt: { xs: 8, sm: 10 },
        pb: { xs: 8, sm: 12 },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="overline"
                component="div"
                color="primary"
                sx={{ mb: 2, fontWeight: 500, letterSpacing: 2 }}
              >
                Welcome to my portfolio
              </Typography>
              <Typography
                variant="h2"
                component="h1"
                gutterBottom
                sx={{ fontWeight: 700, fontSize: { xs: '2.5rem', md: '3.5rem' } }}
              >
                Hi, I'm <span style={{ color: '#2196f3' }}>Your Name</span>
              </Typography>
              <Typography variant="h5" color="text.secondary" paragraph sx={{ mb: 4 }}>
                A passionate developer creating innovative solutions with modern technologies.
                Specializing in web applications, mobile development, and user experience design.
              </Typography>
              <Box sx={{ '& > :not(:first-of-type)': { ml: 2 } }}>
                <Button
                  variant="contained"
                  size="large"
                  href="#projects"
                  sx={{ textTransform: 'none', px: 4, py: 1.5, borderRadius: 8 }}
                >
                  View My Work
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  href="#contact"
                  sx={{ textTransform: 'none', px: 4, py: 1.5, borderRadius: 8 }}
                >
                  Contact Me
                </Button>
              </Box>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <Box
                component="img"
                src="/images/hero-image.svg"
                alt="Developer illustration"
                sx={{
                  width: '100%',
                  maxWidth: 500,
                  height: 'auto',
                  display: { xs: 'none', sm: 'block' },
                }}
              />
            </motion.div>
          </Grid>
        </Grid>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '2rem',
          }}
        >
          <Button
            href="#projects"
            sx={{
              minWidth: 'auto',
              p: 1,
              borderRadius: '50%',
              '&:hover': { transform: 'translateY(5px)' },
              transition: 'transform 0.3s',
            }}
          >
            <ArrowDownwardIcon />
          </Button>
        </motion.div>
      </Container>
    </Box>
  );
};

export default HeroSection;