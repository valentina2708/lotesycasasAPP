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
		
		},
	}));

	const CustomBox = styled(Box)(({ theme }) => ({
		[theme.breakpoints.down('md')]: {
			marginBottom: theme.spacing(4),
		},
	}));

	return (
		<Box sx={{ flexGrow: 1,	p: '30px 0px' }}>
			<Grid container spacing={0.5} minHeight={100}>
				<CustomContainer>
					<Grid >
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
								style={{ width: 400, height: 240 }}
							/>
						</CustomBox>
					</Grid>
					<Grid display='flex' justifyContent='center' alignItems='center'>
						<CustomBox>
							<img
								src={logoImgP}
								alt='logoPalmeras'
								style={{ width: 250, height: 170 }}
							/>
						</CustomBox>
					</Grid>
					<Grid xs display='flex' justifyContent='center' alignItems='center'>
						<CustomBox>
							<img
								src={logoImgPS}
								alt='logoPalmeras'
								style={{ width: 190, height: 210 }}
							/>
						</CustomBox>
					</Grid>
				</CustomContainer>
			</Grid>
		</Box>
	);
};

export default Companies;
