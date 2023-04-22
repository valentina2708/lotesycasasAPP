import React from 'react'
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import LogoRinconDelLago from '../../assets/logoRincondelLago.jpg'
import Grid from '@mui/material/Grid';
import { TextField, CardMedia, CardContent, Card, Typography, Hidden } from '@mui/material'
import Mapap from '../projectComponents/Map';
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
      <Box sx={{//border:2
      }}>


        <Mapap />


      </Box>
      <Grid item="true" xs={12} sm={12} md={12} lg={6}>
        <Box item="true" sx={{
          width: 500,
          height: 450,
          overflowY: 'scroll',
          marginTop: '70px',
          marginLeft: '10px'
        }}>
          <ImageList variant="masonry" cols={2} gap={8}>
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </Grid>
    </Grid>

  )
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
    title: 'Bed',
  },
  {
    img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
    title: 'Books',
  },
];