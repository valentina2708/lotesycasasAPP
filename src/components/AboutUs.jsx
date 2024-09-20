import {
	Box,
	Typography,
	Card,
	CardContent,
	Avatar,
	IconButton,
	Grid
} from '@mui/material';
import { styled } from '@mui/material/styles';

import { makeStyles } from 'tss-react/mui';
import { Colors } from '../config/themeConfig.js';
import { Paper } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Parallax } from 'react-parallax';
import { motion } from 'framer-motion';
import { useScroll } from '../components/useScroll';
import { servicesAnimations } from '../animation.js';
import Nosotros1 from '../assets/nosotros1.jpg';
import logoEmpresa1 from '../assets/logoem1.png';
import logoEmpresa2 from '../assets/logo2em.png';
import logoEmpresa3 from '../assets/logo3em.png';
import logoEmpresa4 from '../assets/logo4em.png';
import logoEmpresa5 from '../assets/logo5em.png';
import logoEmpresa6 from '../assets/logo6em.png';
import logoEmpresa7 from '../assets/logo7em.png';
import logoEmpresa8 from '../assets/logo8em.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import persona1 from '../assets/persona1.jpg';
import persona2 from '../assets/persona2.jpg';
import persona3 from '../assets/persona3.jpeg';

const useStyles = makeStyles()(theme => ({
	companyLogo: {
		height: '28vh',
		width: 'auto',
		objectFit: 'contain',
		opacity: 0.7,
		transition: 'opacity 0.3s ease',
		'&:hover': {
			opacity: 1,
		},
	},
}));

const Item = styled(Paper)(({ theme }) => ({
	padding: theme.spacing(2),
	textAlign: 'center',
	color: theme.palette.text.secondary,
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	boxShadow: 'none',
	borderRadius: 0,
}));

const ItemBox = styled(Paper)(({ theme }) => ({
	padding: theme.spacing(2),
	textAlign: 'center',
	height: '100%',

	backgroundColor: Colors.info3,
	boxShadow: 'none',
	borderRadius: 0,
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
	width: theme.spacing(12),
	height: theme.spacing(12),
	margin: 'auto',
}));

const advisors = [
	{
		name: 'Juan Pérez',
		position: 'Gerente de Ventas',
		avatarSrc: persona1,
	},
	{
		name: 'María López',
		position: 'Asesora Comercial',
		avatarSrc: persona2,
	},
	{
		name: 'Carlos García',
		position: 'Coordinador de Proyectos',
		avatarSrc: persona3,
	},
];

export default function AboutUs() {
	useEffect(() => {
		AOS.init({ offset: 200, duration: 1000 });
	}, []);
	const { classes } = useStyles();
	const [element, controls] = useScroll();

	return (
		<>
			<Parallax
				style={{
					width: '100%',
					height: '100%',
				}}
				bgImage={Nosotros1}
				strength={300}
			>
				<Box
					container
					data-aos='zoom-in-down'
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						width: '100%',
						height: '75vh',
						margin: 0,
					}}
				>
					<Box>
						<Typography
							variant='h2'
							sx={{
								opacity: [90],
								color: Colors.info3,
								fontWeight: 'bold',
								mt: 2,
								textAlign: 'center',
								paddingTop: '10px',
							}}
						>
							Nosotros
						</Typography>
					</Box>
				</Box>
			</Parallax>

			<Box 	 sx={{ flexGrow: 1, width: '100%' }}>
				<Grid container sx={{ height: { md: '40vh' } }}>
					<Grid item xs={12} md={4}>
						<ItemBox>
							<Typography
								variant='h3'
								sx={{
									fontWeight: 600,
									mt:'1rem',
									color: Colors.dove_gray,
									textAlign: { xs: 'center', md: 'left' },
									mb: { xs: '1rem', md: '100px' },
									ml: '1rem',
								}}
							>
								Una Historia con experiencia
							</Typography>
						</ItemBox>
					</Grid>

					<Grid item xs={12} md={8}>
						<ItemBox>
							<Typography
								variant='body1'
								sx={{
									fontWeight: 300,
									mt: 2,
									color: Colors.body_bg,
									textAlign: { xs: 'center', md: 'left' },
									fontSize: { xs: '0.9rem', md: '1rem' },
								}}
							>
								Terranova es una inmobiliaria de construcción fundada en 2008,
								somos una de las empresas de construcción más exitosas del
								mercado. Hemos realizado más de 20 proyectos grandes y pequeños,
								entre construcción de casas, urbanizaciones, apartamentos y más.
								<br />
								<br />
								Con nuestro dedicado equipo de trabajo entre diseñadores,
								gerentes de proyectos y constructores, trabajamos duro en cada
								uno de los proyectos. Siempre nos aseguramos de que cada uno de
								ellos sean construidos y diseñados de la manera más adecuada,
								con los estándares de calidad para cumplir las necesidades de
								nuestros clientes.
							</Typography>
						</ItemBox>
					</Grid>
				</Grid>
			</Box>

		
				<Box  ref={element} sx={{ width: '100%', mt: '4rem' }}>
				<motion.div
				className='clients'
				variants={servicesAnimations}
				animate={controls}
				transition={{
					delay: 0.02,
					type: 'tween',
					duration: 0.9,
				}}
			>
					<Typography
						variant='h4'
						sx={{
							textAlign: 'center',
							mb: 4,
							fontWeight: 600,
							color: Colors.fondo,
						}}
					>
						Nuestros Clientes
					</Typography>
					<Grid container spacing={2} justifyContent='center'>
						{[
							logoEmpresa1,
							logoEmpresa2,
							logoEmpresa3,
							logoEmpresa4,
							logoEmpresa5,
							logoEmpresa6,
							logoEmpresa7,
							logoEmpresa8,
						].map((logo, index) => (
							<Grid item xs={6} sm={4} md={3} key={index}>
								<Item>
									<img
										src={logo}
										alt={`Empresa ${index + 1}`}
										className={classes.companyLogo}
									/>
								</Item>
							</Grid>
						))}
					</Grid>
					</motion.div>
				</Box>
	

			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					margin: '0 auto',
					mt: '5rem',
				}}
			>
				<Typography
					variant='h4'
					sx={{
						textAlign: 'center',
						mb: 4,
						fontWeight: 600,
						color: Colors.fondo,
					}}
				>
					Asesores
				</Typography>
				<Grid container spacing={4} justifyContent='center' sx={{ mt: '2rem' }}>
					{advisors.slice(0, 2).map((advisor, index) => (
						<Grid item xs={12} sm={6} key={index}>
							<Card
								sx={{
									boxShadow: 5,
									textAlign: 'center',
									borderRadius: 2,
									height: '45vh',
									width: '400px',
									margin: '0 auto',
								}}
							>
								<CardContent>
									<StyledAvatar alt={advisor.name} src={advisor.avatarSrc} />
									<Typography variant='h6' sx={{ mt: 2, fontWeight: 'bold' }}>
										{advisor.name}
									</Typography>
									<Typography variant='body2'>{advisor.position}</Typography>
									<Box
										sx={{
											display: 'flex',
											justifyContent: 'center',
											gap: 2,
											mt: 2,
										}}
									>
										<IconButton sx={{ color: Colors.fondo }}>
											<FacebookIcon />
										</IconButton>
										<IconButton sx={{ color: Colors.fondo }}>
											<TwitterIcon />
										</IconButton>
										<IconButton sx={{ color: Colors.fondo }}>
											<LinkedInIcon />
										</IconButton>
									</Box>
								</CardContent>
							</Card>
						</Grid>
					))}
				</Grid>

				<Box
					sx={{
						mt: '4rem',
						width: '100%',
						display: 'flex',
						justifyContent: 'center',
					}}
				>
					<Grid item xs={12} sm={6}>
						<Card
							sx={{
								boxShadow: 5,
								textAlign: 'center',
								height: '45vh',
								width: '400px',
								margin: '0 auto',
							}}
						>
							<CardContent>
								<StyledAvatar
									alt={advisors[2].name}
									src={advisors[2].avatarSrc}
								/>
								<Typography variant='h6' sx={{ mt: 2, fontWeight: 'bold' }}>
									{advisors[2].name}
								</Typography>
								<Typography variant='body2' color='text.secondary'>
									{advisors[2].position}
								</Typography>
								<Box
									sx={{
										display: 'flex',
										justifyContent: 'center',
										gap: 2,
										mt: 2,
									}}
								>
									<IconButton>
										<FacebookIcon sx={{ color: Colors.fondo }} />
									</IconButton>
									<IconButton sx={{ color: Colors.fondo }}>
										<TwitterIcon />
									</IconButton>
									<IconButton>
										<LinkedInIcon sx={{ color: Colors.fondo }} />
									</IconButton>
								</Box>
							</CardContent>
						</Card>
					</Grid>
				</Box>
			</Box>
		</>
	);
}
