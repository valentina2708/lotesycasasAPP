import {
	Box,
	TextField,
	Card,
	CardContent,
	Typography,
	Stack,
	Fab,
	Button,
	Grid,
	Link,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Parallax } from 'react-parallax';
import SendIcon from '@mui/icons-material/Send';
import { Colors } from '../config/themeConfig';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

import RoomIcon from '@mui/icons-material/Room';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import Contacto1 from '../assets/contacto1.jpg';
import LoteImage from '../assets/contacto2.jpg';

const CssTextField = styled(TextField)({
	borderRadius: 60,
	margin: '10px',
	width: '90%',

	display: 'flex',
	justifyContent: 'center',

	'& .MuiOutlinedInput-root': {
		'& fieldset': {
			borderColor: Colors.fondo,
			borderRadius: 60,
		},
		'&:hover fieldset': {
			borderColor: Colors.info3,
		},
		'&.Mui-focused fieldset': {
			borderColor: Colors.info4,
		},
	},
});

export default function ContactForm() {
	useEffect(() => {
		AOS.init({ offset: 200, duration: 1000 });
	}, []);

	return (
		<>
			{/* Parallax con imagen que ocupa toda la pantalla */}
			<Parallax
				bgImage={Contacto1}
				strength={300}
				style={{
					width: '100%',
					height: '80vh',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					p: '5%',
				}}
			>
				<Box sx={{ textAlign: 'center' }}>
					<Typography
						variant='h2'
						sx={{
							color: Colors.info3,
							fontWeight: 'bold',
							textAlign: 'center',
							pt: '10px',
						}}
					>
						Contacto
					</Typography>
				</Box>
			</Parallax>

			<Box
				sx={{
					width: '100%',
					height: '30vh',
					backgroundColor: Colors.info3,
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					textAlign: 'center',
					mt: '-1rem',
				}}
			>
				<Box>
					<Typography
						variant='h4'
						sx={{ fontWeight: 600, color: Colors.dove_gray }}
					>
						Subscríbete a nuestra empresa
					</Typography>
					<Typography
						variant='h5'
						sx={{ fontWeight: 300, color: Colors.dove_gray }}
					>
						Mantente informado de nuestras novedades en todo momento.
					</Typography>
				</Box>
			</Box>

			<Grid
				container
				data-aos='zoom-in-down'
				sx={{
					height: 'auto',
					minHeight: '75vh',
					alignItems: 'center',
					mt: '4rem',
					p: '2rem',
				}}
			>
				<Grid
					item
					xs={12}
					md={6}
					sx={{ display: 'flex', justifyContent: 'center' }}
				>
					<img
						src={LoteImage}
						alt='Lote'
						style={{
							width: '80%',
							height: '100%',
							objectFit: 'cover',
							borderRadius: '10px',
						}}
					/>
				</Grid>
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
					<Card
						sx={{
							width: '80%', // Ajusta el ancho para que no sea tan grande
							borderRadius: 6,
							boxShadow: 20,
							padding: 3, // Añade un poco de padding interno para los contenidos
						}}
					>
						<CardContent
							sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
						>
							<CssTextField
								label='Nombre'
								fullWidth
								required
								sx={{
									marginBottom: 1,
									input: { padding: '12px' },
								}}
							/>
							<CssTextField
								label='Apellido'
								fullWidth
								required
								sx={{
									marginBottom: 1,
									input: { padding: '12px' },
								}}
							/>
							<CssTextField
								label='Email'
								fullWidth
								required
								type='email'
								sx={{
									marginBottom: 1,
									input: { padding: '12px' },
								}}
							/>
							<CssTextField
								label='Celular'
								fullWidth
								required
								type='text'
								sx={{
									marginBottom: 1,
									input: { padding: '12px' },
								}}
							/>
							<Button
								sx={{
									width: '100%',
									height: '45px',
									backgroundColor: Colors.info3,
									borderRadius: 60,
									mt: 2,
									':hover': {
										backgroundColor: Colors.info4,
									},
								}}
								variant='contained'
								endIcon={<SendIcon />}
							>
								Enviar
							</Button>
						</CardContent>
					</Card>
				</Grid>
			</Grid>


			<Box sx={{ width: '100%', py: 5 }}>
				<Card
					sx={{
						margin: 'auto',
						width: '95%',
						borderRadius: 10,
						mt: '4rem',
						p: 2,
						boxShadow: 5,
						transition: 'transform 0.3s ease',

						'&:hover': {
							transform: 'translateY(-15px)',
						},
					}}
				>
					<CardContent>
						<Typography
							variant='h4'
							sx={{
								textAlign: 'center',
								fontWeight: 'bold',
								mt: 2,
								color: Colors.info3,
							}}
						>
							Ponte en contacto con nosotros
						</Typography>
						<Grid container spacing={2} mt={'4rem'}>
							{/* Iconos en contacto */}
							<Grid item xs={12} sm={4} sx={{ textAlign: 'center' }}>
								<Fab sx={{ color: Colors.fondo, width: 60, height: 60 }}>
									<RoomIcon sx={{ width: '80%', height: '80%' }} />
								</Fab>
								<Typography
									variant='h5'
									sx={{ fontWeight: 'bold', mt: 3, color: Colors.info4 }}
								>
									Ubicación
								</Typography>
								<Typography variant='body1'>
									Centro Comercial Campanario, Oficina 405
								</Typography>
							</Grid>
							<Grid item xs={12} sm={4} sx={{ textAlign: 'center' }}>
								<Fab sx={{ color: Colors.fondo, width: 60, height: 60 }}>
									<CallIcon sx={{ width: '80%', height: '80%' }} />
								</Fab>
								<Typography
									variant='h5'
									sx={{ fontWeight: 'bold', mt: 3, color: Colors.info4 }}
								>
									Teléfono
								</Typography>
								<Typography variant='body1'>321670654</Typography>
							</Grid>
							<Grid item xs={12} sm={4} sx={{ textAlign: 'center' }}>
								<Fab sx={{ color: Colors.fondo, width: 60, height: 60 }}>
									<MailIcon sx={{ width: '80%', height: '80%' }} />
								</Fab>
								<Typography
									variant='h5'
									sx={{ fontWeight: 'bold', mt: 3, color: Colors.info4 }}
								>
									Correo
								</Typography>
								<Typography variant='body1'>info@terranova.com.co</Typography>
							</Grid>
						</Grid>
					</CardContent>
				</Card>
				
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
		</>
	);
}
