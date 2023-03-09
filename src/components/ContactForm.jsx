import { Box, TextField } from '@mui/material'
import React from 'react'
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import { alpha, styled } from '@mui/material/styles';

import FilledInput from '@mui/material/FilledInput';
import fotoformulario from '../assets/lotes.jpeg';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import { blue } from '@mui/material/colors';
import { borderRadius } from '@mui/system';
import { Block } from '@mui/icons-material';


const CssTextField = styled(TextField)({
    width: '85%',
    borderRadius: '30',

    backgroundColor: 'white',
    display: 'flex',
    float: 'right',
    '& label.Mui-focused': {
        color: 'green',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'gray',
        },
        '&:hover fieldset': {
            borderColor: 'yellow',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'green',
        },
    },
});


export default function ContactForm() {
    return (
        
      
      
        <Box component="form" sx={{
           
           display:'flex',
          
           
            backgroundColor: '#F0F0EB',
            borderRadius: 2,
            margin: 3 ,
           // border: 1,
           
            padding:3,
            borderColor: 'black',
            "& .MuiTextField-root": { m: 1 },
            
          }}>
            
            <Box component="form" sx={{
                 
                
                display: 'flex',
                height:'350px',
                padding:'10px',
                borderRadius:'5', 
                width:'50%',
                margin:'10px', 
                "& .MuiTextField-root": { m: 1 },
                
            }}>
                <img src={fotoformulario}  /> 
            
            </Box>

            
            <Box component="form" sx={{
              display:'flex',
              flexDirection:'column',
              width:'50%',
              margin:'10px',
              padding:'10px',
              
                 
                "& .MuiTextField-root": { m: 1 },
                
            }}>
            <CssTextField label="Nombre" id="custom-css-outlined-input"  required />
            <CssTextField label="Apellido" id="custom-css-outlined-input2" required />
            <CssTextField label="Email" id="custom-css-outlined-input3" required />
            <CssTextField label="Cedula" id="custom-css-outlined-input4" required/>
            <CssTextField label="Celular" id="custom-css-outlined-input5"  required/>
            
            </Box>
            
            
          

        </Box>

      

    )
}
