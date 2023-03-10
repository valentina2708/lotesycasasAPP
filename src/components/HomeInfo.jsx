import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import { Colors } from '/src/config/themeConfig.js';
import Fade from '@mui/material/Fade';
import { Button } from '@mui/material';

export default function BasicStack() {
	return (
		<Box
			sx={{
				width: '100%',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				p: '70px 0px',
				bgcolor: Colors.info3
			}}
		>
			<Stack spacing={2}>
				<Typography
				  TransitionComponent={Fade}
                  TransitionProps={{ timeout: 600 }}
					variant='h2'
					sx={{
						color: Colors.body_bg,
						fontWeight: 'bold',
						mt: 2,
                        textAlign: 'center'
					}}
				>
					Encontraremos el lugar perfecto para ti, comunícate hoy con un experto.
				</Typography>
                <Button size="medium" >Whatsapp</Button>
			</Stack>
          
		</Box>
	);
}
