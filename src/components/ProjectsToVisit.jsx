import { Box, Container, styled, Button } from '@mui/material';
import logoImgCB from '../assets/LogoCañaBrava.png';
import Grid from '@mui/material/Unstable_Grid2';
import logoImgCD from '../assets/logoCañaDulce.png';
import logoImgP from '../assets/logoPalmeras.png';
import logoImgPS from '../assets/logopuertasdelsol.png';
import { Colors } from '../config/themeConfig.js';

const ProjectsVisit = () => {
	const CustomContainer = styled(Container)(({ theme }) => ({
		display: 'flex',
		[theme.breakpoints.down('md')]: {
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
		},
	}));

	const CustomButton = styled(Button)(({ theme }) => ({
		marginBottom: theme.spacing(3),
		cursor: 'pointer',
		boxShadow: 'none',
		textTransform: 'none',
		'&:hover': {
			backgroundColor: Colors.border,
			opacity: [0.7],
		},
		
	}));
	return (
		<Box
			sx={{
				flexGrow: 1,
				p: '20px 0px',
			}}
		>
			<Grid container spacing={2} columnSpacing={{ xs: 12, sm: 6, md: 4 }}>
				<CustomContainer>
					<Grid xs={3}>
						<CustomButton>
							<img
								src={logoImgCD}
								alt='logoCañaDulce'
								style={{ width: 210, height: 200 }}
							/>
						</CustomButton>
					</Grid>
					<Grid xs={3}>
						<CustomButton>
							<img
								src={logoImgCB}
								alt='logoCañaBrava'
								style={{ width: 200, height: 190 }}
							/>
						</CustomButton>
					</Grid>
					<Grid xs={3}>
						<CustomButton>
							<img
								src={logoImgPS}
								alt='logoPalmeras'
								style={{ width: 170, height: 210 }}
							/>
						</CustomButton>
					</Grid>

					<Grid xs={3}>
						<CustomButton>
							<img
								src={logoImgP}
								alt='logoPalmeras'
								style={{ width: 250, height: 180 }}
							/>
						</CustomButton>
					</Grid>
					
				</CustomContainer>
			</Grid>
		</Box>
	);
};

export default ProjectsVisit;
