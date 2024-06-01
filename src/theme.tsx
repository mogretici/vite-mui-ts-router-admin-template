import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { red, blueGrey } from '@mui/material/colors';

// Common settings for both light and dark themes
const commonSettings = {
  typography: {
    fontFamily: 'Poppins, sans-serif',
    h1: {
      fontSize: '2rem',
    },
    h2: {
      fontSize: '1.75rem',
    },
    h3: {
      fontSize: '1.5rem',
    },
    h4: {
      fontSize: '1.25rem',
    },
    h5: {
      fontSize: '1rem',
    },
    h6: {
      fontSize: '0.875rem',
    },
  },
};

// Light theme settings
const lightTheme = createTheme({
  ...commonSettings,
  palette: {
    mode: 'light',
    primary: {
      main: blueGrey[600], // Dark Grey
    },
    secondary: {
      main: blueGrey[500], // Light Grey
    },
    error: {
      main: red.A400,
    },
    background: {
      default: blueGrey[100], // Very Light Grey
      paper: '#ffffff', // White
    },
    text: {
      primary: blueGrey[900], // Dark Grey
      secondary: blueGrey[800], // Medium Dark Grey
    },
    divider: blueGrey[900], // Light Grey
    info: {
      main: blueGrey[600], // Dark Grey
    },
    success: {
      main: blueGrey[800], // Medium Dark Grey
    },
    warning: {
      main: blueGrey[700], // Medium Grey
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#4692B9', // Dark Grey
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          borderRight: 'none', // Remove border on the right side
          backgroundColor: blueGrey[200], // Light Grey
        },
      },
    },
  },
}); // Dark theme settings
const darkTheme = createTheme({
  ...commonSettings,
  palette: {
    mode: 'dark',
    primary: {
      main: '#4692b9', // Soft Blue
      // main: '#7986cb', // Soft Blue
    },
    secondary: {
      main: '#7986cb', // Soft Blue
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#263238', // Dark Grey
      paper: '#37474f', // Darker Grey
    },
    text: {
      primary: '#eceff1', // Light Grey
      secondary: '#cfd8dc', // Medium Grey
    },
    divider: '#90a4ae', // Light Grey
    info: {
      main: '#64b5f6', // Soft Blue
    },
    success: {
      main: '#81c784', // Soft Green
    },
    warning: {
      main: '#ff9800', // Soft Amber
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#37474f', // Inherit background color
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          borderRight: 'none', // Remove border on the right side
          backgroundColor: '#37474f', // Dark Grey
        },
      },
    },
  },
});

// Making fonts responsive
const lightThemeWithResponsiveFonts = responsiveFontSizes(lightTheme);
const darkThemeWithResponsiveFonts = responsiveFontSizes(darkTheme);

export {
  lightThemeWithResponsiveFonts as lightTheme,
  darkThemeWithResponsiveFonts as darkTheme,
};
