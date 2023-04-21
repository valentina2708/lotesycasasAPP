import { Colors } from '/src/config/themeConfig.js';
import Fab from '@mui/material/Fab';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function FabIntegrationSnackbar() {
	return (
		<Fab
			color='secondary'
			sx={{
				position: 'relative',
				zIndex:0,
				top: '250px',
				rigth: '30px',
				size: 'small',
				backgroundColor: Colors.info2,
				'&:hover': {
					backgroundColor: Colors.info3,
					opacity: [0.9, 0.7, 0.9],
				},
			}}
		>
			<ArrowForwardIcon  />
		</Fab>
	);
}
