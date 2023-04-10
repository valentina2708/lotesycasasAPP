import {ThemeProvider} from '@mui/material'
import { Box, TextField, Card,CardContent,Typography,Hidden,Stack,Fab } from '@mui/material'
import React from 'react'
import { alpha, styled } from '@mui/material/styles';
import fotoformulario from '../assets/lotes.jpeg';
import Contacto1 from '../assets/contacto1.jpg';
import Grid from '@mui/material/Grid';
import parallax, { Parallax } from 'react-parallax';
import Button from '@mui/material/Button';

import SendIcon from '@mui/icons-material/Send';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

import RoomIcon from '@mui/icons-material/Room';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';

const CssTextField = styled(TextField)({
   // width: 'auto',
    borderRadius: 60,
    textAlign:'center',
    margin:'10px',
   // backgroundColor: 'white',
    display: 'flex',
    
    '& label.Mui-focused': {
        color: 'green', borderRadius: 60,
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'green', borderRadius: 60,
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#FE6B1D', borderRadius: 60,
        },
        '&:hover fieldset': {
            borderColor: 'yellow', borderRadius: 60,
        },
        '&.Mui-focused fieldset': {
            borderColor: 'green', borderRadius: 60,
        },
    },
});
const CssTextField2 = styled(TextField)({
     width: 'auto',
     borderRadius: 60,
     textAlign:'center',
     margin:'10px',
    // backgroundColor: 'white',
     display: 'flex',
     
     '& label.Mui-focused': {
         color: 'green', borderRadius: 60,
     },
     '& .MuiInput-underline:after': {
         borderBottomColor: 'green', borderRadius: 60,
     },
     '& .MuiOutlinedInput-root': {
         '& fieldset': {
             borderColor: '#FE6B1D', borderRadius: 60,
         },
         '&:hover fieldset': {
             borderColor: 'yellow', borderRadius: 60,
         },
         '&.Mui-focused fieldset': {
             borderColor: 'green', borderRadius: 60,
         },
     },
 });




export default function ContactForm() {
    
    useEffect(() => {
        AOS.init({ offset: 200, duration: 1000 });
      }, []);
    
   
    return (
        
      
             
                <Grid container
                    sx={{
                        display: 'inline',  
                    }}> 

                   
                    <Box data-aos="fade-left" sx={{
                       
                        margin:'0px',
                        width:'100%',
                        height:'100%',
                        borderRadius: 10,
                        backgroundColor:'#F0F0F0',
                        padding:'0px',
                        display: 'flex',
                       justifyContent:'center',
                       alignItems:'center'
                        //minHeight:'550px',
                        //maxWidth:'600px'    
                            }}>
                         <img width={'100%'} height={'100%'}  objectFit={'cover'} src={Contacto1} />         
                            
                    </Box>
                    <br /> 
                    <Grid container sx={{position:'relative',  display: 'flex',
                                            justifyContent:'center',
                                            alignItems:'center',}}>
                    <Box   data-aos="fade-right" sx={{  
                                            position:'absolute',
                                            width: '150px',
                                            margin: '5px',
                                            height: '150px',
                                            top:50,
                                            left:'300px',
                                            backgroundColor:'#FE6B1D',
                                            borderRadius: 6,
                                            boxShadow:20,
                                            }}>
                                           

                    </Box>
                    <Box  data-aos="fade-left"  sx={{  
                                            position:'absolute',
                                            width: '150px',
                                            margin: '5px',
                                            height: '150px',
                                            top:250,
                                            left:'1080px',
                                            backgroundColor:'#FE6B1D',
                                            borderRadius: 6,
                                            boxShadow:20,
                                            }}>
                                           

                    </Box>

                    <Grid item xs={12} sm={12} md={6} lg={6}>       
                                <Card data-aos="fade-down" sx={{
                                            
                                           
                                            margin:'10px',
                                            width:'99%',
                                            height:'99%',
                                            borderRadius: 10,
                                            boxShadow:20,
                                            textAlign:'center',
                                            display: 'flex',
                                            justifyContent:'center',
                                            alignItems:'center',
                                           // border:2
                                            //minHeight:'550px',
                                            //maxWidth:'600px'    
                                                }}>
                                    <CardContent data-aos="fade-down" sx={{
                                        //border:2, 
                                        width:'100%',
                                        boxShadow:0,
                                        margin:1,
                                        borderRadius:'10px'
                                        ,position:'relative'
                                        }}>
                                        
                               
                                    <CssTextField 
                                        type='text'
                                        label="Nombre" 
                                        id="custom-css-outlined-input" 
                                        required
                                    />
                                    
                                    <CssTextField label="Apellido"  type='text' id="custom-css-outlined-input" required  />
                                    <CssTextField label="Email"   type='email' id="custom-css-outlined-input" required />
                                    <CssTextField label="Cedula"  type='Number' id="custom-css-outlined-input" required />
                                    <CssTextField label="Celular" type='Number' id="custom-css-outlined-input"  required />
                                    
                                    <Button
                                        sx={{ 
                                            width: '98%',
                                            margin: '5px',
                                            height: '45px',
                                            backgroundColor: '#FE6B1D',
                                            borderRadius: 60 
                                            }} 
                                            variant="contained" id='btnEnviar'   endIcon={<SendIcon />}> Enviar
                                    </Button>
                                
                                   
                                           
                                        </CardContent>
                                    
                                </Card>
                              
                        </Grid>
                       
                        
                        </Grid> 
                    <Box sx={{display:'flex'}}>
                   

                        <Grid item xs={12} sm={12} md={12} lg={12}>           
                        <Card sx={{
                               
                                boxShadow:0,
                                width: '99%',
                                margin: '10px',
                                height: '95%',
                                borderRadius:10,
                                //minHeight:'300px'
                          }}>
                            <CardContent>          
                               <Stack  sx={{
                                        textAlign:'center'

                               }}>
                                 <Typography data-aos="fade-down"
                            variant='h4'
                            sx={{
                                color: '#A15600',
                                fontWeight: 'bold',
                                mt: 2, 
                                textAlign:'center',
                                padding:'10px',
                                margin:'10px'
                                }}>
                                Ponte en contacto con nosotros 
                            </Typography>
                           <Stack>
                           
                           
                           <Grid container> 
                                <Grid item xs={4} sm={4} md={4} lg={4} > 
                                    <Box data-aos="fade-down" sx={{
                                        //border:2,
                                        width: '99%',

                                        margin: '0px',
                                        height: '150px',
                                        display: 'flex',
                                        justifyContent:'center',
                                        alignItems:'center',
                                    }}>
                                        
                                    <Fab sx={{ 
                                        color: 'gray',
                                        width: '30%',
                                        margin: '10px',
                                        height: '90%',
                                       
                                    }}Size='large' >
							        <RoomIcon sx={{  width: '80%',height: '80%'}}/>
						            </Fab>
                                    
                                    </Box>
                                    <Box data-aos="fade-up">
                                    <Typography
                            variant='h5'
                            sx={{
                                color: 'black',
                                fontWeight: 'bold',
                                mt: 2, 
                                textAlign:'center',
                                padding:'5px',
                                margin:'20px'
                                }}>
                                Ubicaión
                            </Typography>
                                    <Typography variant='body1'
                                    sx={{
                                    mt: 3,
                                    textAlign:'center',
                                    margin:'30px'}}>
                                    Centro de Negocios Oasis de Unicentro, Oficina 405 A. Santiago de Cali, Colombia
								    </Typography> 
                                    
                                    </Box>
                                </Grid>
                                <Grid item xs={4} sm={4} md={4} lg={4} > 
                                    <Box data-aos="fade-down" sx={{
                                        //border:2,
                                        width: '99%',

                                        margin: '0px',
                                        height: '150px',
                                        display: 'flex',
                                        justifyContent:'center',
                                        alignItems:'center',
                                    }}>
                                        
                                    <Fab sx={{ 
                                        color: 'gray',
                                        width: '30%',
                                        margin: '10px',
                                        height: '90%',
                                       
                                    }}Size='large' >
							        <CallIcon sx={{  width: '80%',height: '80%'}}/>
						            </Fab>
                                    
                                    </Box>
                                    <Box data-aos="fade-up">
                                    <Typography
                            variant='h5'
                            sx={{
                                color: 'black',
                                fontWeight: 'bold',
                                mt: 2, 
                                textAlign:'center',
                                padding:'5px',
                                margin:'20px'
                                }}>
                                Telefono
                            </Typography>
                                    <Typography variant='body1'
                                    sx={{
                                    mt: 3,
                                    textAlign:'center',
                                    margin:'30px'}}>
                                    3204210000
								    </Typography> 
                                    
                                    </Box>
                                </Grid>
                               
                                <Grid item xs={4} sm={4} md={4} lg={4} > 
                                    <Box data-aos="fade-down" sx={{
                                        //border:2,
                                        width: '99%',

                                        margin: '0px',
                                        height: '150px',
                                        display: 'flex',
                                        justifyContent:'center',
                                        alignItems:'center',
                                    }}>
                                        
                                    <Fab sx={{ 
                                        color: 'gray',
                                        width: '30%',
                                        margin: '10px',
                                        height: '90%',
                                       
                                    }}Size='large' >
							        <MailIcon sx={{  width: '80%',height: '80%'}}/>
						            </Fab>
                                    
                                    </Box>
                                    <Box data-aos="fade-up">
                                    <Typography
                            variant='h5'
                            sx={{
                                color: 'black',
                                fontWeight: 'bold',
                                mt: 2, 
                                textAlign:'center',
                                padding:'5px',
                                margin:'20px'
                                }}>
                                Correo
                            </Typography>
                                    <Typography variant='body1'
                                    sx={{
                                    mt: 3,
                                    textAlign:'center',
                                    margin:'30px'}}>                                
                                    info@casaylotes.co
								    </Typography> 
                                    
                                    </Box>
                                </Grid>
                           </Grid>
                           
                               
                                </Stack>      
                               </Stack>
                               
                                  
                                </CardContent>
                                
                    </Card>
                    </Grid>   
                         
                    </Box>  
            
           

                       
                   

                   
                   
                </Grid>
              
           



    )
}
