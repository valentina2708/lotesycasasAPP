import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import { Colors } from '/src/config/themeConfig.js';
import { makeStyles } from 'tss-react/mui'


const useStyles =  makeStyles()((theme) => {
  return{
	InfoImage: {
		backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/src/assets/fondoCredito.jpg')`,
		height: "500px",
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
		position: "relative",
		margin:'10% 0px 10% 0px',
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		color: "#fff",
		fontSize: "4rem",
		[theme.breakpoints.down("sm")]: {
			height: 300,
			fontSize: "3em"
		  }
		},
  }
});
	

export default function BasicStack() {
	const  {classes}  = useStyles();
	return (
		<Box  className={classes.InfoImage}
			sx={{
				justifyContent: 'center',
				alignItems: 'center',
				p: '30px 0px' ,
			}}
			
			
		>
			<Typography
				variant='h2'
				sx={{
					color: Colors.body_bg,
					fontWeight: 'bold',
					mt: 2,
					textAlign: 'center',
					spacing: 4,
				}}
			>
			contamos con facilidades de pago 
			</Typography>
		
			
		</Box>
	);
}
