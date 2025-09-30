import React, { useState } from "react";
import HeaderTitle from "./HeaderComponents/Title/HeaderTitle";
import MediaDisplay from "./HeaderComponents/MediaDisplay/MediaDisplay";
import VideoSection from "./HeaderComponents/VideoSection/VideoSection";
import QuizButton from "./HeaderComponents/QuizButton/QuizButton";
import ViewToggleButtons from "./HeaderComponents/ViewToggleButtons/ViewToggleButtons";
import BreadcrumbNavigation from "./HeaderComponents/BreadcrumbNavigation/BreadcrumbNavigation";
import { getSectionFromItem } from "../../utils/getSectionFromItem";
import QuizModal from "../quiz/QuizModal"; // Novo import

export default function DetailPageHeader({ item, show3D, setShow3D }) {
  const section = getSectionFromItem(item);
  const isQuiz = item.questions;
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  return (
    <>
      <BreadcrumbNavigation section={section} label={item.label} item={item} />
      <HeaderTitle
        label={item.label}
        category={item.category}
        duration={item.duration}
        isQuiz={isQuiz}
        difficulty={item.difficulty}
        numberOfQuestions={item.numberOfQuestions}
      />
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