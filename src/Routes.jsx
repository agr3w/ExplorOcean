import React, { Suspense, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';

import ScrollToTop from "./utils/ScrollToTop";
import LoadingScreen from "./components/Loading/LoadingScreen";
import RouteTransitionLoader from "./components/Loading/RouteTransitionLoader";
import AnimatedPage from "./components/universal/AnimatedPage";
import { AuthProvider } from './context/AuthContext';
import { documentariesData } from "./content/contentGrid/documentariesContent";
import { quizzesData } from "./content/contentGrid/quizzesContent";

// Lazy imports
const Home = lazy(() => import("./pages/Home"));
const ContentPageTemplate = lazy(() => import("./pages/ContentPageTemplate"));
const ContentHub = lazy(() => import("./pages/ContentHub"));
const ExplorerHub = lazy(() => import("./pages/ExplorerHub"));
const GlobePage = lazy(() => import("./pages/GlobePage"));
const TimelinePage = lazy(() => import("./pages/TimelinePage"));
const FaunaFloraPage = lazy(() => import("./pages/FaunaFloraPage"));
const DocumentaryDetailPage = lazy(() => import("./pages/DocumentaryDetailPage"));
const QuizDetailPage = lazy(() => import("./pages/QuizDetailPage"));
const FaunaFloraDetailPage = lazy(() => import("./pages/FaunaFloraDetailPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
const AuthPage = lazy(() => import("./pages/AuthPage"));
const ProfilePage = lazy(() => import("./pages/ProfilePage"));
const ProtectedRoute = lazy(() => import("./components/ProtectedRoute/ProtectedRoute"));

export default function AppRoutes() {
  const location = useLocation();

  return (
    <AuthProvider>
      <Suspense fallback={<RouteTransitionLoader />}>
        <ScrollToTop />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<AnimatedPage><Home /></AnimatedPage>} />
            <Route
              path="/documentaries"
              element={<AnimatedPage><ContentPageTemplate data={documentariesData} title="Nossos Documentários" description="Assista a documentários incríveis e aprenda sobre a vida marinha e a história dos oceanos." /></AnimatedPage>}
            />
            <Route
              path="/quizzes"
              element={<AnimatedPage><ContentPageTemplate data={quizzesData} title="Nossos Quizzes" description="Teste seus conhecimentos sobre a vida marinha e a história dos oceanos." /></AnimatedPage>}
            />
            <Route path="/hub" element={<AnimatedPage><ContentHub /></AnimatedPage>} />
            <Route path="/ExplorerHub" element={<AnimatedPage><ExplorerHub /></AnimatedPage>} />
            <Route path="/globe" element={<AnimatedPage><GlobePage /></AnimatedPage>} />
            <Route path="/timeline" element={<AnimatedPage><TimelinePage /></AnimatedPage>} />
            <Route path="/fauna-flora" element={<AnimatedPage><FaunaFloraPage /></AnimatedPage>} />
            <Route path="/documentaries/:id" element={<AnimatedPage><DocumentaryDetailPage /></AnimatedPage>} />
            <Route path="/quizzes/:id" element={<AnimatedPage><QuizDetailPage /></AnimatedPage>} />
            <Route path="/:category/:id" element={<AnimatedPage><FaunaFloraDetailPage /></AnimatedPage>} />
            <Route path="/auth" element={<AnimatedPage><AuthPage /></AnimatedPage>} />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <AnimatedPage><ProfilePage /></AnimatedPage>
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<AnimatedPage><NotFoundPage /></AnimatedPage>} />
          </Routes>
        </AnimatePresence>
      </Suspense>
    </AuthProvider>
  );
}