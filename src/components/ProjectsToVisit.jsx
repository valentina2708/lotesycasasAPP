import { Box, Container, styled, Button } from '@mui/material';
import logoImgCB from '../assets/LogoCañaBrava.png';
import Grid from '@mui/material/Grid'; 
import logoImgCD from '../assets/logoCañaDulce.png';
import logoImgP from '../assets/logoPalmeras.png';
import logoImgPS from '../assets/logopuertasdelsol.png';
import { Colors } from '../config/themeConfig.js';
import { useScroll } from "./useScroll";
import { motion } from "framer-motion";
import { milestonesAnimations } from "../animation";

const ProjectsVisit = () => {
	const [element, controls] = useScroll();
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
		 ref={element}
			sx={{
				flexGrow: 1,
				p: '10px 0'
			}}
		>
		 <motion.div className="milestone"
            variants={milestonesAnimations}
            animate={controls}
            transition={{
              delay: 0.02,
              type: "tween",
              duration: 0.3,
            }}
            >
			<Grid container spacing={2} columnSpacing={{ xs: 12, sm: 6, md: 4 }}>
				<CustomContainer>
					<Grid xs={3}>
						<CustomButton>
							<img
								src={logoImgCD}
								alt='logoCañaDulce'
								style={{ width: 230, height: 200 }}
							/>
						</CustomButton>
					</Grid>
					<Grid xs={3}>
						<CustomButton>
							<img
								src={logoImgCB}
								alt='logoCañaBrava'
								style={{ width: 210, height: 190 }}
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
					
					<Grid xs={3}>
						<CustomButton>
							<img
								src={logoImgPS}
								alt='logoPalmeras'
								style={{ width: 190, height: 210 }}
							/>
						</CustomButton>
					</Grid>

				
				</CustomContainer>
			</Grid>
			</motion.div>
		</Box>
	);
};

export default ProjectsVisit;
