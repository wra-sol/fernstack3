import React, {useContext} from 'react';
import {Box, Grid, Paper, Typography} from '@mui/material';
import GroceryItemInputForm from '../components/GroceryItemInputForm';
import GroceryList from '../components/GroceryList';
import {useQueryClient} from 'react-query';
import {AuthContext} from '../contexts/AuthProvider';

const Dashboard = () => {
  const {currentUser} = useContext (AuthContext);
  const queryClient = useQueryClient ();
  const token = currentUser.accessToken;
  return !currentUser
    ? ''
    : <Grid container justifyContent={'center'}>
        <Grid item xs={12} textAlign={'center'}>
          <Typography variant="h3">
            Welcome to the Dashboard!
          </Typography>
          <Typography variant="h5" mb={2}>
            {currentUser ? `Logged in as ${currentUser.email}` : ''}
          </Typography>
        </Grid>
        <Grid sx={{width: '100%'}}>
          <Grid item xs={12} sm={8} sx={{ margin: '0 auto', display: 'flex' }}>
            <Paper sx={{ padding: 6, boxSizing: 'border-box', width: '100%' }}>
              <GroceryItemInputForm token={token} queryClient={queryClient} />
              <GroceryList token={token} />
            </Paper>
          </Grid>
        </Grid>
      </Grid>;
};

export default Dashboard;
