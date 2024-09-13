import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { Colors } from '../config/themeConfig';
import { Typography, Paper } from '@mui/material';
import { useScroll } from './useScroll';
import { motion } from 'framer-motion';
import { mensajebox } from '../animation';
import {
	ArrowForwardIos as ArrowForwardIosIcon,
	Calculate as CalculateIcon,
	Paid as PaidIcon,
	Star as StarIcon,
} from '@mui/icons-material';
import vendeConNosotros from '/src/assets/vendeconNosotros.jpg';
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import { makeStyles } from 'tss-react/mui';

const Item = styled(Paper)(({ theme }) => ({
	padding: theme.spacing(2),
	textAlign: 'center',
	color: theme.palette.text.secondary,
	height: '100%',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	boxShadow: 'none',
	borderRadius: 0,
}));

const backgroundColors = {
	darkOrange: Colors.info3,
	lightOrange: Colors.info4,
};

const useStyles = makeStyles()(theme => ({
	InfoImage: {
		backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${vendeConNosotros})`,
		height: '270px',
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		position: 'relative',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		color: '#fff',
		fontSize: '2rem',
		opacity: 0.6,
		[theme.breakpoints.down('sm')]: {
			height: '150px',
			fontSize: '1.5rem',
		},
	},
}));

export default function BasicStack() {
	const { classes } = useStyles();
	const [element, controls] = useScroll();

	return (
		<Box
			ref={element}
			sx={{
				p: '10px 0px',
			}}
		>
			<Stack
				sx={{
					width: '100%',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					height: { xs: 'auto', sm: '10vh' },
					textAlign: 'center',
					p: { xs: 2, sm: 7 },
					mb: '0',
					mt: '2rem',
				}}
			>
				<Typography
					variant='h4'
					sx={{
						color: Colors.fondo,
						fontWeight: 500,
						textAlign: 'center',
						fontSize: { xs: '1.5rem', sm: '2rem' },
					}}
				>
					Cuenta con Nosotros
				</Typography>
				<Typography
					variant='h6'
					sx={{
						color: Colors.fondo,
						fontWeight: 300,
						mt: 2,
						textAlign: 'center',
					}}
				>
					En Terranova Inmobiliaria, nos especializamos en conectar a los
					clientes con su oasis urbano perfecto, experimente la emoción de la
					vida urbana con facilidad y un servicio excepcional.
				</Typography>
			</Stack>

			<Box sx={{ width: '100%', mt: '3rem' }}>
				<Grid container sx={{ height: '68vh' }}>
					<Grid item xs={12} sm={6} md={4}>
						<Item
							sx={{
								backgroundColor: backgroundColors.darkOrange,
								color: Colors.body_bg,
							}}
						>
							<CalculateIcon sx={{ fontSize: '3rem' }} />
							<Typography variant='h4' sx={{ fontWeight: 500, mt: 2 }}>
								Calcula tu Cuota
							</Typography>
							<Stack
								direction='row'
								spacing={1}
								alignItems='center'
								sx={{ mt: '3rem', cursor: 'pointer' }}
								onClick={() => (window.location.href = '/calcula-tu-cuota')}
							>
								<Typography variant='body1' sx={{ fontWeight: 500,  }}>
									Ver Más
								</Typography>
								<ArrowForwardIosIcon />
							</Stack>
						</Item>
					</Grid>
					<Grid item xs={12} sm={6} md={4}>
						<Item
							sx={{
								backgroundColor: backgroundColors.lightOrange,
								color: Colors.body_bg,
							}}
						>
							<PaidIcon sx={{ fontSize: '3rem' }} />
							<Typography variant='h4' sx={{ fontWeight: 500, mt: 2 }}>
								Asesoramiento
							</Typography>
							<Stack
								direction='row'
								spacing={1}
								alignItems='center'
								sx={{ mt: '3rem', cursor: 'pointer' }}
								onClick={() => (window.location.href = '/calcula-tu-cuota')}
							>
								<Typography variant='body1' sx={{ fontWeight: 500 }}>
									Ver Más
								</Typography>
								<ArrowForwardIosIcon />
							</Stack>
						</Item>
					</Grid>
					<Grid item xs={12} sm={12} md={4}>
						<Item
							sx={{
								backgroundColor: backgroundColors.darkOrange,
								color: Colors.body_bg,
							}}
						>
							<StarIcon sx={{ fontSize: '3rem' }} />
							<Typography variant='h4' sx={{ fontWeight: 500, mt: 2 }}>
								Valoración de propiedades
							</Typography>
							<Stack
								direction='row'
								spacing={1}
								alignItems='center'
								sx={{ mt: '3rem', cursor: 'pointer' }}
								onClick={() => (window.location.href = '/calcula-tu-cuota')}
							>
								<Typography variant='body1' sx={{ fontWeight: 500 }}>
									Ver Más
								</Typography>
								<ArrowForwardIosIcon />
							</Stack>
						</Item>
					</Grid>
				</Grid>
			</Box>

			<Box
				ref={element}
				className={classes.InfoImage}
				sx={{
					justifyContent: 'center',
					alignItems: 'center',
					p: '0px',
					mt: '-1px',
				}}
			/>
		</Box>
	);
}
