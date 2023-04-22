import React from 'react'
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import LogoRinconDelLago from '../../assets/logoRincondelLago.jpg'
import parque2 from '../../assets/parque2.jpg'
import parque3 from '../../assets/parque3.jpg'
import terraza1 from '../../assets/TERRAZA1.jpg'
import terraza3 from '../../assets/TERRAZA3.jpg'

import Grid from '@mui/material/Grid';
import { TextField, CardMedia, CardContent, Card, Typography,Button, Hidden } from '@mui/material'
import Mapap from '../projectComponents/Map';
import Carousel from 'better-react-carousel'
import { Link } from 'react-router-dom';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { height } from 'styled-system';
//import NewProjectInfo from '../components/NewProjectInfo';

export default function Pictures() {
  return (




    <Grid containe='true'
    sx={{
      
      marginTop:'20vh'

    }}
    
    >

      <Grid item='true' xs={12} sm={12} md={12} lg={12}>

        <Box sx={{


        }} >

          <Typography
            variant='h2'
            sx={{

             
              color: 'Black',
              fontWeight: 'bold',
              mt: 2,
              textAlign: 'center',
              paddingTop: '10px',
              margin: '20px'
            }}>
            Rincon del lago

          </Typography>
          <Typography
            variant='h4'
            sx={{

              
              color: '#A15600',
              fontWeight: 'bold',
              mt: 2,
              textAlign: 'center',
              paddingTop: '10px',
              margin: '20px'
            }}>

            Condominio Campestre
            y Plaza Comercial
          </Typography>
        </Box>

      </Grid>



      <Card sx={{
        //border: 2,
        width: '130vh',
        height: '60vh',
        marginLeft:'auto',
        marginRight:'auto',
        marginBottom:'15vh',
        marginTop:'15vh',
        borderRadius:10
      }}>

        <Grid container='true'
          sx={{
            
            //border: 2,
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            
          }}>
          <Grid item="true" xs={12} sm={12} md={12} lg={5}
            sx={{
              marginBottom: '20px',
              marginTop: '20px',
              //border: 2,
              padding: '10px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              height: '70%'
            }}

          >


            <Box sx={{
              //marginLeft:'10rem'
              //border: 2,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '90%',
              height: '100%'
            }}>
              <img width={'100%'} height={'100%'} src={LogoRinconDelLago} />

            </Box>


          </Grid>
          <Grid item="true" xs={12} sm={12} md={12} lg={7}
            sx={{
              // border:2
              display: 'flex',
              justifyContent: 'left',
              alignItems: 'center',
            }}>

            <Box sx={{
              display: 'flex',
              justifyContent: 'center'


            }}>


              <Typography
                variant='body1'
                sx={{
                  width: '450px',
                  height: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  //border: 2,

                  color: 'Black',
                  //fontWeight: 'bold',
                  textAlign: 'justify',
                  padding: '20px',
                  fontSize: 20
                }}>

                A pocos minutos de Cali por las avenidas
                Panamericana, Cañas Gordas y Sachamate. Cerca
                de los mejores colegios y universidades del sur
                occidente colombiano. A pocas cuadras de centros
                comerciales, súper mercados, restaurantes,
                parques, gimnasios, entre otros establecimientos
                que ofrecen servicios de calidad en el ambiente
                campestre de Jamundí.
                
               
              </Typography>


            </Box>

          </Grid>

        </Grid>
      </Card>

      <Box
				sx={{
					
					width: '100%',
					marginTop: '20px',
					marginBottom: '20px',
				
				}}
			>
				<Typography
					variant='h2'
					sx={{
						opacity: [90],
						color: '#A15600',
						fontWeight: 'bold',
						mt: 2,
						textAlign: 'center',
						paddingTop: '10px',
						margin: '20px',
					}}
				>
					Ubicación
				</Typography>
			</Box>

      <Box sx={{//border:2
      }}>


        <Mapap />


      </Box>
     

      <Box
				sx={{
					
				
					width: '100%',
					marginTop: '20px',
					marginBottom: '20px',
					
				}}
			>
				<Typography
					variant='h2'
					sx={{
						//border:2,
						color: '#A15600',
						fontWeight: 'bold',
						
						textAlign: 'center',
						paddingTop: '10px',
						margin: '20px',
					}}
				>
					Galeria
				</Typography>
			</Box>

     <Box sx={{
      marginTop:'10vh',
      marginBottom:'10vh'
      }}>

     <Carousel cols={2} rows={2} gap={10} loop>
      

      <Carousel.Item>
      <img width="100%" src={parque2} />
      </Carousel.Item>

      <Carousel.Item>
      <img width="100%" src={parque3} />
      </Carousel.Item>

      <Carousel.Item>
      <img width="100%" src={terraza1} /> 
      </Carousel.Item>

      <Carousel.Item>
      <img width="100%" src={terraza3} /> 
      </Carousel.Item>
     
    </Carousel>

     </Box>



     <Box sx={{
         // display:'flex',
          textAlign:'center',
          
          //border:2, 
          marginTop:'10vh',
          height:'5rem'
          }}>
     <Link to='https://api.whatsapp.com/send?phone=3147456473' >
								<Button sx={{
                  //backgroundColor:'#22142b',
                  height:'100%',
                  width:'30rem',
                  padding:'10px',
                 
                }}
									
									variant='contained'
                  endIcon={<WhatsAppIcon sx={{backgroundColor:''}}/>}
								>
									Comunícate con un asesor
								</Button>
								</Link>


     </Box>
    </Grid>

  )

 
    }
