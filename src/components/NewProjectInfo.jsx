import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { Grid, Container } from '@mui/material';
import { Colors } from '/src/config/themeConfig.js';
import ReactPlayer from 'react-player';
import video1 from '../assets/rincondelLago.mp4';
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
							mt: 3,
							p: '40px',
							textAlign: 'center',
						}}
					>
						CONOCE NUESTRO NUEVO PROYECTO RINCÓN DEL LAGO
					</Typography>
					<Button
					variant="contained"
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
					<Container className='player-wrapper'>
						<ReactPlayer
							url={video1}
							controls={true}
							playing={true}
							width='90%'
							height='90%'
						/>
					</Container>
				</Grid>
			</Grid>
		</Box>
	);
}
