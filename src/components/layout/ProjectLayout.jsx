import Urbanization from '../projectComponents/Urbanization';
import Houses from '../projectComponents/Houses';
import ProjectsSelector from '../ProjectsSelector';
import urbanizacion from '../../assets/urbanizacion.jpg';
import { Parallax } from 'react-parallax';

export default function ProjectLayout() {
	return (
	
			<Parallax
				style={{
					width: '100%',
					height: '100%',
					opacity: [10],
				}}
				bgImage={urbanizacion}
				strength={300}
			>
				<ProjectsSelector />
			</Parallax>
	
	);
}
