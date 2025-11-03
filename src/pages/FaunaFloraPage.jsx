import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Navigator from "../components/navigator/Navigator";
import Footer from "../components/footer/footer";
import { faunaData, floraData } from "../content/faunaFlora/faunaFloraData";
import FaunaFloraBanner from "../components/faunaFloraComponents/FaunaFloraBanner";
import FaunaFloraToggleButtons from "../components/faunaFloraComponents/FaunaFloraToggleButtons";
import FaunaFloraContentSection from "../components/faunaFloraComponents/FaunaFloraContentSection";
import FaunaFlora3DPreferenceModal from "../components/faunaFloraComponents/FaunaFlora3DPreferenceModal";
import FaunaFloraTour from "../components/faunaFloraComponents/FaunaFloraTour";

export default function FaunaFloraPage() {
  const [selectedCategory, setSelectedCategory] = useState("fauna");
  const [show3D, setShow3D] = useState(null);
  const [runTour, setRunTour] = useState(false);

  const itemsToShow = (selectedCategory === "fauna" ? faunaData : floraData).map((item) => ({
    ...item,
    threeModel: show3D ? item.threeModel : undefined,
    categoria: selectedCategory,
  }));

  const pageTitle = selectedCategory === "fauna" ? "Fauna Oceânica" : "Flora Oceânica";
  const pageDescription =
    selectedCategory === "fauna"
      ? "Conheça a vida animal que habita os oceanos."
      : "Descubra a rica vida vegetal e micro-organismos dos oceanos.";

  // Tour: só roda na primeira visita
  useEffect(() => {
    const tourVisto = localStorage.getItem('hasSeenFaunaFloraTour');
    if (!tourVisto) {
      setTimeout(() => setRunTour(true), 1000);
    }
  }, []);

  const handleTourEnd = () => {
    localStorage.setItem('hasSeenFaunaFloraTour', 'true');
    setRunTour(false);
  };

  // Preferência 3D: lógica mantida
  useEffect(() => {
    const saved = localStorage.getItem("show3D");
    if (saved !== null) setShow3D(saved === "true");
  }, []);

  useEffect(() => {
    if (show3D !== null) localStorage.setItem("show3D", show3D);
  }, [show3D]);

  if (show3D === null) {
    return <FaunaFlora3DPreferenceModal open={true} onSelect={setShow3D} />;
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
      {/* Tour interativo */}
      <FaunaFloraTour run={runTour} onTourEnd={handleTourEnd} />

      <Navigator />
      <FaunaFloraBanner
        selectedCategory={selectedCategory}
        pageTitle={pageTitle}
        pageDescription={pageDescription}
      />
      <FaunaFloraToggleButtons show3D={show3D} setShow3D={setShow3D} />
      <FaunaFloraContentSection
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        pageTitle={pageTitle}
        pageDescription={pageDescription}
        itemsToShow={itemsToShow}
        show3D={show3D}
      />
      <Footer depth={0} />
    </Box>
  );
}