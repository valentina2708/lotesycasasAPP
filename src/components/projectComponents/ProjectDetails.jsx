import React from 'react';

import {
	Box,
	Typography,
	Avatar,
	CardContent,
	Card,
	Button,
	Divider,
} from '@mui/material';
import Grid from '@mui/material/Grid';
import { Prueba } from '/src/DataProvider/Prueba.js';
import LogoRinconDelLago from '../../assets/logoRincondelLago.jpg';
import Mapap from './Map';
//import Carousel from 'better-react-carousel'
import { Link } from 'react-router-dom';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as miArray from '../../DataProvider/Prueba.js';
import ReactPlayer from 'react-player';
import { GoogleMap, MarkerF, useLoadScript } from '@react-google-maps/api';
import AOS from 'aos';
import { Parallax } from 'react-parallax';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

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
			<Grid>
				<Grid container='true'>
					<Grid sx={{}} item='true' xs={12} sm={12} md={12} lg={12}>
						<Box data-aos='fade-down' data-aos-duration='1000' sx={{}}>
							<Typography
								variant='h2'
								sx={{
									color: 'Black',
									fontWeight: 'bold',
									mt: 2,
									textAlign: 'center',
									paddingTop: '10px',
									margin: '20px',
								}}
							>
								{/*  ######### Nombre proyecto ########### */}
								{miArray.Prueba[id - 1].nombre}
							</Typography>
							<Typography
								variant='h4'
								sx={{
									color: '#A15600',
									fontWeight: 'bold',
									mt: 2,
									textAlign: 'center',
									paddingTop: '10px',
									margin: '20px',
								}}
							>
								{/*  ######### Subtitulo proyecto ########### */}

								{miArray.Prueba[id - 1].subtitulo}
							</Typography>
						</Box>
					</Grid>

					<Box
						sx={{
							marginBottom: '15vh',
							display: { xs: 'block', sm: 'none', md: 'none', xl: 'none' },
						}}
					>
						<Box
							sx={{
								borderRadius: 10,
							}}
						>
							<Grid
								container='true'
								sx={{
									width: '100%',
									height: '100%',
									display: 'grid',
									justifyContent: 'center',
									alignItems: 'center',
									marginTop: '10vh',
								}}
							>
								<Grid
									item='true'
									xs={12}
									sm={12}
									md={12}
									lg={6}
									sx={{
										display: 'flex',
										width: '100%',
										height: '100%',
									}}
								>
									<Box data-aos='fade-up' data-aos-duration='1000' sx={{}}>
										{/*  ######### imagen 1 logo ########### */}
										<img
											src={miArray.Prueba[id - 1].imagencard}
											width={'100%'}
											height={'100%'}
										/>
									</Box>
								</Grid>
								<Grid
									sx={{
										display: 'grid',
										justifyContent: 'center',
									}}
								>
									<Box
										data-aos='fade-up'
										data-aos-duration='1000'
										sx={{
											margin: 'auto',
											display: 'flex',
											justifyContent: 'center',
											paddingLeft: '2rem',
											paddingRight: '2rem',
										}}
									>
										<Typography
											variant='body1'
											sx={{
												align: 'justifyContent',
												width: '100%',
												height: '100%',
												color: 'Black',
												fontSize: 25,
											}}
										>
											{/*  ######### Descripcion 1 ########### */}

											{miArray.Prueba[id - 1].descripcion}
										</Typography>
									</Box>
								</Grid>
							</Grid>
						</Box>
					</Box>

					<Box
						sx={{
							marginBottom: '15vh',
							display: { xs: 'none', sm: 'none', md: 'block', xl: 'block' },
							justifyContent: 'center',
							alignItems: 'center',
							width: '100%',
							marginInline: '5rem',
						}}
					>
						<Card
							sx={{
								//width: '80vw',
								height: '100%',
								marginBottom: '5vh',
								marginTop: '10vh',
								borderRadius: 10,
							}}
						>
							<Grid
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
									xs={6}
									sm={12}
									md={12}
									lg={6}
									sx={{
										marginBottom: '20px',
										marginTop: '20px',
										// border: 2,
										padding: '10px',
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
										width: '100%',
										height: '70%',
									}}
								>
									<Box
										data-aos='fade-up'
										data-aos-duration='1000'
										sx={{
											//marginLeft:'10rem'
											//border: 2,
											display: 'flex',
											justifyContent: 'right',
											alignItems: 'center',
											width: '80%',
											height: '100%',
										}}
									>
										{/*  ######### imagen 1 logo ########### */}
										<img
											src={miArray.Prueba[id - 1].imagencard}
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
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
										marginLeft: 'auto',
										marginRight: 'auto',
										marginTop: '4vh',
										marginBottom: '4vh',
									}}
								>
									<Box
										data-aos='fade-up'
										data-aos-duration='1000'
										sx={{
											justifyContent: 'left',
											padding: '10px',
										}}
									>
										<Typography
											variant='body1'
											sx={{
												width: '450px',
												height: '100%',
												color: 'Black',
												fontSize: 25,
											}}
										>
											{/*  ######### Descripcion 1 ########### */}

											{miArray.Prueba[id - 1].descripcion}
										</Typography>
									</Box>
								</Grid>
							</Grid>
						</Card>
					</Box>
				</Grid>

				<Grid container sx={{}}>
					{miArray.Prueba[id - 1].adicional === 'rinconlago' ? (
						//////////////////////////////////

						<Grid container='true'>
							<Grid item='true' xs={12} sm={12} md={12} lg={12}>
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
													padding: '10px',
													color: 'gray',
													opacity: [0.8, 0.6, 0.8],

													bottom: '5px',
													width: '80%',
													height: '10%',
													borderRadius: 3,
													marginTop: '50px',
												}}
											>
												<Avatar
													alt='logo rincon del lago'
													src='/src/assets/logoRincon.png'
													sx={{
														width: 190,
														height: 130,
														bgcolor: 'gray',
														position: 'relative',
														marginLeft: 'auto',
														marginRight: 'auto',
													}}
												/>

												<CardContent sx={{}}>
													<Typography
														variant='h5'
														sx={{
															color: 'black',
															fontWeight: 500,
															mt: 0.5,

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
														<Link to='https://api.whatsapp.com/send?phone=3204210000'>
															<Button
																sx={{
																	width: '100%',
																	padding: '10px',
																	marginTop: '10px',
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
							<Grid
								item='true'
								xs={12}
								sm={12}
								md={12}
								lg={12}
								sx={{ marginBottom: '5vh', marginTop: '5vh' }}
							>
								<Grid container sx={{ birderTop: '10vh' }}>
									<Box
										data-aos='fade-up'
										data-aos-duration='1000'
										sx={{ margin: 'auto', whith: '50%' }}
									>
										<Typography
											variant='h4'
											sx={{
												color: '#A15600',
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
											variant='body1'
											sx={{
												width: '100%',
												height: '100%',
												marginLeft: 'auto',
												marginRight: 'auto',
												textAlign: 'justify',

												fontSize: 25,
											}}
										>
											{/*  ######### Descripcion 2 ########### */}

											{miArray.Prueba[id - 1].descripcionad}
										</Typography>
									</Box>
								</Grid>
							</Grid>
							<Grid item='true' xs={12} sm={12} md={12} lg={12}>
								<Card
									sx={{
										height: '100%',
										marginLeft: 'auto',
										marginRight: 'auto',
										marginBottom: '10vh',
										marginTop: '5vh',
										borderRadius: 10,
									}}
								>
									<Grid
										container='true'
										sx={{
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
												display: 'grid',
												justifyContent: 'center',
												alignItems: 'center',
												margin: 'auto',
											}}
										>
											<Box
												data-aos='fade-up'
												data-aos-duration='1000'
												sx={{ margin: 'auto', padding: '5px' }}
											>
												<Typography
													variant='h4'
													sx={{
														color: '#A15600',
														fontWeight: 'bold',
														mt: 2,
														textAlign: 'center',
														paddingTop: '10px',
														margin: '20px',
													}}
												>
													{/*  ######### Subtitulo 2 proyecto ########### */}
													Zona recreo - deportiva
												</Typography>
											</Box>

											<Box
												sx={{
													display: { lg: 'flex' },
													justifyContent: 'center',
													alignItems: 'center',
													marginLeft: 'auto',
													marginRight: 'auto',
													padding: '0px',
												}}
											>
												<Box
													data-aos='fade-up'
													data-aos-duration='1000'
													sx={{
														display: 'grid',
														width: '100%',
														justifyContent: 'left',
														alignItems: 'left',
													}}
												>
													<Box
														sx={{
															display: 'flex',
															justifyContent: 'center',
															margin: '10px',
														}}
													>
														<Box>
															<Box
																sx={{
																	width: '30px',
																	display: 'flex',
																	marginRight: '20px',
																}}
															>
																<img
																	src={miArray.Prueba[id - 1].mini}
																	width={'100%'}
																/>
															</Box>
														</Box>
														<Typography
															variant='h4'
															sx={{
																fontWeight: 'bold',
																marginTop: 'auto',
																marginBottom: 'auto',
															}}
														>
															Mall comercial
														</Typography>
													</Box>

													<Box
														sx={{
															display: 'flex',
															justifyContent: 'left',
															margin: '10px',
														}}
													>
														<Box>
															<Box
																sx={{
																	width: '30px',
																	display: 'flex',
																	marginRight: '20px',
																}}
															>
																<img
																	src={miArray.Prueba[id - 1].mini}
																	width={'100%'}
																/>
															</Box>
														</Box>
														<Typography
															variant='h4'
															sx={{
																fontWeight: 'bold',
																marginTop: 'auto',
																marginBottom: 'auto',
															}}
														>
															Club House
														</Typography>
													</Box>

													<Box
														sx={{
															display: 'flex',
															justifyContent: 'left',
															margin: '10px',
														}}
													>
														<Box>
															<Box
																sx={{
																	width: '30px',
																	display: 'flex',
																	marginRight: '20px',
																}}
															>
																<img
																	src={miArray.Prueba[id - 1].mini}
																	width={'100%'}
																/>
															</Box>
														</Box>
														<Typography
															variant='h4'
															sx={{
																fontWeight: 'bold',
																marginTop: 'auto',
																marginBottom: 'auto',
															}}
														>
															Vóley playa
														</Typography>
													</Box>

													<Box
														sx={{
															display: 'flex',
															justifyContent: 'left',
															margin: '10px',
														}}
													>
														<Box>
															<Box
																sx={{
																	width: '30px',
																	display: 'flex',
																	marginRight: '20px',
																}}
															>
																<img
																	src={miArray.Prueba[id - 1].mini}
																	width={'100%'}
																/>
															</Box>
														</Box>
														<Typography
															variant='h4'
															sx={{
																fontWeight: 'bold',
																marginTop: 'auto',
																marginBottom: 'auto',
															}}
														>
															Zona BBQ
														</Typography>
													</Box>
												</Box>

												<Box
													data-aos='fade-up'
													data-aos-duration='1000'
													sx={{
														display: 'grid',
														width: '100%',
														justifyContent: 'left',
														alignItems: 'left',
													}}
												>
													<Box
														sx={{
															display: 'flex',
															justifyContent: 'left',
															margin: '10px',
														}}
													>
														<Box>
															<Box
																sx={{
																	width: '30px',
																	display: 'flex',
																	marginRight: '20px',
																}}
															>
																<img
																	src={miArray.Prueba[id - 1].mini}
																	width={'100%'}
																/>
															</Box>
														</Box>
														<Typography
															variant='h4'
															sx={{
																fontWeight: 'bold',
																marginTop: 'auto',
																marginBottom: 'auto',
															}}
														>
															Club House
														</Typography>
													</Box>

													<Box
														sx={{
															display: 'flex',
															justifyContent: 'left',
															margin: '10px',
														}}
													>
														<Box>
															<Box
																sx={{
																	width: '30px',
																	display: 'flex',
																	marginRight: '20px',
																}}
															>
																<img
																	src={miArray.Prueba[id - 1].mini}
																	width={'100%'}
																/>
															</Box>
														</Box>
														<Typography
															variant='h4'
															sx={{
																fontWeight: 'bold',
																marginTop: 'auto',
																marginBottom: 'auto',
															}}
														>
															Vóley playa
														</Typography>
													</Box>

													<Box
														sx={{
															display: 'flex',
															justifyContent: 'left',
															margin: '10px',
														}}
													>
														<Box>
															<Box
																sx={{
																	width: '30px',
																	display: 'flex',
																	marginRight: '20px',
																}}
															>
																<img
																	src={miArray.Prueba[id - 1].mini}
																	width={'100%'}
																/>
															</Box>
														</Box>
														<Typography
															variant='h4'
															sx={{
																fontWeight: 'bold',
																marginTop: 'auto',
																marginBottom: 'auto',
															}}
														>
															Zona BBQ
														</Typography>
													</Box>
												</Box>
											</Box>
										</Grid>

										<Grid
											item='true'
											xs={12}
											sm={12}
											md={12}
											lg={6}
											sx={{
												marginBottom: '20px',
												marginTop: '20px',

												padding: '10px',
												display: 'flex',
												justifyContent: 'center',
												alignItems: 'center',
											}}
										>
											<Box
												data-aos='fade-up'
												data-aos-duration='1000'
												sx={{
													//marginLeft:'10rem'
													//border: 2,
													display: 'flex',
													justifyContent: 'left',
													alignItems: 'center',

													widthMax: '200px',
													heightMax: '200px',
												}}
											>
												{/*  ######### imagen 2 ad ########### */}

												<img
													src={miArray.Prueba[id - 1].imagenad}
													width={'100%'}
													height={'100%'}
												/>
											</Box>
										</Grid>
									</Grid>
								</Card>
							</Grid>
							//{' '}
						</Grid>
					) : (
						////////////////////////////////////////////
						<Box></Box>
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
									marginTop: '15vh',
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

				<Typography
					data-aos='fade-zoom-in'
					data-aos-easing='ease-in-back'
					data-aos-delay='300'
					data-aos-offset='0'
					variant='h2'
					sx={{
						color: '#A15600',
						fontWeight: 'bold',
						textAlign: 'center',
						paddingTop: '15rem',
						margin: '20px',
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

				<Box>
					{' '}
					<Box>
						<Box
							data-aos='fade-zoom-in'
							data-aos-easing='ease-in-back'
							data-aos-delay='300'
							data-aos-offset='0'
							sx={{
								width: '100%',
								marginTop: '20px',
								marginBottom: '20px',
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

						<Box
							data-aos='fade-zoom-in'
							data-aos-easing='ease-in-back'
							data-aos-delay='300'
							data-aos-offset='0'
							sx={{
								marginTop: '10vh',
								marginBottom: '10vh',
							}}
						>
							{/*   <Carousel cols={2} rows={2} gap={10} loop>


              <Carousel.Item>
                <img width="100%" src={miArray.Prueba[id - 1].imagen1} />
              </Carousel.Item>

              <Carousel.Item>
                <img width="100%" src={miArray.Prueba[id - 1].imagen2} />
              </Carousel.Item>

              <Carousel.Item>
                <img width="100%" src={miArray.Prueba[id - 1].imagen3} />
              </Carousel.Item>

              <Carousel.Item>
                <img width="100%" src={miArray.Prueba[id - 1].imagen4} />
              </Carousel.Item>

              <Carousel.Item>
                <img width="100%" src={miArray.Prueba[id - 1].imagen5} />
              </Carousel.Item>

              <Carousel.Item>
                <img width="100%" src={miArray.Prueba[id - 1].imagen6} />
              </Carousel.Item>

              <Carousel.Item>
                <img width="100%" src={miArray.Prueba[id - 1].imagen7} />
              </Carousel.Item>

              <Carousel.Item>
                <img width="100%" src={miArray.Prueba[id - 1].imagen8} />
              </Carousel.Item>



            </Carousel> */}
							<ImageList
								sx={{ width: 500, height: 450 }}
								cols={3}
								rowHeight={164}
							>
								{miArray.Prueba[id - 1].images?.map(item => (
									<ImageListItem key={item.title}>
										<img
											src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
											srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
											alt={item.title}
											loading='lazy'
										/>
									</ImageListItem>
								))}
							</ImageList>
						</Box>
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
							>
								<ReactPlayer
									borderRadius='3'
									position='relative'
									bottom='5px'
									url='https://youtu.be/N3GwlQdjhjU'
									className='react-player'
									//playing
									controls
									loop
									width='100%'
									height='100%'
								/>
							</Box>
						)}
					</Box>
				</Box>
			</Grid>

			<Box
				data-aos='fade-zoom-in'
				data-aos-easing='ease-in-back'
				data-aos-delay='300'
				data-aos-offset='0'
				sx={{
					marginTop: '10rem',
					marginLeft: '3rem',
					marginRight: '3rem',
				}}
			>
				<Link to='https://api.whatsapp.com/send?phone=3147456473'>
					<Button
						sx={{
							height: '4rem',
							width: '100%',
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
