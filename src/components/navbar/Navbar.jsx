import "primeicons/primeicons.css";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import "../../style/layout/_navbar.scss";
export default function Navbar() {
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
    <div className="navbar">
      <div className="navbarlogo">
        <h1>LOGO</h1>
      </div>
      <div className="navbarstudentData">
        <h3>ELYORBEK BAXODIROV ELMUROD O‘G‘LI</h3>
        <p>Iqtisodiyot (IS 23-16)</p>
      </div>
      <div className="navbarprofile">
        <select className="navbarprofileselect" name="" id="">
          <option value="2023">2023-2024</option>
          <option value="2024">2024-2025</option>
          <option value="2025">2025-2026</option>
          <option value="2026">2026-2027</option>
        </select>
        <div className="navbarprofilecontract">
          <p>Kontrakt: 12 000 000 so'm</p>
          <p>Qarzdorlik: Qarzdorlik yo'q</p>
        </div>
        <div className="navbarprofileSetting">
          <i className="pi pi-bell"></i>
          <i className="pi pi-user"></i>
          <i
            className="pi pi-sign-out"
            onClick={() => {
              clearLocalstorage();
            }}
            style={{ color: "red" }}
          ></i>
        </div>
      </div>
    </div>
  );
}
