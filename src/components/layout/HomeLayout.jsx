import React from 'react';
import ProjectsToVisit from '/src/components/ProjectsToVisit';
import CarouselHome from '/src/components/CarouselHome';
import WelcomeMessage from '/src/components/WelcomeMessage';
import MainProjects from '/src/components/ProjectsInfo/MainProjects';
import NewProjectInfo from '/src/components/NewProjectInfo';
import HomeInfo from '/src/components/HomeInfo';
import InfoPaymentMethods from '/src/components/InfoPaymentMethods';
import ContactForm from './../ContactForm';
import AboutUs from './../AboutUs';
export default function HomeLayout() {
	return (
		<div>
			<CarouselHome />
			<WelcomeMessage />
			<NewProjectInfo />
			<ProjectsToVisit />
			<MainProjects />
			<InfoPaymentMethods/>
			<HomeInfo />
			<ContactForm/>
			<AboutUs/>
		</div>
	);
}
