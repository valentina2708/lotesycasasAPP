import { Box, Typography, Chip, Stack, Avatar } from '@mui/material';
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
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import { motion } from "framer-motion";
import { useScroll } from "../useScroll";
import {servicesAnimations } from "../../animation";

export default function MediaCard() {
	const [element, controls] = useScroll();
	return (

		<Box ref={element}
		 sx={{ flexGrow: 1, p: '40px 0px' }}>

		
			<Container
				sx={{
					direction: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					gap:'15px'
				}}
			>
				<Grid
					item
					xs
					container
					columnSpacing={{ xs: 1, sm: 2, md: 3 }}
					direction='column'
					rowSpacing={6}
				>
					{DataProjects.map(project => (
						<Grid item xs={12}>
						<motion.div className="home"
		     variants={servicesAnimations}
              animate={controls}
              transition={{
                delay: 0.02,
                type: "tween",
                duration: 0.2,
              }}
			  >
							<Card
								elevation={4}
								sx={{
									width: '94%',
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
										cursor: 'pointer',

										'&:hover': {
											backgroundColor: Colors.muted,
											opacity: [0.7],
										},
									}}
									image={project.imagen}
									alt='imagen'
								/>
								<Grid item xs container direction='column'>
									<Grid item xs>
										<CardContent
											sx={{ flex: '1 0 auto', p: ' 15px 40px 0 40px' }}
										>
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

											<Divider />

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
									<Typography>
										<Chip
											sx={{
												fontSize: '12px',
												display: 'flex',
												color: Colors.body_bg,
												position: 'relative',
												top: '20px',
												right: '30px',

												bgcolor: Colors.primary,
											}}
											label={project.estado}
										/>
									</Typography>
									<Stack>
										<SeeMoreButton />
									</Stack>
								</Grid>
							</Card>
							</motion.div>
						</Grid>
					))}
				</Grid>
			</Container>
			
		</Box>
	);
}
