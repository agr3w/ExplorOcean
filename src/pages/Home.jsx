import { Fade } from '@mui/material';
import NavigatorTransparent from '../components/navigator/NavigatorTransparent';
import Navigator from '../components/navigator/Navigator';
import MainBanner from '../components/home_components/mainBanner/MainBannerSection';
import AboutSection from '../components/home_components/aboutSection/AboutSection';
import useDiving from '../hooks/useDiving';
import IntroVideoSection from '../components/home_components/introVideo/IntroVideoSection';
import LearningPathsSection from '../components/home_components/LearningPaths/LearningPathsSection ';
import DeepDiveSection from '../components/home_components/DeepDive/DeepDiveSection';
import Footer from '../components/footer/footer';

export default function Home() {
  // Use o hook para obter o estado 'scrolled'
  const scrolled = useDiving(100);

  // const welcomeMessage = import.meta.env.VITE_WELCOME_MESSAGE; utilizando variaveis de ambiente

  return (
    <>
      <NavigatorTransparent />
      <Fade in={scrolled} timeout={200}>
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 10 }}>
          <Navigator />
        </div>
      </Fade>
      <MainBanner />
      <AboutSection />
      <IntroVideoSection />
      <LearningPathsSection />
      <DeepDiveSection />
      <Footer depth={2} />
    </>
  );
}