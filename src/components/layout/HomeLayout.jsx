import React from 'react';
import ProjectsToVisit from '/src/components/ProjectsToVisit';
import CarouselHome from '/src/components/CarouselHome';
import WelcomeMessage from '/src/components/WelcomeMessage';
import HouseInfo from '/src/components/ProjectsInfo/HouseInfo';
import ContactForm from '/src/components/ContactForm';

export default function HomeLayout() {
	return (
		<div>
			<CarouselHome />
			<WelcomeMessage/>
			<ProjectsToVisit/>
			<HouseInfo/>
			<ContactForm/>
		</div>
	);
}
