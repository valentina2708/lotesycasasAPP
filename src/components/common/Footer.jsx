import { Stack, Typography, Fab, Grid } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function FooterBar() {
	return (
		<Grid
			container
			alignItems='center'
			display='flex'
		
			columns={{ xs: 12, md: 12 }}
			spacing={{ xs: 2, md: 1 }}
			sx={{ height: 200, background: 'black', fontWeight: 900 }}
		>
			<Grid item xs={12} md={6}>
				<Stack
					direction='row'
					spacing={2}
					alignItems='center'
					justifyContent='center'
				>
					<Typography fontSize={14} color={'white'}>
						© 2023 Casas & Lotes. Todos los derechos reservados
					</Typography>
				</Stack>
			</Grid>
			<Grid item xs={12} md={6} alignItems='center'>
				<Stack
					direction='row'
					spacing={2}
					alignItems='center'
					justifyContent='center'
				>
					<Typography fontSize={14} color={'white'} letterSpacing={2}>
						Síguenos
					</Typography>
					<Stack direction='row' spacing={1}>
						<Fab sx={{ color: 'gray' }} size='small'>
							<FacebookIcon />
						</Fab>
						<Fab sx={{ color: 'gray' }} size='small'>
							<InstagramIcon />
						</Fab>
						<Fab sx={{ color: 'gray' }} size='small'>
							<TwitterIcon />
						</Fab>
						<Fab sx={{ color: 'gray' }} size='small'>
							<YouTubeIcon />
						</Fab>
						<Fab sx={{ color: 'gray' }} size='small'>
							<LinkedInIcon />
						</Fab>
					</Stack>
				</Stack>
			</Grid>
		</Grid>
	);
}
