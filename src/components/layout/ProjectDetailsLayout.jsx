import ProjectDetails from '../projectComponents/ProjectDetails';
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
			{/*  <button onClick={() => handleClick(1)}>Mostrar componente 1</button>
      <button onClick={() => handleClick(2)}>Mostrar componente 2</button>
      {id && <ProjectDetails id={id} />}
     
     
     
     
     
     <h1>layout2:{idd}</h1> */}
			<ProjectDetails />
		</Box>
	);
}
