import React, { useState } from "react";
import { Navigate } from "react-router-dom";

export default function HomePage() {
  const [navigate, setNavigate] = useState(false);

  function clearLocalstorage() {
    localStorage.removeItem("user");
    setNavigate(true);
    console.log("navigate");
  }

  if (navigate) {
    return <Navigate to="/login" />;
  }

  return (
    <div>

    </div>
  );
}
