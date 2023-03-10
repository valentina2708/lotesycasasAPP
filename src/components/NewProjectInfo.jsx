import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { Grid, Container } from '@mui/material';
import { Colors } from '/src/config/themeConfig.js';
//import ReactPlayer from 'react-player';
import logo5 from '../assets/logoRincondelLago.jpg';
import { Button } from '@mui/material';

export default function BasicStack() {
	return (
		<Box
			sx={{
				p: '50px 0px',
				flexGrow: 1,
			}}
		>
			<Grid container spacing={2} columns={16}>
				<Grid item xs={8}>
					<Typography
						variant='h4'
						sx={{
							color: Colors.inverse,
							fontWeight: 'bold',
							mt: '20%',
							p: '40px',
							textAlign: 'center',
						}}
					>
						CONOCE NUESTRO NUEVO PROYECTO RINCÓN DEL LAGO
					</Typography>
					<Button
						variant='contained'
						sx={{
							position: 'relative',
							left: '43%',
							backgroundColor: 'Colors.info2',
						}}
					>
						Ver Más
					</Button>
				</Grid>
				<Grid item xs={8}>
					<img src={logo5} alt='logo' style={{ width: '100%', height: '100%' }} />
				</Grid>
			</Grid>
		</Box>
	);
}
