import Box from '@mui/material/Box';
import { Stack, CardMedia, Card, Typography, Button } from '@mui/material';
import { Colors } from '../config/themeConfig.js';
import logo from '../assets/logoRincondelLago.jpg';
import Grid from '@mui/material/Grid';
import { motion } from 'framer-motion';
import { useScroll } from '../components/useScroll';
import { servicesAnimations } from '../animation.js';

import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';

export default function BasicStack() {
	const [element, controls] = useScroll();
	return (
		<Box
			ref={element}
			sx={{
				p: '5% 0',
			}}
		>
			<motion.div
				className='home'
				variants={servicesAnimations}
				animate={controls}
				transition={{
					delay: 0.03,
					type: 'tween',
					duration: 0.9,
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

				{/* elemento 2 */}
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
					<Grid
						container
						rowSpacing={1}
						columnSpacing={{ xs: 12, sm: 6, md: 4 }}
					>
						<Grid item xs={6}>
							<ReactPlayer
								borderRadius='3'
								position='relative'
								bottom='5px'
								url='https://youtu.be/N3GwlQdjhjU'
								className='react-player'
								playing
								controls
								loop
								muted
								width='105%'
								height='120%'
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
										color: Colors.primary,
										fontWeight: 'bold',
										mt: 2,
									}}
								>
									Conoce Nuestro Nuevo Proyecto Rincón del Lago
								</Typography>
								<Typography variant='body1' sx={{ mt: 3 }}>
									Estamos en construccion de nuestra nueva urbanizacón, un lugar
									pensado para tu comodidad y confort.
								</Typography>
								<img
									src={logo}
									alt='logo'
									style={{ width: 320, height: 220 }}
								/>
								<Link to='/projects' className="nav-link">
								<Button
									
									variant='contained'
								>
									Ver Más
								</Button>
								</Link>
							</Stack>
						</Grid>
					</Grid>
				</Card>
			</motion.div>
		</Box>
	);
}
