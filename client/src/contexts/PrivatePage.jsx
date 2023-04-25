// PrivatePage.jsx
import {useContext} from 'react';
import {Navigate} from 'react-router-dom';
import {AuthContext} from './AuthProvider';
import {CircularProgress, Typography, Grid, List} from '@mui/material';

const PrivatePage = ({component: Component, ...rest}) => {
  const {currentUser} = useContext (AuthContext);

  return currentUser
    ? <Component {...rest} />
    : <Grid container py={4}>
    <Grid item xs={12} textAlign={'center'}>
      <CircularProgress />
    </Grid>
  </Grid>;
};

export default PrivatePage;
