import React, { useState } from 'react'
import Box from '@mui/material/Box';


import LogoRinconDelLago from '../../assets/logoRincondelLago.jpg'
import parque2 from '../../assets/parque2.jpg'
import parque3 from '../../assets/parque3.jpg'
import terraza1 from '../../assets/TERRAZA1.jpg'
import terraza3 from '../../assets/TERRAZA3.jpg'

import Grid from '@mui/material/Grid';
import { Card, Typography, Button,} from '@mui/material'
import Mapap from '../projectComponents/Map';
import Carousel from 'better-react-carousel'
import { Link } from 'react-router-dom';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


import MainProjects from '../ProjectsInfo/MainProjects';
import Gallery from '../projectComponents/Gallery'

import Slide from '@mui/material/Slide';
import FormControlLabel from '@mui/material/FormControlLabel';
import ToggleButton from '@mui/material/ToggleButton';

import CheckIcon from '@mui/icons-material/Check';

export default function Pictures() {

  const [selected, setSelected] = React.useState(false);
  const handleChange = () => {
    setSelected((prev) => !prev);
  };
  return (




    <Grid containe='true' 
    
      sx={{
        marginTop: '20vh'
      }}>
      <Box
        sx={{

          width: '100%',
          marginTop: '20px',
          marginBottom: '20px',

        }}>
      </Box>

        <Mapap />
        {Gallery('parque2','parque2','parque2','parque2')}

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

      <Box sx={{ height: '100%' }}>


        <Slide
          direction="up"
          in={selected}
          mountOnEnter
          unmountOnExit>

          <Box sx={{
            border: 2,
            height: '100%',
            with: '100%'
          }}>
            <br />

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

            </Grid>
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
            <br />
          </Box>


        </Slide>
        <FormControlLabel
          control={
            <ToggleButton value="check"selected={selected} onChange={handleChange}>
              <CheckIcon />
            </ToggleButton>
          }/>
        {probar(false)}
      </Box>


      <Box>

      
        <MainProjects />
      </Box>

     
    </Grid>

  )



}
function probar(veri) {
  var x = 'dddd';
  if (veri = false) {
    x = false
  }
  if (veri = true) {
    x = true

  } else {
    x = 'nada'
  }
  return (



    <h1>jhjj{x}</h1>


  );
}
