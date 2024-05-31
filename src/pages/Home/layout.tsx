import React from 'react';
import Copyright from '@components/Copyright';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Drawer } from '@styledComponents/Drawer';
import { DrawerHeader } from '@styledComponents/DrawerHeader';
import { LoginTwoTone } from '@mui/icons-material';
import AppBar from '@components/AppBar';

const drawerWidth = 240;

function LayoutDashboard(props: { toggleTheme: () => void }) {
  const location = useLocation();
  const navigate = useNavigate();
  const currentTheme = localStorage.getItem('theme');
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
            <Box>
              <List>
                {['Dashboard', 'Table'].map((text, index) => (
                  <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: 'initial',
                        px: 2.5,
                      }}
                      onClick={() => {
                        navigate(`${text.toLowerCase()}`);
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: 3,
                          justifyContent: 'center',
                        }}
                      >
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                      </ListItemIcon>
                      <ListItemText primary={text} sx={{ opacity: 1 }} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
              <Divider />
              <List>
                <ListItem disablePadding sx={{ display: 'block' }}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: 'initial',
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: 3,
                        justifyContent: 'center',
                      }}
                    >
                      <LoginTwoTone />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography
                          variant="button"
                          sx={{ textTransform: 'capitalize' }}
                        >
                          Logout
                        </Typography>
                      }
                      sx={{ opacity: 1 }}
                    />
                  </ListItemButton>
                </ListItem>
              </List>
            </Box>
            <Copyright />
          </Box>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, m: 1 }}>
          <DrawerHeader />
          <Outlet />
        </Box>
      </Box>
    </>
  );
}

export default LayoutDashboard;