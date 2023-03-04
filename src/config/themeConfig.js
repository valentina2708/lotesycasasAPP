import { createTheme } from '@mui/material/styles';

export const Colors = {
	primary: '#3949ab',
	secondary: '#F0EEED',
	success: '#4CAF50',
	info: '#00a2ff',
	danger: '#FF5722',
	dark: '#0e1b20',
	light: '#aaa',
	muted: '#abafb3',
	border: '#DDDFE1',
	inverse: '#2F3D4A',
	
	///////////////
	// Grays
	///////////////
	dim_grey: '#696969',
	dove_gray: '#d5d5d5',
	body_bg: '#f3f6f9',
	light_gray: 'rgb(230,230,230)',
	///////////////
	// Solid Color
	///////////////
	white: '#fff',
	black: '#000',
};

const theme = createTheme({
	typography: {
		fontFamily: ['Poppins', 'Roboto'].join(','),
	},
	container: {
		bgColor: 'black',
	},
	palette: {
		primary: {
			main: Colors.primary,
		},
		secondary: {
			main: Colors.secondary,
		},
	},
});

export default theme;
