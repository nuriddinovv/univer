import React from "react";
import Context from "./context/Context";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./page/homePage/HomePage";
import DashboardLayout from "./layouts/DashboardLayout";
import LoginPage from "./page/loginPage/LoginPage";
export default function App() {
  return (
    <div>
      <Context>
        <Router>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route element={<DashboardLayout />}>
              <Route index element={<HomePage />} />
            </Route>
          </Routes>
        </Router>
      </Context>
    </div>
  );
}
