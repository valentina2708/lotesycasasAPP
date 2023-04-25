import Urbanization from '../projectComponents/Urbanization';
import Houses from '../projectComponents/Houses';
import { Box } from '@mui/material';
import React from 'react';

export default function ProjectLayout() {
	return (
		<Box sx={{ marginTop: '5rem' }}>
			{/*<Pictures/>*/}

		<Urbanization />
      	{/*<Houses/>*/}
		</Box>
	);
}
