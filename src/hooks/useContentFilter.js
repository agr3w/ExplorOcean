import { useState, useMemo } from 'react';

export const useContentFilter = (data) => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    // Usamos useMemo para evitar recalcular as categorias e itens filtrados
    // a cada renderização, apenas quando os 'data' ou 'selectedCategory' mudam.
    const uniqueCategories = useMemo(() => {
        return [...new Set(data.map((item) => item.category))];
    }, [data]);

    const filteredItems = useMemo(() => {
        if (!selectedCategory) {
            return data;
        }
        return data.filter((item) => item.category === selectedCategory);
    }, [data, selectedCategory]);

    return { selectedCategory, setSelectedCategory, uniqueCategories, filteredItems };
};