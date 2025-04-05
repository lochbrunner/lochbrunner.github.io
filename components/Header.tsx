import { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import MenuIcon from '@mui/icons-material/Menu';
import { motion } from 'framer-motion';

interface HeaderProps {
  window?: () => Window;
  children?: React.ReactElement;
}

const navigationItems = ['Home', 'Projects', 'About', 'Contact'];

const HideOnScroll = (props: HeaderProps) => {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children || <div />}
    </Slide>
  );
};

const Header = (props: HeaderProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle}>
      <List>
        {navigationItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              component="a"
              href={`#${item.toLowerCase()}`}
              sx={{ textAlign: 'center' }}
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <HideOnScroll {...props}>
      <AppBar position="sticky" color="default" elevation={0} sx={{ bgcolor: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(10px)' }}>
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              style={{ display: 'flex', flexGrow: 1 }}
            >
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  fontWeight: 700,
                  color: 'primary.main',
                  textDecoration: 'none',
                }}
              >
                MY PORTFOLIO
              </Typography>
            </motion.div>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              {navigationItems.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Button
                    href={`#${item.toLowerCase()}`}
                    sx={{ my: 2, mx: 1 }}
                  >
                    {item}
                  </Button>
                </motion.div>
              ))}
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ ml: 'auto' }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
        <Drawer
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
          }}
        >
          {drawer}
        </Drawer>
      </AppBar>
    </HideOnScroll>
  );
};

export default Header;