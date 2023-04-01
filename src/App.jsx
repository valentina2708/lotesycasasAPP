import { Grid } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import theme from './config/themeConfig';
import Appbar from './components/common/Appbar';
import Footer from './components/common/Footer';
import './App.css';
import HomeLayout from './components/layout/HomeLayout';
import AboutLayout from './components/layout/AboutLayout';
import ContactLayout from './components/layout/ContactLayout';

function App() {
	return (
	
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<Grid style={theme.container}>
					<Grid my={4}>
						<Appbar />
					</Grid>
					<Routes>
						<Route exact path='/' element={<HomeLayout />} />
						<Route path='/about' element={<AboutLayout />} />
						<Route path='/contact' element={<ContactLayout />} />

					</Routes>
					<Grid mt={38} sx={{ alignSelf: 'flex-end', width: '100%' }}>
						<Footer />
					</Grid>
				</Grid>
			</BrowserRouter>
		</ThemeProvider>
	
		
	);
}

export default App;
