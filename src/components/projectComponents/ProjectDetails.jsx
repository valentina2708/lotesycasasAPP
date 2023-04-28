import React from 'react'

import { Box, Typography, Avatar, CardContent, Card, Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Prueba } from '/src/DataProvider/Prueba.js';
import LogoRinconDelLago from '../../assets/logoRincondelLago.jpg'
import Mapap from './Map';
import Carousel from 'better-react-carousel'
import { Link } from 'react-router-dom';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as miArray from '../../DataProvider/Prueba';
import ReactPlayer from 'react-player';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import { GoogleMap, MarkerF, useLoadScript } from '@react-google-maps/api'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import AOS from 'aos';
import { Parallax } from 'react-parallax';

export default function PaginaProyectos(props) {

  //const id=props.id;

  useEffect(() => {
    AOS.init({ offset: 200, duration: 1000 });
  }, []);

  const { id } = useParams();




  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDdwssQ5RRzvav2ZhmAykKzj2-jH1qhcGU"
  })


  if (!isLoaded) return <Box>Cargando...</Box>
  return (

    <Box sx={{ marginTop: '15vh' }} >

      <Grid  >

        <Grid container='true'  >
          <Grid sx={{//border:2
          }} item='true' xs={12} sm={12} md={12} lg={12}>

            <Box data-aos='fade-down'
              data-aos-duration='1000' sx={{


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
                {miArray.Prueba[id - 1].nombre}


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


                {miArray.Prueba[id - 1].subtitulo}
              </Typography>
            </Box>

          </Grid>

          <Card
            sx={{
              //border: 2,
              width: '100%',
              height: '100%',
              marginLeft: 'auto',
              marginRight: 'auto',
              marginBottom: '5vh',
              marginTop: '10vh',
              borderRadius: 10
            }}>

            <Grid container='true'
              sx={{

                // border: 2,
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',

              }}>
              <Grid item="true" xs={12} sm={12} md={12} lg={6}
                sx={{
                  marginBottom: '20px',
                  marginTop: '20px',
                  //border: 2,
                  padding: '10px',
                  display: 'flex',
                  justifyContent: 'right',
                  alignItems: 'center',
                  width: '100%',
                  height: '70%'
                }}

              >


                <Box data-aos="fade-up" data-aos-duration='1000' sx={{
                  //marginLeft:'10rem'
                  //border: 2,
                  display: 'flex',
                  justifyContent: 'right',
                  alignItems: 'center',
                  width: '80%',
                  height: '100%',

                }}>

                  {/*  ######### imagen 1 logo ########### */}

                  <img src={miArray.Prueba[id - 1].imagencard} width={'80%'} height={'100%'}

                  />


                </Box>


              </Grid>
              <Grid item="true" xs={12} sm={12} md={12} lg={6}
                sx={{
                  // border:2,
                  //display: 'flex',
                  justifyContent: 'left',
                  alignItems: 'center',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  marginTop: '4vh',
                  marginBottom: '4vh'
                }}>

                <Box data-aos="fade-up" data-aos-duration='1000' sx={{
                  //border:2,
                  display: 'flex',
                  justifyContent: 'left'


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
                      fontSize: 25
                    }}>

                    {/*  ######### Descripcion 1 ########### */}

                    {miArray.Prueba[id - 1].descripcion}
                    {/*  <br /><br />Area:<br />
                    {miArray.Prueba[id - 1].areaDelLote} */}


                  </Typography>


                </Box>

              </Grid>

            </Grid>
          </Card>

      //  </Grid>

        <Grid container sx={{


        }}>

          {miArray.Prueba[id - 1].adicional === 'v' ?
            (
              //////////////////////////////////


              <Grid container='true'  >
                <Grid item="true" xs={6} sm={12} md={12} lg={12}>
                  <Parallax
                    style={{
                      width: '100%',
                      height: '100%',
                    }}
                    bgImage={miArray.Prueba[id - 1].pagar}
                    strength={400}
                  >
                    <Box
                      container
                      data-aos='zoom-in-down'
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                        height: '60vh',
                      }}
                    >
                      <Box
                        sx={{

                          display: 'flex',
                          borderRadius: '20px',
                          marginLeft: 'auto',
                          marginRight: 'auto',


                        }}
                      >
                        <Card
                          elevation={12}
                          sx={{
                            padding: '10px',
                            color: 'gray',
                            opacity: [0.8, 0.6, 0.8],

                            bottom: '5px',
                            width: '80%',
                            height: '10%',
                            borderRadius: 3,
                            marginTop: '50px'
                          }}
                        >
                          <Avatar
                            alt='logo rincon del lago'
                            src='/src/assets/logoRincon.png'
                            sx={{
                              width: 190,
                              height: 130,
                              bgcolor: 'gray',
                              position: 'relative',
                              marginLeft: 'auto',
                              marginRight: 'auto',
                            }}
                          />

                          <CardContent sx={{}}>
                            <Typography
                              variant='h5'
                              sx={{
                                color: 'black',
                                fontWeight: 500,
                                mt: 0.5,

                                textAlign: 'center',
                              }}
                            >
                              Separa tu lote:
                              <br />
                              Inicial 10% plazo hasta 5 años
                            </Typography >

                            <Box sx={{

                              justifyContent: 'center',
                              alignItems: 'center',
                              //border:2
                            }}>

                              <Link to='https://api.whatsapp.com/send?phone=3147456473' >
                                <Button sx={{

                                  width: '100%',
                                  padding: '10px',
                                  marginTop: '10px',
                                }}
                                  variant='contained'
                                  endIcon={<WhatsAppIcon />}
                                >
                                  Contactanos
                                </Button>
                              </Link>

                            </Box>





                          </CardContent>
                        </Card>
                      </Box>
                    </Box>
                  </Parallax>
                </Grid>

                <Grid item="true" xs={6} sm={12} md={12} lg={12}>
                  <Card sx={{


                    height: '100%',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginBottom: '10vh',
                    marginTop: '5vh',
                    borderRadius: 10
                  }}>
                    <Grid container='true'
                      sx={{

                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',

                      }}>
                      <Grid item="true" xs={6} sm={12} md={12} lg={12}>
                        <Box sx={{}}>

                          <Box data-aos="fade-up" data-aos-duration='1000' sx={{ margin: 'auto', whith: '50%' }}>


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
                              {/*  ######### Subtitulo 2 proyecto ########### */}
                              Ubicado en el corazón de Alfaguara, Jamundí. Sector las Mercedes

                            </Typography>
                          </Box>
                          <Box data-aos="fade-up" data-aos-duration='1000' sx={{ margin: 'auto' }}>


                            <Typography
                              variant='body1'
                              sx={{
                                width: '600px',
                                height: '100%',



                                marginLeft: 'auto',
                                marginRight: 'auto',

                                textAlign: 'justify',
                                paddingTop: '0',
                                paddingBottom: '0',
                                fontSize: 25
                              }}>

                              {/*  ######### Descripcion 2 ########### */}

                              {miArray.Prueba[id - 1].descripcionad}


                            </Typography>
                          </Box>


                        </Box>


                      </Grid>
                      <Grid item="true" xs={12} sm={12} md={12} lg={6}
                        sx={{

                          display: 'grid',
                          justifyContent: 'center',
                          alignItems: 'center',
                          margin: 'auto'
                        }}>
                        <Box data-aos="fade-up" data-aos-duration='1000' sx={{ margin: 'auto', padding: '5px' }}>
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

                            {/*  ######### Subtitulo 2 proyecto ########### */}

                            Zona recreo - deportiva

                          </Typography>

                        </Box>



                        <Box sx={{

                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          marginLeft: 'auto',
                          marginRight: 'auto',
                          padding: '0px'
                        }}>


                          <Box data-aos="fade-up" data-aos-duration='1000'
                            sx={{
                              display: 'grid', width: '100%', justifyContent: 'left', alignItems: 'left',
                            }}>





                            <Box sx={{ display: 'flex', justifyContent: 'center', margin: '10px', }}><Box>
                              <Box sx={{ width: '30px', display: 'flex', marginRight: '20px' }}>
                                <img src={miArray.Prueba[id - 1].mini} width={'100%'} /></Box>
                            </Box><Typography variant='h4'
                              sx={{ fontWeight: 'bold', marginTop: 'auto', marginBottom: 'auto' }}>
                                Mall comercial</Typography></Box>

                            <Box sx={{ display: 'flex', justifyContent: 'left', margin: '10px' }}><Box>
                              <Box sx={{ width: '30px', display: 'flex', marginRight: '20px' }}>
                                <img src={miArray.Prueba[id - 1].mini} width={'100%'} /></Box>
                            </Box><Typography variant='h4'
                              sx={{ fontWeight: 'bold', marginTop: 'auto', marginBottom: 'auto' }}>
                                Club House</Typography></Box>

                            <Box sx={{ display: 'flex', justifyContent: 'left', margin: '10px' }}><Box>
                              <Box sx={{ width: '30px', display: 'flex', marginRight: '20px' }}>
                                <img src={miArray.Prueba[id - 1].mini} width={'100%'} /></Box>
                            </Box><Typography variant='h4'
                              sx={{ fontWeight: 'bold', marginTop: 'auto', marginBottom: 'auto' }}>
                                Vóley playa</Typography></Box>



                            <Box sx={{ display: 'flex', justifyContent: 'left', margin: '10px' }}><Box>
                              <Box sx={{ width: '30px', display: 'flex', marginRight: '20px' }}>
                                <img src={miArray.Prueba[id - 1].mini} width={'100%'} /></Box>
                            </Box><Typography variant='h4'
                              sx={{ fontWeight: 'bold', marginTop: 'auto', marginBottom: 'auto' }}>
                                Zona BBQ</Typography></Box>



                          </Box>

                          <Box data-aos="fade-up" data-aos-duration='1000' sx={{ display: 'grid', width: '100%', justifyContent: 'left', alignItems: 'left', }}>

                            <Box sx={{ display: 'flex', justifyContent: 'center', margin: '10px', }}><Box>
                              <Box sx={{ width: '30px', display: 'flex', marginRight: '20px' }}>
                                <img src={miArray.Prueba[id - 1].mini} width={'100%'} /></Box>
                            </Box><Typography variant='h4'
                              sx={{ fontWeight: 'bold', marginTop: 'auto', marginBottom: 'auto' }}>
                                Mall comercial</Typography></Box>

                            <Box sx={{ display: 'flex', justifyContent: 'left', margin: '10px' }}><Box>
                              <Box sx={{ width: '30px', display: 'flex', marginRight: '20px' }}>
                                <img src={miArray.Prueba[id - 1].mini} width={'100%'} /></Box>
                            </Box><Typography variant='h4'
                              sx={{ fontWeight: 'bold', marginTop: 'auto', marginBottom: 'auto' }}>
                                Club House</Typography></Box>

                            <Box sx={{ display: 'flex', justifyContent: 'left', margin: '10px' }}><Box>
                              <Box sx={{ width: '30px', display: 'flex', marginRight: '20px' }}>
                                <img src={miArray.Prueba[id - 1].mini} width={'100%'} /></Box>
                            </Box><Typography variant='h4'
                              sx={{ fontWeight: 'bold', marginTop: 'auto', marginBottom: 'auto' }}>
                                Vóley playa</Typography></Box>



                            <Box sx={{ display: 'flex', justifyContent: 'left', margin: '10px' }}><Box>
                              <Box sx={{ width: '30px', display: 'flex', marginRight: '20px' }}>
                                <img src={miArray.Prueba[id - 1].mini} width={'100%'} /></Box>
                            </Box><Typography variant='h4'
                              sx={{ fontWeight: 'bold', marginTop: 'auto', marginBottom: 'auto' }}>
                                Zona BBQ</Typography></Box>



                          </Box>
                        </Box>








                      </Grid>


                      <Grid item="true" xs={12} sm={12} md={12} lg={6}
                        sx={{
                          marginBottom: '20px',
                          marginTop: '20px',

                          padding: '10px',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',

                        }}

                      >


                        <Box data-aos="fade-up" data-aos-duration='1000' sx={{
                          //marginLeft:'10rem'
                          //border: 2,
                          display: 'flex',
                          justifyContent: 'left',
                          alignItems: 'center',

                          widthMax: '200px',
                          heightMax: '200px'
                        }}>

                          {/*  ######### imagen 2 ad ########### */}

                          <img src={miArray.Prueba[id - 1].imagenad} width={'100%'} height={'100%'} />


                        </Box>


                      </Grid>

                    </Grid>
                  </Card>
                </Grid>

      //  </Grid>



              ////////////////////////////////////////////
            ) : (<Box></Box>
            )}



          {miArray.Prueba[id - 1].adicional === 'v' ?
            (
              //////////////////////////////////

              <Grid container='true'  >


                <Card sx={{
                  //border: 2,
                  width: '100%',
                  height: '50vh',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  marginBottom: '10vh',
                  marginTop: '15vh',
                  borderRadius: 10
                }}>

                  <Grid data-aos="fade-up" data-aos-duration='1000' container='true'
                    sx={{

                      // border: 2,
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',

                    }}>


                    <Grid item="true" xs={12} sm={12} md={12} lg={6}
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
                        justifyContent: 'left',
                       // alignItems: 'center',
                        width: '90%',
                        height: '100%'
                      }}>

                        {/*  ######### imagen 3 ad ########### */}

                        <img src={miArray.Prueba[id - 1].imagenad} width={'100%'} height={'100%'} />


                      </Box>


                    </Grid>
                    <Grid item="true" xs={12} sm={12} md={12} lg={6}
                      sx={{
                        // border:2,
                        //display: 'flex',
                        justifyContent: 'left',
                        alignItems: 'center',
                        marginLeft: 'auto',
                        marginRight: 'auto'
                      }}>

                      <Box data-aos="fade-zoom-in"
                        data-aos-easing="ease-in-back"
                        data-aos-delay="300"
                        data-aos-offset="0" sx={{
                          //border:2,
                          display: 'flex',
                          justifyContent: 'right',
                          width:'500px',
                          margin:'auto'
                        }}>




                       

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

                          {/*  ######### Subtitulo 2 proyecto ########### */}

                          Plaza comercial con:
                           <br />30 lotes de
                          108 m2 a 362 m2 y 117 parqueaderos

                        </Typography>
                      </Box>

                    </Grid>

                  </Grid>
                </Card>

      //  </Grid>



              ////////////////////////////////////////////
            ) : (<h1></h1>
            )}





        </Grid>

        <Typography data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0"
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

        <Box data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0" sx={{ height: '100%', width: '100%' }}>


          <GoogleMap
            // lat2={latt}
            zoom={16}
            center={{
              lat: miArray.Prueba[id - 1].lat,
              lng: miArray.Prueba[id - 1].lng
            }}
            mapContainerStyle={{ height: '60vh', width: '100%' }}
          >

            <MarkerF position={{
              lat: miArray.Prueba[id - 1].lat,
              lng: miArray.Prueba[id - 1].lng
            }} />

          </GoogleMap>

        </Box>


        <Box> <Box>
          <Box data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0"
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

          <Box data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0" sx={{
              marginTop: '10vh',
              marginBottom: '10vh'
            }}>


            <Carousel cols={2} rows={2} gap={10} loop>


              <Carousel.Item>
                <img width="100%" src={miArray.Prueba[id - 1].imagen1} />
              </Carousel.Item>

              <Carousel.Item>
                <img width="100%" src={miArray.Prueba[id - 1].imagen2} />
              </Carousel.Item>

              <Carousel.Item>
                <img width="100%" src={miArray.Prueba[id - 1].imagen3} />
              </Carousel.Item>

              <Carousel.Item>
                <img width="100%" src={miArray.Prueba[id - 1].imagen4} />
              </Carousel.Item>

              <Carousel.Item>
                <img width="100%" src={miArray.Prueba[id - 1].imagen5} />
              </Carousel.Item>

              <Carousel.Item>
                <img width="100%" src={miArray.Prueba[id - 1].imagen6} />
              </Carousel.Item>

              <Carousel.Item>
                <img width="100%" src={miArray.Prueba[id - 1].imagen7} />
              </Carousel.Item>

              <Carousel.Item>
                <img width="100%" src={miArray.Prueba[id - 1].imagen8} />
              </Carousel.Item>



            </Carousel>



          </Box>
          <Box data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0" sx={{
              margin: 'auto',
              height: '400px',
              maxHeight: '800px',

              maxWidth: '800px'
            }}>

            <ReactPlayer
              borderRadius='3'
              position='relative'
              bottom='5px'
              url='https://youtu.be/N3GwlQdjhjU'
              className='react-player'
              //playing
              controls
              loop
              width='105%'
              height='120%'
            />
          </Box>



        </Box>
        </Box>


        <Box data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0" sx={{
            textAlign: 'center',
            margin: '10vh',
            height: '5rem'
          }}>
          <Link to='https://api.whatsapp.com/send?phone=3147456473' >
            <Button sx={{
              height: '100%',
              width: '30rem',
              padding: '10px',
              margin: '10vh',
            }}
              variant='contained'
              endIcon={<WhatsAppIcon />}
            >
              Comunícate con un asesor
            </Button>
          </Link>


        </Box>
      </Grid>



      {/*  ))}  */}





    </Box>

  )
}
