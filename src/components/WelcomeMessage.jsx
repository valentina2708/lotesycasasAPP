import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import { Colors } from '/src/config/themeConfig.js';
import { useScroll } from './useScroll';
import { motion } from 'framer-motion';
import { mensajebox } from '../animation';
import Grid from '@mui/material/Grid';
import GroupIcon from '@mui/icons-material/Group';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import StarIcon from '@mui/icons-material/Star';
import { cloneElement } from 'react';
import fondo from '/src/assets/fondo.jpeg';

export default function BasicStack() {
	const [element, controls] = useScroll();

	return (
		<Box
			ref={element}
			sx={{
				width: '100%',
				minHeight: '40vh',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				//backgroundColor: Colors.primary,
				//opacity: [0.8, 0.6, 0.8],

				padding: '3% 0',
			}}
		>
			{/* <motion.div
				className='milestone'
				variants={mensajebox}
				animate={controls}
				transition={{
					delay: 0.03,
					type: 'tween',
					duration: 0.8,
				}}
			> */}
				<Box
					sx={{
						mt: 5,
						
					}}
				>
					<Grid
						container
						spacing={{ xs: 4, md: 6 }}
						justifyContent='center'
						alignItems='stretch'
					>
						{[
							{ icon: <GroupIcon />, label: 'Clientes Satisfechos' },
							{ icon: <StarIcon />, label: 'Efectividad' },
							{
								icon: <AssignmentTurnedInIcon />,
								label: 'Proyectos Terminados',
							},
						].map((item, index) => (
							<Grid
								item
								xs={12}
								sm={6}
								md={4}
								key={index}
								sx={{ display: 'flex', justifyContent: 'center' }}
							>
								<Box
									sx={{
										display: 'flex',
										flexDirection: 'column',
										alignItems: 'center',
										textAlign: 'center',
										gap: 2,
										padding: 2,
										backgroundColor: Colors.fondo,
										borderRadius: 2,
										//boxShadow: '0 4px 4px rgba(0, 0, 0, 0)',
										transition: 'transform 0.3s ease',

										'&:hover': {
											transform: 'translateY(-15px)',
										},
										minHeight: 200,
										width: '100%',
										maxWidth: 200,
									}}
								>
									{cloneElement(item.icon, {
										sx: { fontSize: 70, color: Colors.info3 },
									})}
									<Typography
										variant='h6'
										sx={{
											color: Colors.body_bg,
											fontWeight: '500',
										}}
									>
										{item.label}
									</Typography>
								</Box>
							</Grid>
						))}
					</Grid>
				</Box>
			{/* </motion.div> */}
		</Box>
	);
}







