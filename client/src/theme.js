import {createTheme} from '@mui/material/styles';
const theme = createTheme ({
  palette: {
    primary: {
      main: '#008BF5',
      dark: '#00457A',
      light: '#85CAFF',
      contrastText: '#EBEBEB',
    },
    secondary: {
      main: '#FAB2EA',
      dark: '#AD0B8A',
      light: '#FEECFA',
      contrastText: '#1D1A31',
    },
    background: {
      default: '#1D1A31',
      paper: '#403D57',
    },
    text: {
      primary: '#EBEBEB',
      secondary: '#FAB2EA',
      disabled: 'rgba(235,235,235,.7)',
    },
  },
  typography: {
    allVariants: {fontFamily: "'Roboto', sans-serif"},
    h1: {fontSize: '2.rem', fontFamily: "'Roboto Slab', serif"},
    h2: {fontSize: '2.25rem', fontFamily: "'Roboto Slab', serif"},
    h3: {fontSize: '2rem', fontFamily: "'Roboto Slab', serif"},
    h4: {fontSize: '1.75rem', fontFamily: "'Roboto Slab', serif"},
    h5: {fontSize: '1.5rem', fontFamily: "'Roboto Slab', serif"},
    h6: {fontSize: '1.25rem', fontFamily: "'Roboto Slab', serif"},
    body1: {fontSize: '1rem', fontFamily: "'Roboto', sans-serif"},
    body2: {fontSize: '.9rem', fontFamily: "'Roboto', sans-serif"},
  },
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: '#1D1A31',
          fontSize:'.8rem',
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        secondary: {
          color: '#EBEBEB',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: '#1D1A31',
        },
        input:{
            fontSize:'.8rem',
            alignContent:'center',
        }
      },
    },
  },
});
export default theme;
