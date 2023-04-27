import React from 'react'

import { Box, Typography, Card,Button} from '@mui/material';
import Grid from '@mui/material/Grid';
import { Prueba } from '/src/DataProvider/Prueba.js';
import LogoRinconDelLago from '../../assets/logoRincondelLago.jpg'
import Mapap from './Map';
import Carousel from 'better-react-carousel'
import { Link } from 'react-router-dom';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';



import { GoogleMap, MarkerF, useLoadScript } from '@react-google-maps/api'




export default function PaginaProyectos(props) {

 //const id=props.id;
 const { id } = useParams();
 

  const{isLoaded}=useLoadScript({
    googleMapsApiKey:"AIzaSyDdwssQ5RRzvav2ZhmAykKzj2-jH1qhcGU"})

    
    if(!isLoaded) return <Box>Cargando...</Box>
  return (
   
    <Box sx={{ margin: '20vh' }} >


      
      {Prueba.map(project => (

        <Grid>

          <Grid container='true'  >
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

                   {/*  ######### Nombre proyecto ########### */}

                  {project.nombre}

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

                   {/*  ######### Subtitulo proyecto ########### */}


                  {project.subtitulo}
                </Typography>
              </Box>

            </Grid>

            <Card sx={{
              //border: 2,
              width: '130vh',
              height: '60vh',
              marginLeft: 'auto',
              marginRight: 'auto',
              marginBottom: '15vh',
              marginTop: '15vh',
              borderRadius: 10
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

                  {/*  ######### logo ########### */}

                    <img src={project.imagen1}  width={'100%'} height={'100%'} />
                  

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

                      {/*  ######### Descripcion ########### */}

                      {project.descripcion}


                    </Typography>


                  </Box>

                </Grid>

              </Grid>
            </Card>

          </Grid>

          <Typography
                    variant='h2'
                    sx={{
                        color: '#A15600',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        paddingTop: '10px',
                        margin: '20px',
                    }}
                >
                    Ubicación
                </Typography>
            
        <Box sx={{border:2, height:'100%', width:'100%' }}>
           
           
        <GoogleMap
       // lat2={latt}
        zoom={14}
        center={{ lat:project.lat,
            lng:project.lng}}
        mapContainerStyle={{height:'60vh', width:'100%'}}
        >
        
        <MarkerF position={{ 
            lat: 3.2499367481968666,
            lng: -76.56676798926843
            }}/>

        </GoogleMap>

        </Box>
      

            <Box> <Box>          
            <Box
                sx={{


                    width: '100%',
                    marginTop: '20px',
                    marginBottom: '20px',

                }}>
                <Typography
                    variant='h2'
                    sx={{
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
                marginTop: '10vh',
                marginBottom: '10vh'
            }}>
               
               
                <Carousel  cols={2} rows={2} gap={10} loop>

                    
                    <Carousel.Item>
                        <img width="100%" src={project.imagen1} />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img width="100%" src={project.imagen2} />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img width="100%" src={project.imagen3} />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img width="100%" src={project.imagen4} />
                    </Carousel.Item>

                   

                </Carousel>

            </Box>



          </Box>
        </Box>
         {/*  <img src={project.imagen} alt="imagen" /> */}

         <Box sx={{
        textAlign: 'center',
        marginTop: '10vh',
        height: '5rem'
      }}>
        <Link to='https://api.whatsapp.com/send?phone=3147456473' >
          <Button sx={{
            height: '100%',
            width: '30rem',
            padding: '10px',
          }}
            variant='contained'
            endIcon={<WhatsAppIcon  />}
          >
            Comunícate con un asesor
          </Button>
        </Link>


      </Box>
        </Grid>

      ))}





    </Box>
    
  )
}
