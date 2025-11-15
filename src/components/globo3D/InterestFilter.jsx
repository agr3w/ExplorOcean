import React from 'react';
import { Box, FormGroup, FormControlLabel, Checkbox, Paper, Typography } from '@mui/material';

const StyledFormControlLabel = (props) => (
  <FormControlLabel
    {...props}
    control={<Checkbox sx={{ color: 'primary.light', '&.Mui-checked': { color: 'primary.main' } }} />}
    sx={{ color: 'white' }}
  />
);

function InterestFilter({ filters, setFilters }) {
  const handleChange = (event) => {
    setFilters(f => ({ ...f, [event.target.name]: event.target.checked }));
  };

  return (
    <Paper sx={{
      position: 'absolute', top: 100, right: 24, zIndex: 20,
      p: 2, borderRadius: 2,
      background: 'rgba(2, 16, 26, 0.7)',
      backdropFilter: 'blur(10px)',
      border: '1.5px solid rgba(54, 209, 224, 0.3)',
      boxShadow: '0 8px 32px rgba(2, 16, 26, 0.5)',
      color: '#fff',
    }}>
      <Typography variant="h6" sx={{ mb: 1, fontWeight: 'bold' }}>Camadas</Typography>
      <FormGroup>
        <StyledFormControlLabel
          control={<Checkbox checked={filters.geologia} onChange={handleChange} name="geologia" />}
          label="Geologia"
        />
        <StyledFormControlLabel
          control={<Checkbox checked={filters.biologia} onChange={handleChange} name="biologia" />}
          label="Biologia"
        />
        <StyledFormControlLabel
          control={<Checkbox checked={filters.historia} onChange={handleChange} name="historia" />}
          label="História"
        />
      </FormGroup>
    </Paper>
  );
}

export default InterestFilter;