import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) => theme.palette.background.paper,
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Typography variant="body2" color="text.secondary">
              © {new Date().getFullYear()} My Portfolio. All rights reserved.
            </Typography>
            <Box sx={{ display: 'flex', mt: { xs: 2, sm: 0 } }}>
              <IconButton
                aria-label="GitHub"
                component={Link}
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
                sx={{ '&:hover': { color: 'primary.main' } }}
              >
                <GitHubIcon />
              </IconButton>
              <IconButton
                aria-label="LinkedIn"
                component={Link}
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
                sx={{ '&:hover': { color: 'primary.main' } }}
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton
                aria-label="Twitter"
                component={Link}
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
                sx={{ '&:hover': { color: 'primary.main' } }}
              >
                <TwitterIcon />
              </IconButton>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Footer;