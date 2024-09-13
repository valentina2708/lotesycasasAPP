
import CarouselHome from '../../components/CarouselHome';
import WelcomeMessage from '../../components/WelcomeMessage';
import MainProjects from '../../components/ProjectsInfo/MainProjects';
import NewProjectInfo from '../../components/NewProjectInfo';
import HomeInfo from '../..//components/HomeInfo';
import InfoPaymentMethods from '../../components/InfoPaymentMethods';
import { Box } from '@mui/material';

import { motion } from 'framer-motion';

export default function HomeLayout() {
	return (
		<motion.div initial='hidden' animate='show'>
			<CarouselHome />
			<WelcomeMessage />
			<MainProjects />
			<NewProjectInfo />
			<Box sx={{ padding: 0, margin: 0 }}><InfoPaymentMethods />
			<HomeInfo  /></Box>
			
		</motion.div>
	);
}
