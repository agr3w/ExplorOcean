import React from "react";
import HeaderTitle from "./HeaderComponents/Title/HeaderTitle";
import MediaDisplay from "./HeaderComponents/MediaDisplay/MediaDisplay";
import VideoSection from "./HeaderComponents/VideoSection/VideoSection";
import QuizButton from "./HeaderComponents/QuizButton/QuizButton";
import ViewToggleButtons from "./HeaderComponents/ViewToggleButtons/ViewToggleButtons";

export default function DetailPageHeader({ item, show3D, setShow3D }) {
  const isQuiz = item.questions;

  return (
    <>
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
      <QuizButton isQuiz={isQuiz} />
    </>
  );
}