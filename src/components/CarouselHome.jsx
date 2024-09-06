import React from 'react';
import { AppBar, Toolbar, Box, Typography, Stack, Button } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade'; // Importa el CSS para el efecto de desvanecimiento
import {
	Pagination,
	Autoplay,
	EffectFade,
	EffectCoverflow,
} from 'swiper/modules';
import home1 from '../assets/home/home.jpg';
import home2 from '../assets/home/home2.jpeg';
import home3 from '../assets/home/home3.jpeg';
import home4 from '../assets/home/home4.jpeg';
import { Colors } from '/src/config/themeConfig.js';

export default function EnhancedCarousel() {
	return (
		<AppBar
			position='static'
			sx={{
				backgroundColor: 'transparent',
				boxShadow: 'none',
				width: '100%',
				height: '100vh',
				overflow: 'hidden',
				p: 0,
				m: 0,
			}}
		>
			<Toolbar
				disableGutters
				sx={{
					p: 0,
					width: '100%',
					height: '100vh',
				}}
			>
				<Swiper
					modules={[Pagination, Autoplay, EffectCoverflow]}
					pagination={{ clickable: true, dynamicBullets: true }}
					autoplay={{ delay: 4000, disableOnInteraction: false }}
					loop
					effect='slide'
					style={{ width: '100%', height: '100%' }}
				>
					{[home1, home2, home3, home4].map((image, index) => (
						<SwiperSlide key={index}>
							<Box
								sx={{
									width: '100%',
									height: '100vh',
									position: 'relative',
									overflow: 'hidden',
									m: 0,
									p: 0,
								}}
							>
								<Box
									component='img'
									src={image}
									alt={`Slide ${index + 1}`}
									sx={{
										width: '100%',
										height: '100vh',
										objectFit: 'cover',
										objectPosition: 'center',
										display: 'block',
										transition: 'transform 0.5s ease-in-out',
									}}
								/>
								<Box
									sx={{
										position: 'absolute',
										top: '50%',
										left: '50%',
										transform: 'translate(-50%, -50%)',
										color: 'white',
										textAlign: 'center',
										p: 2,

										borderRadius: 2,
									}}
								>
									<Typography
										variant='h2'
										sx={{ fontWeight: '700', mb: 1, color: Colors.info3 }}
									>
										Terranova
									</Typography>
									<Typography
										variant='h6'
										sx={{
											fontWeight: '400',
											mt: '0.5rem',
											color: Colors.fondo,
										}}
									>
										Constructora Inmobiliaria de Casas y Lotes
									</Typography>
								</Box>
							</Box>
							<Stack
								direction='row'
								spacing={3}
								justifyContent='center'
								margin={3}
							>
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
						</SwiperSlide>
					))}
				</Swiper>
			</Toolbar>
		</AppBar>
	);
}
