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
import urbanizacion from '../../assets/urbanizacion.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import { useScroll } from '../useScroll';
import { mensajebox } from '../../animation';
import Grid from '@mui/material/Grid';
import { DataUrbanizations } from '../../DataProvider/DataProjects.js';
import { Villa } from '@mui/icons-material/';
import InfoUrbanization from "../projectComponents/InfoUrbanization.jsx"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function ProjectsUrbanization() {
	const [element, controls] = useScroll();

	useEffect(() => {
		AOS.init({ offset: 200, duration: 1000 });
	}, []);

	return (
		<>
			<Parallax
				style={{
					width: '100%',
					height: '100%',
                    opacity:[10],
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
					}}>
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
					<Stack spacing={2}>
						<Typography
							variant='h2'
							sx={{
								color: Colors.primary,
								fontWeight: 'bold',
								mt: 2,
							}}
						>
							Proyectos Urbanísticos en el Valle del Cauca
						</Typography>
					</Stack>
				</motion.div>
			</Box>
			<Box sx={{ flexGrow: 1, padding: '6% ' }}>
				<Container
					sx={{
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<Grid
						item
						xs
						container
						columnSpacing={{ xs: 1, sm: 2, md: 3 }}
						direction='row'
						rowSpacing={4}
					>
						{DataUrbanizations.map(urbanization => (
							<Grid item xs={4}>
								<Card
									elevation={4}
									sx={{
										maxWidth: 345,
                                       
										borderRadius: 4,
									}}
								>
									<CardHeader
										avatar={
											<Avatar sx={{ bgcolor: Colors.info3 }} variant='rounded'>
												<Villa />
											</Avatar>
										}
										title={urbanization.nombre}
										subheader={urbanization.ubicacion}
									/>
									<CardMedia
										component='img'
										sx={{
											height: 194,
											cursor: 'pointer',
											'&:hover': {
												backgroundColor: Colors.muted,
												opacity: [0.7],
											},
										}}
										image={urbanization.imgUrbanizacion}
										alt='imagen'
									/>
                    
									<CardContent>
										<Typography
											variant='subtitle1'
											fontWeight='40px'
										>
											{urbanization.descripcionCorta}
										</Typography>
									</CardContent>
                                    <CardActions>
										<Button size='small'>Ver <ArrowForwardIosIcon sx={{ fontSize: 15 }} /></Button>
									</CardActions>
                      
								</Card>
							</Grid>
						))}
					</Grid>
				</Container>
			</Box>
            <InfoUrbanization/> 

            
		</>
	);
}
