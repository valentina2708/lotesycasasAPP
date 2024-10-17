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
								textAlign: 'center',

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
									Zonas y Espacios
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
										<Box
											sx={{
												width: '30px',
												display: 'flex',
												marginRight: '20px',
											}}
										>
											<Forest sx={{ fontSize: 40 }} />
										</Box>
										<Typography
											variant='h4'
											sx={{
												fontWeight: 'bold',
												marginTop: 'auto',
												marginBottom: 'auto',
											}}
										>
											Zonas verdes
										</Typography>
									</Box>

									<Box
										sx={{
											display: 'flex',
											justifyContent: 'left',
											margin: '10px',
										}}
									>
										<Box
											sx={{
												width: '30px',
												display: 'flex',
												marginRight: '20px',
											}}
										>
											<SportsBasketball sx={{ fontSize: 40 }} />
										</Box>
										<Typography
											variant='h4'
											sx={{
												fontWeight: 'bold',
												marginTop: 'auto',
												marginBottom: 'auto',
											}}
										>
											Canchas
										</Typography>
									</Box>

									<Box
										sx={{
											display: 'flex',
											justifyContent: 'left',
											margin: '10px',
										}}
									>
										<Box
											sx={{
												width: '30px',
												display: 'flex',
												marginRight: '20px',
											}}
										>
											<TimeToLeave sx={{ fontSize: 40 }} />
										</Box>
										<Typography
											variant='h4'
											sx={{
												fontWeight: 'bold',
												marginTop: 'auto',
												marginBottom: 'auto',
											}}
										>
											Porteria
										</Typography>
									</Box>

									<Box
										sx={{
											display: 'flex',
											justifyContent: 'left',
											margin: '10px',
										}}
									></Box>
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
										<Box
											sx={{
												width: '30px',
												display: 'flex',
												marginRight: '20px',
											}}
										>
											<Pool sx={{ fontSize: 40 }} />
										</Box>
										<Typography
											variant='h4'
											sx={{
												fontWeight: 'bold',
												marginTop: 'auto',
												marginBottom: 'auto',
											}}
										>
											Piscina
										</Typography>
									</Box>
									<Box
										sx={{
											display: 'flex',
											justifyContent: 'left',
											margin: '10px',
										}}
									>
										<Box
											sx={{
												width: '30px',
												display: 'flex',
												marginRight: '20px',
											}}
										>
											<Diversity1 sx={{ fontSize: 40 }} />
										</Box>
										<Typography
											variant='h4'
											sx={{
												fontWeight: 'bold',
												marginTop: 'auto',
												marginBottom: 'auto',
											}}
										>
											Zona Sociales
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
									src={miArray.Prueba[id - 1].imagen}
									width={'100%'}
									height={'100%'}
								/>
							</Box>
						</Grid>
					</Grid>
				</Card>
			</Grid>
		</Grid>
	);
}
