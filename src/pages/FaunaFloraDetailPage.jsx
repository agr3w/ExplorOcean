import React, { useState, useEffect } from 'react'; 
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

    const [show3D, setShow3D] = useState(() => {
        if (typeof window === 'undefined') {
            return false;
        }
        try {
            const savedPreference = window.localStorage.getItem('show3D');
            return savedPreference !== null ? JSON.parse(savedPreference) : false;
        } catch (error) {
            console.error("Erro ao ler preferência do localStorage", error);
            return false;
        }
    });

    useEffect(() => {
        try {
            window.localStorage.setItem('show3D', JSON.stringify(show3D));
        } catch (error) {
            console.error("Erro ao salvar preferência no localStorage", error);
        }
    }, [show3D]);

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