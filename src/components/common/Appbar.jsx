import React, { useState } from 'react';
import {
	AppBar,
	Box,
	InputBase,
	Menu,
	MenuItem,
	styled,
	Toolbar,
	Typography,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material/';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import casasylotes from '../../assets/logocasasylotes.png';

const Appbar = () => {
	const StyledToolbar = styled(Toolbar)({
		display: 'flex',
		justifyContent: 'space-between',
	});
	const IconBox = styled(Box)({
		display: 'flex',
		gap: 10,
	});
	const MenuBox = styled(Box)({
		display: 'flex',
		gap: 30,
	});
	const SearchBox = styled(Box)({
		display: 'flex',
		gap: 5,
		
	
	});
	const MenuItems = [
		{ Name: 'Home', Link: '/' },
		{ Name: 'Nosotros', Link: '#' },
		{ Name: 'Proyectos', Link: '#' },
		{ Name: 'Contacto', Link: '#' },
	];
	const [open, SetOpen] = useState(false);
	return (
		<AppBar
			sx={{ background: '#FE6B1D', heigth: 900, fontWeight: 900 }}
			elevation={0}
		>
			<StyledToolbar>
				<IconBox>
				
				<div style={{display: 'flex',height:'70px', padding:'5px', borderRadius:'50' }}><img src={casasylotes}  /> </div>	
					
					
				</IconBox>

				<MenuBox sx={{ display: { xs: 'none', sm: 'none', md: 'flex' } }}>
					{MenuItems.map(item => (
						<Typography
							sx={{
								cursor: 'pointer',
								fontSize: '14px',
							}}
						>
							{item.Name}
						</Typography>
					))}
				</MenuBox>

				<SearchBox>
					<InputBase placeholder='Buscar...' sx={{ color: 'white' }} />
					<MenuIcon
						sx={{
							color: 'white',
							display: { xs: 'block', sm: 'block', md: 'none' },
						}}
						onClick={() => SetOpen(!open)}
					/>
				</SearchBox>
			</StyledToolbar>
			<Menu
				id='demo-positioned-menu'
				aria-labelledby='demo-positioned-button'
				open={open}
				onClose={() => SetOpen(!open)}
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'left',
				}}
			>
				<Box sx={{ width: 350, height: '30vh' }}>
					{MenuItems.map(item => (
						<MenuItem
							sx={{
								cursor: 'pointer',
								fontSize: '14px',
							}}
						>
							{item.Name}
						</MenuItem>
					))}
				</Box>
			</Menu>
		</AppBar>
	);
};

export default Appbar;
