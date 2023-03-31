import ProjectsToVisit from '../../components/ProjectsToVisit';
import CarouselHome from '../../components/CarouselHome';
import WelcomeMessage from '../../components/WelcomeMessage';
import MainProjects from '../../components/ProjectsInfo/MainProjects';
import NewProjectInfo from '../../components/NewProjectInfo';
import HomeInfo from '../..//components/HomeInfo';
import InfoPaymentMethods from '../../components/InfoPaymentMethods';
import { motion } from 'framer-motion';

export default function HomeLayout() {
	return (
		<motion.div initial='hidden' animate='show'>
			<CarouselHome />
			<WelcomeMessage />
			<NewProjectInfo />
			<ProjectsToVisit />
			<MainProjects />
			<InfoPaymentMethods />
			<HomeInfo />
		</motion.div>
	);
}
