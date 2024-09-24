import {
	Typography,
	Card,
	Box,
	Avatar,
	CardContent,
	Button,
	Stack,
} from '@mui/material';
import { Colors } from '/src/config/themeConfig.js';
import { makeStyles } from 'tss-react/mui';
import { motion } from 'framer-motion';
import { useScroll } from '../useScroll';
import { servicesAnimations } from '../../animation';
import { Prueba } from '/src/DataProvider/Prueba.js';
import { DataProjects } from '/src/DataProvider/DataProjects.js';
import { Link } from 'react-router-dom';
import * as Array from '../../DataProvider/DataProjects';
const useStyles = makeStyles()(theme => {
	return {
		InfoImage: {
			backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/src/assets/infourbanizacion.jpg')`,
			height: '300px',
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
			// [theme.breakpoints.down('sm')]: {
			// 	height: 300,
			// 	fontSize: '3em',
			// },
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
			{/* {DataProjects.map(project => ( */}

			<Box
				ref={element}
				className={classes.InfoImage}
				sx={{
					justifyContent: 'center',
					alignItems: 'center',
					p: '3rem',
				}}
			>
				<CardContent>
					<Typography
						variant='h5'
						sx={{
							color: Colors.dove_gray,
							fontWeight: 400,
							mt: 0.5,
							textAlign: 'center',
						}}
					>
						Contamos con una variedad de proyectos de diseño interior y
						exterior, completados con éxito.
					</Typography>
					{/*  <Link to={`/ProjectDetails/${project.id}`}> */}

					{/* </Link>   */}
					{/* 	{ miArray.Prueba[id - 1].activo === 'v'?
											 (código si es cerdadero) : (código si es falso) } */}
				</CardContent>
			</Box>
			{/* ))}  */}
		</motion.div>
	);
}
