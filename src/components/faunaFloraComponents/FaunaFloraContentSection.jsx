// src/pages/faunaFlora/FaunaFloraContentSection.jsx

import { Box, Typography } from "@mui/material";
import CategorySelector from "../../components/faunaFloraComponents/CategorySelector";
import ContentGrid from "../../components/ContentGridComponents/contentGrid/ContentGrid";
import FeaturedCard from "../../components/faunaFloraComponents/FeaturedCard"; // 1. Importe o novo componente
import { motion, AnimatePresence } from "framer-motion";

export default function FaunaFloraContentSection({
  selectedCategory,
  setSelectedCategory,
  itemsToShow,
  show3D,
}) {
  const filteredItems = itemsToShow.filter(item =>
    item.category.toLowerCase() === selectedCategory
  );

  // 2. SEPARE O ITEM DE DESTAQUE DO RESTANTE DA GRADE
  const featuredItem = filteredItems.length > 0 ? filteredItems[0] : null;
  const gridItems = filteredItems.length > 1 ? filteredItems.slice(1) : [];

  return (
    <Box
      sx={{
        pt: 6, pb: 4, px: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        backgroundColor: '#02101a',
      }}
    >
      <CategorySelector
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      {/* 3. RENDERIZE O FEATURED CARD COM ANIMAÇÃO */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`featured-${selectedCategory}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          style={{ width: '100%' }}
        >
          <FeaturedCard item={featuredItem} show3D={show3D}
          />
        </motion.div>
      </AnimatePresence>

      {/* 4. RENDERIZE O RESTO DA GRADE ABAIXO */}
      {gridItems.length > 0 && (
        <Box sx={{ width: '100%', mt: 6 }}>
          <Typography variant="h4" sx={{ color: 'white', fontWeight: 'bold', textAlign: 'center', mb: 4 }}>
            Mais para Explorar
          </Typography>
          <ContentGrid
            items={gridItems} // Passa apenas o restante dos itens
            show3D={show3D}
          />
        </Box>
      )}
    </Box>
  );
}