
import { Box, TextField, CardMedia, CardContent, Card, Typography, Hidden } from '@mui/material'
import React from 'react'
import { alpha, styled } from '@mui/material/styles';
import fotoformulario from '../assets/lotes.jpeg';
import Grid from '@mui/material/Grid';
//import Grid from '@mui/material/Unstable_Grid2';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import SendIcon from '@mui/icons-material/Send';
import { textAlign } from '@mui/system';
import Logocasasylotes from '../assets/Logocasasylotes.png';
import Mision from '../assets/mision.png';
import Vision from '../assets/vision.png';
import Filosofia from '../assets/filosofia.png';

import { Paper, Stack } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Parallax } from 'react-parallax';
import Contacto1 from '../assets/contacto1.jpg';
import Nosotros1 from '../assets/nosotros1.jpg';
import Nosotros2 from '../assets/nosotros2.jpg';
import { Colors } from '/src/config/themeConfig.js';
import { Brightness1, Filter } from '@mui/icons-material';
import { rgba } from '@react-spring/shared';
import NewProjectInfo from '../components/NewProjectInfo';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


const titleStyle = {
    backgroundColor: "#fff",
    padding: "20",
    position: "absolute",
    top: "50%",
    // left:"50%",
    display: 'flex',
    border: 2

}

export default function AboutUs() {
    useEffect(() => {
        AOS.init({ offset: 200, duration: 1000 });
    }, []);
    return (

        <Grid sx={{


        }}>


            <Parallax style={{
                width: '100%',
                height: '100%',
            }}

                bgImage={Nosotros1}
                strength={400}

            >


                <Box container data-aos="zoom-in-down" sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 'auto',
                    height: '95vh',
                    //border:2


                }}>
                    <Box sx={{
                        // backgroundColor:'#f3f6f9',

                        borderRadius: '20px',

                        marginLeft: '60px',
                        marginRight: '60px',
                        // opacity:[.7],
                        //border:2,


                    }}>

                        <Box sx={{
                            display: 'flow',
                            padding: '0px',
                            width: '100%',
                            //verticalAlign:'center',
                            //border:2,  
                            // textAlign:'center' 
                        }}>
                            <Typography
                                variant='h2'
                                sx={{

                                    opacity: [90],
                                    color: '#A15600',
                                    fontWeight: 'bold',
                                    mt: 2,
                                    textAlign: 'center',
                                    paddingTop: '10px',
                                    margin: '20px'
                                }}>
                                Nuestra empresa
                            </Typography>
                        </Box>

                    </Box>

                </Box>


            </Parallax>



            <Grid Container sx={{
                // border:2,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: 'auto',
                width: '100%',


            }}>

                <Grid container data-aos="fade-up"
                    data-aos-duration="1000" item xs={12} sm={12} md={12} lg={12}>

                    <Box sx={{
                        display: 'flow',
                        color: '#A15600',
                        fontWeight: 'bold',
                        mt: 2,
                        textAlign: 'center',
                        // position:'relative',
                        minHeight: '200px',
                        width: '100%',
                        //left:'0%',
                        //border:2,
                        boxShadow: 0,
                        marginTop: '40px',
                        padding: '10px',

                    }}  >


                        <Typography
                            variant='h4'
                            sx={{
                                color: '#A15600',
                                fontWeight: 'bold',
                                mt: 2,
                                textAlign: 'center',
                                padding: '10px',
                            }}>
                            Casas & Lotes
                        </Typography>
                        <Typography
                            variant='h6'
                            sx={{
                                color: 'black',
                                fontWeight: 'bold',
                                mt: 2,
                                textAlign: 'center',
                                padding: '10px'
                            }}>
                            Somos constructores con 15 años de experiencia en el Valle del Cauca,
                            tiempo en el cual desarrollamos proyectos habitacionales para vivir
                            al máximo en familia, asegurando un patrimonio de alta valorización para
                            el presente y el futuro.
                        </Typography>


                    </Box>




                </Grid>



            </Grid>

            <br />
            <br />



            <Parallax

                bgImage={Nosotros2}
                strength={600} >

                <Grid
                    sx={{



                    }}>

                    <Box container data-aos="fade-up"
                        data-aos-duration="2000" sx={{

                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            padding: '20px',
                            //border:4 
                        }}>


                        <Grid item xs={4} sm={4} md={4} lg={4}

                            sx={{

                                width: '100%',
                                height: '100%',
                                display: 'flex',
                                padding: '20px',
                                //border:4 ,
                                // minHeight:'50vh',
                            }}
                        >

                            <Box sx={{
                                //border:2,
                                textAlign: 'center',
                                backgroundColor: '#f3f6f9',
                                opacity: [.7],
                                borderRadius: 10,
                                margin: '10px',
                                width: '100%',
                                height: '100%',
                                padding: '10px',
                                minHeight: '65vh',
                            }}>


                                <Box data-aos="fade-left" sx={{

                                    width: '300px',
                                    height: '200px',
                                    //border: 2,
                                    marginLeft: 'auto',
                                    marginRight: 'auto',
                                    marginBottom: '10px',

                                }}>
                                    <img width={'100%'} height={'100%'} src={Mision} />
                                </Box>
                                <Box data-aos="fade-left">
                                    <Box sx={{

                                        //border: 2
                                    }}>
                                        <Typography variant='h3'
                                            sx={{
                                                // border:2,

                                                color: '#A15600',
                                                fontWeight: 'bold',
                                                textAlign: 'center',
                                                //paddingTop:'10px',                                                   
                                            }}>
                                            Mision
                                        </Typography>
                                    </Box>
                                    <Box sx={{


                                        //border: 2
                                    }}>

                                        <Typography variant='body1'
                                            sx={{
                                                color: 'black',
                                                fontWeight: 'bold',

                                                textAlign: 'center',
                                                padding: '10px'
                                            }}>
                                            Construimos para vivir con total calidad, seguridad,
                                            confort en los mejores ambientes del Valle del Cauca.
                                        </Typography>
                                    </Box>
                                </Box>

                            </Box>
                        </Grid>

                        <Grid item xs={4} sm={4} md={4} lg={4}
                            sx={{

                                width: '100%',
                                height: '100%',
                                display: 'flex',
                                padding: '20px',
                                //border:4
                                //minHeight:'50vh', 
                            }}

                        >

                            <Box sx={{
                                //border:2,
                                textAlign: 'center',
                                backgroundColor: '#f3f6f9',
                                opacity: [.7],
                                borderRadius: 10,
                                margin: '10px',
                                width: '100%',
                                height: '100%',
                                padding: '10px',
                                minHeight: '65vh',
                            }}>


                                <Box data-aos="fade-left" sx={{

                                    width: '300px',
                                    height: '200px',
                                    //border: 2,
                                    marginLeft: 'auto',
                                    marginRight: 'auto',
                                    marginBottom: '10px',

                                }}>
                                    <img width={'90%'} height={'90%'} src={Vision} />
                                </Box>
                                <Box data-aos="fade-left">
                                    <Box sx={{
                                        //border:2,

                                    }}>
                                        <Typography variant='h3'
                                            sx={{
                                                color: '#A15600',
                                                fontWeight: 'bold',
                                                textAlign: 'center',
                                                //paddingTop:'10px',                                                   
                                            }}>
                                            Vision
                                        </Typography>
                                    </Box>
                                    <Box sx={{

                                        //border:2
                                    }}>

                                        <Typography variant='body1'
                                            sx={{
                                                color: 'black',
                                                fontWeight: 'bold',
                                                textAlign: 'center',
                                                padding: '10px'
                                            }}>
                                            Para el 2025 seremos la constructora preferida de las familias vallecaucanas
                                            y por los inversionistas que busquen la mejor rentabilidad en sus proyectos inmobiliarios.
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>


                        </Grid>

                        <Grid item xs={4} sm={4} md={4} lg={4}
                            sx={{

                                width: '100%',
                                height: '100%',
                                display: 'flex',
                                padding: '20px',
                                // border:4 
                            }}


                        >

                            <Box sx={{
                                //border:2,
                                textAlign: 'center',
                                backgroundColor: '#f3f6f9',
                                opacity: [.7],
                                borderRadius: 10,
                                margin: '10px',
                                width: '100%',
                                height: '100%',
                                padding: '10px',
                                minHeight: '65vh',
                            }}>


                                <Box data-aos="fade-left" sx={{
                                    width: '300px',
                                    height: '200px',
                                    //border: 2,
                                    marginLeft: 'auto',
                                    marginRight: 'auto',
                                    marginBottom: '10px',


                                }}>
                                    <img width={'100%'} height={'100%'} src={Filosofia} />
                                </Box>
                                <Box data-aos="fade-left">
                                    <Box sx={{

                                        // border: 2
                                    }}>
                                        <Typography variant='h3'
                                            sx={{
                                                color: '#A15600',
                                                fontWeight: 'bold',

                                                textAlign: 'center',
                                                //paddingTop:'10px',                                                   
                                            }}>
                                            Filosofia
                                        </Typography>
                                    </Box>
                                    <Box sx={{
                                        padding: '10px',
                                        // border:2
                                    }}>

                                        <Typography variant='body1'
                                            sx={{
                                                color: 'black',
                                                fontWeight: 'bold',
                                                textAlign: 'center',
                                                padding: '10px'
                                            }}>
                                            Ofrecemos proyectos de vivienda concebidos para vivir con nuestra propia familia,
                                            entregando asi el máximo compromiso en la ejecución de cada obra,
                                            cuidando cada detalle milimetro a milimetro para que nuestrso encuentren total satisfacción.
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>


                        </Grid>


                    </Box>
                </Grid >

            </Parallax>
            <Box sx={{ marginTop: '60px' }}>
                <NewProjectInfo />
            </Box>





        </Grid>


    )
}
