import { Colors } from '../../config/themeConfig.js';
import { Parallax } from 'react-parallax';
import { useEffect } from 'react';
import {
	Box,
	Typography,
	Stack,
	Grid,
	ButtonBase,
	Container,
} from '@mui/material';
import house from '../../assets/house.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import { useScroll } from '../useScroll';
import { mensajebox } from '../../animation';
import { DataHouses } from '../../DataProvider/DataProjects.js';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';

const ImageButton = styled(ButtonBase)(({ theme }) => ({
	position: 'relative',
	height: 200,
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',

	[theme.breakpoints.down('sm')]: {
		width: '100% !important',
		height: 100,
	},
	'&:hover, &.Mui-focusVisible': {
		zIndex: 1,
		'& .MuiImageBackdrop-root': {
			opacity: 0.15,
		},
		'& .MuiImageMarked-root': {
			opacity: 0,
		},
		'& .MuiTypography-root': {
			border: '4px solid currentColor',
		},
	},
}));

const ImageSrc = styled('span')({
	position: 'absolute',
	left: 0,
	right: 0,
	top: 0,
	bottom: 0,
	backgroundSize: 'cover',
	backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
	position: 'absolute',
	left: 0,
	right: 0,
	top: 0,
	bottom: 0,
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
	position: 'absolute',
	left: 0,
	right: 0,
	top: 0,
	bottom: 0,
	backgroundColor: theme.palette.common.black,
	opacity: 0.4,
	transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
	height: 3,
	width: 18,
	backgroundColor: theme.palette.common.white,
	position: 'absolute',
	bottom: -2,
	left: 'calc(50% - 9px)',
	transition: theme.transitions.create('opacity'),
}));

export default function ProjectsHouses() {
	const [element, controls] = useScroll();

	useEffect(() => {
		AOS.init({ offset: 200, duration: 1000 });
	}, []);

	return (
		<>
			<Parallax
				style={{
					width: '100%',
					height: '80%',
				}}
				bgImage={house}
				strength={200}
			>
				<Box
					data-aos='zoom-in-down'
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						width: 'auto',
						height: '95vh',
					}}
				>
					<Box
						sx={{
							borderRadius: '20px',
							marginLeft: '60px',
							marginRight: '60px',
						}}
					>
						<Box
							sx={{
								display: 'flow',
								padding: '0px',
								width: '100%',
							}}
						>
							<Typography
								variant='h2'
								sx={{
									opacity: [90],
									color: Colors.info3,
									fontWeight: 'bold',
									mt: 2,
									textAlign: 'center',
									paddingTop: '10px',
									margin: '20px',
								}}
							>
								Casas
							</Typography>
						</Box>
					</Box>
				</Box>
			</Parallax>

			<Box
				sx={{
					width: '100%',
					border: 'none',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					p: '5% 0',
				}}
				ref={element}
			>
				<motion.div
					className='milestone'
					variants={mensajebox}
					animate={controls}
					transition={{
						delay: 0.03,
						type: 'tween',
						duration: 0.8,
					}}
				>
					<Stack spacing={2}>
						<Typography
							variant='h4'
							sx={{
								color: Colors.info3,
								fontWeight: 'bold',
								mt: 2,
								textAlign: 'center',
								p: '10px',
							}}
						>
							Viviendas con los mejores ambientes dentro de la ciudad
						</Typography>
					</Stack>
				</motion.div>
			</Box>
			<Box sx={{ flexGrow: 1, paddingInline: { xs: '15%', sm: '0%' } }}>
				<Container
					sx={{
						width: '100%',
						justifyContent: 'center',
						alignContent: 'center',
						paddingLeft: { xs: '0rem', sm: '5rem' },
					}}
				>
					<Grid
						container
						spacing={2}
						sx={{
							justifyContent: 'center',
							alignItems: 'center',
							width: '100%',
							p: 3,
						}}
					>
						{DataHouses.map(house => (
							<Grid
								item
								xs={12}
								sm={6}
								md={4}
								key={house.nombre}
								sx={{
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
								}}
							>
								<ImageButton
									focusRipple
									style={{
										width: '100%',
										height: 300,
									}}
								>
									<ImageSrc
										style={{ backgroundImage: `url(${house.imagen})` }}
									/>
									<ImageBackdrop className='MuiImageBackdrop-root' />
									<Image>
										<Typography
											component='span'
											variant='subtitle1'
											color='inherit'
											sx={{
												position: 'relative',
												p: 2,
												textAlign: 'center',
												fontSize: '1.3rem',
											}}
										>
											{house.nombre}
											<ImageMarked className='MuiImageMarked-root' />
										</Typography>
									</Image>
								</ImageButton>
							</Grid>
						))}
					</Grid>
				</Container>
			</Box>
		</>
	);
}
