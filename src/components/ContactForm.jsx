import { Box, TextField } from '@mui/material'
import React from 'react'
import { alpha, styled } from '@mui/material/styles';
import fotoformulario from '../assets/lotes.jpeg';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import SendIcon from '@mui/icons-material/Send';
import { textAlign } from '@mui/system';


const CssTextField = styled(TextField)({
    width: '98%',
    borderRadius: 60,

    backgroundColor: 'white',
    display: 'flex',
    float: 'right',
    '& label.Mui-focused': {
        color: 'green', borderRadius: 60,
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'green', borderRadius: 60,
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'gray', borderRadius: 60,
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
    


    
   
    return (
        
           
                <Grid container
                    sx={{
                        display: 'flex',
                        border: 2,
                        margin: '5px',
                        padding: '5px',
                        backgroundColor: '#FDEEEB',
                        justifyContent: 'center',
                        textAlign: 'center',
                        alignItems: 'center'
                    }}>
                    <Grid item xs={12} sm={6} md={6} lg={6}>

                        <Box sx={{
                            display: 'flex',
                            height: '95%',
                            padding: '5px',
                            borderRadius: '5',
                            width: '95%',
                            margin: '5px',
                            "& .MuiTextField-root": { m: 1 },
                        }}>
                            <img width={'100%'} height={'100%'} src={fotoformulario} />

                        </Box>

                    </Grid>

                    <Grid item xs={12} sm={6} md={6} lg={6}>
                        <Box component="form" sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '95%',
                            margin: '5px',
                            padding: '5px',
                            // border:2,
                            //maxHeight:'360px',
                            height: '95%',
                            textAlign: 'center',
                            justifyContent: 'center',
                            "& .MuiTextField-root": { m: 1 },

                        }}>
                            <CssTextField 
                                type='text'
                                label="Nombre" 
                                id="custom-css-outlined-input" 
                                required
                            />
                            <CssTextField label="Apellido"  type='text' id="custom-css-outlined-input" required />
                            <CssTextField label="Email"   type='email' id="custom-css-outlined-input" required />
                            <CssTextField label="Cedula"  type='Number' id="custom-css-outlined-input" required />
                            <CssTextField label="Celular" type='Number' id="custom-css-outlined-input"  required />
                            
                            <Button
                                sx={{ 
                                    width: '98%',
                                    margin: '5px',
                                    height: '40px',
                                    backgroundColor: '#FE6B1D',
                                    borderRadius: 60 
                                    }} 
                                    variant="contained" id='btnEnviar'   endIcon={<SendIcon />}> Enviar
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            



    )
}
