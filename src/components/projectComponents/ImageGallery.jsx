import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import * as miArray from '../../DataProvider/Prueba.js';
import { useParams } from 'react-router-dom';
import AOS from 'aos';

import { Box } from '@mui/material';

function srcset(image, size, rows = 1, cols = 1) {
	return {
		src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
		srcSet: `${image}?w=${size * cols}&h=${
			size * rows
		}&fit=crop&auto=format&dpr=2 2x`,
	};
}

export default function QuiltedImageList() {
	const { id } = useParams();
	return (
		<Box
			data-aos='fade-down' data-aos-duration='1000'
			data-aos-easing='ease-in-back'
			data-aos-delay='300'
			data-aos-offset='0'
			sx={{
				display: { xs: 'none', sm: 'none', md: 'block', xl: 'block' },
				justifyContent: 'center',
				alignItems: 'center',
				marginInline: '5rem',
			}}
		>
			<ImageList
				sx={{
					width: '50hv',
					height: '60hv',
					
				}}
				variant='quilted'
				cols={3}
			
                gap={8}
			>
				{miArray.Prueba[id - 1].images?.map(item => (
					<ImageListItem
						key={item.title}
						cols={item.cols || 1}
						rows={item.rows || 1}
					>
						<img
							{...srcset(item.img, 121, item.rows, item.cols)}
							alt={item.title}
							loading='lazy'
						/>
					</ImageListItem>
				))}
			</ImageList>
		</Box>
	);
}
