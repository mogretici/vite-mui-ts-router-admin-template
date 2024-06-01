import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Home/Dashboard';
import LayoutDashboard from './pages/Home/layout';
import { useState } from 'react';
import { darkTheme, lightTheme } from './theme';
import Table from './pages/Home/Table';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const Root = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem('theme') === 'dark',
  );

  const toggleTheme = () => {
    localStorage.setItem('theme', isDarkMode ? 'light' : 'dark');
    setIsDarkMode(!isDarkMode);
  };
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route element={<PublicRoute />}>
              <Route path="/login" element={<Login />} />
            </Route>
            <Route element={<PrivateRoute />}>
              <Route
                path="/"
                element={<LayoutDashboard toggleTheme={toggleTheme} />}
              >
                <Route index element={<Dashboard />} />
                <Route path="table" element={<Table />} />
              </Route>
            </Route>
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </LocalizationProvider>
    </ThemeProvider>
  );
};

const PrivateRoute: React.FC = () => {
  const isAuthenticated = () => {
    return !!localStorage.getItem('token');
  };
  if (isAuthenticated()) {
    return <Outlet />;
  } else {
    return <Navigate to={'/login'} />;
  }
};

const PublicRoute: React.FC = () => {
  const isAuthenticated = () => {
    return !!localStorage.getItem('token');
  };
  if (isAuthenticated()) {
    return <Navigate to={'/'} />;
  } else {
    return <Outlet />;
  }
};

ReactDOM.createRoot(document.getElementById('root')!).render(<Root />);
