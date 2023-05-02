//PageLayout.jsx
import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Navbar from '../components/NavBar';

const Footer = () => (
  <Grid item xs={12} sx={{py: 3, mt: 'auto', backgroundColor:'secondary.main'}}>
    <Container maxWidth="sm">
      <Typography variant="body2" color="secondary.contrastText" align="center">
        © {new Date ().getFullYear ()} My first FERN App!
      </Typography>
    </Container>
  </Grid>
);

const PageLayout = ({children, routes}) => {
  return (
    <Grid container direction="column" minHeight="100vh" sx={{backgroundColor:`background.default`}}>
      <Grid item xs={12}>
        <Navbar routes={routes} />
      </Grid>
      <Grid item xs={12} py={4}>
        <Container component="main" sx={{color:'text.primary'}}>
          {children}
        </Container>
      </Grid>
      <Footer />
    </Grid>
  );
};

export default PageLayout;
