import { Colors } from '../../config/themeConfig.js';
import { Parallax } from 'react-parallax';
import { useEffect, useState } from 'react';
import {
	Box,
	Typography,
	Stack,
	Grid,
	ButtonBase,
	Stepper,
	Step,
	StepLabel,
	Container,
	StepContent,
} from '@mui/material';
import urbanizacion from '../../assets/urbanizacion.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import { useScroll } from '../useScroll';
import { mensajebox } from '../../animation';
import { styled } from '@mui/material/styles';
import { DataUrbanizations } from '../../DataProvider/DataProjects.js';
import InfoUrbanization from '../projectComponents/InfoUrbanization.jsx';
import { DataProjects } from '/src/DataProvider/DataProjects.js';
import { Link } from 'react-router-dom';
import CalculateFee from '/src/components/CalculateFee';

const steps = ['Planificación', 'Diseño', 'Construcción'];

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

export default function ProjectsUrbanization() {
	const [element, controls] = useScroll();
	const [activeStep, setActiveStep] = useState(0);

	useEffect(() => {
		AOS.init({ duration: 1000 });

		const handleScroll = () => {
			const scrollPosition = window.scrollY + window.innerHeight / 2; // Posición de scroll
			const windowHeight = window.innerHeight; // Altura de la ventana

			// Calculamos cuándo se activa cada paso basándonos en la posición de scroll
			if (scrollPosition < windowHeight) {
				setActiveStep(0);
			} else if (
				scrollPosition >= windowHeight &&
				scrollPosition < windowHeight * 2
			) {
				setActiveStep(1);
			} else if (scrollPosition >= windowHeight * 2) {
				setActiveStep(2);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<>
			<Parallax
				style={{
					width: '100%',
					height: '100%',
					opacity: [10],
				}}
				bgImage={urbanizacion}
				strength={300}
			>
				<Box
					container
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
								display: 'flex',
								padding: '0px',
								width: '100%',
							}}
						>
							<Typography
								variant='h4'
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
								Urbanizaciones
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
					<Stack spacing={2} ml={{ xs: '1rem', sm: '2rem', md: '0' }}>
						<Typography
							variant='h4'
							sx={{
								color: Colors.fondo,
								fontWeight: 'bold',
								mt: 2,
							}}
						>
							Proyectos urbanísticos en la ciudad blanca
						</Typography>
					</Stack>
				</motion.div>
			</Box>
			{/* <CalculateFee /> */}

			<Container sx={{ py: 8, display: 'flex', flexDirection: 'row' }}>
				{/* Stepper Vertical */}
				<Stepper
					activeStep={activeStep}
					orientation='vertical'
					sx={{ flex: 1, mr: 4 }} // El Stepper se mostrará verticalmente y ocupará espacio a la izquierda
				>
					{steps.map((label, index) => (
						<Step key={label}>
							<StepLabel>{label}</StepLabel>
						</Step>
					))}
				</Stepper>

				{/* Contenido dividido en imagen y texto */}
				<Grid container spacing={3} sx={{ flex: 3, alignItems: 'center' }}>
					{/* Imagen */}
					<Grid item xs={12} md={6} data-aos='fade-right'>
						<Box
							component='img'
							sx={{
								width: '100%',
								height: 'auto',
								borderRadius: 2,
								boxShadow: 3,
							}}
							src={urbanizacion} // Reemplaza por la ruta de tu imagen
							alt='Urbanización'
						/>
					</Grid>

					{/* Texto */}
					<Grid item xs={12} md={6} data-aos='fade-left'>
						<Box>
							<Typography variant='h4' fontWeight='bold' gutterBottom>
								{activeStep === 0 && 'Planificación del proyecto'}
								{activeStep === 1 && 'Diseño de la infraestructura'}
								{activeStep === 2 && 'Construcción de los espacios'}
							</Typography>
							<Typography variant='body1'>
								{activeStep === 0 &&
									'Durante esta fase, trabajamos en la planificación meticulosa de cada aspecto del proyecto.'}
								{activeStep === 1 &&
									'En el diseño, creamos planos detallados que maximizan el uso eficiente del espacio.'}
								{activeStep === 2 &&
									'La construcción incluye tanto la infraestructura como los detalles arquitectónicos.'}
							</Typography>
						</Box>
					</Grid>
				</Grid>
			</Container>

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
				{DataProjects.map(urbanization => (
					<Grid
						item
						xs={12}
						sm={6}
						md={4}
						key={urbanization.nombre}
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
								style={{ backgroundImage: `url(${urbanization.imagen})` }}
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
										pb: theme => 'calc(${theme.spacing(1)} + 6px)',
									}}
								>
									{urbanization.nombre}
									<ImageMarked className='MuiImageMarked-root' />
								</Typography>
							</Image>
						</ImageButton>
					</Grid>
				))}
			</Grid>

			<InfoUrbanization />
		</>
	);
}
