import { Typography } from '@mui/material';
import { Stack } from '@mui/system';
import Box from '@mui/material/Box';
import HeroSlider, { Slide, ButtonsNav, Overlay, Nav } from 'hero-slider';
import home1 from '../assets/casasylotes3.jpeg';
import home2 from '../assets/rincondelLago.jpg';
import home3 from '../assets/casasylotes6.jpeg';
import home4 from '../assets/casasylotes1.jpeg';
import { motion } from 'framer-motion';
import { homeInfoAnimation } from '../animation';
import { Colors } from '/src/config/themeConfig.js';

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
						// width: '100%',
						height: '100%',
						margin: '0 auto',
					}}
				>
					<motion.div
						className='home'
						variants={homeInfoAnimation}
						transition={{ delay: 0.3, duration: 0.6, type: 'tween' }}
					>
						<Box
							sx={{
								backgroundColor: Colors.body_bg,
								textAlign: 'center',
								border: 'none',
								p: '2rem',
								opacity: [0.8, 0.7, 0.8],
							}}
						>
							<Typography
								variant='h3'
								sx={{ fontWeight: 'bold' }}
							>
								Constructura Inmobiliaria-Bienes Raices
							</Typography>
							<Typography variant='h6' sx={{ fontWeight: 'bold' }}>
								Realizamos grandes proyectos en Colombia, con una alta
								valorización en el mercado
							</Typography>
						</Box>
					</motion.div>
				</Stack>
			</Overlay>
			<Slide
				background={{
					backgroundImageSrc: home1,
					backgroundAnimation: 'zoom',
				}}
			/>

			<Slide
				background={{
					backgroundImageSrc: home2,
					backgroundAnimation: 'zoom',
				}}
			/>

			<Slide
				background={{
					backgroundImageSrc: home3,
					backgroundAnimation: 'zoom',
				}}
			/>

			<Slide
				background={{
					backgroundImageSrc: home4,
					backgroundAnimation: 'zoom',
				}}
			/>

			<Nav />
		</HeroSlider>
	);
}
