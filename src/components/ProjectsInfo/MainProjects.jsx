import { Box, Typography, Chip, Stack, Avatar, Button } from '@mui/material';
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
import { Link } from 'react-router-dom';
import {
	HolidayVillage,
	Pool,
	Diversity3,
	Forest,
	BedroomParentOutlined,
	GarageOutlined,
	BathtubOutlined,
	TimeToLeave,
} from '@mui/icons-material/';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import { motion } from 'framer-motion';
import { useScroll } from '../useScroll';
import { servicesAnimations } from '../../animation';
import Modal from '../ProjectsInfo/Modal';
import { useState } from 'react';

import styled from 'styled-components';
import ProjectDetails from '../projectComponents/ProjectDetails';
import App from '../../App';
import ProyectDetailsLayout from '../layout/ProjectDetailsLayout';

const Contenido = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	img {
		width: 800px;
		min-height: 500px;
		vertical-align: top;
		border-radius: 3px;
	}
`;

export default function MediaCard() {
	const [element, controls] = useScroll();

	const [estadoModal1, cambiarEstadoModal1] = useState(false);
	const [estadoModal2, cambiarEstadoModal2] = useState(false);
	const [estadoModal3, cambiarEstadoModal3] = useState(false);
	const [estadoModal4, cambiarEstadoModal4] = useState(false);

	const [id, setId] = useState(null);

	return (
		<Box ref={element} sx={{ flexGrow: 1, p: '40px 0px' }}>
			<Container
				sx={{
					direction: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					gap: '15px',
				}}
			>
				<Grid
					container
					// columnSpacing={{ xs: 1, sm: 2, md: 3 }}
					// columns={{xs: 6, sm: 12}}
					rowSpacing={6}
				>
					{DataProjects.map(project => (
						<Grid item xs={12} key={project.id}>
							<motion.div
								// className='home'
								variants={servicesAnimations}
								animate={controls}
								transition={{
									delay: 0.02,
									type: 'tween',
									duration: 0.2,
								}}
							>
								<Card
									elevation={4}
									sx={{
										width: '100%',
										// height: '100%',
										borderRadius: 4,
										display: 'flex',
									}}
								>
									{/* <CardMedia
										component='img'
										sx={{
											width: 300,
											height: 320,
											margin: '0 auto 1.5em',
											cursor: 'pointer',

											'&:hover': {
												backgroundColor: Colors.muted,
												opacity: [0.7],
											},
										}}
										image={project.imagen}
										alt='imagen'
									/> */}
									<Grid container>
										{/* <Grid item xs={4}>
										<Box>
													<img src={project.imagen} width={'100%'} height={'100%'}/>
												</Box>
										</Grid> */}
										<Grid item>
											<CardContent
												sx={{ 
												// flex: '1 0 auto', 
												p: ' 15px 40px 0 40px' 
												}}
											>
												<Stack
													direction={'row'}
													sx={{ justifyContent: 'space-between' }}
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
													<Chip
														sx={{
															fontSize: '12px',
															display: 'flex',
															color: Colors.body_bg,
															position: 'relative',
															// top: '20px',
															// right: '30px',

															bgcolor: Colors.primary,
														}}
														label={project.estado}
													/>
												</Stack>
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
													{project.tipo === 'Proyecto Urbanización' ? (
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

												<Stack
													direction={{ xs: 'column', sm: 'row' }}
													sx={{
														alignItems: 'center',
														justifyContent: 'space-between',
													}}
												>
													{project.tipo === 'Urbanización' ? (
														<Stack
															direction={{ xs: 'column', sm: 'row' }}
															spacing={2}
														>
															<Chip
																icon={<Pool />}
																label='Piscina'
																onClick={() =>
																	cambiarEstadoModal1(!estadoModal1)
																}
															/>
															<Chip
																icon={<Diversity3 />}
																label='Zonas Sociales'
																onClick={() =>
																	cambiarEstadoModal2(!estadoModal2)
																}
															/>
															<Chip
																icon={<TimeToLeave />}
																label='Porteria'
																onClick={() =>
																	cambiarEstadoModal3(!estadoModal3)
																}
															/>
															<Chip
																icon={<Forest />}
																label='Zonas Verdes'
																onClick={() =>
																	cambiarEstadoModal4(!estadoModal4)
																}
															/>
														</Stack>
													) : (
														//

														<Stack
															direction={{ xs: 'column', sm: 'row' }}
															spacing={2}
														>
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
															<Chip
																icon={<Diversity3 />}
																label='Zonas Sociales'
															/>
														</Stack>
													)}
													{project.act === 'v' && (
														<Link to={`/ProjectDetails/${project.id}`}>
															<SeeMoreButton />
														</Link>
													)}
												</Stack>

												<Modal
													estado={estadoModal1}
													cambiarEstado={cambiarEstadoModal1}
													mostrarOverlay={true}
													posicionModal={'center'}
													padding={'0px'}
												>
													<Contenido>
														<img src='/src/assets/pisina1.png' alt='pisina' />
													</Contenido>
												</Modal>
												<Modal
													estado={estadoModal2}
													cambiarEstado={cambiarEstadoModal2}
													mostrarOverlay={true}
													posicionModal={'center'}
													padding={'0px'}
												>
													<Contenido>
														<img
															src='/src/assets/terraza2_1.jpg'
															alt='zonaSocial'
														/>
													</Contenido>
												</Modal>
												<Modal
													estado={estadoModal3}
													cambiarEstado={cambiarEstadoModal3}
													mostrarOverlay={true}
													posicionModal={'center'}
													padding={'0px'}
												>
													<Contenido>
														<img
															src='/src/assets/porteria.jpg'
															alt='porteria'
														/>
													</Contenido>
												</Modal>
												<Modal
													estado={estadoModal4}
													cambiarEstado={cambiarEstadoModal4}
													mostrarOverlay={true}
													posicionModal={'center'}
													padding={'0px'}
												>
													<Contenido>
														<img src='/src/assets/parque.jpg' alt='parque' />
													</Contenido>
												</Modal>
											</CardContent>
										</Grid>
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
