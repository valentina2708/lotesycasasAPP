import { Typography, Card, Avatar, Box, CardContent } from '@mui/material';
import { Colors } from '/src/config/themeConfig.js';
import { makeStyles } from 'tss-react/mui';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Grid from '@mui/material/Grid'; 
import { motion } from 'framer-motion';
import { useScroll } from '../components/useScroll';
import { servicesAnimations } from '../animation.js';
import fondoCredito from '/src/assets/fondoCredito.jpg';

const useStyles = makeStyles()(theme => {
	
	return {
		InfoImage: {
			backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${fondoCredito})`,
			height: '400px',
			backgroundPosition: 'center',
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'cover',
			position: 'relative',
			margin: '2% 0px 10% 0px',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			color: '#fff',
			fontSize: '4rem',

		},
	};
});

export default function BasicStack() {
	const { classes } = useStyles();
	const [element, controls] = useScroll();
	return (
		// <motion.div
		// 		className='home'
		// 		variants={servicesAnimations}
		// 		animate={controls}
		// 		transition={{
		// 			delay: 0.03,
		// 			type: 'tween',
		// 			duration: 0.9,
		// 		}}
		// 	>
		<Box
		ref={element}
			className={classes.InfoImage}
			sx={{
				justifyContent: 'center',
				alignItems: 'center',
				p: '30px 0px',
			}}
		>

			<Card
				elevation={12}
				sx={{
					color: Colors.dove_gray,
					opacity: [0.7, 0.6, 0.7],
					position: 'relative',
					marginInline: {xs:'0', sm:'10rem'},
					borderRadius: 3,
					p:'20px'
				
				}}
			>
				<Grid
					container
					rowSpacing={1}
					columns={{ xs: 6, md: 12}}
					
				>
					<Grid item xs={6} sx={{display: 'flex', alignItems:'center', justifyContent:'center'}}>
						<Avatar
							sx={{
								width: 85,
								height: 80,
								bgcolor: Colors.info3,
								
							}}
						>
							<CurrencyExchangeIcon sx={{ fontSize: 40 }}/>
						</Avatar>
						<CardContent>
							<Typography
								variant='h6'
								sx={{
									color: Colors.fondo,
									fontWeight: 400,
									mt: 2,
									textAlign: 'center',
									
								}}
							>
							Facilidades de pago, descuentos del 3% por pago a contado, pago en efectivo.
							</Typography>
						</CardContent>
					</Grid>

					<Grid item xs={6} sx={{display: 'flex', alignItems:'center', justifyContent:'center'}}>
						<Avatar
							sx={{
								width: 85,
								height: 80,
								bgcolor: Colors.info3,
								
							}}
						>
							<CalendarMonthIcon sx={{ fontSize: 40 }}/>
						</Avatar>
						<CardContent>
							<Typography
								variant='h6'
								sx={{
									color: Colors.fondo,
									fontWeight: 400,
									mt: 2,
									textAlign: 'center',
									
								}}
							>
							Creditos directamente con la constructora sin bancos, cuotas hasta de 5 años.
							</Typography>
						</CardContent>
					</Grid>
				</Grid>
			</Card>
		</Box>
		// </motion.div>
	);
}
