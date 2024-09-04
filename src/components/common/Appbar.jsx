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
import logo from '../../assets/logo_terranova.png';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';

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
		gap: 20,
	});
	const SearchBox = styled(Box)({
		display: 'flex',
		gap: 5,
	});
	const MenuItems = [
		{ Name: 'Inicio', Link: '/' },
		{ Name: 'Nosotros', Link: '/about' },
		{ Name: 'Proyectos', Link: '/projects' },
		{ Name: 'Contacto', Link: '/contact' },
	];
	const [open, SetOpen] = useState(false);

	return (
		<AppBar sx={{ background: Colors.body_bg }} elevation={0}>
			<StyledToolbar>
				<IconBox sx={{ display: { xs: 'none', md: 'flex' }, mr: 2 }}>
					<IconButton
						sx={{
							padding: 0,
							width: 80,
							height: 80,
						    ml:2
						}}
					>
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
									color: Colors.info2,
									borderRadius: 2,
									padding: '6px 12px',

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
										fontWeight:'500', 
										fontSize:'16px',
										textTransform: 'capitalize',
									}}
								>
									{item.Name}
								</Typography>
							</Button>
						</Link>
					))}
				</MenuBox>

			
					{/* <InputBase
						placeholder='Buscar'
						icon={<SearchIcon />}
						sx={{ color: Colors.info2 }}
					/> */}

					<MenuIcon
						sx={{
							color: Colors.info2,
							display: { xs: 'block', sm: 'block', md: 'none' },
						}}
						onClick={() => SetOpen(!open)}
					/>
			
			</StyledToolbar>
			<Menu
				id='demo-positioned-menu'
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

export default Appbar;
