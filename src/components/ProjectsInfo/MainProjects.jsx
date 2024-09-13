import React, { useState } from 'react';
import {
	Box,
	Typography,
	Chip,
	Stack,
	Avatar,
	Container,
	Card,
	CardContent,
	CardHeader,
	Grid,
	Divider,
	Tooltip,
	CardMedia,
} from '@mui/material';
import { Colors } from '/src/config/themeConfig.js';
import { motion } from 'framer-motion';
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
} from '@mui/icons-material';
import Modal from '../ProjectsInfo/Modal';
import styled from 'styled-components';
import { useScroll } from '../useScroll';
import { servicesAnimations } from '../../animation';

const Contenido = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	img {
		width: 100%;
		height: auto;
		max-height: 500px;
		border-radius: 3px;
		object-fit: cover; /* Mantener la proporción */
	}
`;

export default function MediaCard() {
	const [element, controls] = useScroll();

	const [estadoModal1, cambiarEstadoModal1] = useState(false);
	const [estadoModal2, cambiarEstadoModal2] = useState(false);
	const [estadoModal3, cambiarEstadoModal3] = useState(false);
	const [estadoModal4, cambiarEstadoModal4] = useState(false);

	return (
		<Box ref={element} sx={{ flexGrow: 1, p: '40px 0px', mt: '3rem' }}>
			<Container
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					gap: '15px',
				}}
			>
				<Grid container spacing={4}>
					{DataProjects.slice(0, 6).map(project => (
						<Grid item xs={12} sm={6} md={4} key={project.id}>
							<motion.div
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
										display: 'flex',
										flexDirection: 'column',
										justifyContent: 'space-between',
										height: '450',
										//minHeight: '450px',
										borderRadius: 4,
										overflow: 'hidden',
									}}
								>
									<CardContent
										sx={{
											p: '15px 20px',
											display: 'flex',
											flexDirection: 'column',
											justifyContent: 'space-between',
											flexGrow: 1,
										}}
									>
										<Stack
											direction={'row'}
											sx={{ justifyContent: 'space-between', mb: 2 }}
										>
											<Typography
												variant='h6'
												component='div'
												sx={{
													fontWeight: 700,
													color: Colors.fondo,
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
													bgcolor: Colors.info3,
												}}
												label={project.estado}
											/>
										</Stack>

										{/* Imagen clicable con CardMedia */}
										<Link
											to={`/ProjectDetails/${project.id}`}
											style={{ textDecoration: 'none' }}
										>
											<CardMedia
												component='img'
												image={project.imagen}
												alt={project.nombre}
												sx={{
													height: 200,
													borderRadius: '8px',
													cursor: 'pointer',
													transition: 'transform 0.3s ease-in-out',
													'&:hover': {
														transform: 'scale(1.05)',
													},
												}}
											/>
										</Link>

										<CardHeader
											sx={{ ml: '-1rem' }}
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
											variant='subtitle2'
											color='#696969'
											sx={{ textAlign: 'justify', mb: 2 }}
										>
											{project.descripcion}
										</Typography>
										<Divider sx={{ mb: 2 }} />
										<Box sx={{ mb: 2, color: Colors.info3 }}>
											{project.tipo === 'Urbanización' ? (
												<Typography
													gutterBottom
													variant='body2'
													fontWeight='500'
												>
													Área de lote: {project.areaDelLote}
												</Typography>
											) : (
												<Typography gutterBottom variant='body2'>
													Área de construcción: {project.areaConstruida}
												</Typography>
											)}
										</Box>
										<Stack
											direction={{ xs: 'column', sm: 'row' }}
											sx={{
												alignItems: 'center',
												justifyContent: 'space-between',
												mb: 2,
											}}
											spacing={2}
										>
											{project.tipo === 'Urbanización' ? (
												<Stack
													direction={{ xs: 'column', sm: 'row' }}
													spacing={1}
												>
													<Tooltip title='Piscina'>
														<Chip
															icon={<Pool />}
															onClick={() => cambiarEstadoModal1(!estadoModal1)}
														/>
													</Tooltip>
													<Tooltip title='Zonas Sociales'>
														<Chip
															icon={<Diversity3 />}
															onClick={() => cambiarEstadoModal2(!estadoModal2)}
														/>
													</Tooltip>
													<Tooltip title='Porteria'>
														<Chip
															icon={<TimeToLeave />}
															onClick={() => cambiarEstadoModal3(!estadoModal3)}
														/>
													</Tooltip>
													<Tooltip title='Zonas Verdes'>
														<Chip
															icon={<Forest />}
															onClick={() => cambiarEstadoModal4(!estadoModal4)}
														/>
													</Tooltip>
												</Stack>
											) : (
												<Stack
													direction={{ xs: 'column', sm: 'row' }}
													spacing={1}
												>
													<Tooltip title='Habitaciones'>
														<Chip icon={<BedroomParentOutlined />} />
													</Tooltip>
													<Tooltip title='Garaje'>
														<Chip icon={<GarageOutlined />} />
													</Tooltip>
													<Tooltip title='Baños'>
														<Chip icon={<BathtubOutlined />} />
													</Tooltip>
													<Tooltip title='Zonas Sociales'>
														<Chip icon={<Diversity3 />} />
													</Tooltip>
												</Stack>
											)}
										</Stack>
									</CardContent>
								</Card>
							</motion.div>
						</Grid>
					))}
				</Grid>
			</Container>
		</Box>
	);
}
