import { Stack, Typography, Grid, Box, Fab, Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedIn from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { Colors } from '../../config/themeConfig';

const menuItems = ['Inicio', 'Servicios', 'Nosotros', 'Contacto'];

export default function FooterBar() {
	return (
		<Box
			sx={{
				backgroundColor: '#161F1E',
				color: 'white',
				p: 4,
				mt: 'auto',
				width: '100%',
				fontWeight: 900,
			}}
		>
			<Grid container spacing={2}>
				{/* Sección de Contacto */}
				<Grid item xs={12} md={4}>
					<Typography variant='h6' gutterBottom>
						Contacto
					</Typography>
					<Stack direction='column' spacing={1}>
						<Stack direction='row' alignItems='center'>
							<PhoneIcon sx={{ mr: 1 }} />
							<Typography>+57 123 456 789</Typography>
						</Stack>
						<Stack direction='row' alignItems='center'>
							<EmailIcon sx={{ mr: 1 }} />
							<Typography>info@casasylotes.com</Typography>
						</Stack>
					</Stack>
				</Grid>

			
				<Grid item xs={12} md={4}>
					<Typography variant='h6' gutterBottom>
						Menú
					</Typography>
					<Stack direction='column' spacing={1}>
						{menuItems.map(item => (
							<Link href={`#${item.toLowerCase()}`} key={item} sx={{color: Colors.body_bg, fontWeight:200}}>
								{item}
							</Link>
						))}
					</Stack>
				</Grid>

				
				<Grid item xs={12} md={4}>
					<Typography variant='h6' gutterBottom sx={{textAlign: 'center', mb:'1rem'}}>
						Síguenos
					</Typography>
					<Stack direction='row' spacing={2} justifyContent='center'>
						<Fab sx={{ color: Colors.fondo }} size='small'>
							<FacebookIcon />
						</Fab>
						<Fab sx={{ color: Colors.fondo }} size='small'>
							<InstagramIcon />
						</Fab>
						<Fab sx={{ color: Colors.fondo }} size='small'>
							<LinkedIn  />
						</Fab>
					</Stack>
				</Grid>
			</Grid>

			{/* Copyright */}
			<Box mt={4} textAlign='center'>
				<Typography variant='body2'>
					© 2023 Casas & Lotes. Todos los derechos reservados.
				</Typography>
			</Box>
		</Box>
	);
}
