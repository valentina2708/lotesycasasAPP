import Box from '@mui/material/Box';
import {
	Stack,
	CardMedia,
	Card,
	Typography,
	Button,
	List,
	ListItem,
	ListItemText,
	ListItemIcon,
} from '@mui/material';
import { Colors } from '../config/themeConfig.js';
import Grid from '@mui/material/Grid';
import { motion } from 'framer-motion';
import { useScroll } from '../components/useScroll';
import { servicesAnimations } from '../animation.js';
import nosotrosInicio from '/src/assets/fondo.jpeg';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import BuildIcon from '@mui/icons-material/Build'; 
import HomeIcon from '@mui/icons-material/Home';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import EngineeringIcon from '@mui/icons-material/Engineering';

export default function BasicStack() {
	const [element, controls] = useScroll();
	return (
		<Box
			ref={element}
			sx={{
				p: '2% 0',
				width: '100%',
			}}
		>
			<motion.div
				className='home'
				variants={servicesAnimations}
				animate={controls}
				transition={{
					delay: 0.03,
					type: 'tween',
					duration: 0.9,
				}}
			>
				{/* elemento 1 */}
				<Grid containerrowSpacing={3} columnSpacing={{ xs: 12, sm: 6, md: 4 }}>
					<Grid item>
						<Stack
							sx={{
								p: '60px 0px',
								backgroundColor: Colors.info3,
								position: 'relative',
								top: 290,
								//left: '90%',
								right: '0%',
								//border:2
								width: '100%',
							}}
						></Stack>
					</Grid>
					<Grid>
						<Stack
							sx={{
								p: '60px 0px',

								backgroundColor: Colors.info3,
								position: 'relative',
								top: 50,
								//right: '20%',
								//left: '90%',
								width: '100%',
							}}
						></Stack>
					</Grid>
				</Grid>

				{/* elemento 2 */}
				<Card
					elevation={12}
					sx={{
						width: { xs: '90%', sm: '70%' },
						position: 'relative',
						top: '-150px',
						left: { xs: '1rem', sm: '15%', md: '15%' },
						borderRadius: 3,
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<Grid
						container
						rowSpacing={1}
						columns={{ xs: 6, md: 12 }}
						// columnSpacing={{ xs: 12, sm: 6, md: 4 }}
					>
						<Grid item xs={6}>
							<CardMedia
								component='img'
								lazyload
								sx={{
									width: { xs: 360, sm: 480 },
									height: 450,
									cursor: 'pointer',
									'&:hover': {
										backgroundColor: Colors.muted,
										opacity: [0.9],
									},
								}}
								image={nosotrosInicio}
								title='nosotros'
							/>
						</Grid>
						<Grid item xs={6}>
							<Stack
								sx={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									p: '20px',
								}}
							>
								<Typography
									variant='h4'
									sx={{
										color: Colors.fondo,
										fontWeight: 'bold',
										mt: 2,
									}}
								>
									Que Hacemos
								</Typography>
								<Typography variant='body1' sx={{ mt: 3, textAlign:'center' }}>
									Ofrecemos una variedad de servicios según tus necesidades
								</Typography>

								<List sx={{ mt: 3, width: '100%' }}>
									<ListItem>
										<ListItemIcon>
											<BuildIcon sx={{ color: Colors.info3 }} />
										</ListItemIcon>
										<ListItemText primary='Construcción y Remodelación' />
									</ListItem>
									<ListItem>
										<ListItemIcon>
											<HomeIcon sx={{ color: Colors.info3 }} />
										</ListItemIcon>
										<ListItemText primary='Servicios de planificación y construcción' />
									</ListItem>
									<ListItem>
										<ListItemIcon>
											<DesignServicesIcon sx={{ color: Colors.info3 }} />
										</ListItemIcon>
										<ListItemText primary='Diseño de Interiores' />
									</ListItem>
									<ListItem>
										<ListItemIcon>
											<EngineeringIcon sx={{ color: Colors.info3 }} />
										</ListItemIcon>
										<ListItemText primary='Consultoría de Proyectos' />
									</ListItem>
								</List>
								{/* <Link to={`/ProjectDetails/${1}`} className='nav-link'>
									<Button variant='contained'>Ver Más</Button>
								</Link> */}
							</Stack>
						</Grid>
					</Grid>
				</Card>
			</motion.div>
		</Box>
	);
}
