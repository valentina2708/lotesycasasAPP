import React, { useState } from 'react';
import { Menu, MenuItem } from '@mui/material';

const subMenu = () => {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = event => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	return (
		<Menu
			id='basic-menu'
			anchorEl={anchorEl}
			open={open}
			onClose={handleClose}
			MenuListProps={{
				'aria-labelledby': 'basic-button',
			}}
		>
			<MenuItem onClick={handleClose}>Profile</MenuItem>
			<MenuItem onClick={handleClose}>My account</MenuItem>
			<MenuItem onClick={handleClose}>Logout</MenuItem>
		</Menu>
	);
};

export default subMenu;
