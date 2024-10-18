import {
	Grid,
	Box,
	Card,
	Avatar,
	Typography,
	CardContent,
	Button,
	Link,
} from '@mui/material';
import * as miArray from '../../DataProvider/Prueba.js';
import { Parallax } from 'react-parallax';
import { useParams } from 'react-router-dom';
import {
	Pool,
	SportsBasketball,
	Forest,
	Diversity1,
	TimeToLeave,
} from '@mui/icons-material/';
import { Colors } from '../../config/themeConfig.js';

export default function Details() {
	const { id } = useParams();
	return (

		<>
		<Grid container='true'>
        
			<Grid item='true' xs={12} sm={12} md={12} lg={12}>
				<Parallax
					style={{
						width: '100%',
						height: '100%',
					}}
					bgImage={miArray.Prueba[id - 1].imagenfondo}
					strength={400}
				>
					<Box
						container
						data-aos='zoom-in-down'
						sx={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							width: '100%',
							height: '60vh',
						}}
					>
						<Box
							sx={{
								display: 'flex',
								borderRadius: '20px',
								marginLeft: 'auto',
								marginRight: 'auto',
							}}
						>
							<Card
								elevation={12}
								sx={{
									padding: '15px',
									color: 'gray',
									opacity: [0.8, 0.7, 0.8],
									width: '70%',
									height: '10%',
									borderRadius: 3,
									alignItems: 'center',
									justifyContent: 'center',
									marginInline: '5rem',
								}}
							>
								<Avatar
									alt='logo rincon del lago'
									src='/src/assets/logo_terranova2.png'
									sx={{
										width: 190,
										height: 130,
										position: 'relative',
										marginLeft: 'auto',
										marginRight: 'auto',
									}}
								/>

								<CardContent sx={{}}>
									<Typography
										variant='h6'
										sx={{
											color: Colors.fondo,
											fontWeight: 500,
											mt: '-2rem',
											textAlign: 'center',
										}}
									>
										Somos una empresa de calidad
										<br />
										en la construción de nuestros proyectos
									</Typography>
								</CardContent>
							</Card>
						</Box>
					</Box>
				</Parallax>
			</Grid>
			<Grid
				item='true'
				xs={12}
				sm={12}
				md={12}
				lg={12}
				sx={{ mb: '2rem', mt: '-1rem',backgroundColor:Colors.info3, p:'15px' }}
			>
				<Grid container sx={{ birderTop: '10vh' }}>
					<Box
						data-aos='fade-up'
						data-aos-duration='1000'
						sx={{ margin: 'auto', whith: '50%',  }}
					>
						<Typography
							variant='h4'
							sx={{
								color: Colors.body_bg,
								fontWeight: 'bold',
								mt: 2,
								textAlign: 'center',
								paddingTop: '10px',
								margin: '20px',
							}}
						>
							{/*  ######### Subtitulo 2 proyecto ########### */}
							{miArray.Prueba[id - 1].ubicacion}
						</Typography>
					</Box>
					<Box
						data-aos='fade-up'
						data-aos-duration='1000'
						sx={{ margin: 'auto', padding: '20px' }}
					>
						<Typography
							sx={{
								width: '70%',
								height: '100%',
								marginLeft: 'auto',
								marginRight: 'auto',
								textAlign: 'center',
								mb:'-1rem',
								fontSize: 20,
								color: Colors.body_bg,
								fontWeight: 100,
							}}
						>
							{/*  ######### Descripcion 2 ########### */}

							{miArray.Prueba[id - 1].descripcionad}
						</Typography>
					</Box>
				</Grid>
			</Grid>
		</Grid>

		<Box sx={{ m: { xs: '2rem', md: '4rem' } }}>
							<Grid container justifyContent='center'>
								<Grid item xs={12} md={10} lg={8}>
									<Card
										sx={{
											padding: { xs: '2rem', md: '3rem' },
											borderRadius: 8,
											boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
											width: '100%',
											margin: 'auto',
										}}
									>
										<Grid container spacing={3} alignItems='center'>
											{/* Sección de Texto e Íconos */}
											<Grid item xs={12} md={6}>
												<Typography
													variant='h5'
													sx={{
														color: Colors.fondo,
														fontWeight: 'bold',
														textAlign: 'center',
														mb: { xs: 2, md: 3 },
													}}
												>
												Espacios para toda la familia
												</Typography>
												<Grid container spacing={2}>
													{/* Primera fila */}
													<Grid
														item
														xs={6}
														display='flex'
														justifyContent='center'
													>
														<Box display='flex' alignItems='center'>
															<Diversity1
																sx={{
																	fontSize: { xs: 30, md: 36 },
																	color: Colors.info4,
																	ml:3
																}}
															/>
															<Typography
																variant='body1'
																sx={{ fontWeight: 'bold', ml: 2 }}
															>
																Zona Social
															</Typography>
														</Box>
													</Grid>
													<Grid
														item
														xs={6}
														display='flex'
														justifyContent='center'
													>
														<Box display='flex' alignItems='center'>
															<Forest
																sx={{
																	fontSize: { xs: 30, md: 36 },
																	color: Colors.info4,
																}}
															/>
															<Typography
																variant='body1'
																sx={{ fontWeight: 'bold', ml: 1 }}
															>
																Parques
															</Typography>
														</Box>
													</Grid>

													{/* Segunda fila */}
													<Grid
														item
														xs={6}
														display='flex'
														justifyContent='center'
													>
														<Box display='flex' alignItems='center'>
															<Pool
																sx={{
																	fontSize: { xs: 30, md: 36 },
																	color: Colors.info4,
				
																	mr:2
																}}
															/>
															<Typography
																variant='body1'
																sx={{ fontWeight: 'bold',mr:2 }}
															>
																Piscina
															</Typography>
														</Box>
													</Grid>
													<Grid
														item
														xs={6}
														display='flex'
														justifyContent='center'
													>
														<Box display='flex' alignItems='center'>
															<SportsBasketball
																sx={{
																	fontSize: { xs: 30, md: 36 },
																	color: Colors.info4,
																}}
															/>
															<Typography
																variant='body1'
																sx={{ fontWeight: 'bold', ml: 1 }}
															>
																Canchas
															</Typography>
														</Box>
													</Grid>

													{/* Tercera fila */}
													<Grid
														item
														xs={6}
														display='flex'
														justifyContent='center'
													>
														<Box display='flex' alignItems='center'>
															<TimeToLeave
																sx={{
																	fontSize: { xs: 30, md: 36 },
																	color: Colors.info4,
																	ml: 3 
																}}
															/>
															<Typography
																variant='body1'
																sx={{ fontWeight: 'bold', ml: 2 }}
															>
																Parqueadero
															</Typography>
														</Box>
													</Grid>
												
												</Grid>
											</Grid>

											{/* Sección de Imagen */}
											<Grid
												item
												xs={12}
												md={6}
												display='flex'
												justifyContent='center'
											>
												<img
													src={miArray.Prueba[id - 1].imagenad}
													alt='Imagen Zona recreativa'
													style={{
														borderRadius: '8px',
														maxWidth: '100%',
														height: 'auto',
														maxHeight: '250px',
														objectFit: 'cover',
													}}
												/>
											</Grid>
										</Grid>
									</Card>
								</Grid>
							</Grid>
						</Box>
				
					</>
	);
}
