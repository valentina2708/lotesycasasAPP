import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import { Colors } from '/src/config/themeConfig.js';
import Fade from '@mui/material/Fade';
import { useScroll } from "./useScroll";
import { motion } from "framer-motion";
import { milestonesAnimations } from "../animation";


export default function BasicStack() {
	const [element, controls] = useScroll();
	return (
		<Box  ref={element}
			sx={{
				width: '100%',
				border: 'none',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				p: '5% 0',
			
			}}
		>
		 <motion.div className="milestone"
            variants={milestonesAnimations}
            animate={controls}
            transition={{
              delay: 0.03,
              type: "tween",
              duration: 0.8,
            }}
            >
			<Stack spacing={2}>
				<Typography
				  TransitionComponent={Fade}
                  TransitionProps={{ timeout: 600 }}
					variant='h2'
					sx={{
						color: Colors.primary,
						fontWeight: 'bold',
						mt: 2,
					}}
				>
					Encuentra el proyecto de tus sueños
				</Typography>
			</Stack>
			</motion.div>
		</Box>
	);
}
