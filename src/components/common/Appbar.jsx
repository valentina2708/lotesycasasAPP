import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';

import {
	AppBar,
	Box,
	Menu,
	MenuItem,
	styled,
	Toolbar,
	Typography,
	Button,
	InputBase,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material/';
import { Colors } from '../../config/themeConfig';
import logo from '../../assets/logoColor.jpg';
import { Link } from 'react-router-dom';

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
		{ Name: 'Nosotros', Link: '/about' },
		{ Name: 'Proyectos', Link: '#' },
		{ Name: 'Contacto', Link: '#' },
	];
	const [open, SetOpen] = useState(false);

	return (
		<AppBar sx={{ background: Colors.body_bg }} elevation={0}>
			<StyledToolbar>
				<IconBox sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
					<img src={logo} alt='logo' style={{ width: 150, height: 95 }} />
					<Typography
						variant='h4'
						component='a'
						href='/'
						sx={{
							mr: 2,
							display: { xs: 'none', md: 'flex' },
							alignItems: 'center',
							fontWeight: 800,
							letterSpacing: '.1rem',
							textDecoration: 'none',
							color: Colors.info2,
						}}
					>
						Casas & Lotes
					</Typography>
				</IconBox>

				<MenuBox sx={{ display: { xs: 'none', sm: 'none', md: 'flex' } }}>
					{MenuItems.map(item => (
						<Link to={item.Link} key={item.Name} className="nav-link">
							<Button
								variant='text'
								sx={{
									color: Colors.info2,
									borderRadius: 2,
									padding: '10px',

									fontWeight: 600,

									'&:hover': {
										opacity: [0.7, 0.6, 0.7],
										boxShadow: 'none',
									},
									'&:active': {
										boxShadow: 'none',
										opacity: [0.7, 0.6, 0.7],
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
						</Link>
					))}
				</MenuBox>

				<SearchBox>
					<InputBase
						placeholder='Buscar ...'
						icon={<SearchIcon />}
						sx={{ color: Colors.info2 }}
					/>

					<MenuIcon
						sx={{
							color: Colors.info2,
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
							key={item.Name}
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
