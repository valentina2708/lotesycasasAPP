import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Colors } from '/src/config/themeConfig.js';

const Item = styled(Paper)(({ theme }) => ({
	[theme.breakpoints.up('md')]: {
		padding: '40px 0px 40px 0px',
	},
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	padding: '20px 0px 20px 0px',
	overflow: 'hidden',
	background: Colors.secondary,
}));

export default function BasicStack() {
	return (
		<Box sx={{ width: '100%', border: 'none' }} elevation={24}>
			<Stack spacing={2}>
				<Item>
					<Typography
						variant='h3'
						sx={{
							color: '#000',
							fontWeight: 'bold',
							mt: 2,
						}}
					>
						BIENVENIDOS!
					</Typography>
				</Item>
			</Stack>
		</Box>
	);
}
