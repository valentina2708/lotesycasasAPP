import { Box, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { Colors } from '/src/config/themeConfig.js';

const useStyles = makeStyles()(theme => {
	return {
		image: {
			backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/src/assets/rincondelLago.jpg")`,
			height: '500px',
			backgroundPosition: 'center',
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'cover',
			position: 'relative',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			color: '#fff',
			fontSize: '4rem',
			[theme.breakpoints.down('sm')]: {
				height: 300,
				fontSize: '3em',
			},
		},
	};
});

export default function ProjectsUrbanization() {
	const { classes } = useStyles();
	return (
		<Box className={classes.image}>
			<Typography>Rincon del lago</Typography>
		</Box>
	);
}
