import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { quizzesData } from "./content/contentGrid/quizzesContent";
import { documentariesData } from "./content/contentGrid/documentariesContent";
import ScrollToTop from "./utils/ScrollToTop";
import LoadingScreen from "./components/Loading/LoadingScreen";

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

function AppRoutes() {
  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/documentaries"
            element={
              <ContentPageTemplate
                data={documentariesData}
                title="Nossos Documentários"
                description="Assista a documentários incríveis e aprenda sobre a vida marinha e a história dos oceanos."
              />
            }
          />
          <Route
            path="/quizzes"
            element={
              <ContentPageTemplate
                data={quizzesData}
                title="Nossos Quizzes"
                description="Teste seus conhecimentos sobre a vida marinha e a história dos oceanos."
              />
            }
          />
          <Route path="/hub" element={<ContentHub />} />
          <Route path="/ExplorerHub" element={<ExplorerHub />} />
          <Route path="/globe" element={<GlobePage />} />
          <Route path="/timeline" element={<TimelinePage />} />
          <Route path="/fauna-flora" element={<FaunaFloraPage />} />
          <Route path="/documentaries/:id" element={<DocumentaryDetailPage />} />
          <Route path="/quizzes/:id" element={<QuizDetailPage />} />
          <Route path="/:category/:id" element={<FaunaFloraDetailPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default AppRoutes;