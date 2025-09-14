import { Box, FormGroup, FormControlLabel, Checkbox, Paper } from '@mui/material';

function InterestFilter({ filters, setFilters }) {
    return (
        <Paper sx={{
            position: 'absolute',
            top: 100,
            right: 24,
            zIndex: 20,
            p: 2,
            borderRadius: 3,
            background: 'rgba(30,60,120,0.85)',
            color: '#fff',
            boxShadow: '0 2px 12px rgba(30,60,120,0.18)'
        }}>
            <FormGroup>
                <FormControlLabel
                    control={<Checkbox checked={filters.fossas} onChange={() => setFilters(f => ({ ...f, fossas: !f.fossas }))} />}
                    label="Fossas"
                />
                <FormControlLabel
                    control={<Checkbox checked={filters.placas} onChange={() => setFilters(f => ({ ...f, placas: !f.placas }))} />}
                    label="Placas"
                />
                {/* Adicione mais filtros conforme necessário */}
            </FormGroup>
        </Paper>
    );
}

export default InterestFilter;