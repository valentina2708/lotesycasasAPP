import React from 'react'
import Box from '@mui/material/Box';


import { Typography } from '@mui/material'
import Carousel from 'better-react-carousel'
import parque2 from '../../assets/parque2.jpg'
import parque3 from '../../assets/parque3.jpg'
import terraza1 from '../../assets/TERRAZA1.jpg'
import terraza3 from '../../assets/TERRAZA3.jpg'



export default function Gallery(img1,img2,img3,img4) {
    
    return (
       
        
         <Box>          
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



        </Box>
    )
}
