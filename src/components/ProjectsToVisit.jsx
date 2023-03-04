import { Box, Container, styled } from '@mui/material';
import logoImgCB from '../assets/LogoCañaBrava.png';
import Grid from '@mui/material/Unstable_Grid2';
import logoImgCD from '../assets/logoCañaDulce.png';
import logoImgP from '../assets/logoPalmeras.png';
import logoImgPS from '../assets/logopuertasdelsol.png';

const Companies = () => {
	const CustomContainer = styled(Container)(({ theme }) => ({
		display: 'flex',
		[theme.breakpoints.down('md')]: {
			flexDirection: 'column',
			alignItems: 'center',
			textAlign: 'center',
			marginBottom: theme.spacing(2),
		},
	}));

	const CustomBox = styled(Box)(({ theme }) => ({
		[theme.breakpoints.down('md')]: {
			marginBottom: theme.spacing(2),
		},
	}));

	return (
		<Box sx={{ flexGrow: 1 }}>
			

			<Grid container spacing={1} minHeight={150}>
				<CustomContainer>
					<Grid display='flex' justifyContent='center' alignItems='center'>
						<CustomBox>
							<img
								src={logoImgCD}
								alt='logoCañaDulce'
								style={{ width: 210, height: 200 }}
							/>
						</CustomBox>
					</Grid>
					<Grid display='flex' justifyContent='center' alignItems='center'>
						<CustomBox>
							<img
								src={logoImgCB}
								alt='logoCañaBrava'
								style={{ width: 390, height: 240 }}
							/>
						</CustomBox>
					</Grid>
					<Grid display='flex' justifyContent='center' alignItems='center'>
						<CustomBox>
							<img
								src={logoImgP}
								alt='logoPalmeras'
								style={{ width: 210, height: 170 }}
							/>
						</CustomBox>
					</Grid>
					<Grid xs display='flex' justifyContent='center' alignItems='center'>
						<CustomBox>
							<img
								src={logoImgPS}
								alt='logoPalmeras'
								style={{ width: 170, height: 200 }}
							/>
						</CustomBox>
					</Grid>
				</CustomContainer>
			</Grid>
		</Box>
	);
};

export default Companies;
