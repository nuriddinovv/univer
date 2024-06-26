import React from "react";
import "./style/main.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Context from "./context/Context";

import HomePage from "./page/homePage/HomePage";
import DashboardLayout from "./layouts/DashboardLayout";
import LoginPage from "./page/loginPage/LoginPage";
import NewsPage from "./page/newsPage/NewsPage";
import SciencesPage from "./page/sciencesPage/SciencesPage";
import SciencesCalendar from "./page/scincesCalendarPage/SciencesCalendar";
import ReadAgain from "./page/readAgainPage/ReadAgain";
import InfoPage from "./page/infoPage/InfoPage";
import ServicesPage from "./page/servicesPage/ServicesPage";
export default function App() {
  return (
    <div>
      <Context>
        <Router>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route element={<DashboardLayout />}>
              <Route path="/student">
                <Route path="personalplan" element={<HomePage />} />
                <Route path="dashboard" element={<NewsPage />} />
                <Route path="sciences" element={<SciencesPage />} />
                <Route path="final" element={<SciencesPage />} />
                <Route path="sciencescalendar" element={<SciencesCalendar />} />
                <Route path="readagain" element={<ReadAgain />} />
                <Route path="info" element={<InfoPage />} />
                <Route path="services" element={<ServicesPage />} />
              </Route>
            </Route>
          </Routes>
        </Router>
      </Context>
    </div>
  );
}
