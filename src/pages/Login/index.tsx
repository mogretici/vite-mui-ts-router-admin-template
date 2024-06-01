import React from 'react';
import Box from '@mui/material/Box';
import {
  Button,
  IconButton,
  InputAdornment,
  TextField,
  useTheme,
} from '@mui/material';
import {
  AccountCircle,
  Lock,
  Visibility,
  VisibilityOff,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

function Login() {
  const theme = useTheme();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100vh',
        gap: '4rem',
      }}
    >
      <img
        src={
          theme.palette.mode === 'dark' ? '/logo-light.png' : '/logo-dark.png'
        }
        width={350}
        alt="logo"
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
          alignItems: 'center',
        }}
      >
        <TextField
          label="Username"
          placeholder="Username"
          variant="outlined"
          sx={{ m: 1, width: '100%' }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          label="Password"
          placeholder="Password"
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Lock />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Box
          sx={{
            display: 'flex',
            gap: '1rem',
            width: '50%',
            justifyContent: 'center',
          }}
        >
          <Button
            variant="contained"
            color="primary"
            sx={{ width: '200px', height: '2rem', borderRadius: '.5rem' }}
            onClick={() => {
              localStorage.setItem('token', 'true');
              navigate('/');
            }}
          >
            Login
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Login;
