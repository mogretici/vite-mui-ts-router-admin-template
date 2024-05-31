import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ListItemIcon from '@mui/material/ListItemIcon';
import { AccountCircle } from '@mui/icons-material';
import LightModeIcon from '@mui/icons-material/LightMode';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { StyledAppBar } from '@styledComponents/StyledAppBar';
import { useLocation } from 'react-router-dom';

export const AppBar = ({
  drawerWidth,
  currentTheme,
  props,
}: {
  drawerWidth: number;
  currentTheme: string | null;
  props: { toggleTheme: () => void };
}): React.ReactNode => {
  const location = useLocation();

  return (
    <StyledAppBar
      position="fixed"
      sx={{
        width: `calc(100% - ${drawerWidth}px)`,
        ml: `${drawerWidth}px`,
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography variant="h6" noWrap component="div">
          {location.pathname
            ? (location.pathname.split('/').pop() || '').toLocaleUpperCase()
            : ''}
        </Typography>
        <Box>
          <ListItemIcon>
            <AccountCircle />
          </ListItemIcon>
          <ListItemIcon
            onClick={() => {
              props.toggleTheme();
            }}
          >
            {currentTheme === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
          </ListItemIcon>
          <ListItemIcon>
            <PowerSettingsNewIcon />
          </ListItemIcon>
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
};
// export default AppBar;
/*function AppBar(
  drawerWidth: number,
  currentTheme: string,
  props: { toggleTheme: () => void },
): React.ReactNode {
  const location = useLocation();

  return (
    <StyledAppBar
      position="fixed"
      sx={{
        width: `calc(100% - ${drawerWidth}px)`,
        ml: `${drawerWidth}px`,
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography variant="h6" noWrap component="div">
          {location.pathname
            ? (location.pathname.split('/').pop() || '').toLocaleUpperCase()
            : ''}
        </Typography>
        <Box>
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: 3,
              justifyContent: 'center',
            }}
          >
            <AccountCircle />
          </ListItemIcon>
          <ListItemIcon
            onClick={() => {
              props.toggleTheme();
            }}
          >
            {currentTheme === 'dark' ? (
              <LightModeTwoToneIcon />
            ) : (
              <DarkModeTwoToneIcon color={'secondary'} />
            )}
          </ListItemIcon>
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: 3,
              justifyContent: 'center',
            }}
          >
            <LoginTwoTone />
          </ListItemIcon>
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
}*/

export default AppBar;
