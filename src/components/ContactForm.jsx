import { ThemeProvider } from '@mui/material';
import {
	Box,
	TextField,
	Card,
	CardContent,
	Typography,
	Hidden,
	Stack,
	Fab,
} from '@mui/material';
import React from 'react';
import { alpha, styled } from '@mui/material/styles';
import fotoformulario from '../assets/lotes.jpeg';
import Contacto1 from '../assets/contacto1.jpg';
import Grid from '@mui/material/Grid';
import parallax, { Parallax } from 'react-parallax';
import Button from '@mui/material/Button';

import SendIcon from '@mui/icons-material/Send';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

import RoomIcon from '@mui/icons-material/Room';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';

const CssTextField = styled(TextField)({
	// width: 'auto',
	borderRadius: 60,
	textAlign: 'center',
	margin: '20px',
	// backgroundColor: 'white',
	display: 'flex',

	'& label.Mui-focused': {
		color: 'green',
		borderRadius: 60,
	},
	'& .MuiInput-underline:after': {
		borderBottomColor: 'green',
		borderRadius: 60,
	},
	'& .MuiOutlinedInput-root': {
		'& fieldset': {
			borderColor: '#FE6B1D',
			borderRadius: 60,
		},
		'&:hover fieldset': {
			borderColor: 'yellow',
			borderRadius: 60,
		},
		'&.Mui-focused fieldset': {
			borderColor: 'green',
			borderRadius: 60,
		},
	},
});

export default function ContactForm() {
	useEffect(() => {
		AOS.init({ offset: 200, duration: 1000 });
	}, []);

	return (
		<Grid
			container
			sx={{
				display: 'inline',
				marginTop: '40px',
			}}
		>
			<Box sx={{ display: { xs: 'block', sm: 'block', md: 'none', xl: 'none' } }}>

				<Parallax
					style={{
						width: '100%',
						height: '100%',
						opacity: [10],
					}}
					bgImage={Contacto1}
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
							height: '35vh',

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
								

								<Box sx={{ display: { xs: 'block', sm: 'none', md: 'none', xl: 'none' } }}>
								<Typography
									variant='h3'
									sx={{
										opacity: [90],
										color: '#A15600',
										fontWeight: 'bold',
										mt: 2,
										textAlign: 'center',
										paddingTop: '10px',
										//margin: '20px',
									}}
								>
									Contáctanos
								</Typography>

							</Box>
							<Box sx={{ display: { xs: 'none', sm: 'block', md: 'block', xl: 'block' } }}>
								<Typography
									variant='h2'
									sx={{
										opacity: [90],
										color: '#A15600',
										fontWeight: 'bold',
										mt: 2,
										textAlign: 'center',
										paddingTop: '10px',
										//margin: '20px',
									}}
								>
									Contáctanos
								</Typography>

							</Box>


							</Box>
						</Box>
					</Box>
				</Parallax>

				

			</Box>	
			

			<Box sx={{ display: { xs: 'none', sm: 'none', md: 'block', xl: 'block' } }}>

				<Parallax
					style={{
						width: '100%',
						height: '100%',
						opacity: [10],
					}}
					bgImage={Contacto1}
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
							height: '80vh',

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
										color: '#A15600',
										fontWeight: 'bold',
										
										textAlign: 'center',
										paddingTop: '10px',
										//margin: '20px',
									}}
								>
									Contáctanos
								</Typography>
							</Box>
						</Box>
					</Box>
				</Parallax>

				

			</Box>	
			
			<Grid
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
							
							display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						borderRadius: '20px',
							
						}}
					></Box>

					<Grid
						container
						sx={{
							position: 'relative',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							
						}}
					>
						<Box
							data-aos='fade-right'
							sx={{
								position: 'absolute',
								width: '150px',
								margin: '5px',
								height: '150px',
								top: 90,
								left: {md:'280px'},
								backgroundColor: '#FE6B1D',
								borderRadius: 6,
								boxShadow: 20,
							}}
						></Box>
						<Box
							data-aos='fade-left'
							sx={{
								position: 'absolute',
								width: '150px',
								margin: '5px',
								height: '150px',
								top: 250,
								left: {md:'980px'},
								backgroundColor: '#FE6B1D',
								borderRadius: 6,
								boxShadow: 20,
							}}
						></Box>

						<Grid item xs={12} sm={12} md={6} lg={6}
							sx={{
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
							
							
							}}
						>
							<Card
								data-aos='fade-down'
								sx={{
									margin: '10px',
									width: '99%',
									height: '99%',
									borderRadius: 10,
									boxShadow: 20,
									textAlign: 'center',
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
								
								}}
							>
								<CardContent
									data-aos='fade-down'
									sx={{
										//border:2,
										width: '100%',
										boxShadow: 0,
										margin: 1,
										borderRadius: '10px',
										position: 'relative',
									}}
								>
									<CssTextField
										type='text'
										label='Nombre'
										id='custom-css-outlined-input'
										required
									/>

									<CssTextField
										label='Apellido'
										type='text'
										id='custom-css-outlined-input'
										required
									/>
									<CssTextField
										label='Email'
										type='email'
										id='custom-css-outlined-input'
										required
									/>
									<CssTextField
										label='No.Documento'
										type='text'
										pattern='[0-9]*'
										id='custom-css-outlined-input'
										required
									/>
									<CssTextField
										label='Celular'
										type='text'
										pattern='[0-9]*'
										id='custom-css-outlined-input'
										required
									/>

									<Button
										disabled sx={{
											width: '98%',
											margin: '5px',
											height: '45px',
											backgroundColor: '#FE6B1D',
											borderRadius: 60,
										}}
										variant='contained'
										id='btnEnviar'
										endIcon={<SendIcon />}
									>
										{' '}
										Enviar
									</Button>
								</CardContent>
							</Card>
						</Grid>
					</Grid>
				</Grid>

			<br />

			
			<Box sx={{ display: 'flex' }}>
				<Grid item xs={12} sm={12} md={12} lg={12}>
					<Card
						sx={{
							
							width: '99%',
							margin: '10px',
							height: '95%',
							borderRadius: 10,
							
						}}
					>
						<CardContent>
							<Stack
								sx={{
									textAlign: 'center',
								}}
							>
							
							<Box sx={{ display: { xs: 'none', sm: 'block', md: 'block', xl: 'block' } }}>
								<Typography
										data-aos='fade-down'
										variant='h4'
										sx={{
											color: '#A15600',
											fontWeight: 'bold',
											mt: 2,
											textAlign: 'center',
											padding: '10px',
											margin: '10px',
										}}
									>
										Ponte en contacto con nosotros
									</Typography>

							</Box>
							
							<Box sx={{ display: { xs: 'block', sm: 'none', md: 'none', xl: 'none' } }}>
							<Typography
									data-aos='fade-down'
									variant='h5'
									sx={{
										color: '#A15600',
										fontWeight: 'bold',
										mt: 2,
										textAlign: 'center',
										padding: '10px',
										margin: '10px',
									}}
								>
									Ponte en contacto con nosotros
								</Typography>

							</Box>
							
								
								<Stack>
									<Grid container>
										<Grid item xs={12} sm={4} md={4} lg={4}>
											<Box
												data-aos='fade-down'
												sx={{
													//border:2,
													width: '99%',

													margin: '0px',
													height: '150px',
													display: 'flex',
													justifyContent: 'center',
													alignItems: 'center',
												}}
											>
												<Fab
													sx={{
														color: 'gray',
														width: '60px',
														margin: '10px',
														height: '60px',
													}}
													Size='large'
												>
													<RoomIcon sx={{ width: '80%', height: '80%' }} />
												</Fab>
											</Box>
											<Box data-aos='fade-up'>
												<Typography
													variant='h5'
													sx={{
														color: 'black',
														fontWeight: 'bold',
														mt: 2,
														textAlign: 'center',
														padding: '5px',
														margin: '20px',
													}}
												>
													Ubicación
												</Typography>
												<Typography
													variant='body1'
													sx={{
														mt: 3,
														textAlign: 'center',
														margin: '30px',
													}}
												>
													Centro de Negocios Oasis de Unicentro, Oficina 405 A.
													Santiago de Cali, Colombia
												</Typography>
											</Box>
										</Grid>
										<Grid item xs={12} sm={4} md={4} lg={4}>
											<Box
												data-aos='fade-down'
												sx={{
													//border:2,
													width: '99%',

													margin: '10px',
													height: '150px',
													display: 'flex',
													justifyContent: 'center',
													alignItems: 'center',
												}}
											>
												<Fab
													sx={{
														color: 'gray',
														width: '60px',
														margin: '10px',
														height: '60px',
													}}
													Size='large'
												>
													<CallIcon sx={{ width: '80%', height: '80%' }} />
												</Fab>
											</Box>
											<Box data-aos='fade-up'>
												<Typography
													variant='h5'
													sx={{
														color: 'black',
														fontWeight: 'bold',
														mt: 2,
														textAlign: 'center',
														padding: '5px',
														margin: '20px',
													}}
												>
													Teléfono
												</Typography>
												<Typography
													variant='body1'
													sx={{
														mt: 3,
														textAlign: 'center',
														margin: '30px',
													}}
												>
													3204210000


												</Typography>
											</Box>
										</Grid>

										<Grid item xs={12} sm={4} md={4} lg={4}>
											<Box
												data-aos='fade-down'
												sx={{
													//border:2,
													width: '99%',

													margin: '0px',
													height: '150px',
													display: 'flex',
													justifyContent: 'center',
													alignItems: 'center',
												}}
											>
												<Fab
													sx={{
														color: 'gray',
														width: '60px',
														margin: '10px',
														height: '60px',
													}}
													Size='large'
												>
													<MailIcon sx={{ width: '80%', height: '80%' }} />
												</Fab>
											</Box>
											<Box data-aos='fade-up'>
												<Typography
													variant='h5'
													sx={{
														color: 'black',
														fontWeight: 'bold',
														mt: 2,
														textAlign: 'center',
														padding: '5px',
														margin: '20px',
													}}
												>
													Correo
												</Typography>
												<Typography
													variant='body1'
													sx={{
														mt: 3,
														textAlign: 'center',
														margin: '30px',
														paddingBottom: '5rem',
													}}
												>
													info@casaylotes.co
												</Typography>
											</Box>
										</Grid>
									</Grid>
								</Stack>
							</Stack>
						</CardContent>
					</Card>
				</Grid>
			</Box>
			
			



		

			
		</Grid>
	);
}
