import React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { useTheme } from '@mui/material';

function Copyright() {
  const theme = useTheme();
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'2024 © '}
      <Link color={theme.palette.text.primary} href="https://lojiper.com/">
        LOJIPER YAZILIM
      </Link>
    </Typography>
  );
}
export default Copyright;
