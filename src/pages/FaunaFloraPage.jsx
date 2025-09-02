import React, { useState } from 'react';
import { Box } from '@mui/material';
import Navigator from '../components/navigator/Navigator';
import Footer from '../components/footer/footer';
import ContentGrid from '../components/ContentGridComponents/contentGrid/ContentGrid';
import CategorySelector from '../components/faunaFloraComponents/CategorySelector';
import { faunaData, floraData } from '../content/faunaFlora/faunaFloraData';

export default function FaunaFloraPage() {
    const [selectedCategory, setSelectedCategory] = useState('fauna');

    const itemsToShow = selectedCategory === 'fauna' ? faunaData : floraData;
    const pageTitle = selectedCategory === 'fauna' ? 'Fauna Oceânica' : 'Flora Oceânica';
    const pageDescription = selectedCategory === 'fauna' ? 'Conheça a vida animal que habita os oceanos.' : 'Descubra a rica vida vegetal e micro-organismos dos oceanos.';

    return (
        <Box sx={{ backgroundColor: '#000000', color: '#ffffff', minHeight: '100vh' }}>
            <Navigator />
            <Box sx={{ p: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <CategorySelector
                    selectedCategory={selectedCategory}
                    onSelectCategory={setSelectedCategory}
                />
                <ContentGrid
                    title={pageTitle}
                    description={pageDescription}
                    items={itemsToShow}
                />
            </Box>
            <Footer depth={0} />
        </Box>
    );
}