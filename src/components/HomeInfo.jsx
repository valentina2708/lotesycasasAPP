import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import { Colors } from '/src/config/themeConfig.js';
import Fade from '@mui/material/Fade';
import { Button } from '@mui/material';
import { Container } from '@mui/material';



export default function BasicStack() {

	return (
		<Box
			sx={{
				justifyContent: 'center',
				alignItems: 'center',
				p: '20px 0px',
				bgcolor: Colors.info,
			}}
		>
			<Typography
				TransitionComponent={Fade}
				TransitionProps={{ timeout: 600 }}
				variant='h2'
				sx={{
					color: Colors.body_bg,
					fontWeight: 'bold',
					mt: 2,
					textAlign: 'center',
					spacing: 4,
				}}
			>
				Encontraremos el lugar perfecto para ti, comunícate hoy con un experto.
			</Typography>
			<Container>
		
				<Button
				    size="large"
					variant="contained" 
					sx={{
						left: '43%',
						mt: '20px',
						backgroundColor: 'Colors.info',
					}}
				>
					Escríbenos
				</Button>
			</Container>
		</Box>
	);
}
