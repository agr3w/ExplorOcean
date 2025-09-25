import { Box, Typography } from "@mui/material";
import { FaFish, FaLeaf } from "react-icons/fa";

export default function FaunaFloraBanner({ selectedCategory, pageTitle, pageDescription }) {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: 120,
        background: "linear-gradient(90deg, #36d1e0 0%, #1976d2 100%)",
        display: "flex",
        alignItems: "center",
        px: { xs: 2, md: 6 },
        py: { xs: 2, md: 3 },
        mb: 4,
        boxShadow: "0 2px 12px rgba(30,60,120,0.08)",
        gap: 3,
      }}
    >
      <Box sx={{ fontSize: { xs: 40, md: 64 }, color: "#fff", mr: 3 }}>
        {selectedCategory === "fauna" ? <FaFish /> : <FaLeaf />}
      </Box>
      <Box>
        <Typography variant="h4" sx={{ color: "#fff", fontWeight: 600 }}>
          {pageTitle}
        </Typography>
        <Typography variant="body1" sx={{ color: "#e3f2fd", mt: 1 }}>
          {pageDescription}
        </Typography>
      </Box>
    </Box>
  );
}