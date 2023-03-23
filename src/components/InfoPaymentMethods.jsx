import Box from '@mui/material/Box';
import { Typography, Card, Avatar, Grid, CardContent } from '@mui/material';
import { Colors } from '/src/config/themeConfig.js';
import { makeStyles } from 'tss-react/mui';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const useStyles = makeStyles()(theme => {
	return {
		InfoImage: {
			backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/src/assets/fondoCredito.jpg')`,
			height: '500px',
			backgroundPosition: 'center',
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'cover',
			position: 'relative',
			margin: '10% 0px 10% 0px',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			color: '#fff',
			fontSize: '4rem',
			[theme.breakpoints.down('sm')]: {
				height: 300,
				fontSize: '3em',
			},
		},
	};
});

export default function BasicStack() {
	const { classes } = useStyles();
	return (
		<Box
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
					bottom: '5px',
					width: '55%',
					height: 220,
					borderRadius: 3,
					left: '30px',
					p:'20px'
				
				}}
			>
				<Grid
					container
					rowSpacing={1}
					columnSpacing={{ xs: 12, sm: 6, md: 4 }}
					
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
								variant='h5'
								sx={{
									color: Colors.primary,
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
								variant='h5'
								sx={{
									color: Colors.primary,
									fontWeight: 400,
									mt: 2,
									textAlign: 'center',
									
								}}
							>
							Creditos directamente con la constructora sin necesidad de bancos, cuotas hasta de 5 años.
							</Typography>
						</CardContent>
					</Grid>
				</Grid>
			</Card>
		</Box>
	);
}
