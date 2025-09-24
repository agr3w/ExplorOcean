import { Box } from "@mui/material";
import CategorySelector from "../../components/faunaFloraComponents/CategorySelector";
import ContentGrid from "../../components/ContentGridComponents/contentGrid/ContentGrid";

export default function FaunaFloraContentSection({
  selectedCategory,
  setSelectedCategory,
  pageTitle,
  pageDescription,
  itemsToShow,
  show3D,
}) {
  return (
    <Box
      sx={{
        p: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
      }}
    >
      <CategorySelector
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <ContentGrid
        title={pageTitle}
        description={pageDescription}
        items={itemsToShow}
        show3D={show3D}
      />
    </Box>
  );
}