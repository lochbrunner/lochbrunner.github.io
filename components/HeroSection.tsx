import { useState, useEffect } from 'react';
import { Box, Typography, Button, Container, Grid, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import CodeIcon from '@mui/icons-material/Code';
import WebIcon from '@mui/icons-material/Web';
import DevicesIcon from '@mui/icons-material/Devices';

const HeroSection = () => {
  const theme = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  // Set isMounted to true when component mounts (client-side only)
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.7,
        ease: "easeOut"
      }
    })
  };

  // Icons animation for floating effect
  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "easeInOut"
    }
  };

  // Generate random positions safely (no window reference during SSR)
  const generateRandomPositions = (index: number) => {
    // Use pre-defined values for server-side rendering
    let width = 1000;
    let height = 600;
    
    // Get window dimensions if in the browser
    if (isMounted && typeof window !== 'undefined') {
      width = window.innerWidth;
      height = window.innerHeight;
    }
    
    // Create deterministic random values based on the index
    const randomX = (Math.sin(index * 10) * 0.5 + 0.5) * width;
    const randomY = (Math.cos(index * 10) * 0.5 + 0.5) * height;
    const randomScale = 0.5 + (Math.sin(index * 5) * 0.5 + 0.5);
    const randomOpacity = 0.3 + (Math.cos(index * 8) * 0.5 + 0.5) * 0.7;
    
    return {
      x: randomX,
      y: randomY,
      scale: randomScale,
      opacity: randomOpacity,
      width: 100 + (Math.sin(index * 3) * 0.5 + 0.5) * 100,
      height: 100 + (Math.cos(index * 7) * 0.5 + 0.5) * 100,
      duration: 20 + (Math.sin(index * 2) * 0.5 + 0.5) * 30
    };
  };

  return (
    <Box
      id="home"
      sx={{
        minHeight: '92vh',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'background.default',
        pt: { xs: 8, sm: 10 },
        pb: { xs: 8, sm: 12 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background decoration elements */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
          opacity: 0.05,
          pointerEvents: 'none'
        }}
      >
        {[...Array(5)].map((_, i) => {
          // Get random positions
          const random = generateRandomPositions(i);
          
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0, x: Math.random() * 100 - 50, y: Math.random() * 100 - 50 }}
              animate={{ 
                opacity: random.opacity, 
                scale: random.scale,
                x: random.x,
                y: random.y
              }}
              transition={{ 
                duration: random.duration, 
                repeat: Infinity, 
                repeatType: "reverse" 
              }}
              style={{
                position: 'absolute',
                width: random.width,
                height: random.height,
                borderRadius: '50%',
                background: `radial-gradient(circle, ${theme.palette.primary.light} 0%, transparent 70%)`,
              }}
            />
          );
        })}
      </Box>

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={7}>
            <Box>
              <motion.div
                custom={1}
                initial="hidden"
                animate="visible"
                variants={textVariants}
              >
                <Typography
                  variant="overline"
                  component="div"
                  color="primary"
                  sx={{ mb: 2, fontWeight: 500, letterSpacing: 3 }}
                >
                  WELCOME TO MY PORTFOLIO
                </Typography>
              </motion.div>
              
              <motion.div
                custom={2}
                initial="hidden"
                animate="visible"
                variants={textVariants}
              >
                <Typography
                  variant="h2"
                  component="h1"
                  gutterBottom
                  sx={{ 
                    fontWeight: 800, 
                    fontSize: { xs: '2.5rem', md: '4rem' },
                    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                    WebkitTextFillColor: 'transparent',
                    textShadow: '0px 2px 5px rgba(0,0,0,0.1)',
                  }}
                >
                  Your Name
                </Typography>
              </motion.div>
              
              <motion.div
                custom={3}
                initial="hidden"
                animate="visible"
                variants={textVariants}
              >
                <Typography
                  variant="h5"
                  sx={{ 
                    mb: 1,
                    fontWeight: 700,
                    color: theme.palette.primary.main
                  }}
                >
                  Software Developer & Designer
                </Typography>
              </motion.div>

              <motion.div
                custom={4}
                initial="hidden"
                animate="visible"
                variants={textVariants}
              >
                <Typography variant="body1" color="text.secondary" paragraph sx={{ mb: 4, maxWidth: '90%' }}>
                  A passionate developer creating innovative solutions with modern technologies.
                  Specializing in web applications, mobile development, and user experience design.
                </Typography>
              </motion.div>

              <motion.div
                custom={5}
                initial="hidden"
                animate="visible"
                variants={textVariants}
              >
                <Box sx={{ '& > :not(:first-of-type)': { ml: 2 }, mt: 5 }}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{ display: 'inline-block' }}
                  >
                    <Button
                      variant="contained"
                      size="large"
                      href="#projects"
                      sx={{ 
                        textTransform: 'none', 
                        px: 4, 
                        py: 1.5, 
                        borderRadius: 8,
                        fontWeight: 'bold',
                        boxShadow: '0 6px 15px rgba(33, 150, 243, 0.3)',
                      }}
                    >
                      View My Work
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{ display: 'inline-block' }}
                  >
                    <Button
                      variant="outlined"
                      size="large"
                      href="#contact"
                      sx={{ 
                        textTransform: 'none', 
                        px: 4, 
                        py: 1.5, 
                        borderRadius: 8,
                        fontWeight: 'bold',
                      }}
                    >
                      Contact Me
                    </Button>
                  </motion.div>
                </Box>
              </motion.div>
            </Box>
          </Grid>
          <Grid item xs={12} md={5}>
            <Box sx={{ position: 'relative', height: { xs: '300px', md: '400px' } }}>
              {/* Center main image */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                style={{ 
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  zIndex: 3,
                }}
              >
                <Box
                  component="img"
                  src="/images/hero-image.svg"
                  alt="Developer illustration"
                  sx={{
                    width: { xs: 220, md: 320 },
                    height: 'auto',
                    filter: 'drop-shadow(0px 10px 15px rgba(0,0,0,0.1))',
                  }}
                />
              </motion.div>

              {/* Floating icons around the main image */}
              <motion.div
                animate={floatingAnimation}
                style={{
                  position: 'absolute',
                  top: '20%',
                  left: '15%',
                  zIndex: 2,
                  background: theme.palette.background.paper,
                  borderRadius: '50%',
                  padding: '15px',
                  boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                }}
              >
                <CodeIcon fontSize="large" color="primary" />
              </motion.div>

              <motion.div
                animate={{
                  ...floatingAnimation,
                  transition: {
                    ...floatingAnimation.transition,
                    delay: 0.5
                  }
                }}
                style={{
                  position: 'absolute',
                  bottom: '20%',
                  left: '25%',
                  zIndex: 2,
                  background: theme.palette.background.paper,
                  borderRadius: '50%',
                  padding: '15px',
                  boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                }}
              >
                <DevicesIcon fontSize="large" color="secondary" />
              </motion.div>

              <motion.div
                animate={{
                  ...floatingAnimation,
                  transition: {
                    ...floatingAnimation.transition,
                    delay: 1
                  }
                }}
                style={{
                  position: 'absolute',
                  top: '30%',
                  right: '20%',
                  zIndex: 2,
                  background: theme.palette.background.paper,
                  borderRadius: '50%',
                  padding: '15px',
                  boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                }}
              >
                <WebIcon fontSize="large" color="primary" />
              </motion.div>
            </Box>
          </Grid>
        </Grid>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: [0, 1, 0.5, 1],
            y: [20, 0, 5, 0]
          }}
          transition={{ 
            duration: 2, 
            delay: 1.5, 
            repeat: Infinity,
            repeatDelay: 1
          }}
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
              transition: 'transform 0.3s',
              boxShadow: '0 3px 10px rgba(0,0,0,0.1)',
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