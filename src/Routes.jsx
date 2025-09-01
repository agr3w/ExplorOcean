import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { quizzesData } from "./content/contentGrid/quizzesContent";
import { documentariesData } from "./content/contentGrid/documentariesContent";
import ContentPageTemplate from "./pages/ContentPageTemplate";
import ContentHub from "./pages/ContentHub";
import GlobePage from "./pages/GlobePage";
import TimelinePage from "./pages/TimelinePage";

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
        <Route exact path="/globe" element={<GlobePage />} />
        <Route exact path="/time-line" element={<TimelinePage />} />

      </Routes>
    </Router>
  );
}

export default AppRoutes;
