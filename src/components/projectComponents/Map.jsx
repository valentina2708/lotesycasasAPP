import { height } from '@mui/system'
import { GoogleMap, Marker, MarkerF, useLoadScript } from '@react-google-maps/api'
import React from 'react'
import Box  from '@mui/material/Box'

export default function Mapaa(latt,lngg) {
  
    const price= lngg;
   

    const{isLoaded}=useLoadScript({
        googleMapsApiKey:"AIzaSyDdwssQ5RRzvav2ZhmAykKzj2-jH1qhcGU"})
  
        
        if(!isLoaded) return <Box>Cargando...</Box>
    return (

   
        <Box>
            {
               
            }
           
        <GoogleMap
       // lat2={latt}
        zoom={14}
        center={{ lat:3.2499367481968666,
            lng: -76.56676798926843}}
        mapContainerStyle={{height:'50vh', width:'100%'}}
        >
        
        <MarkerF position={{ 
            lat: 3.2499367481968666,
            lng: -76.56676798926843
            }}/>

        </GoogleMap>

        </Box>


  )
}

