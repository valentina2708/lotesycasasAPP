
import { Box, TextField, CardMedia,CardContent, Card,Typography,Hidden} from '@mui/material'
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

import {Paper,Stack} from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function AboutUs() {
    useEffect(() => {
        AOS.init({ offset: 200, duration: 1000 });
      }, []);

   
    return (
      
     <Grid container  sx={{
        
       
         }}>  


         <Card sx={{  
            margin:'10px',
            boxShadow:10,    
                
                }}>
      <CardContent>
      <Grid Container sx={{
           // border:2,
            display:'flex',
            height: 'auto',
			width: 'auto',
        }}> 
        <Grid item xs={12} sm={12} md={12} lg={8}>
        
                    <Card data-aos="fade-down" sx={{ 
                        
                         display:'flex',
                         color: '#A15600',
                          fontWeight: 'bold',
                          mt: 2, 
                          textAlign:'center',
                          position:'relative',
                          minHeight:'300px',
                        // top:-295,
                         //left:'0%',
                         border:0,
                         boxShadow:0,
                         margin:'10px',
                         padding:'10px'
                       }}  >
                    <CardMedia/>
                        <CardContent>
                            <Typography
                            variant='h3'
                            sx={{
                                color: '#A15600',
                                fontWeight: 'bold',
                                mt: 2, 
                                textAlign:'center',
                                padding:'20px',
                                }}>
                                Nuestra empresa 
                            </Typography>
                            <Typography
                            variant='h5'
                            sx={{
                                color: 'black',
                                fontWeight: 'bold',
                                mt: 2, 
                                textAlign:'center',
                                padding:'20px'
                                }}>
                                Somos constructores con 15 años de experiencia en el Valle del Cauca,
                                tiempo en el cual desarrollamos proyectos habitacionales para vivir 
                                al máximo en familia, asegurando un patrimonio de alta valorización para el presente y el futuro.
                            </Typography>

                        </CardContent>
                        </Card>
        </Grid> <Hidden mdDown> 
        
        <Grid item xs={12} sm={12} md={12} lg={4}>                        
        <Card  data-aos="fade-left"  sx={{
                       display:'flex',
                       color: '#A15600',
                        fontWeight: 'bold',
                        mt: 2, 
                        height: '70%',
                        width: '70%',
                        textAlign:'center',
                       verticalAlign:'center',
						
                        padding:'50px',
                        position:'relative',
                        margin:'10px',
                        boxShadow:10,
                        //top:20,
                        //left:'-10%',
                        }}>
        
           
            <CardMedia
           
           /> 
                <CardContent>
                    <Typography
                    variant='h4'
                    sx={{
                        color: '#A15600',
                        fontWeight: 'bold',
                        mt: 2, 
                        textAlign:'center',
                        }}>

                    </Typography>
                   
                <img width={'100%'} height={'100%'} src={Logocasasylotes} />
                </CardContent>
               
           
          
                </Card>
            </Grid>
        </Hidden> 
        
                         
        </Grid>          
       
        <Typography variant="body2">
         
        </Typography>
      </CardContent>
     
    </Card>
        
                
         <br />               
         <Card sx={{  
            margin:'10px',
            boxShadow:10,    
                
                }}>
      <CardContent>
      <Grid Container sx={{
           // border:2,
            display:'flex',
            height: 'auto',
			width: 'auto',
        }}> 
        <Hidden mdDown> 
        
        <Grid item xs={12} sm={12} md={12} lg={4}>                        
        <Card  data-aos="fade-right"sx={{
                       display:'flex',
                       color: '#A15600',
                        fontWeight: 'bold',
                        mt: 2, 
                        height: '70%',
                        width: '70%',
                        textAlign:'center',
                       verticalAlign:'center',
						
                        padding:'50px',
                        position:'relative',
                        margin:'10px',
                        boxShadow:10,
                        //top:20,
                        //left:'-10%',
                        }}>
        
           
            <CardMedia
           
           /> 
                <CardContent>
                    <Typography
                    variant='h4'
                    sx={{
                        color: '#A15600',
                        fontWeight: 'bold',
                        mt: 2, 
                        textAlign:'center',
                        }}>

                    </Typography>
                   
                <img width={'100%'} height={'100%'} src={Mision} />
                </CardContent>
               
           
          
                </Card>
            </Grid>
        </Hidden> 
        <Grid item xs={12} sm={12} md={12} lg={8}>
        
                    <Card data-aos="fade-left" sx={{ 
                         display:'flex',
                         color: '#A15600',
                          fontWeight: 'bold',
                          mt: 2, 
                          textAlign:'center',
                          position:'relative',
                          minHeight:'300px',
                        // top:-295,
                         //left:'0%',
                         border:0,
                         boxShadow:0,
                         margin:'10px',
                         padding:'10px'
                       }}  >
                    <CardMedia/>
                        <CardContent>
                            <Typography
                            variant='h3'
                            sx={{
                                color: '#A15600',
                                fontWeight: 'bold',
                                mt: 2, 
                                textAlign:'center',
                                padding:'20px',
                                }}>
                                Misión
                            </Typography>
                            <Typography
                            variant='h5'
                            sx={{
                                color: 'black',
                                fontWeight: 'bold',
                                mt: 2, 
                                textAlign:'center',
                                padding:'20px'
                                }}>
                               Construimos para vivir con total calidad, seguridad,
                               Construimos para vivir con total calidad, seguridad, confort en los mejores ambientes del Valle del Cauca. confort en los mejores ambientes del Valle del Cauca.
                            </Typography>

                        </CardContent>
                        </Card>
        </Grid>
        
        
                         
        </Grid>          
       
        <Typography variant="body2">
         
        </Typography>
      </CardContent>
     
    </Card>           
        <br />

         <Card sx={{  
            margin:'10px',
            boxShadow:10,    
                
                }}>
      <CardContent>
      <Grid Container sx={{
           // border:2,
            display:'flex',
            height: 'auto',
			width: 'auto',
        }}> 
        <Grid item xs={12} sm={12} md={12} lg={8}>
        
                    <Card  data-aos="fade-right" sx={{ 
                         display:'flex',
                         color: '#A15600',
                          fontWeight: 'bold',
                          mt: 2, 
                          textAlign:'center',
                          position:'relative',
                          minHeight:'300px',
                        // top:-295,
                         //left:'0%',
                         border:0,
                         boxShadow:0,
                         margin:'10px',
                         padding:'10px'
                       }}  >
                    <CardMedia/>
                        <CardContent>
                            <Typography
                            variant='h3'
                            sx={{
                                color: '#A15600',
                                fontWeight: 'bold',
                                mt: 2, 
                                textAlign:'center',
                                padding:'20px',
                                }}>
                                Visión
                            </Typography>
                            <Typography
                            variant='h5'
                            sx={{
                                color: 'black',
                                fontWeight: 'bold',
                                mt: 2, 
                                textAlign:'center',
                                padding:'20px'
                                }}>
                                Para el 2022 seremos la constructora preferida de 
                                las familias vallecaucanas y por los inversionistas 
                                que busquen la mejor rentabilidad en sus proyectos inmobiliarios.
                            </Typography>

                        </CardContent>
                        </Card>
        </Grid> <Hidden mdDown> 
        
        <Grid item xs={12} sm={12} md={12} lg={4}>                        
        <Card data-aos="fade-left" sx={{
                       display:'flex',
                       color: '#A15600',
                        fontWeight: 'bold',
                        mt: 2, 
                        height: '70%',
                        width: '70%',
                        textAlign:'center',
                       verticalAlign:'center',
						
                        padding:'50px',
                        position:'relative',
                        margin:'10px',
                        boxShadow:10,
                        //top:20,
                        //left:'-10%',
                        }}>
        
           
            <CardMedia
           
           /> 
                <CardContent>
                    <Typography
                    variant='h4'
                    sx={{
                        color: '#A15600',
                        fontWeight: 'bold',
                        mt: 2, 
                        textAlign:'center',
                        }}>

                    </Typography>
                   
                <img width={'100%'} height={'100%'} src={Vision} />
                </CardContent>
               
           
          
                </Card>
            </Grid>
        </Hidden> 
        
                         
        </Grid>          
       
        <Typography variant="body2">
         
        </Typography>
      </CardContent>
     
    </Card>



       <Card sx={{  
            margin:'10px',
            boxShadow:10,    
                
                }}>
      <CardContent>
      <Grid Container sx={{
           // border:2,
            display:'flex',
            height: 'auto',
			width: 'auto',
        }}> 
        <Hidden mdDown> 
        
        <Grid item xs={12} sm={12} md={12} lg={4}>                        
        <Card data-aos="fade-up-right" sx={{
                       display:'flex',
                       color: '#A15600',
                        fontWeight: 'bold',
                        mt: 2, 
                        height: '70%',
                        width: '70%',
                        textAlign:'center',
                       verticalAlign:'center',
						
                        padding:'50px',
                        position:'relative',
                        margin:'10px',
                        boxShadow:10,
                        //top:20,
                        //left:'-10%',
                        }}>
        
           
            <CardMedia
           
           /> 
                <CardContent>
                    <Typography
                    variant='h4'
                    sx={{
                        color: '#A15600',
                        fontWeight: 'bold',
                        mt: 2, 
                        textAlign:'center',
                        }}>

                    </Typography>
                   
                <img width={'100%'} height={'100%'} src={Filosofia} />
                </CardContent>
               
           
          
                </Card>
            </Grid>
        </Hidden> 
        <Grid item xs={12} sm={12} md={12} lg={8}>
        
                    <Card data-aos="fade-up-left" sx={{ 
                         display:'flex',
                         color: '#A15600',
                          fontWeight: 'bold',
                          mt: 2, 
                          textAlign:'center',
                          position:'relative',
                          minHeight:'300px',
                        // top:-295,
                         //left:'0%',
                         border:0,
                         boxShadow:0,
                         margin:'10px',
                         padding:'10px'
                       }}  >
                    <CardMedia/>
                        <CardContent>
                            <Typography
                            variant='h3'
                            sx={{
                                color: '#A15600',
                                fontWeight: 'bold',
                                mt: 2, 
                                textAlign:'center',
                                padding:'20px',
                                }}>
                                Filosofía
                            </Typography>
                            <Typography
                            variant='h5'
                            sx={{
                                color: 'black',
                                fontWeight: 'bold',
                                mt: 2, 
                                textAlign:'center',
                                padding:'20px'
                                }}>
                                Ofrecemos proyectos de vivienda concebidos para vivir con nuestra propia familia,
                                entregando asi el máximo compromiso en la ejecución de cada obra,
                                 cuidando cada detalle milimetro a milimetro para que nuestrso encuentren total satisfacción.
                            </Typography>

                        </CardContent>
                        </Card>
        </Grid>
        
        
                         
        </Grid>          
       
        <Typography variant="body2">
         
        </Typography>
      </CardContent>
     
    </Card>      

       






        
       
        

     

       
    </Grid>  


    )
}
