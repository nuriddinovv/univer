import React from "react";
import Navbar from "../components/navbar/Navbar";
import { Navigate, Outlet } from "react-router-dom";
import Sider from "../components/sider/Sider";
import "../style/layout/_dashboardLayout.scss";
export default function DashboardLayout() {
  const auth = localStorage.getItem("user");

  if (!auth) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="DashboardLayout">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="sidebar">
        <Sider />
      </div>
      <div className="outlet">
        <Outlet />
      </div>
    </div>
  );
}
