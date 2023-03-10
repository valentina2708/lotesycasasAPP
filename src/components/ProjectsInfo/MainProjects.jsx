import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import { Box, Grid, Typography, Chip } from '@mui/material';
import { Colors } from '/src/config/themeConfig.js';
import {
	Button,
	CardMedia,
	CardContent,
	CardActionArea,
	CardActions,
} from '@mui/material';
import HolidayVillageIcon from '@mui/icons-material/HolidayVillage';
import SeeMoreButton from '/src/components/ProjectsInfo/SeeMoreButton';
import { DataProjects } from '/src/DataProvider/DataProjects.js';

export default function MediaCard() {
	return (
		<Box sx={{ flexGrow: 1, p: '25px 0px' }}>
			<Container
				sx={{
					flexDirection: 'column',
					alignItems: 'center',
					textAlign: 'center',
				}}
			>
				<Grid
					container
					spacing={{ xs: 2, md: 3 }}
					columns={{ xs: 4, sm: 8, md: 12 }}
				>
					{DataProjects.map(project => (
						<Grid item xs={4} sm={4} md={4}>
							<Card sx={{ width: 320, height: 530 }}>
								<CardActionArea>
									<CardMedia
										sx={{
											width: 320,
											height: 250,
											margin: '0.5em auto 1.5em',
											'&:hover': {
												backgroundColor: Colors.muted,
												opacity: [0.7],
											},
										}}
										image={project.imagen}
										title='imagen'
									/>
									<Chip
										sx={{ display: 'flex', fontWeight: 'bold' }}
										label={project.tipo}
										icon={<HolidayVillageIcon />}
										variant='outlined'
									/>
									<CardContent>
										<Typography
											gutterBottom
											variant='h6'
											component='div'
											sx={{
												bgcolor: Colors.info,
												fontWeight: 500,
												color: Colors.body_bg,
											}}
										>
											{project.nombre}
										</Typography>

										<Typography variant='subtitle1' color='#696969'>
											{project.descripcionCorta}
										</Typography>

										{project.estado === 'Vendido' ? (
											<Typography variant='h3' color='text.secondary'>
												{project.areaDelLote}
											</Typography>
										) : (
											<Typography variant='body1' sx={{ color: Colors.info2 }}>
												{project.estado}
											</Typography>
										)}
									</CardContent>
								</CardActionArea>
								<SeeMoreButton />
							</Card>
						</Grid>
					))}
				</Grid>
			</Container>
		</Box>
	);
}
