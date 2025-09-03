import React from "react";
import { Box, Typography, List } from "@mui/material";
import { styled } from "@mui/material/styles";
import { MdCategory } from "react-icons/md";
import { motion } from "framer-motion";

const FilterBox = styled(Box)(({ theme }) => ({
  width: "100%",
  minHeight: "200px",
  backgroundColor: "rgba(0, 0, 0, 0.05)",
  borderRadius: theme.spacing(2),
  padding: theme.spacing(3),
  boxShadow: "0 2px 8px rgba(30,60,120,0.08)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

const StyledListItemButton = styled("button")(({ theme, selected }) => ({
  border: "none",
  outline: "none",
  borderRadius: theme.spacing(1),
  backgroundColor: selected ? theme.palette.primary.main : "transparent",
  color: selected ? theme.palette.common.white : theme.palette.text.secondary,
  padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
  marginBottom: theme.spacing(1),
  width: "100%",
  cursor: "pointer",
  fontSize: "1rem",
  transition: "background 0.3s, color 0.3s",
  "&:hover": {
    backgroundColor: selected
      ? theme.palette.primary.dark
      : "rgba(0, 0, 0, 0.1)",
  },
}));

const CategoryFilter = ({ categories, onSelectCategory, selectedCategory }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <FilterBox>
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <MdCategory size={28} style={{ marginRight: 8, color: "#1976d2" }} />
          <Typography variant="h6" sx={{ color: "text.primary", fontWeight: 600 }}>
            Categoria
          </Typography>
        </Box>
        <List sx={{ width: "100%" }}>
          <StyledListItemButton
            onClick={() => onSelectCategory(null)}
            selected={selectedCategory === null}
          >
            Todas
          </StyledListItemButton>
          {categories.map((category) => (
            <StyledListItemButton
              key={category}
              onClick={() => onSelectCategory(category)}
              selected={selectedCategory === category}
            >
              {category}
            </StyledListItemButton>
          ))}
        </List>
      </FilterBox>
    </motion.div>
  );
};

export default CategoryFilter;