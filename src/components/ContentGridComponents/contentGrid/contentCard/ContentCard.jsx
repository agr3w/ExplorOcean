import React from "react";
import { Card } from "@mui/material";
import { styled } from "@mui/material/styles";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const StyledCard = styled(motion.div)(({ theme }) => ({
  borderRadius: theme.spacing(3),
  border: "1.5px solid rgba(54, 209, 224, 0.25)",
  cursor: "pointer",
  color: "#fff",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  width: "100%",
  padding: theme.spacing(1),

  // 3. EFEITO GLASSMORPHISM AUTÊNTICO
  background: "linear-gradient(135deg, rgba(2,16,26,0.7) 60%, rgba(54,209,224,0.15) 100%)",
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(12px)",
  boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
  minHeight: 340,
  [theme.breakpoints.down("sm")]: {
    minHeight: 260,
  },
}));

const ContentCard = ({ item, threeModel }) => {
  let linkTo = "/";
  if (item.type === "documentaries") {
    linkTo = `/documentaries/${item.id}`;
  } else if (item.type === "quizzes") {
    linkTo = `/quizzes/${item.id}`;
  } else if (item.category === "Fauna") {
    linkTo = `/Fauna/${item.id}`;
  } else if (item.category === "Flora") {
    linkTo = `/Flora/${item.id}`;
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <Link to={linkTo} style={{ textDecoration: "none", height: '100%' }}>
      <StyledCard
        variants={cardVariants}
        whileHover={{
          y: -10,
          boxShadow: "0 12px 36px rgba(54, 209, 224, 0.3), 0 4px 16px rgba(0,0,0,0.2)", // Efeito "glow"
          borderColor: "rgba(54, 209, 224, 0.8)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <CardHeader
          imageUrl={item.imageUrl}
          rating={item.rating}
          tags={item.tags}
          threeModel={threeModel}
        />
        <CardBody
          label={item.label}
          icon={item.icon}
          category={item.category}
          shortDescription={item.shortDescription}
        />
        <CardFooter duration={item.duration} />
      </StyledCard>
    </Link>
  );
};

export default ContentCard;
