import { Colors } from '/src/config/themeConfig.js';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

export default function FabIntegrationSnackbar() {
	return (
		<Fab
			color='secondary'
			sx={{
				position: 'relative',
				top: '1.em',
				left: '100px',
				bottom: '1.em',
				size: 'small',
				backgroundColor: Colors.info2,
				'&:hover': {
					backgroundColor: Colors.info3,
					opacity: [0.9, 0.7, 0.9],
				},
			}}
		>
			<AddIcon />
		</Fab>
	);
}
