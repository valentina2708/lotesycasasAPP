import React from 'react';
import ProjectsToVisit from '/src/components/ProjectsToVisit';
import CarouselHome from '/src/components/CarouselHome';
import WelcomeMessage from '/src/components/WelcomeMessage';
import MainProjects from '/src/components/ProjectsInfo/MainProjects';
import  NewProjectInfo from '/src/components/NewProjectInfo';
import HomeInfo from '/src/components/HomeInfo';

export default function HomeLayout() {
	return (
		<div>
			<CarouselHome />
			
			<WelcomeMessage/>
			<ProjectsToVisit/>
			<MainProjects/>
			<NewProjectInfo/>
			<HomeInfo/>
		
		</div>
	);
}
