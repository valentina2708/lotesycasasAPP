// components/Navbar.js
import React, { useState } from 'react';
import {
	AppBar,
	Toolbar,
	Box,
	Button,
	IconButton,
	Menu,
	MenuItem,
	styled,
	Typography,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material/';
import { Facebook, Instagram, LinkedIn } from '@mui/icons-material';
import { Colors } from '../../config/themeConfig';
import logo from '../../assets/logo_terranova2.png';
import { Link } from 'react-router-dom';

const StyledToolbar = styled(Toolbar)({
	display: 'flex',
	justifyContent: 'space-between',
	position: 'absolute',
	top: 0,
	left: 0,
	right: 0,
	zIndex: 10,
	background: 'transparent',
	padding: '0 20px',
	width: '100%',
});

const IconBox = styled(Box)({
	display: 'flex',
	gap: 10,
});
const MenuBox = styled(Box)({
	display: 'flex',
	gap: 20,
});

const Navbar = () => {
	const [open, setOpen] = useState(false);

	const MenuItems = [
		{ Name: 'Inicio', Link: '/' },
		{ Name: 'Nosotros', Link: '/about' },
		{ Name: 'Proyectos', Link: '/projects' },
		{ Name: 'Contacto', Link: '/contact' },
	];

	const SocialLinks = [
		{ icon: <Facebook />, link: 'https://www.facebook.com' },
		{ icon: <Instagram />, link: 'https://www.instagram.com' },
		{ icon: <LinkedIn />, link: 'https://www.linkedin.com' },
	];

	return (
		<AppBar
			position='absolute'
			sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}
		>
			<StyledToolbar>
				<IconBox sx={{ display: { xs: 'none', md: 'flex' }, mr: 2 }}>
					<IconButton sx={{ padding: 0, width: 80, height: 80, ml: 2 }}>
						<img
							src={logo}
							alt='logo'
							style={{ width: '200%', height: '210%' }}
						/>
					</IconButton>
				</IconBox>

				<MenuBox sx={{ display: { xs: 'none', sm: 'none', md: 'flex' } }}>
					{MenuItems.map(item => (
						<Link to={item.Link} key={item.Name} className='nav-link'>
							<Button
								variant='text'
								sx={{
									color: Colors.info3,
									borderRadius: 2,
									padding: '6px 8px',
									fontWeight: 600,
									'&:hover': {
										opacity: [0.7, 0.6, 0.7],
										boxShadow: 'none',
									},
								}}
							>
								<Typography
									sx={{
										cursor: 'pointer',
										fontWeight: '500',
										fontSize: '16px',
										textTransform: 'capitalize',
									}}
								>
									{item.Name}
								</Typography>
							</Button>
						</Link>
					))}
					{SocialLinks.map((social, index) => (
						<IconButton
							key={index}
							component='a'
							href={social.link}
							target='_blank'
							rel='noopener noreferrer'
							sx={{
								color: Colors.info3,
								padding: '2px',
								'&:hover': {
									color: Colors.info4,
								},
							}}
						>
							{social.icon}
						</IconButton>
					))}
				</MenuBox>

				<MenuIcon
					sx={{
						color: Colors.info3,
						display: { xs: 'block', sm: 'block', md: 'none' },
					}}
					onClick={() => setOpen(!open)}
				/>
			</StyledToolbar>

			<Menu
				id='demo-positioned-menu'
				open={open}
				onClose={() => setOpen(!open)}
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
						<Link to={item.Link} key={item.Name} className='nav-link'>
							<MenuItem
								key={item.Name}
								sx={{
									cursor: 'pointer',
									fontSize: '14px',
								}}
							>
								{item.Name}
							</MenuItem>
						</Link>
					))}
				</Box>
			</Menu>
		</AppBar>
	);
};

export default Navbar;
