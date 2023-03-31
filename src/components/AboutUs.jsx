
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



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function AboutUs() {
    
   
    return (
      
     <Grid container  sx={{
        
       
         }}>  
         <Grid Container sx={{
           // border:2,
            display:'flex',
            height: 'auto',
			width: 'auto',
            
           
       
        }}> 
        <Grid item xs={12} sm={12} md={12} lg={8}>
                    <Card sx={{ 
                         display:'flex',
                         color: '#A15600',
                          fontWeight: 'bold',
                          mt: 2, 
                          textAlign:'center',
                          position:'relative',
                          minHeight:'300px',
                        // top:-295,
                         //left:'0%',
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
        <Card  sx={{
                       display:'flex',
                       color: '#A15600',
                        fontWeight: 'bold',
                        mt: 2, 
                        height: 'auto',
                        width: 'auto',
                        textAlign:'center',
                       verticalAlign:'center',
						maxHeight:'400px',
                        maxWidth:'300px',
                        padding:'50px',
                        position:'relative',
                        margin:'10px',
                        top:20,
                        left:'-10%',
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
                
         <br />               
         <Grid Container sx={{
           // border:2,
            display:'flex',
            alignItems:'center',
            height: 'auto',
			width: 'auto',
            
           
       
        }}> 

<Hidden mdDown> 
        
        <Grid item xs={12} sm={12} md={12} lg={4}>                        
        <Card  sx={{
                       display:'flow',
                       color: '#A15600',
                        fontWeight: 'bold',
                        mt: 2, 
                        height: 'auto',
                        width: 'auto',
                        textAlign:'center',
                       verticalAlign:'center',
						maxHeight:'400px',
                        maxWidth:'300px',
                        padding:'50px',
                        position:'relative',
                        margin:'10px',
                       
                        left:'30%',
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
                    <Card sx={{ 
                         display:'flex',
                         color: '#A15600',
                          fontWeight: 'bold',
                          mt: 2, 
                          textAlign:'center',
                          position:'relative',
                          height: 'auto',
                          width: 'auto',
                          minHeight:'300px',
                          //top:35,
                          //left:'-15%',
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
                                Mision
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
                                confort en los mejores ambientes del Valle del Cauca.
                            </Typography>

                        </CardContent>
                        </Card>
        </Grid> 
                     
        </Grid> 




        <br />                                    
            <Grid Container sx={{
           // border:2,
            display:'flex',
            height: 'auto',
			width: 'auto',
            
           
       
        }}> 
        <Grid item xs={12} sm={12} md={12} lg={8}>
                    <Card sx={{ 
                         display:'flex',
                         color: '#A15600',
                          fontWeight: 'bold',
                          mt: 2, 
                          textAlign:'center',
                          position:'relative',
                          minHeight:'350px',
                        // top:-295,
                         //left:'0%',
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
                                Vision
                            </Typography>
                            <Typography
                            variant='h5'
                            sx={{
                                color: 'black',
                                fontWeight: 'bold',
                                mt: 2, 
                               
                                padding:'20px',
                                textAlign:'justify'
                                }}>
                               Para el 2022 seremos la constructora preferida de 
                               las familias vallecaucanas y por los inversionistas 
                               que busquen la mejor rentabilidad en sus proyectos inmobiliarios.
                            </Typography>

                        </CardContent>
                        </Card>
                    </Grid> <Hidden mdDown> 
             <Grid item xs={12} sm={12} md={12} lg={4}>                        
       <Card  sx={{
                       display:'flow',
                       color: '#A15600',
                        fontWeight: 'bold',
                        mt: 2, 
                        height: 'auto',
                        width: 'auto',
                        textAlign:'center',
                       verticalAlign:'center',
						maxHeight:'400px',
                        maxWidth:'300px',
                        padding:'50px',
                        position:'relative',
                        margin:'10px',
                        top:15,
                        left:'-10%',
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
       
         <br />            
                 
            </Grid>                    
                    
            <Grid Container sx={{
            //border:2,
            display:'flex',
            height: 'auto',
			width: 'auto',
            alignItems:'center'
           
       
        }}> 


<Hidden mdDown> 
             <Grid item xs={12} sm={12} md={12} lg={4}>                        
       <Card  sx={{
                       display:'flex',
                       color: '#A15600',
                        fontWeight: 'bold',
                        mt: 2, 
                        height: 'auto',
                        width: 'auto',
                        textAlign:'center',
                       verticalAlign:'center',
						maxHeight:'400px',
                        maxWidth:'300px',
                        padding:'50px',
                        position:'relative',
                        margin:'10px',
                        top:0,
                        left:'30%',
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
                    <Card sx={{ 
                         display:'flex',
                         color: '#A15600',
                          fontWeight: 'bold',
                          mt: 2, 
                          textAlign:'center',
                          position:'relative',
                         
                        // top:-295,
                         //left:'0%',
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
                               Ofrecemos proyectos de vivienda concebidos para vivir con
                            nuestra propia familia, entregando asi el máximo compromiso en la ejecución de cada obra, cuidando cada detalle milimetro a milimetro para que nuestrso encuentren total satisfacción.
                            </Typography>

                        </CardContent>
                        </Card>
                    </Grid>
                     
                   
                    </Grid>             
            

       






        
       
        

     

       
    </Grid>  


    )
}
