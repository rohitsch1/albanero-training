import React from 'react';
import { Box, Typography ,Link } from '@mui/material';

function Footer() {
    return (
      <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 3 }}>
        <Typography variant="h6" align="center" gutterBottom>
             LikedIn
        </Typography>
        <Typography variant="body2" align="center">
          Copyright © {new Date().getFullYear()}
          {' '}
          <Link color="inherit" href="https://example.com/">
           LikedIn
          </Link>
        </Typography>
      </Box>
    );
  }
  export default Footer;

  