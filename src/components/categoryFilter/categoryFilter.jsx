// src/components/CategoryFilter/CategoryFilter.jsx

import React from "react";
import { Box, Typography, List, ListItem, ListItemButton } from "@mui/material";
import { styled } from "@mui/material/styles";

const FilterBox = styled(Box)(({ theme }) => ({
  width: "100%",
  minHeight: "200px", // Altura mínima para o card do filtro
  backgroundColor: "rgba(0, 0, 0, 0.05)",
  borderRadius: theme.spacing(2),
  padding: theme.spacing(3),
}));

const StyledListItemButton = styled(ListItemButton)(({ theme, selected }) => ({
  borderRadius: theme.spacing(1),
  backgroundColor: selected ? theme.palette.primary.main : "transparent",
  color: selected ? theme.palette.common.white : theme.palette.text.secondary,
  "&:hover": {
    backgroundColor: selected
      ? theme.palette.primary.dark
      : "rgba(0, 0, 0, 0.1)",
  },
}));

const CategoryFilter = ({ categories, onSelectCategory, selectedCategory }) => {
  return (
    <FilterBox>
      <Typography variant="h6" sx={{ color: "text.primary", mb: 2 }}>
        Categoria
      </Typography>
      <List>
        <StyledListItemButton
          onClick={() => onSelectCategory(null)}
          selected={selectedCategory === null}
        >
          <Typography variant="body1">Todas</Typography>
        </StyledListItemButton>
        {categories.map((category) => (
          <StyledListItemButton
            key={category}
            onClick={() => onSelectCategory(category)}
            selected={selectedCategory === category}
          >
            <Typography variant="body1">{category}</Typography>
          </StyledListItemButton>
        ))}
      </List>
    </FilterBox>
  );
};

export default CategoryFilter;
