// src/pages/ContentPageTemplate.jsx

import React, { useState } from "react";
import ContentGrid from "../components/ContentGridComponents/contentGrid/ContentGrid";
import Navigator from "../components/navigator/Navigator";
import Footer from "../components/footer/footer";
import { Box } from "@mui/material";
import CategoryFilter from "../components/categoryFilter/categoryFilter";
import { useContentFilter } from "../hooks/useContentFilter";
import ContentBanner from "../components/contentBanner/contentBanner";

// O novo componente agora recebe os dados, título e descrição como props
export default function ContentPageTemplate({ data, title, description, icon }) {
  const { selectedCategory, setSelectedCategory, uniqueCategories, filteredItems } = useContentFilter(data);

  return (
    <>
      <Navigator />
      <Box sx={{ p: 4 }}>
        <ContentBanner title={title} description={description} icon={icon} />
        <Box sx={{ display: { xs: "block", md: "flex" } }}>
          <Box
            sx={{
              position: "sticky",
              width: 200,
              minWidth: 200,
              display: { xs: "none", md: "block" },
              marginRight: 4,
              marginTop: 2,
              alignContent: "flex-start",
            }}
          >
            <CategoryFilter
              categories={uniqueCategories}
              onSelectCategory={setSelectedCategory}
              selectedCategory={selectedCategory}
            />
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <ContentGrid
              title={title}
              description={description}
              items={filteredItems}
            />
          </Box>
        </Box>
      </Box>
      <Footer depth={0} />
    </>
  );
}