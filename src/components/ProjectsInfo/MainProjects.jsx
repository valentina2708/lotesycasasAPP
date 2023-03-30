import { Box, Grid, Typography, Chip, Stack, Avatar } from '@mui/material';
import { Colors } from '/src/config/themeConfig.js';
import {
	CardMedia,
	CardContent,
	CardHeader,
	Container,
	Card,
} from '@mui/material';
import SeeMoreButton from '/src/components/ProjectsInfo/SeeMoreButton';
import { DataProjects } from '/src/DataProvider/DataProjects.js';
import {
	HolidayVillage,
	Pool,
	Diversity3,
	SportsSoccer,
	Forest,
	BedroomParentOutlined,
	GarageOutlined,
	BathtubOutlined,
} from '@mui/icons-material/';

import Divider from '@mui/material/Divider';

export default function MediaCard() {
	return (
		<Box sx={{ flexGrow: 1, p: '25px 0px' }}>
			<Container
				sx={{
					direction: 'row',

					justifyContent: 'center',

					alignItems: 'center',
				}}
			>
				<Grid
					container
					spacing={{ xs: 3, md: 4 }}
					columns={{ xs: 6, sm: 4, md: 2 }}
				>
					<Grid item xs container direction='column' spacing={2}></Grid>
					{DataProjects.map(project => (
						<Grid item xs={12}>
							<Card
							elevation={8}
								sx={{
									width: '95%',
									height: 360,
									borderRadius: 4,
									display: 'flex',
								}}
							>
								<CardMedia
									component='img'
									sx={{
										width: 350,
										height: 360,
										margin: '0 auto 1.5em',

										'&:hover': {
											backgroundColor: Colors.muted,
											opacity: [0.7],
										},
									}}
									image={project.imagen}
									alt='imagen'
								/>
								<Grid item xs container direction='column' spacing={2}>
									<Grid item xs>
										<CardContent sx={{ flex: '1 0 auto' }}>
											<Typography
												variant='h5'
												component='div'
												sx={{
													fontWeight: 700,
													color: Colors.primary,
													textAlign: 'center',
												}}
											>
												{project.nombre}
											</Typography>
											<CardHeader
												avatar={
													<Avatar
														sx={{ bgcolor: Colors.info3 }}
														variant='rounded'
														elevation={6}
													>
														<HolidayVillage />
													</Avatar>
												}
												title={project.ubicacion}
												subheader={project.tipo}
											/>

											<Typography
												variant='subtitle1'
												color='#696969'
												sx={{ textAlign: 'justify' }}
											>
												{project.descripcion}
											</Typography>

											<Divider variant='middle' />

											<Box sx={{ m: 2, color: Colors.info3 }}>
												{project.tipo === 'Urbanización' ? (
													<Typography
														gutterBottom
														variant='body2'
														fontWeight='500'
													>
														Área de lote: {project.areaDelLote}
													</Typography>
												) : (
													<Typography
														gutterBottom
														variant='body2'
														color='Colors.info3'
													>
														Área de construcción: {project.areaConstruida}
													</Typography>
												)}
											</Box>

											{project.tipo === 'Urbanización' ? (
												<Stack direction='row' spacing={2}>
													<Chip icon={<Pool />} label='Picsina' />
													<Chip icon={<Diversity3 />} label='Zonas Sociales' />
													<Chip icon={<SportsSoccer />} label='Canchas' />
													<Chip icon={<Forest />} label='Zonas Verdes' />
												</Stack>
											) : (
												<Stack direction='row' spacing={2}>
													<Chip
														icon={<BedroomParentOutlined />}
														label={project.habitaciones}
													/>
													<Chip
														icon={<GarageOutlined />}
														label={project.garaje}
													/>
													<Chip
														icon={<BathtubOutlined />}
														label={project.baños}
													/>
													<Chip icon={<Diversity3 />} label='Zonas Sociales' />
												</Stack>
											)}
										</CardContent>
									</Grid>
								</Grid>

								<Grid item>
									<Typography variant='subtitle1' component='div'>
										<Chip
											sx={{
												display: 'flex',
												color: Colors.body_bg,
												position: 'relative',
												top: '20px',
                                                right:'15px',
												bgcolor: Colors.primary,
											}}
											label={project.estado}
										/>
									</Typography>
									<Stack><SeeMoreButton /></Stack>
								
								</Grid>
									
							</Card>
						</Grid>
					))}
				</Grid>
			</Container>
		</Box>
	);
}
