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
        <div className="navbar_content">
          <Navbar />
        </div>
      </div>
      <div className="sidebar">
        <div className="sidebar_content">
          <Sider />
        </div>
      </div>
      <div className="outlet">
        <div className="outlet_content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
