import { Colors } from '../../config/themeConfig.js';
import { Parallax } from 'react-parallax';
import {
	Box,
	Typography,
	Stack,
	Grid,
	ButtonBase,
	Divider,
} from '@mui/material';
import urbanizacion from '../../assets/urbanizacion.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import { useScroll } from '../useScroll';
import { mensajebox } from '../../animation';
import { styled } from '@mui/material/styles';
import { DataUrbanizations } from '../../DataProvider/DataProjects.js';
import InfoUrbanization from '../projectComponents/InfoUrbanization.jsx';
import { DataProjects } from '/src/DataProvider/DataProjects.js';
import { Link } from 'react-router-dom';
import CalculateFee from '/src/components/CalculateFee';
import construcion1 from '../../assets/construccion1.jpg';
import construcion2 from '../../assets/construccion2.jpg';
import construcion3 from '../../assets/construccion3.jpg';
import { RoomTwoTone } from '@mui/icons-material';

const rows = [
	{
		id: 1,
		imgSrc: construcion1,
		text: 'Servicios de preconstrucción',
		subtitle:
			'Todo comienza con los servicios previos a la construcción . ¿Cuál es el primer paso en el que debe centrarse? Responderemos a esta y otras muchas preguntas que es esencial conocer antes de que comience el proceso de construcción. Desarrollaremos un plan detallado que lo guiará a lo largo de todo el proceso.',
	},
	{
		id: 2,
		imgSrc: construcion2,
		text: 'Planificación y construcción',
		subtitle:
			'Planificamos los proyectos desde cero y construimos las casas que usted ha imaginado, brindar servicios de alta calidad es uno de nuestros principales objetivos. Nos esforzamos por cumplir e incluso superar las expectativas de nuestros clientes y aportar valor.',
	},
	{
		id: 3,
		imgSrc: construcion3,
		text: 'Diseño exterior e interior',
		subtitle:
			'Impresione a todos con un diseño exterior excepcional para sus casas. No importa si se trata de un simple reemplazo o de un rediseño completo, puede contar con nosotros para hacer realidad sus ideas, soluciones interesantes acompañadas de alta calidad serán la clave del diseño exterior de la casa que construimos para usted.',
	},
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
	position: 'relative',
	height: 200,
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',

	[theme.breakpoints.down('sm')]: {
		width: '100% !important',
		height: 100,
	},
	'&:hover, &.Mui-focusVisible': {
		zIndex: 1,
		'& .MuiImageBackdrop-root': {
			opacity: 0.15,
		},
		'& .MuiImageMarked-root': {
			opacity: 0,
		},
		'& .MuiTypography-root': {
			border: '4px solid currentColor',
		},
	},
}));

const ImageSrc = styled('span')({
	position: 'absolute',
	left: 0,
	right: 0,
	top: 0,
	bottom: 0,
	backgroundSize: 'cover',
	backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
	position: 'absolute',
	left: 0,
	right: 0,
	top: 0,
	bottom: 0,
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
	position: 'absolute',
	left: 0,
	right: 0,
	top: 0,
	bottom: 0,
	backgroundColor: theme.palette.common.black,
	opacity: 0.4,
	transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
	height: 3,
	width: 18,
	backgroundColor: theme.palette.common.white,
	position: 'absolute',
	bottom: -2,
	left: 'calc(50% - 9px)',
	transition: theme.transitions.create('opacity'),
}));

export default function ProjectsUrbanization() {
	const [element, controls] = useScroll();
	return (
		<>
			<Parallax
				style={{
					width: '100%',
					height: '100%',
					opacity: [10],
				}}
				bgImage={urbanizacion}
				strength={300}
			>
				<Box
					container
					data-aos='zoom-in-down'
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						width: 'auto',
						height: '95vh',
					}}
				>
					<Box
						sx={{
							borderRadius: '20px',
							marginLeft: '60px',
							marginRight: '60px',
						}}
					>
						<Box
							sx={{
								display: 'flex',
								padding: '0px',
								width: '100%',
							}}
						>
							<Typography
								variant='h4'
								sx={{
									opacity: [90],
									color: Colors.info3,
									fontWeight: 'bold',
									mt: 2,
									textAlign: 'center',
									paddingTop: '10px',
									margin: '20px',
								}}
							>
								Urbanizaciones
							</Typography>
						</Box>
					</Box>
				</Box>
			</Parallax>

			<Box
				sx={{
					width: '100%',
					border: 'none',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					p: '5% 0',
				}}
				ref={element}
			>
				<motion.div
					className='milestone'
					variants={mensajebox}
					animate={controls}
					transition={{
						delay: 0.03,
						type: 'tween',
						duration: 0.8,
					}}
				>
					<Stack spacing={2} ml={{ xs: '1rem', sm: '2rem', md: '0' }}>
						<Typography
							variant='h4'
							sx={{
								color: Colors.fondo,
								fontWeight: 'bold',
								mt: 2,
							}}
						>
							Proyectos urbanísticos en la ciudad blanca
						</Typography>
					</Stack>
				</motion.div>
			</Box>
			{/* <CalculateFee /> */}
			<Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        width: '100%',
        mt: 2,
      }}
    >
      {rows.map((row, index) => (
        <Grid
          container
          key={row.id}
          spacing={2}
          alignItems="center"
          sx={{ position: 'relative', mb: 5, p:'2rem' }}
          direction={{
            xs: 'column',
            md: index % 2 === 0 ? 'row' : 'row-reverse', 
          }}
        >
          {/* Columna de Imagen */}
          <Grid
            item
            xs={12}
            md={5} 
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
            }}
          >
            <img
              src={row.imgSrc}
              alt={`Imagen ${row.id}`}
              style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
          </Grid>

      
          <Grid
            item
            xs={12} 
            md={2}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
              position: 'relative',
              my: { xs: 2, md: 0 }, 
            }}
          >
            {/* Divider Vertical */}
            <Divider
              orientation={{
                xs: 'horizontal', 
                md: 'vertical', 
              }}
              sx={{
                width: { xs: '100%', md: '2px' }, 
                height: { xs: '2px', md: '150px' }, 
                bgcolor: Colors.info3,
              }}
            />
            {/* Número dentro del Divider */}
            <Box
              sx={{
                position: 'absolute',
                top: { xs: '50%', md: 'calc(50% - 25px)' }, 
                left: '53%',
                transform: 'translate(-50%, -50%)',
                backgroundColor: Colors.body_bg,
				color: Colors.info3,
                borderRadius: '50%',
                padding: '5px 10px',
                border: '2px solid black',
      
              }}
            >
              <Typography variant="h6">{row.id}</Typography>
            </Box>
          </Grid>

    
          <Grid
            item
            xs={12} 
            md={5} 
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
            }}
          >
            <Box
              sx={{
                textAlign: { xs: 'center', md: index % 2 === 0 ? 'left' : 'right' },
                width: '100%',
                p: '2rem',
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 500,
                  color: Colors.info3,
                  mb: 1,
                }}
              >
                {row.text}
              </Typography>
              <Typography variant="subtitle1" sx={{ color: Colors.fondo, fontWeight: 250,}}>
                {row.subtitle}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      ))}
    </Box>

			<Grid
				container
				spacing={2}
				sx={{
					justifyContent: 'center',
					alignItems: 'center',
					width: '100%',
					p: 3,
				}}
			>
				{DataProjects.map(urbanization => (
					<Grid
						item
						xs={12}
						sm={6}
						md={4}
						key={urbanization.nombre}
						sx={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<ImageButton
							focusRipple
							style={{
								width: '100%',
								height: 300,
							}}
						>
							<ImageSrc
								style={{ backgroundImage: `url(${urbanization.imagen})` }}
							/>
							<ImageBackdrop className='MuiImageBackdrop-root' />
							<Image>
								<Typography
									component='span'
									variant='subtitle1'
									color='inherit'
									sx={{
										position: 'relative',
										p: 2,
										textAlign: 'center',
										fontSize: '1.3rem',
									}}
								>
									{urbanization.nombre}
									<ImageMarked className='MuiImageMarked-root' />
								</Typography>
							</Image>
						</ImageButton>
					</Grid>
				))}
			</Grid>

			<InfoUrbanization />
		</>
	);
}
