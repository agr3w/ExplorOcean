import React, { useState, useMemo } from 'react';
import HeaderTitle from "./HeaderComponents/Title/HeaderTitle";
import MediaDisplay from "./HeaderComponents/MediaDisplay/MediaDisplay";
import VideoSection from "./HeaderComponents/VideoSection/VideoSection";
import QuizButton from "./HeaderComponents/QuizButton/QuizButton";
import ViewToggleButtons from "./HeaderComponents/ViewToggleButtons/ViewToggleButtons";
import BreadcrumbNavigation from "./HeaderComponents/BreadcrumbNavigation/BreadcrumbNavigation";
import { getSectionFromItem } from "../../utils/getSectionFromItem";
import QuizModal from "../quiz/QuizModal";
import { IconButton, Tooltip, Box } from "@mui/material";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { useAuth } from "../../context/AuthContext";
import { addFavoriteItem, removeFavoriteItem } from "../../services/userActionsService";

export default function DetailPageHeader({ item, show3D, setShow3D }) {
  const { token, user, refetchUser } = useAuth();
  const section = getSectionFromItem(item);
  const isQuiz = item.questions;
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [loadingFavorite, setLoadingFavorite] = useState(false);

  // 1. LÓGICA REATIVA PARA DETERMINAR SE É FAVORITO
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
      } else {
        await addFavoriteItem(favoriteData);
      }
      await refetchUser();
    } catch (error) {
      console.error("Erro ao atualizar favoritos", error);
    } finally {
      setLoadingFavorite(false);
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
            <IconButton onClick={handleFavoriteToggle} disabled={loadingFavorite} color="primary" size="large">
              {isFavorite ? <MdFavorite size={32} /> : <MdFavoriteBorder size={32} />}
            </IconButton>
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
    </>
  );
}