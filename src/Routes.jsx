import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { quizzesData } from "./content/contentGrid/quizzesContent";
import { documentariesData } from "./content/contentGrid/documentariesContent";
import ContentPageTemplate from "./pages/ContentPageTemplate";
import ContentHub from "./pages/ContentHub";
import ExplorerHub from "./pages/ExplorerHub";
import GlobePage from "./pages/GlobePage";
import TimelinePage from "./pages/TimelinePage";
import FaunaFloraPage from "./pages/FaunaFloraPage";
import DocumentaryDetailPage from "./pages/DocumentaryDetailPage";
import QuizDetailPage from "./pages/QuizDetailPage";
import FaunaFloraDetailPage from "./pages/FaunaFloraDetailPage";

function AppRoutes() {
  return (
    <Router>
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
          exact
          path="/quizzes"
          element={
            <ContentPageTemplate
              data={quizzesData}
              title="Nossos Quizzes"
              description="Teste seus conhecimentos sobre a vida marinha e a história dos oceanos."
            />
          }
        ></Route>
        <Route exact path="/hub" element={<ContentHub />} />
        <Route exact path="/ExplorerHub" element={<ExplorerHub />} />
        <Route exact path="/globe" element={<GlobePage />} />
        <Route exact path="/timeline" element={<TimelinePage />} />
        <Route exact path="/fauna-flora" element={<FaunaFloraPage />} />
        <Route path="/documentaries/:id" element={<DocumentaryDetailPage />} />
        <Route path="/quizzes/:id" element={<QuizDetailPage />} />
        <Route path="/:category/:id" element={<FaunaFloraDetailPage />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
