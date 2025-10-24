import React from 'react';
import NavigatorBase from '../components/navigator/NavigatorBase'; // Import NavigatorBase directly
import MainBanner from '../components/home_components/mainBanner/MainBannerSection';
import AboutSection from '../components/home_components/aboutSection/AboutSection';
import useDiving from '../hooks/useDiving';
import IntroVideoSection from '../components/home_components/introVideo/IntroVideoSection';
import LearningPathsSection from '../components/home_components/LearningPaths/LearningPathsSection ';
import DeepDiveSection from '../components/home_components/DeepDive/DeepDiveSection';
import Footer from '../components/footer/footer';
// Removed AnimatePresence and motion imports related to navigator swapping

export default function Home() {
  const scrolled = useDiving(100);

  return (
    <>
      <NavigatorBase transparent={!scrolled} />
      <MainBanner />
      <AboutSection />
      <IntroVideoSection />
      <LearningPathsSection />
      <DeepDiveSection />
      <Footer depth={2} />
    </>
  );
}