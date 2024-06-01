import React from 'react';
import Typography from '@mui/material/Typography';
import { Card, CardContent, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import { People } from '@mui/icons-material';

function StatCard({
  title,
  value,
  icon,
}: {
  title: string;
  value: string;
  icon: any;
}) {
  const theme = useTheme();

  return (
    <Card
      sx={{
        display: 'flex',
        p: 2,
        borderRadius: 5,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem',
      }}
    >
      <Box>{icon}</Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <CardContent>
          <Typography
            variant="subtitle2"
            color="text.secondary"
            component="div"
            align={'center'}
            width={'100%'}
          >
            {title}
          </Typography>
          <Typography component="div" fontSize={'2rem'} align={'center'}>
            {value}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}
export default StatCard;
