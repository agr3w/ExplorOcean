import React, { useState, useMemo } from 'react';
import HeaderTitle from "./HeaderComponents/Title/HeaderTitle";
import MediaDisplay from "./HeaderComponents/MediaDisplay/MediaDisplay";
import VideoSection from "./HeaderComponents/VideoSection/VideoSection";
import QuizButton from "./HeaderComponents/QuizButton/QuizButton";
import ViewToggleButtons from "./HeaderComponents/ViewToggleButtons/ViewToggleButtons";
import BreadcrumbNavigation from "./HeaderComponents/BreadcrumbNavigation/BreadcrumbNavigation";
import { getSectionFromItem } from "../../utils/getSectionFromItem";
import QuizModal from "../quiz/QuizModal";
import { IconButton, Tooltip, Box, Snackbar, Alert } from "@mui/material";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { useAuth } from "../../context/AuthContext";
import { addFavoriteItem, removeFavoriteItem } from "../../services/userActionsService";
import { motion, AnimatePresence } from "framer-motion";

export default function DetailPageHeader({ item, show3D, setShow3D }) {
  const { token, user, refetchUser } = useAuth();
  const section = getSectionFromItem(item);
  const isQuiz = item.questions;
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [loadingFavorite, setLoadingFavorite] = useState(false);
  const [snackOpen, setSnackOpen] = useState(false);
  const [pop, setPop] = useState(false);

  // LÓGICA REATIVA para saber se o item atual é um favorito
  const isFavorite = useMemo(() => {
    if (!user?.favorites || !item) return false;
    return user.favorites.some(fav => fav.contentId === item.id);
  }, [user, item]);

  const handleFavoriteToggle = async () => {
    setLoadingFavorite(true);
    const contentType = item.type || item.category;
    const favoriteData = { contentId: item.id, contentType };

    try {
      if (isFavorite) {
        await removeFavoriteItem(favoriteData);
        setSnackOpen(true);
      } else {
        await addFavoriteItem(favoriteData);
        setSnackOpen(true);
        setPop(true);
        setTimeout(() => setPop(false), 600); // animação mais longa e suave
      }
      await refetchUser();
    } catch (error) {
      console.error("Erro ao atualizar favoritos", error);
    } finally {
      setLoadingFavorite(false);
    }
  };

  // Framer Motion variants para animação suave e contínua
  const heartVariants = {
    initial: { scale: 1, boxShadow: 'none' },
    pop: {
      scale: [1, 1.18, 1.08, 1],
      boxShadow: [
        'none',
        '0 0 24px 4px #36d1e0',
        '0 0 12px 2px #36d1e0',
        'none'
      ],
      transition: { duration: 0.6, ease: 'easeInOut' }
    }
  };

  return (
    <>
      <BreadcrumbNavigation section={section} label={item.label} item={item} />
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <HeaderTitle
          label={item.label}
          category={item.category}
          duration={item.duration}
          isQuiz={isQuiz}
          difficulty={item.difficulty}
          numberOfQuestions={item.numberOfQuestions}
        />
        {token && (
          <Tooltip title={isFavorite ? "Remover dos Favoritos" : "Adicionar aos Favoritos"} arrow>
            <motion.div
              variants={heartVariants}
              animate={pop ? "pop" : "initial"}
              style={{
                display: 'inline-block',
                borderRadius: '50%',
                boxShadow: pop ? '0 0 24px 4px #36d1e0' : 'none',
                transition: 'box-shadow 0.3s',
              }}
            >
              <IconButton
                onClick={handleFavoriteToggle}
                disabled={loadingFavorite}
                color="primary"
                size="large"
                sx={{
                  transition: 'transform 0.2s',
                  background: 'linear-gradient(135deg, rgba(54,209,224,0.15) 0%, rgba(41,121,255,0.10) 100%)',
                  borderRadius: '50%',
                }}
              >
                <AnimatePresence mode="wait">
                  {isFavorite ? (
                    <motion.span
                      key="fav"
                      initial={{ scale: 1 }}
                      animate={{ scale: pop ? 1.18 : 1 }}
                      exit={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    >
                      <MdFavorite size={32} style={{ color: '#36d1e0' }} />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="notfav"
                      initial={{ scale: 1 }}
                      animate={{ scale: pop ? 1.18 : 1 }}
                      exit={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    >
                      <MdFavoriteBorder size={32} style={{ color: '#36d1e0' }} />
                    </motion.span>
                  )}
                </AnimatePresence>
              </IconButton>
            </motion.div>
          </Tooltip>
        )}
      </Box>
      {typeof show3D === "boolean" && setShow3D && (
        <ViewToggleButtons show3D={show3D} setShow3D={setShow3D} />
      )}
      <MediaDisplay show3D={show3D} item={item} />
      <VideoSection videoUrl={item.videoUrl} title={item.title} />
      <QuizButton isQuiz={isQuiz} onClick={() => setIsQuizOpen(true)} />
      {isQuiz && (
        <QuizModal
          open={isQuizOpen}
          onClose={() => setIsQuizOpen(false)}
          quizData={item}
        />
      )}
      <Snackbar
        open={snackOpen}
        autoHideDuration={1800}
        onClose={() => setSnackOpen(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert
          onClose={() => setSnackOpen(false)}
          severity={isFavorite ? "info" : "success"}
          sx={{ bgcolor: 'rgba(54,209,224,0.15)', color: '#36d1e0', fontWeight: 'bold', boxShadow: 2 }}
        >
          {isFavorite ? "Removido dos favoritos!" : "Adicionado aos favoritos!"}
        </Alert>
      </Snackbar>
    </>
  );
}