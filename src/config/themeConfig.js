import createTheme from "@mui/material/styles/createTheme";


export const Colors = {
	primary: '#813315',
	secondary: '#F0EEED',
	success: '#A16553',
	info: '#A15600',
	info2:'#E9601C',
	info3:'#144C42',
	info4:'#447168',
	danger: '#FF5722',
	dark: '#0e1b20', 
	light: '#aaa',
	muted: '#abafb3',
	border: '#DDDFE1',
	'fondo':'rgb(22,31,30)',
	
	
	
	/// ////////////
	// Grays
	/// ////////////
	dim_grey: '#696969',
	dove_gray: '#d5d5d5',
	body_bg: '#f3f6f9',
	light_gray: 'rgb(230,230,230)',
	/// ////////////
	// Solid Color
	/// ////////////
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
		background: {
		default: '#F5F7F8', 
	  },
	},
	
});

export default theme;
