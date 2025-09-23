import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import DetailPage from '../components/universal/DetailPage';
import Navigator from '../components/navigator/Navigator';
import Footer from '../components/footer/footer';
import { Box } from '@mui/material';
import { faunaData, floraData } from '../content/faunaFlora/faunaFloraData';

export default function FaunaFloraDetailPage() {
    const { category, id } = useParams();

    const dataToSearch = category === 'Fauna' ? faunaData : floraData;
    const item = dataToSearch.find(i => i.id === id);

    // Adicione este estado:
    const [show3D, setShow3D] = useState(true);

    return (
        <Box sx={{ backgroundColor: '#000000', color: '#ffffff', minHeight: '100vh', marginTop: 6 }}>
            <Navigator />
            <DetailPage
                item={item}
                show3D={show3D}
                setShow3D={setShow3D}
            />
            <Footer depth={0} />
        </Box>
    );
}