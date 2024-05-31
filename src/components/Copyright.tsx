import React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'2024 © '}
      <Link color="inherit" href="https://lojiper.com/">
        LOJIPER YAZILIM
      </Link>
    </Typography>
  );
}
export default Copyright;
