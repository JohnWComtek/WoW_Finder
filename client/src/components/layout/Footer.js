import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" color="text.secondary" align="center">
          {'© '}
          {new Date().getFullYear()}
          {' WoW Community Hub - '}
          <Link color="inherit" href="https://github.com/your-username/wow-community-hub">
            GitHub
          </Link>
          {' | '}
          <Link color="inherit" href="https://raider.io">
            Raider.IO
          </Link>
          {' | '}
          <Link color="inherit" href="https://www.warcraftlogs.com">
            Warcraft Logs
          </Link>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer; 