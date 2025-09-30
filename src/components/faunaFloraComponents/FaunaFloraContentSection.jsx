// src/pages/faunaFlora/FaunaFloraContentSection.jsx

import { Box } from "@mui/material";
import CategorySelector from "../../components/faunaFloraComponents/CategorySelector";
import ContentGrid from "../../components/ContentGridComponents/contentGrid/ContentGrid";
import { motion, AnimatePresence } from "framer-motion";

export default function FaunaFloraContentSection({
  selectedCategory,
  setSelectedCategory,
  itemsToShow,
  show3D,
}) {
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

      <ContentGrid
        items={itemsToShow}
        show3D={show3D}
      />
    </Box>
  );
}