import React from "react";
import { Card, IconButton, Snackbar, Alert, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";
import { Link } from "react-router-dom";
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import { useAuth } from '@/context/AuthContext';
import { addFavoriteItem, removeFavoriteItem } from '@/services/userActionsService';
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
  background: "linear-gradient(135deg, rgba(2,16,26,0.7) 60%, rgba(54,209,224,0.15) 100%)",
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(12px)",
  boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
  minHeight: 340,
  position: "relative",
  [theme.breakpoints.down("sm")]: {
    minHeight: 260,
  },
}));

const HeartButton = styled(motion.button)(({ theme }) => ({
  position: 'absolute',
  top: 12,
  right: 12,
  zIndex: 2,
  borderRadius: '50%',
  background: 'linear-gradient(135deg, rgba(54,209,224,0.45) 0%, rgba(41,121,255,0.35) 100%)',
  border: '1.5px solid rgba(54,209,224,0.18)',
  boxShadow: '0 2px 8px rgba(54,209,224,0.10)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 0,
  width: 38,
  height: 38,
  cursor: 'pointer',
  outline: 'none',
  transition: 'background 0.2s, color 0.2s, box-shadow 0.2s',
  '&:hover': {
    background: 'linear-gradient(135deg, rgba(54,209,224,0.7) 0%, rgba(41,121,255,0.5) 100%)',
    color: '#fff',
    boxShadow: '0 0 18px 2px #36d1e0',
  },
}));

export default function ContentCard({ item, threeModel }) {
  const { user, token, refetchUser } = useAuth();
  const [loading, setLoading] = React.useState(false);
  const [snackOpen, setSnackOpen] = React.useState(false);
  const [pop, setPop] = React.useState(false);
  const [snackMessages, setSnackMessages] = React.useState([]);

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

  // Função para adicionar uma nova notificação
  const showSnack = (message, severity = "success") => {
    setSnackMessages(msgs => [
      ...msgs,
      { key: new Date().getTime() + Math.random(), message, severity, open: true }
    ]);
  };

  // Função para fechar uma notificação específica
  const handleCloseSnack = (key) => {
    setSnackMessages(msgs =>
      msgs.map(snack =>
        snack.key === key ? { ...snack, open: false } : snack
      )
    );
    // Remove do array após o tempo de animação do Snackbar
    setTimeout(() => {
      setSnackMessages(msgs => msgs.filter(snack => snack.key !== key));
    }, 300);
  };

  // Verifica se o item está favoritado
  const isFavorite = user?.favorites?.some(fav => fav.contentId === item.id);

  const handleToggleFavorite = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!token) return;
    setLoading(true);
    const favoriteData = {
      contentId: item.id,
      contentType: item.category || item.type,
    };
    try {
      if (isFavorite) {
        await removeFavoriteItem(favoriteData);
        showSnack("Removido dos favoritos!", "info");
      } else {
        await addFavoriteItem(favoriteData);
        showSnack("Adicionado aos favoritos!", "success");
        setPop(true);
        setTimeout(() => setPop(false), 400);
      }
      await refetchUser();
    } catch (err) {
      console.error('Erro ao favoritar:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Link to={linkTo} style={{ textDecoration: "none", height: '100%' }}>
        <StyledCard
          variants={cardVariants}
          whileHover={{
            y: -10,
            boxShadow: "0 12px 36px rgba(54, 209, 224, 0.3), 0 4px 16px rgba(0,0,0,0.2)",
            borderColor: "rgba(54, 209, 224, 0.8)",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {token && (
            <HeartButton
              onClick={handleToggleFavorite}
              disabled={loading}
              aria-label={isFavorite ? "Desfavoritar" : "Favoritar"}
              animate={pop ? { scale: [1, 1.3, 1], boxShadow: "0 0 24px 4px #36d1e0" } : {}}
              transition={{ duration: 0.4 }}
            >
              {loading
                ? <motion.div
                  initial={{ scale: 1, opacity: 0.7 }}
                  animate={{ scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 0.2, repeatType: "loop" }}
                >
                  <MdFavorite size={24} style={{ color: '#36d1e0' }} />
                </motion.div>
                : isFavorite
                  ? <MdFavorite size={24} style={{ color: '#36d1e0' }} />
                  : <MdFavoriteBorder size={24} style={{ color: '#36d1e0' }} />
              }
            </HeartButton>
          )}
          <CardHeader
            imageUrl={item.imageUrl}
            rating={item.rating}
            threeModel={threeModel}
          />
          <CardBody
            label={item.label}
            icon={item.icon}
            category={item.category}
            shortDescription={item.shortDescription}
            tags={item.tags}
          />
          <CardFooter duration={item.duration} />
        </StyledCard>
      </Link>
      <Box
        sx={{
          position: 'fixed',
          top: 16,
          right: 16,
          zIndex: 1400,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          pointerEvents: 'none',
        }}
      >
        {[...snackMessages].reverse().map((snack, idx) => (
          <Snackbar
            key={snack.key}
            open={snack.open}
            autoHideDuration={1800}
            onClose={() => handleCloseSnack(snack.key)}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            sx={{
              mt: idx === 1 ? 0 : 7.5,
              pointerEvents: 'auto',
            }}
          >
            <Alert
              onClose={() => handleCloseSnack(snack.key)}
              severity={snack.severity}
              sx={{
                bgcolor: 'rgba(54,209,224,0.15)',
                color: '#36d1e0',
                fontWeight: 'bold',
                boxShadow: 2,
                minWidth: 220,
              }}
            >
              {snack.message}
            </Alert>
          </Snackbar>
        ))}
      </Box>
    </>
  );
}