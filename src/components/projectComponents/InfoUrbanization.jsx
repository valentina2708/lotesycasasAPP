import Box from '@mui/material/Box';
import { Typography, Card, Avatar, CardContent, Button } from '@mui/material';
import { Colors } from '/src/config/themeConfig.js';
import { makeStyles } from 'tss-react/mui';
import { motion } from 'framer-motion';
import { useScroll } from '../useScroll';
import { servicesAnimations } from '../../animation';

const useStyles = makeStyles()(theme => {
	return {
		InfoImage: {
			backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/src/assets/infourbanizacion.jpg')`,
			height: '550px',
			backgroundPosition: 'center',
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'cover',
			position: 'relative',
			margin: '5% 0px 10% 0px',
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
	const [element, controls] = useScroll();
	return (
		<motion.div
			className='home'
			variants={servicesAnimations}
			animate={controls}
			transition={{
				delay: 0.03,
				type: 'tween',
				duration: 0.9,
			}}
		>
			<Box
				ref={element}
				className={classes.InfoImage}
				sx={{
					justifyContent: 'center',
					alignItems: 'center',
					p: '20px 0px',
				}}
			>
				<Card
					elevation={12}
					sx={{
						color: Colors.dove_gray,
						opacity: [0.7, 0.6, 0.7],
						position: 'relative',
						bottom: '5px',
						width: '40%',
						height: 350,
						borderRadius: 3,
						left: '30px',
						p: '20px',
					}}
				>
					<Avatar
						alt='logo rincon del lago'
						src='/src/assets/logoRincon.png'
						sx={{
							width: 190,
							height: 130,
							bgcolor: Colors.info3,
							position: 'relative',
							left: '35%',
						}}
					/>

					<CardContent>
						<Typography
							variant='h5'
							sx={{
								color: Colors.primary,
								fontWeight: 500,
								mt: 0.5,
								textAlign: 'center',
							}}
						>
							Estamos en construcción del nuevo proyecto Rincón del Lago, en el
							encontraras el hogar de tus sueños, ven, conocelo y haz parte de
							nuestra familia.
						</Typography>
                        <Button sx={{
									position: 'relative',
                                    mt:2,
                                    left:'41%',
									p: '10px',
                                    background: Colors.info3
								}} 
                                variant='contained'
                                >Ver Más</Button>
					</CardContent>
				</Card>
			</Box>
		</motion.div>
	);
}
