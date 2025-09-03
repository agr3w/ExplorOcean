// src/components/ContentGrid/ContentCard.jsx

import React from "react";
import { Card } from "@mui/material";
import { styled } from "@mui/material/styles";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";

const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: theme.spacing(2),
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  transition:
    "transform 0.3s cubic-bezier(.77,0,.18,1), box-shadow 0.3s cubic-bezier(.77,0,.18,1)",
  cursor: "pointer",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  minHeight: 340, // altura mínima
  maxHeight: 340, // altura máxima
  minWidth: 260,  // largura mínima
  maxWidth: 420,  // largura máxima
  width: "100%",
  [theme.breakpoints.down("sm")]: {
    minHeight: 260,
    maxHeight: 260,
    minWidth: "100%",
    maxWidth: "100%",
  },
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
  },
}));

const ContentCard = ({ item }) => {
  return (
    <StyledCard>
      <CardHeader
        imageUrl={item.imageUrl}
        rating={item.rating}
        tags={item.tags}
      />
      <CardBody
        label={item.label}
        icon={item.icon}
        category={item.category}
        shortDescription={item.shortDescription}
      />
      <CardFooter duration={item.duration} />
    </StyledCard>
  );
};

export default ContentCard;
