import {
	Box,
	Typography,
	Avatar,
	CardContent,
	Card,
	Button,
	Divider,
	Grid,
} from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as miArray from '../../DataProvider/Prueba.js';
import ReactPlayer from 'react-player';
import { GoogleMap, MarkerF, useLoadScript } from '@react-google-maps/api';
import AOS from 'aos';
import { Parallax } from 'react-parallax';
import SportsVolleyballIcon from '@mui/icons-material/SportsVolleyball';
import Groups3Icon from '@mui/icons-material/Groups3';
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory';
import OutdoorGrillIcon from '@mui/icons-material/OutdoorGrill';
import Diversity3Icon from '@mui/icons-material/Diversity3';

import ImageGallery from '../projectComponents/ImageGallery.jsx';
import UrbanizationsDetails from '../projectComponents/UrbanizationsDetails.jsx';
import { Colors } from '../../config/themeConfig.js';
import CalculateFee from '../../components/CalculateFee.jsx';

export default function PaginaProyectos(props) {
	useEffect(() => {
		AOS.init({ offset: 200, duration: 1000 });
	}, []);

	const { id } = useParams();

	const { isLoaded } = useLoadScript({
		googleMapsApiKey: 'AIzaSyDdwssQ5RRzvav2ZhmAykKzj2-jH1qhcGU',
	});

	if (!isLoaded) return <Box>Cargando...</Box>;

	return (
		<Box sx={{ marginTop: '15vh' }}>
			<Grid container>
				<Grid container sx={{ height: 'auto', minHeight: '75vh', mt: '4rem' }}>
					<Box
						data-aos='fade-up'
						data-aos-duration='1000'
						sx={{ width: '100%', marginTop: '3rem' }}
					>
						<Typography
							variant='h3'
							sx={{ color: Colors.info3, textAlign: 'center', fontWeight: 600 }}
						>
							{miArray.Prueba[id - 1].nombre}
						</Typography>
					</Box>
					{/* Primera columna: Imagen y descripción */}
					<Grid
						item
						xs={12}
						md={6}
						sx={{
							display: 'flex',
							justifyContent: 'center',
							flexDirection: 'column',
						}}
					>
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
							}}
						>
							<Box
								data-aos='fade-up'
								data-aos-duration='1000'
								sx={{ borderRadius: 10, width: '50%', marginTop: '1rem' }}
							>
								<img
									src={miArray.Prueba[id - 1].imagencard}
									alt='Imagen del proyecto'
									width={'100%'}
									style={{ borderRadius: '10px' }}
								/>
							</Box>
							<Box sx={{ width: '80%', marginTop: '-3rem' }}>
								<Typography
									variant='body1'
									sx={{ color: 'Black', fontSize: 20, textAlign: 'justify' }}
								>
									{miArray.Prueba[id - 1].descripcion}
								</Typography>
							</Box>
						</Box>
					</Grid>

					{/* Segunda columna: Componente CalculateFee */}
					<Grid
						item
						xs={12}
						md={6}
						sx={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<Box sx={{ width: '80%', marginTop: '5rem' }}>
							<CalculateFee />
						</Box>
					</Grid>
				</Grid>
			</Grid>

			<Box sx={{ width: '100%', mt: '5rem', p: 2, mb: '4rem' }}>
				<Typography></Typography>
				<Swiper
					modules={[Pagination, Autoplay, EffectCoverflow]}
					pagination={{ clickable: true, dynamicBullets: true }}
					autoplay={{ delay: 4000, disableOnInteraction: false }}
					loop
					effect='slide'
					style={{ width: '70%', height: '60vh' }}
				>
					{miArray.Prueba[id - 1].images.map((image, index) => (
						<SwiperSlide key={index}>
							<Box
								sx={{
									width: '90%',
									height: '60vh',
									position: 'relative',
									overflow: 'hidden',
									m: 0,
									p: 0,
								}}
							>
								<Box
									component='img'
									src={image.img}
									alt={image.title}
									sx={{
										margin: 'auto',
										height: '400px',

										maxHeight: '800px',
										maxWidth: '800px',
										objectFit: 'cover',
										objectPosition: 'center',
										display: 'block',
										transition: 'transform 0.5s ease-in-out',
									}}
								/>
							</Box>
						</SwiperSlide>
					))}
				</Swiper>
			</Box>

			<Grid container sx={{}}>
				{miArray.Prueba[id - 1].adicional === 'rinconlago' ? (
					//////////////////////////////////

					<Box container>
						<Grid
							container
							sx={{ birderTop: '10vh', backgroundColor: Colors.info3 }}
						>
							<Box
								data-aos='fade-up'
								data-aos-duration='1000'
								sx={{ margin: 'auto', whith: '50%' }}
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
									variant='h6'
									sx={{
										width: '70%',
										marginLeft: 'auto',
										marginRight: 'auto',
										textAlign: 'center',
										fontWeight: 200,
										color: Colors.body_bg,
									}}
								>
									{/*  ######### Descripcion 2 ########### */}

									{miArray.Prueba[id - 1].descripcionad}
								</Typography>
							</Box>
						</Grid>
						<Box sx={{ m: { xs: '2rem', md: '4rem' } }}>
							<Grid container justifyContent='center'>
								<Grid item xs={12} md={10} lg={8}>
									<Card
										sx={{
											padding: { xs: '2rem', md: '3rem' },
											borderRadius: 8,
											boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
											maxWidth: '150%',
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
													Los mejores espacios
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
															<StoreMallDirectoryIcon
																sx={{
																	fontSize: { xs: 30, md: 36 },
																	color: Colors.info4,
																}}
															/>
															<Typography
																variant='body1'
																sx={{ fontWeight: 'bold', ml: 1 }}
															>
																Mall comercial
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
															<Groups3Icon
																sx={{
																	fontSize: { xs: 30, md: 36 },
																	color: Colors.info4,
																}}
															/>
															<Typography
																variant='body1'
																sx={{ fontWeight: 'bold', ml: 1 }}
															>
																Club House
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
															<SportsVolleyballIcon
																sx={{
																	fontSize: { xs: 30, md: 36 },
																	color: Colors.info4,
																	mr: 2,
																}}
															/>
															<Typography
																variant='body1'
																sx={{ fontWeight: 'bold', mr: 2 }}
															>
																Vóley playa
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
															<OutdoorGrillIcon
																sx={{
																	fontSize: { xs: 30, md: 36 },
																	color: Colors.info4,
																}}
															/>
															<Typography
																variant='body1'
																sx={{ fontWeight: 'bold', ml: 1 }}
															>
																Zona BBQ
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
															<Diversity3Icon
																sx={{
																	fontSize: { xs: 30, md: 36 },
																	color: Colors.info4,
																}}
															/>
															<Typography
																variant='body1'
																sx={{ fontWeight: 'bold', ml: 1 }}
															>
																Zona Sociales
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
															<Diversity3Icon
																sx={{
																	fontSize: { xs: 30, md: 36 },
																	color: Colors.info4,
																}}
															/>
															<Typography
																variant='body1'
																sx={{ fontWeight: 'bold', ml: 1 }}
															>
																Zona Spa
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
					</Box>
				) : (
					////////////////////////////////////////////
					<Box>
						<UrbanizationsDetails />
					</Box>
				)}

				{miArray.Prueba[id - 1].adicional === 'u' ? (
					//////////////////////////////////

					<Grid container='true'>
						<Card
							sx={{
								//border: 2,
								width: '100%',
								height: '100%',
								marginLeft: 'auto',
								marginRight: 'auto',
								marginBottom: '20vh',
								marginTop: '10vh',
								borderRadius: 10,
							}}
						>
							<Grid
								data-aos='fade-up'
								data-aos-duration='1000'
								container='true'
								sx={{
									// border: 2,
									width: '100%',
									height: '100%',
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
								}}
							>
								<Grid
									item='true'
									xs={12}
									sm={12}
									md={12}
									lg={6}
									sx={{
										marginBottom: '20px',
										marginTop: '20px',
										//border: 2,
										padding: '10px',
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
										width: '100%',
										height: '70%',
									}}
								>
									<Box
										data-aos='fade-down'
										data-aos-duration='1000'
										sx={{
											//marginLeft:'10rem'
											//border: 2,
											display: 'flex',
											justifyContent: 'left',
											// alignItems: 'center',
											width: '90%',
											height: '100%',
										}}
									>
										{/*  ######### imagen 3 ad ########### */}

										<img
											src={miArray.Prueba[id - 1].imagenad}
											width={'100%'}
											height={'100%'}
										/>
									</Box>
								</Grid>
								<Grid
									item='true'
									xs={12}
									sm={12}
									md={12}
									lg={6}
									sx={{
										//border: 2,
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
										marginLeft: 'auto',
										marginRight: 'auto',
										marginBottom: '5rem',
									}}
								>
									<Box
										data-aos='fade-down'
										data-aos-duration='1000'
										sx={{
											display: 'flex',
											justifyContent: 'right',
											width: '500px',
										}}
									>
										<Typography
											variant='h5'
											sx={{
												color: '#A15600',

												textAlign: 'center',
											}}
										>
											{/*  ######### Subtitulo 2 proyecto ########### */}

											{miArray.Prueba[id - 1].descripcionad}
											<Divider sx={{ my: '2rem' }} />

											<Typography variant='h6'>
												{miArray.Prueba[id - 1].areaDelLote}
											</Typography>
										</Typography>
									</Box>
								</Grid>
							</Grid>
						</Card>
					</Grid>
				) : (
					////////////////////////////////////////////
					<h1></h1>
				)}
			</Grid>

			<Grid item xs={12} sm={12} md={12} lg={12}>
				<Parallax
					style={{
						width: '100%',
						height: '100%',
					}}
					bgImage={miArray.Prueba[id - 1].pagar}
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
							height: '65vh',
						}}
					>
						<Box
							sx={{
								display: 'flex',
							}}
						>
							<Card
								elevation={12}
								sx={{
									padding: '10px',
									color: 'gray',
									opacity: [0.8, 0.6, 0.8],
									width: '80%',
									height: '10%',
									borderRadius: 3,
									marginTop: '2rem',
									mb: '2rem',
								}}
							>
								<Avatar
									alt='logo rincon del lago'
									src='/src/assets/logo2em.png'
									sx={{
										width: 200,
										height: 130,
										position: 'relative',
										marginLeft: 'auto',
										marginRight: 'auto',
										opacity: [0.8, 0.6, 0.8],
									}}
								/>

								<CardContent sx={{}}>
									<Typography
										variant='h5'
										sx={{
											color: 'black',
											fontWeight: 500,
											mb: '1.5rem',

											textAlign: 'center',
										}}
									>
										Separa tu lote:
										<br />
										Inicial 10% plazo hasta 5 años
									</Typography>

									<Box
										sx={{
											justifyContent: 'center',
											alignItems: 'center',
											//border:2
										}}
									>
										<Link to='https://api.whatsapp.com/send?'>
											<Button
												sx={{
													width: '100%',
													padding: '10px',
													marginTop: '10px',
													backgroundColor: Colors.info3,
												}}
												variant='contained'
												endIcon={<WhatsAppIcon />}
											>
												Contactanos
											</Button>
										</Link>
									</Box>
								</CardContent>
							</Card>
						</Box>
					</Box>
				</Parallax>
			</Grid>

			<Typography
				data-aos='fade-zoom-in'
				data-aos-easing='ease-in-back'
				data-aos-delay='300'
				data-aos-offset='0'
				variant='h2'
				sx={{
					color: Colors.info4,
					fontWeight: 'bold',
					textAlign: 'center',
					paddingTop: '10rem',
					margin: '20px',
					mb: '3rem',
				}}
			>
				Ubicación
			</Typography>

			<Box
				data-aos='fade-zoom-in'
				data-aos-easing='ease-in-back'
				data-aos-delay='300'
				data-aos-offset='0'
				sx={{ height: '100%', width: '100%' }}
			>
				<GoogleMap
					// lat2={latt}
					zoom={16}
					center={{
						lat: miArray.Prueba[id - 1].lat,
						lng: miArray.Prueba[id - 1].lng,
					}}
					mapContainerStyle={{ height: '60vh', width: '100%' }}
				>
					<MarkerF
						position={{
							lat: miArray.Prueba[id - 1].lat,
							lng: miArray.Prueba[id - 1].lng,
						}}
					/>
				</GoogleMap>
			</Box>

			{/* <Box>
				{' '}
				<Box>
					<Box
						data-aos='fade-zoom-in'
						data-aos-easing='ease-in-back'
						data-aos-delay='300'
						data-aos-offset='0'
						sx={{
							width: '100%',
							marginTop: '40px',
							marginBottom: '40px',
							gap: 12,
						}}
					>
						<Typography
							variant='h2'
							sx={{
								color: '#A15600',
								fontWeight: 'bold',
								textAlign: 'center',
								paddingTop: '10px',
								margin: '20px',
							}}
						>
							Galeria
						</Typography>
					</Box>
					<ImageGallery />
					{miArray.Prueba[id - 1].id === 1 && (
						<Box
							data-aos='fade-zoom-in'
							data-aos-easing='ease-in-back'
							data-aos-delay='300'
							data-aos-offset='0'
							sx={{
								margin: 'auto',
								height: '400px',

								maxHeight: '800px',
								maxWidth: '800px',
							}}
						></Box>
					)}
				</Box>
			</Box> */}

			<Box
			
				sx={{
					marginTop: '6rem',
					marginLeft: '3rem',
					marginRight: '3rem',
			
		
				}}
			>
				<Link to='https://api.whatsapp.com/send?phone=3147456473'>
					<Button
						sx={{
							height: '4rem',
							width: '100%',
							backgroundColor: Colors.info3,
						}}
						variant='contained'
						endIcon={<WhatsAppIcon />}
					>
						Comunícate con un asesor
					</Button>
				</Link>
			</Box>
		</Box>
	);
}
