import ProjectDetails from '../projectComponents/ProjectDetails';
import { useState, useEffect } from 'react';
import { Box } from '@mui/material';

export default function ProyectDetailsLayout() {
	/* const idf=props.id
 const idd=idf

 const [id, setId] = useState(null);
  
 const handleClick = (id) => {
   id=idd;
  setId(id);
 }
 */

	return (
		<Box sx={{ margin: '0vh' }}>
			<ProjectDetails />
		</Box>
	);
}
