import React from "react";
import Navbar from "../components/navbar/Navbar";
import { Navigate, Outlet } from "react-router-dom";
import Sider from "../components/sider/Sider";

export default function DashboardLayout() {
  const auth = localStorage.getItem("user");

  if (!auth) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <Navbar />
      <div>
        <Sider />
        <Outlet />
      </div>
    </div>
  );
}
