import React from 'react';
import Copyright from '@components/Copyright';
import { Outlet, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Drawer } from '@styledComponents/Drawer';
import { DrawerHeader } from '@styledComponents/DrawerHeader';
import { LoginTwoTone } from '@mui/icons-material';
import AppBar from '@components/AppBar';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import TocIcon from '@mui/icons-material/Toc';

const drawerWidth = 240;

function LayoutDashboard(props: { toggleTheme: () => void }) {
  const navigate = useNavigate();
  const currentTheme = localStorage.getItem('theme');
  const TopList = [
    {
      text: 'Dashboard',
      icon: <SpaceDashboardIcon />,
      navigation: 'dashboard',
    },
    { text: 'Table', icon: <TocIcon />, navigation: 'table' },
  ];
  const BottomList = [
    { text: 'Logout', icon: <LoginTwoTone />, navigation: 'login' },
  ];
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar
          drawerWidth={drawerWidth}
          currentTheme={currentTheme}
          props={{ toggleTheme: props.toggleTheme }}
        />
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
            },
          }}
        >
          <DrawerHeader>
            <img
              src={
                currentTheme === 'dark' ? '/logo-light.png' : '/logo-dark.png'
              }
              alt="logo"
              style={{ width: '100%', height: 'auto', padding: '10px' }}
            />
          </DrawerHeader>
          <Divider />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100%',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
                my: 2,
              }}
            >
              <List>
                {TopList.map((item, index) => (
                  <ListItem
                    key={item.text}
                    disablePadding
                    sx={{ display: 'block' }}
                  >
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: 'initial',
                        px: 2.5,
                      }}
                      onClick={() => {
                        navigate(`${item.navigation}`);
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: 3,
                          justifyContent: 'center',
                        }}
                      >
                        {item.icon}
                      </ListItemIcon>
                      <ListItemText primary={item.text} sx={{ opacity: 1 }} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
              <List>
                {BottomList.map((item, index) => (
                  <ListItem
                    key={item.text}
                    disablePadding
                    sx={{ display: 'block' }}
                  >
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        alignItems: 'center',
                        justifyContent: 'center',
                        px: 1,
                      }}
                      onClick={() => {
                        navigate(`${item.navigation}`);
                      }}
                    >
                      <ListItemText
                        primary={item.text}
                        sx={{ opacity: 1, textAlign: 'end', pr: 2 }}
                      />

                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: 3,
                          justifyContent: 'center',
                        }}
                      >
                        {item.icon}
                      </ListItemIcon>
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Box>
            <Copyright />
          </Box>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, m: 1 }}>
          <DrawerHeader /> {/* This is for the fixed AppBar */}
          <Box
            height={'100%'}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Outlet />
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default LayoutDashboard;
