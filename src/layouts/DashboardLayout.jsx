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
    <div className="layout">
      <Navbar />
      <div className="layoutSider">
        <Sider />
        <Outlet />
      </div>
    </div>
  );
}
