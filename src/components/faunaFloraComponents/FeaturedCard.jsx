import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import FeaturedCardMedia from "./FeaturedCardMedia";

const FeaturedCardContainer = styled(motion.div)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  width: "100%",
  maxWidth: "1000px",
  margin: "0 auto",
  borderRadius: theme.spacing(4),
  overflow: "hidden",
  backgroundColor: "rgba(2, 16, 26, 0.5)",
  backdropFilter: "blur(15px)",
  border: "1.5px solid rgba(54, 209, 224, 0.3)",
  boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
  "@media (max-width: 900px)": {
    flexDirection: "column",
  },
}));

const ContentContainer = styled(Box)(({ theme }) => ({
  flex: 1.5,
  padding: theme.spacing(4),
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
}));

export default function FeaturedCard({ item, show3D }) {
  if (!item) return null;
  let linkTo = `/${item.category}/${item.id}`;

  return (
    <FeaturedCardContainer>
      <FeaturedCardMedia
        imageUrl={item.imageUrl}
        threeModel={show3D ? item.threeModel : undefined}
        modelScale={item.modelScaleCard}
        modelPosition={item.modelPositionCard}
      />
      <ContentContainer>
        <Typography variant="overline" color="primary.light" sx={{ mb: 1 }}>
          Destaque da Categoria
        </Typography>
        <Typography
          variant="h3"
          sx={{ color: "white", fontWeight: "bold", mb: 2 }}
        >
          {item.label}
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "rgba(227, 242, 253, 0.8)", mb: 3 }}
        >
          {item.shortDescription}
        </Typography>
        <Button
          component={Link}
          to={linkTo}
          variant="contained"
          endIcon={<FaArrowRight />}
          sx={{ alignSelf: "flex-start" }}
        >
          Saiba Mais
        </Button>
      </ContentContainer>
    </FeaturedCardContainer>
  );
}
