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
	Button,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material/';
import { Colors } from '/src/config/themeConfig.js';
import logo from '/src/assets/logoColor.jpg';
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
		{ Name: 'Inicio', Link: '/' },
		{ Name: 'Nosotros', Link: '#' },
		{ Name: 'Proyectos', Link: '#' },
		{ Name: 'Contacto', Link: '#' },
	];
	const [open, SetOpen] = useState(false);
	return (
		<AppBar sx={{ background: '#A15600', fontWeight: 900 }} elevation={0}>
			<StyledToolbar>
				<IconBox sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
				<img
								src={logo}
								alt='logo'
								style={{ width: 100, height:70 }}
							/>
					<Typography
						variant='h6'
						noWrap
						component='a'
						href='/'
						sx={{
							mr: 2,
							display: { xs: 'none', md: 'flex' },
							alignItems: 'center',
							fontWeight: 900,
							letterSpacing: '.1rem',
							textDecoration: 'none',
							color: 'white',
						}}
					>
				
						Casas & Lotes
					</Typography>
				</IconBox>

				<MenuBox sx={{ display: { xs: 'none', sm: 'none', md: 'flex' } }}>
					{MenuItems.map(item => (
						<Button
							variant='text'
							sx={{
								color: Colors.body_bg,
								backgroundColor: Colors.info,
								borderRadius: 0,
								boxShadow: 'none',
								padding: '6px 12px',
								lineHeight: 1.5,
								fontSize: 16,
								'&:hover': {
									backgroundColor: Colors.info3,
									opacity: [0.9, 0.8, 0.9],
									boxShadow: 'none',
									
								},
								'&:active': {
									boxShadow: 'none',
									backgroundColor: Colors.info3,
								},
								'&:focus': {
									boxShadow: '0 0 0 0.1rem',
								},
							}}
						>
							<Typography
								sx={{
									cursor: 'pointer',
								}}
							>
								{item.Name}
							</Typography>
						</Button>
					))}
				</MenuBox>

				<SearchBox>
					<InputBase placeholder='Search ...' sx={{ color: 'white' }} />
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
