import { useState } from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';
import axios from 'axios';

const HipotecaCalculator = () => {
  const [formData, setFormData] = useState({
    precio: '',
    cuotaInicial: '',
    tasaInteres: '',
    años: ''
  });
  console.log('Datos enviados:', formData);

  const [pagoMensual, setPagoMensual] = useState(null);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:5000/api/calcular-hipoteca', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      setPagoMensual(data.pagoMensual);
      setError('');
    } catch (err) {
      console.error('Error:', err);
      setError('Hubo un error al calcular la hipoteca. Por favor, verifica los valores.');
      setPagoMensual(null);
    }
  };
  

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Calculadora de Hipotecas
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Precio de la Propiedad"
          name="precio"
          type="number"
          value={formData.precio}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Cuota Inicial (%)"
          name="cuotaInicial"
          type="number"
          value={formData.cuotaInicial}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Tasa de Interés (%)"
          name="tasaInteres"
          type="number"
          value={formData.tasaInteres}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Años"
          name="años"
          type="number"
          value={formData.años}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
          required
        />
        <Button variant="contained" color="primary" type="submit" fullWidth>
          Calcular Hipoteca
        </Button>
      </form>

      {error && (
        <Typography variant="body1" color="error" style={{ marginTop: '20px' }}>
          {error}
        </Typography>
      )}

      {pagoMensual && (
        <Typography variant="h6" style={{ marginTop: '20px' }}>
          Pago mensual: ${pagoMensual}
        </Typography>
      )}
    </Container>
  );
};

export default HipotecaCalculator;
