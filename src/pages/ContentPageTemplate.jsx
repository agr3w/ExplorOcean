import React from "react";
import ContentGrid from "@/components/ContentGridComponents/ContentGrid";
import Footer from "../components/footer/footer";
import { Box } from "@mui/material";
import CategoryFilter from "../components/categoryFilter/categoryFilter";
import { useContentFilter } from "../hooks/useContentFilter";
import ContentBanner from "../components/contentBanner/contentBanner";
import Navigator from "../components/navigator/Navigator";
import useDiving from "../hooks/useDiving";

export default function ContentPageTemplate({ data, title, description, icon }) {
  const { selectedCategory, setSelectedCategory, uniqueCategories, filteredItems } = useContentFilter(data);
  const scrolled = useDiving(40); // Sai mais rápido

  return (
    <>
      <Navigator />
      <Box sx={{
        pt: { xs: 8, md: 4 },
        px: 0,
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #02101a 0%, #0a2540 100%)',
        position: 'relative',
      }}>
        <ContentBanner
          title={title}
          description={description}
          icon={icon}
          scrolled={scrolled}
        />
        <Box sx={{ px: 4, display: { xs: "block", md: "flex" } }}>
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
