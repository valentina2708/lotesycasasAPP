import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { Grid, Paper, Stack, CardMedia, Card } from '@mui/material';
import { Button } from '@mui/material';
import { Colors } from '/src/config/themeConfig.js';
import logo from '../assets/logoRincondelLago.jpg';

export default function BasicStack() {
	return (
		<Box
			sx={{
				p: '50px 0px',
			}}
		>
			{/* elemento 1 */}
			<Grid container rowSpacing={3} columnSpacing={{ xs: 12, sm: 6, md: 4 }}>
				<Grid item xs={6}>
					<Stack
						sx={{
							p: '60px 0px',
							backgroundColor: Colors.info2,
							position: 'relative',
							top: 290,
							left: '20%',
							height: '30%',
						}}
					></Stack>
				</Grid>
				<Grid item xs={6}>
					<Stack
						sx={{
							p: '60px 0px',
							height: '60%',
							backgroundColor: Colors.info2,
							position: 'relative',
							top: 50,
							right: '20%',
						}}
					></Stack>
				</Grid>
			</Grid>

			{/* elemento 2*/}
			<Card
				elevation={12}
				sx={{
					width: '70%',
					height: 520,
					position: 'relative',
					top: '-150px',
					left: '15%',
					borderRadius: 3,
				}}
			>
				<Grid container rowSpacing={1} columnSpacing={{ xs: 12, sm: 6, md: 4 }}>
					<Grid item xs={6}>
						<CardMedia
							sx={{
								height: '120%',
								width: '100%',
								borderRadius: 3,
								position: 'relative',
								bottom: '5px',
							}}
							image='/src/assets/rincondelLago.jpg'
							title='publicidad'
						/>
					</Grid>
					<Grid item xs={6}>
						<Stack
							sx={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								p: '20px',
							}}
						>
							<Typography
								variant='h4'
								sx={{
									fontWeight: 'bold',
									mt: 2,
									
								}}
							>
								Conoce Nuestro Nuevo Proyecto Rincón del Lago
							</Typography>
							<Typography variant='body1'>
								Estamos en construccion de nuestra nueva urbanizacón, un lugar
								pensado para tu comodidad y confort.
							</Typography>
							<img src={logo} alt='logo' style={{ width: 320, height: 230 }} />
							<Button variant='contained' >Ver Más</Button>
						</Stack>
					</Grid>
				</Grid>
			</Card>
		</Box>
	);
}
