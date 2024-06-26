import { NavLink } from "react-router-dom";
import "../../style/pages/_siderPage.scss";

export default function Sider() {
  return (
    <div className="sider">
      <div className="links">
        <div className="link">
          <NavLink to={"/student/personalplan"}>
            <i className="pi pi-address-book"></i>
            Individual Shaxsiy reja
          </NavLink>
        </div>
        <div className="link">
          <NavLink to="/student/dashboard">
            <i className="pi pi-globe"></i>
            Yangiliklar
          </NavLink>
        </div>
        <div className="link">
          <NavLink to="/student/sciences">
            <i className="pi pi-book"></i>
            Mening fanlarim
          </NavLink>
        </div>
        <div className="link">
          <NavLink to="/student/final">
            <i className="pi pi-file"></i>
            Yakuniy
          </NavLink>
        </div>
        <div className="link">
          <NavLink to="/student/sciencescalendar">
            <i className="pi pi-table"></i>
            Dars jadvali
          </NavLink>
        </div>
        <div className="link">
          <NavLink to="/student/readagain">
            <i className="pi pi-book"></i>
            Qayta topshirish
          </NavLink>
        </div>
        <div className="link">
          <NavLink to="/student/info">
            <i className="pi pi-info-circle"></i>
            Ma'lumot
          </NavLink>
        </div>
        <div className="link">
          <NavLink to="/student/services">
            <i className="pi pi-user-edit"></i>
            Talaba xizmatlari
          </NavLink>
        </div>
        <div className="link">
          <NavLink to="/online-library">
            <i className="pi pi-bookmark"></i>
            Online kutubxona
          </NavLink>
        </div>
      </div>
    </div>
  );
}
