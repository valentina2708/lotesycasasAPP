import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import { Colors } from '/src/config/themeConfig.js';
import { Button, Card, CardMedia, CardContent, Avatar} from '@mui/material';
import { useScroll } from "./useScroll";
import { motion } from "framer-motion";
import { milestonesAnimations } from "../animation";
import PointOfSaleRoundedIcon from '@mui/icons-material/PointOfSaleRounded';

export default function BasicStack() {
	const [element, controls] = useScroll();
	return (
		<Box  ref={element}
			sx={{
				p:'10px 0px ',
				
			}}
		>
		 <motion.div className="milestone"
            variants={milestonesAnimations}
            animate={controls}
            transition={{
              delay: 0.03,
              type: "tween",
              duration: 0.4,
            }}
            >
			<Stack
				sx={{
					justifyContent: 'center',
					alignItems: 'center',
					bgcolor: Colors.info,
					position: 'relative',
					left: '23%',
					width: '50%',
					height: 180,
				}}
			></Stack>
			<Card
				sx={{
					width: 820,
					height: 450,
					position: 'relative',
					left: '15%',
					bottom: '110px',
				}}
			>
				<CardMedia
					component='img'
					sx={{
						width: 820,
						height: 450,
						cursor: 'pointer',
						'&:hover': {
							backgroundColor: Colors.muted,
							opacity: [0.9],
						},
					}}
					image='../../src/assets/vendeconNosotros.jpg'
					title='visitanos'
				/>
			</Card>
			<Card
				elevation={4}
				sx={{
					width: 460,
					height: 370,
					bgcolor: Colors.white,
					position: 'relative',
					left: '47%',
					bottom: '300px',
					p: '10px 0'
				}}
			>
				<CardContent>
					<Typography
						variant='h4'
						sx={{
							color: Colors.info2,
							fontWeight: 500,
							mt: 2,
							textAlign: 'center',
							
						}}
					>
						Vende con Nosotros
					</Typography>
					<Avatar
							sx={{
								width: 75,
								height: 70,
								bgcolor: Colors.info3,
								position: 'relative',
								left:'40%',
								mt: '25px'
								
							}}
						>
							<PointOfSaleRoundedIcon sx={{ fontSize: 40 }} />
						</Avatar>
					<Typography sx={{mt: '20px'}} variant='h5' textAlign='center'>
						Estamos dispuestos a brindarte toda la informacion. Comunícate hoy con un experto!
					</Typography>
					
					
				</CardContent>

				<Button
					size='large'
					variant='contained'
					sx={{
						left: '35%',
						mt: '20px',
						backgroundColor: 'Colors.info',
					}}
				>
					Escríbenos
				</Button>
			</Card>
			</motion.div>
		</Box>
	);
}
