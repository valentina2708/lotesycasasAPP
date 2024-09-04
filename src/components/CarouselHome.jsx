import { Typography } from '@mui/material';
import { Stack } from '@mui/system';
import Box from '@mui/material/Box';
import HeroSlider, { Slide, ButtonsNav, Overlay, Nav } from 'hero-slider';
import home1 from '../assets/home/home.jpg';
import home2 from '../assets/home/home2.jpeg';
import home3 from '../assets/home/home3.jpeg';
import home4 from '../assets/home/home4.jpeg';
import { motion } from 'framer-motion';
import { homeInfoAnimation } from '../animation';
import { Colors } from '/src/config/themeConfig.js';
import { Opacity } from '@mui/icons-material';
import Button from '@mui/material/Button';

export default function BlendModeSlider() {
	return (
		<HeroSlider
			orientation='horizontal'
			initialSlide={1}
			settings={{
				slidingDuration: 500,
				slidingDelay: 100,
				shouldAutoplay: true,
				shouldDisplayButtons: true,
				autoplayDuration: 5000,
				height: '90vmin',
			}}
			elevation='static'
			height='100vh'
			autoplay
			animations={{
				slidingAnimation: 'fade',
			}}
		>
			<Overlay>
				<Stack
					sx={{
						display: 'flex',
						flexFlow: 'column',
						alignItems: 'center',
						justifyContent: 'center',
						//width: '50%',
						height: '100%',
						m: '0 auto',
					}}
				>
					<motion.div
						className='home'
						variants={homeInfoAnimation}
						transition={{ delay: 0.3, duration: 0.6, type: 'tween' }}
					>
						<Box
							sx={{
								textAlign: 'center',
								border: 'none',
								p: '2rem',
							}}
						>
							<Typography
								variant='h2'
								sx={{ fontWeight: '700', color: Colors.info2 }}
							>
								TERRANOVA
							</Typography>
							<Typography variant='h6' sx={{ fontWeight: '400', mt: '0.5rem' }}>
								Constructora Inmobiliaria de Casas y Lotes
							</Typography>
						</Box>
						<Stack direction='row' spacing={3} justifyContent='center' margin={3}>
							<Button
								variant='contained'
								size='large'
								sx={{
									borderRadius: '20px',
									backgroundColor: Colors.info2,
									':hover': {
										opacity: [0.8, 0.6, 0.8],
										backgroundColor: Colors.info2,
									},
								}}
							>
								Servicios
							</Button>
							<Button
								variant='contained'
								size='large'
								sx={{
									borderRadius: '20px',
									backgroundColor: Colors.secondary,
									color: 'black',
									':hover': {
										opacity: [0.8, 0.6, 0.8],

										backgroundColor: Colors.secondary,
									},
								}}
							>
								Ver Más
							</Button>
						</Stack>
					</motion.div>
				</Stack>
			</Overlay>
			<Slide
				background={{
					backgroundImageSrc: home1,
				}}
			/>

			<Slide
				background={{
					backgroundImageSrc: home2,
				}}
			/>

			<Slide
				background={{
					backgroundImageSrc: home3,
				}}
			/>

			<Slide
				background={{
					backgroundImageSrc: home4,
				}}
			/>

			<Nav />
		</HeroSlider>
	);
}
