import React, { useState } from "react";
import { MdPhoto, MdViewInAr } from "react-icons/md";
import { Box, Typography, Modal, Button } from "@mui/material";
import Navigator from "../components/navigator/Navigator";
import Footer from "../components/footer/footer";
import ContentGrid from "../components/ContentGridComponents/contentGrid/ContentGrid";
import CategorySelector from "../components/faunaFloraComponents/CategorySelector";
import { faunaData, floraData } from "../content/faunaFlora/faunaFloraData";
import { FaFish, FaLeaf } from "react-icons/fa";
import { motion } from "framer-motion";

export default function FaunaFloraPage() {
  const [selectedCategory, setSelectedCategory] = useState("fauna");
  const [show3D, setShow3D] = useState(null);

  const itemsToShow = selectedCategory === "fauna" ? faunaData : floraData;
  const pageTitle =
    selectedCategory === "fauna" ? "Fauna Oceânica" : "Flora Oceânica";
  const pageDescription =
    selectedCategory === "fauna"
      ? "Conheça a vida animal que habita os oceanos."
      : "Descubra a rica vida vegetal e micro-organismos dos oceanos.";

  if (show3D === null) {
    return (
      <Modal open={true}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            borderRadius: 3,
            boxShadow: 24,
            p: 4,
            minWidth: 320,
            textAlign: "center",
          }}
        >
          <Typography variant="h6" sx={{ mb: 2 }}>
            Deseja ativar os modelos 3D dos animais e plantas?
          </Typography>
          <Typography variant="body2" sx={{ mb: 3 }}>
            Modelos 3D podem exigir mais do seu computador. Se preferir, você
            pode visualizar apenas as imagens.
          </Typography>
          <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setShow3D(true)}
            >
              Ativar 3D
            </Button>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => setShow3D(false)}
            >
              Mostrar imagens
            </Button>
          </Box>
        </Box>
      </Modal>
    );
  }

  return (
    <Box
      sx={{
        background: "linear-gradient(180deg, #02101a 0%, #36d1e0 100%)",
        color: "#fff",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        marginTop: 7,
      }}
    >
      <Navigator />
      {/* Banner Temático */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
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
      </motion.div>
      {/* Botão de alternância entre 3D e imagens */}
      <Box
        sx={{
          position: "absolute",
          top: { xs: 16, md: 32 },
          right: { xs: 16, md: 32 },
          zIndex: 10,
          display: "flex",
          gap: 2,
        }}
      >
        <Button
          onClick={() => setShow3D(true)}
          sx={{
            minWidth: 0,
            width: 48,
            height: 48,
            borderRadius: "50%",
            background: show3D
              ? "linear-gradient(135deg, #36d1e0 60%, #1976d2 100%)"
              : "rgba(255,255,255,0.10)",
            color: show3D ? "#fff" : "#36d1e0",
            boxShadow: show3D ? "0 2px 8px rgba(30,60,120,0.18)" : "none",
            transition: "all 0.2s",
            "&:hover": {
              background: "linear-gradient(135deg, #1976d2 60%, #36d1e0 100%)",
              color: "#fff",
            },
          }}
        >
          <MdViewInAr size={28} />
        </Button>
        <Button
          onClick={() => setShow3D(false)}
          sx={{
            minWidth: 0,
            width: 48,
            height: 48,
            borderRadius: "50%",
            background: !show3D
              ? "linear-gradient(135deg, #36d1e0 60%, #1976d2 100%)"
              : "rgba(255,255,255,0.10)",
            color: !show3D ? "#fff" : "#36d1e0",
            boxShadow: !show3D ? "0 2px 8px rgba(30,60,120,0.18)" : "none",
            transition: "all 0.2s",
            "&:hover": {
              background: "linear-gradient(135deg, #1976d2 60%, #36d1e0 100%)",
              color: "#fff",
            },
          }}
        >
          <MdPhoto size={28} />
        </Button>
      </Box>
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
          items={itemsToShow.map((item) => ({
            ...item,
            threeModel: show3D ? item.threeModel : undefined,
            categoria: selectedCategory,
          }))}
          show3D={show3D}
        />
      </Box>
      <Footer depth={0} />
    </Box>
  );
}
