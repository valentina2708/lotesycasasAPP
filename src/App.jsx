import { Grid } from '@mui/material';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { useLayoutEffect } from 'react';
import Appbar from './components/common/Appbar';
import Footer from './components/common/Footer';
import './App.css';
import HomeLayout from './components/layout/HomeLayout';
import AboutLayout from './components/layout/AboutLayout';
import ContactLayout from './components/layout/ContactLayout';
import ProjectLayout from './components/layout/ProjectLayout';
import ProjectDetailsLayout from './components/layout/ProjectDetailsLayout';
import ProjectsUrbanization from './components/projectComponents/Urbanization';
import ProjectsHouses from './components/projectComponents/Houses';



const Wrapper = ({ children }) => {
	const location = useLocation();
	useLayoutEffect(() => {
		document.documentElement.scrollTo(0, 0);
	}, [location.pathname]);
	return children;
};

function App() {
	return (
		<BrowserRouter>
			<Grid>
				<Appbar />

				<Wrapper>
					<Routes>
						<Route exact path='/' element={<HomeLayout />} />
						<Route path='/about' element={<AboutLayout />} />
						<Route path='/contact' element={<ContactLayout />} />
						<Route path='/projects' element={<ProjectLayout />} />
						<Route
							path='/projectDetails/:id'
							element={<ProjectDetailsLayout />}
						/>
						<Route path='/urbanizations' element={<ProjectsUrbanization />} />
						<Route path='/houses' element={<ProjectsHouses />} />
					</Routes>
				</Wrapper>

				<Grid
					mt={0}
					sx={{ alignSelf: 'flex-end', width: '100%', marginTop: '40vh' }}
				>
					<Footer />
				</Grid>
			</Grid>
		</BrowserRouter>
	);
}

export default App;
