import React from 'react';
import ProjectsToVisit from '/src/components/ProjectsToVisit';
import CarouselHome from '/src/components/CarouselHome';
import WelcomeMessage from '/src/components/WelcomeMessage';
import MainProjects from '/src/components/ProjectsInfo/MainProjects';
import NewProjectInfo from '/src/components/NewProjectInfo';
import HomeInfo from '/src/components/HomeInfo';
import InfoPaymentMethods from '/src/components/InfoPaymentMethods';
import { motion } from "framer-motion";

export default function HomeLayout() {
	return (

		   <motion.div initial="hidden" animate="show">
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
