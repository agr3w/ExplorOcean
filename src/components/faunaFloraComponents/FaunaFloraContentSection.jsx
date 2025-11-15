import { Box, Typography } from "@mui/material";
import CategorySelector from "@/components/faunaFloraComponents/CategorySelector";
import ContentGrid from "@/components/ContentGridComponents/contentGrid";
import FeaturedCard from "@/components/faunaFloraComponents/FeaturedCard";
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

  // Busca o item destacado por 'featured: true', senão pega o primeiro
  const featuredItem = filteredItems.find(item => item.featured) || filteredItems[0] || null;
  const gridItems = filteredItems.filter(item => item !== featuredItem);

  return (
    <Box
      // id="tour-step-3"
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

      {gridItems.length > 0 && (
        <Box id="tour-step-3" sx={{ width: '100%', mt: 6 }}>
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