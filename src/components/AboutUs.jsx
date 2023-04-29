import {
	Box,
	Typography,
} from '@mui/material';
import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Mision from '../assets/mision.png';
import Vision from '../assets/vision.png';
import Filosofia from '../assets/filosofia.png';
import { Colors } from '../config/themeConfig.js';
import { Paper } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Parallax} from 'react-parallax';
import Nosotros1 from '../assets/nosotros1.jpg';
import Nosotros1sx from '../assets/nosotros1sx.jpg';
import Nosotros2 from '../assets/nosotros2.jpg';
import NewProjectInfo from '../components/NewProjectInfo';

export default function AboutUs() {
	useEffect(() => {
		AOS.init({ offset: 200, duration: 1000 });
	}, []);


	return (
		<Grid container sx={{marginTop:'99px' }}>

			
			<Box sx={{ width: '100%',
						height: '100%',display: { xs: 'none', sm: 'none', md: 'block', xl: 'block' } }}>
			
			<Parallax
					style={{
						width: '100%',
						height: '100%',
						opacity: [10],
					}}
					bgImage={Nosotros1}
					strength={0}
				>
					<Box
						container
						data-aos='zoom-in-down'
						sx={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							width: '100%',
							height: '83vh',

						}}>
						<Box
							sx={{
							
								marginLeft: '60px',
								marginRight: '60px',
							}}
						>
							<Box
								sx={{
									
									
									width: '100%',
									
								}}
							>
								<Typography
								variant='h2'
								sx={{
									opacity: [90],
									color: '#A15600',
									fontWeight: 'bold',
									mt: 2,
									textAlign: 'center',
									paddingTop: '10px',
									margin: '20px',
								}}
							>
									Nosostros
							</Typography>

								
							</Box>
						</Box>
					</Box>
				</Parallax>
			</Box>

			<Box sx={{ display: { xs: 'block', sm: 'none', md: 'none', xl: 'none' } }}>

				<Parallax
					style={{
						width: '100%',
						height: '100%',
						opacity: [10],
					}}
					bgImage={Nosotros1}
					strength={100}
				>
					<Box
						container
						data-aos='zoom-in-down'
						sx={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							width: '100%',
							height: '40vh',

						}}>
						<Box
							sx={{
							
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
									Nosotros
								</Typography>
							</Box>
						</Box>
					</Box>
				</Parallax>

			</Box>
			
			<Grid
				Container
				sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					height: 'auto',
					width: '100%',
					
				}}
			>
				<Grid
					container
					data-aos='fade-up'
					data-aos-duration='1000'

					xs={12}
					sm={12}
					md={12}
					lg={12} sx={{}}
				>
					<Box
						sx={{
							display: 'flow',
							color: '#A15600',
							fontWeight: 'bold',
							
							textAlign: 'center',
							minHeight: '200px',
							width: '100%',
							
							marginTop: '40px',
							marginBottom:'40px',
							padding: '10px',

						}}
					>
						<Typography
							variant='h4'
							sx={{
								color: '#A15600',
								fontWeight: 'bold',
								mt: 2,
								textAlign: 'center',
								padding: '10px',
							}}
						>
							Casas & Lotes
						</Typography>
						<Typography
							variant='h6'
							sx={{
								color: 'black',
								fontWeight: 'bold',
								mt: 2,
								textAlign: 'center',
								padding: '10px',
							}}
						>
							Somos constructores con 15 años de experiencia en el Valle del
							Cauca, tiempo en el cual desarrollamos proyectos habitacionales
							para vivir al máximo en familia, asegurando un patrimonio de alta
							valorización para el presente y el futuro.
						</Typography>
					</Box>
				</Grid>
			</Grid>

			<br />
			<br />

			<Parallax bgImage={Nosotros2} strength={600}>
				<Grid container sx={{}}>

					<Grid item
						xs={12}
						sm={12}
						md={12}
						lg={12}
						sx={{
							width: '100%',
							height: '100%',
							display: 'flex',
							padding: '20px',
							
						}}>



						<Grid
							container
							data-aos='fade-up'
							data-aos-duration='2000'
							sx={{
								width: '100%',
								height: '100%',
																
								margin: 'auto'
							}}
						>
							<Grid
								item
								xs={12}
								sm={12}
								md={4}
								lg={4}
								sx={{
									width: '100%',
									height: '100%',
									display: 'flex',
									padding: '20px',
									
									alignContent:'center',
									justifyContent:'center'
								}}
							>
								<Box
									sx={{
										textAlign: 'center',
										backgroundColor: '#f3f6f9',
										opacity: [0.7],
										borderRadius: 10,
										margin: '10px',
										width: '100%',
										height: '100%',
										padding: '10px',
										minHeight: '65vh',
										
									}}
								>
									<Box
										data-aos='fade-right'
										sx={{
											width: '300px',
											height: '200px',
											marginLeft: 'auto',
											marginRight: 'auto',
											marginBottom: '10px',
										}}
									>
										<img width={'100%'} height={'100%'} src={Mision} />
									</Box>
									<Box data-aos='fade-right'>
										<Box
										>
											<Typography
												variant='h3'
												sx={{
													color: '#A15600',
													fontWeight: 'bold',
													textAlign: 'center',

												}}
											>
												Misión
											</Typography>
										</Box>
										<Box
										>
											<Typography
												variant='body1'
												sx={{
													color: 'black',
													fontWeight: 'bold',
													textAlign: 'center',
													padding: '10px',
												}}
											>
												Construimos para vivir con total calidad, seguridad,
												confort en los mejores ambientes del Valle del Cauca.
											</Typography>
										</Box>
									</Box>
								</Box>
							</Grid>

							<Grid
								item
								xs={12}
								sm={12}
								md={4}
								lg={4}
								sx={{
									width: '100%',
									height: '100%',
									display: 'flex',
									padding: '20px',
									
									alignContent:'center',
									justifyContent:'center'
								}}
							>
								<Box
									sx={{
										textAlign: 'center',
										backgroundColor: '#f3f6f9',
										opacity: [0.7],
										borderRadius: 10,
										margin: '10px',
										width: '100%',
										height: '100%',
										padding: '10px',
										minHeight: '65vh',
									}}
								>
									<Box
										data-aos='fade-up'
										sx={{
											width: '300px',
											height: '200px',
											marginLeft: 'auto',
											marginRight: 'auto',
											marginBottom: '10px',
										}}
									>
										<img width={'90%'} height={'90%'} src={Vision} />
									</Box>
									<Box data-aos='fade-up'>
										<Box
										>
											<Typography
												variant='h3'
												sx={{
													color: '#A15600',
													fontWeight: 'bold',
													textAlign: 'center',
												}}
											>
												Visión
											</Typography>
										</Box>
										<Box
										>
											<Typography
												variant='body1'
												sx={{
													color: 'black',
													fontWeight: 'bold',
													textAlign: 'center',
													padding: '10px',
												}}
											>
												Para el 2025 seremos la constructora preferida de las
												familias vallecaucanas y por los inversionistas que
												busquen la mejor rentabilidad en sus proyectos
												inmobiliarios.
											</Typography>
										</Box>
									</Box>
								</Box>
							</Grid>

							<Grid
								item
								xs={12}
								sm={12}
								md={4}
								lg={4}
								sx={{
									width: '100%',
									height: '100%',
									display: 'flex',
									padding: '20px',
								
									alignContent:'center',
									justifyContent:'center'
								}}
							>
								<Box
									sx={{
										//border:2,
										textAlign: 'center',
										backgroundColor: '#f3f6f9',
										opacity: [0.7],
										borderRadius: 10,
										margin: '10px',
										width: '100%',
										height: '100%',
										padding: '10px',
										minHeight: '65vh',
									}}
								>
									<Box
										data-aos='fade-left'
										sx={{
											width: '300px',
											height: '200px',
											marginLeft: 'auto',
											marginRight: 'auto',
											marginBottom: '10px',
										}}
									>
										<img width={'100%'} height={'100%'} src={Filosofia} />
									</Box>
									<Box data-aos='fade-left'>
										<Box
										>
											<Typography
												variant='h3'
												sx={{
													color: '#A15600',
													fontWeight: 'bold',
													textAlign: 'center',
												}}
											>
												Filosofía
											</Typography>
										</Box>
										<Box
											sx={{
												padding: '10px',
											}}
										>
											<Typography
												variant='body1'
												sx={{
													color: 'black',
													fontWeight: 'bold',
													textAlign: 'center',
													padding: '10px',
												}}
											>
												Ofrecemos proyectos de vivienda concebidos para vivir con
												nuestra propia familia, entregando asi el máximo
												compromiso en la ejecución de cada obra, cuidando cada
												detalle milimetro a milimetro para que nuestrso encuentren
												total satisfacción.
											</Typography>
										</Box>
									</Box>
								</Box>
							</Grid>
						</Grid>



					</Grid>

				</Grid>
			</Parallax>
			<Box sx={{ marginTop: '60px' }}>
				<NewProjectInfo />
			</Box>
		</Grid>
	);
}
