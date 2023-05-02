//Home.jsx

import {Button, Grid, Typography} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
	const navigate = useNavigate()
	const handleSignUpClick = () => {
		navigate('/login');
	}
  return (
  	<Grid container maxWidth={'sm'} >
		<Grid item component={Typography} variant="h1" xs={12}>FERNShoppr</Grid>
		<Grid item component={Typography} variant="h5" xs={12} pb={2}>Your Ultimate Grocery Shopping Companion</Grid>
		<Grid item component={Typography} xs={12} variant="body1">Welcome to FERNShoppr, the most user-friendly and efficient app designed to simplify your grocery shopping experience. Say goodbye to the days of forgotten shopping lists and last-minute store runs. With our app, you'll be able to create, organize, and manage your grocery lists with ease.</Grid>
		<Grid item component={Button} onClick={handleSignUpClick} variant='contained' my={4}>Sign up!</Grid>
	</Grid>
	);
};
export default Home;
