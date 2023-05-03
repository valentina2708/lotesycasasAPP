import { Colors } from '../../config/themeConfig.js';
import { Parallax } from 'react-parallax';
import { useEffect } from 'react';
import {
	Box,
	Typography,
	Stack,
	Card,
	CardMedia,
	CardHeader,
	Container,
	Avatar,
	CardContent,
    CardActions,
    Button
} from '@mui/material';
import house from '../../assets/house.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import { useScroll } from '../useScroll';
import { mensajebox } from '../../animation';
import Grid from '@mui/material/Grid';
import { DataHouses } from '../../DataProvider/DataProjects.js';
import GiteIcon from '@mui/icons-material/Gite';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';

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
							variant='h3'
							sx={{
								color: Colors.primary,
								fontWeight: 'bold',
								mt: 2,
								textAlign: 'center',
								p: '10px',
							}}
						>
							Viviendas con los mejores ambientes dentro de la ciudad de Cali
						</Typography>
					</Stack>
				</motion.div>
			</Box>
			<Box
				container ='true'
					sx={{
						display:'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<Grid
						container
						columns={{ xs: 6, sm: 8, md: 12 }}
						direction='row'
						rowSpacing={4}
					>
						{DataHouses.map(house => (
							<Grid item xs={6} sm={4} key={house.id}>
								<Card
									elevation={4}
									sx={{
										maxWidth: {xs:'none', sm:320, md: 350},
										height: '100%',
										borderRadius: 4,
									}}
								>
									<CardHeader
										avatar={
											<Avatar sx={{ bgcolor: Colors.info3 }} variant='rounded'>
												<GiteIcon />
											</Avatar>
										}
										title={house.nombre}
										subheader={house.ubicacion}
									/>
									<CardMedia
										component='img'
										sx={{
											// height: 194,
											cursor: 'pointer',
											'&:hover': {
												backgroundColor: Colors.muted,
												opacity: [0.7],
											},
										}}
										image={house.imagen}
										alt='imagen'
									/>

									<CardContent>
										<Typography variant='subtitle1' fontWeight='40px'>
											{house.descripcionCorta}
										</Typography>
									</CardContent>
									<CardActions>
										
										
									{house.id === 6 ? (
										<Link to={`/ProjectDetails/${house.id}`}>
										<Button disabled size='small'>Ver <ArrowForwardIosIcon sx={{ fontSize: 15 }} /></Button>
											</Link>
										) : (
											<Button disabled size='small'>
												Ver <ArrowForwardIosIcon sx={{ fontSize: 15 }} />
											</Button>
										)}
									
									</CardActions>
								</Card>
							</Grid>
						))}
					</Grid>
				</Box>
		
		</>
	);
}
