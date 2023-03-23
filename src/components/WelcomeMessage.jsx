import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import { Colors } from '/src/config/themeConfig.js';
import Fade from '@mui/material/Fade';

export default function BasicStack() {
	return (
		<Box
			sx={{
				width: '100%',
				border: 'none',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				p: '70px 0px',
				overflow: 'hidden',
			}}
		>
			<Stack spacing={2}>
				<Typography
				  TransitionComponent={Fade}
                  TransitionProps={{ timeout: 600 }}
					variant='h2'
					sx={{
						color: Colors.primary,
						fontWeight: 'bold',
						mt: 2,
					}}
				>
					Encuentra el proyecto de tus sueños
				</Typography>
			</Stack>
		</Box>
	);
}
