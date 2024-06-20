import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

export default function DashboardLayout() {
  const auth = localStorage.getItem("user");
  console.log(auth);
  return (
    <div>
      <Navbar />
      {auth ? <Outlet /> : <Navigate to={"/login"} />}
      <Footer />
    </div>
  );
}
