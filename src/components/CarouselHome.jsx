import { Typography } from '@mui/material';
import { Stack } from '@mui/system';
import Box from '@mui/material/Box';
import HeroSlider, { Slide, ButtonsNav, SideNav, Overlay } from 'hero-slider';
import home1 from '../assets/casaCarru3.jpg';
import home2 from '../assets/casas.jpg';
import home3 from '../assets/casaCarru2.jpg';
import home4 from '../assets/casaCarru.jpg';

import { Colors } from '/src/config/themeConfig.js';

export default function BlendModeSlider() {
	return (
		<HeroSlider
		elevation='static'
			height='100vh'
			autoplay
			animations={{
				slidingAnimation: 'fade',
			}}
			controller={{
				initialSlide: 1,
				slidingDuration: 500,
				slidingDelay: 100,
				onSliding: nextSlide =>
					console.debug('onSliding(nextSlide): ', nextSlide),
				onBeforeSliding: (previousSlide, nextSlide) =>
					console.debug(
						'onBeforeSliding(previousSlide, nextSlide): ',
						previousSlide,
						nextSlide
					),
				onAfterSliding: nextSlide =>
					console.debug('onAfterSliding(nextSlide): ', nextSlide),
			}}
		>
			<Overlay>
				<Stack
					sx={{
						display: 'flex',
						flexFlow: 'column',
						alignItems: 'center',
						justifyContent: 'center',
						width: '100%',
						height: '100%',
						margin: '0 auto',
					}}
				>
					<Box
						sx={{
							backgroundColor: Colors.body_bg,
							textAlign: 'center',
							border: 'none',
							opacity: [0.6, 0.7, 0.6],
						}}
					>
						<Typography
							variant='h2'
							sx={{ margin: '0 36px', fontWeight: 'bold' }}
						>
							Constructura Inmobiliaria-Bienes Raices
						</Typography>
						<Typography variant='h6' sx={{ fontWeight: 'bold' }}>
							Realizamos grandes proyectos en Colombia y Estados Unidos, con una
							alta valorización en el mercado
						</Typography>
					</Box>
				</Stack>
			</Overlay>
			<Slide
				shouldRenderMask
				label=''
				background={{
					backgroundImageBlendMode: 'luminosity',
					maskBackgroundBlendMode: 'luminosity',
					backgroundImageSrc: home1,
				}}
			/>

			<Slide
				shouldRenderMask
				label=''
				background={{
					backgroundImageBlendMode: 'luminosity',
					backgroundImageSrc: home2,
					maskBackgroundBlendMode: 'luminosity',
				}}
			/>

			<Slide
				shouldRenderMask
				label=''
				background={{
					backgroundImageBlendMode: 'luminosity',
					backgroundImageSrc: home3,
					maskBackgroundBlendMode: 'luminosity',
				}}
			/>

			<Slide
				shouldRenderMask
				label=''
				background={{
					backgroundImageSrc: home4,
					backgroundImageBlendMode: 'luminosity',
					maskBackgroundBlendMode: 'luminosity',
				}}
			/>
			<ButtonsNav />
		</HeroSlider>
	);
}
