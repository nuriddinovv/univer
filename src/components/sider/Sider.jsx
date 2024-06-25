import { NavLink } from "react-router-dom";
import "../../style/pages/_siderPage.scss";

export default function Sider() {
  return (
    <div className="sider">
      <div className="links">
        <div className="link">
          <NavLink to="/" activeClassName="active">
            <i className="pi pi-address-book"></i>
            Individual Shaxsiy reja
          </NavLink>
        </div>
        <div className="link">
          <NavLink to="/news" activeClassName="active">
            <i className="pi pi-globe"></i>
            Yangiliklar
          </NavLink>
        </div>
        <div className="link">
          <NavLink to="/my-courses" activeClassName="active">
            <i className="pi pi-book"></i>
            Mening fanlarim
          </NavLink>
        </div>
        <div className="link">
          <NavLink to="/final" activeClassName="active">
            <i className="pi pi-file"></i>
            Yakuniy
          </NavLink>
        </div>
        <div className="link">
          <NavLink to="/schedule" activeClassName="active">
            <i className="pi pi-table"></i>
            Dars jadvali
          </NavLink>
        </div>
        <div className="link">
          <NavLink to="/resubmission" activeClassName="active">
            <i className="pi pi-book"></i>
            Qayta topshirish
          </NavLink>
        </div>
        <div className="link">
          <NavLink to="/info" activeClassName="active">
            <i className="pi pi-info-circle"></i>
            Ma'lumot
          </NavLink>
        </div>
        <div className="link">
          <NavLink to="/student-services" activeClassName="active">
            <i className="pi pi-user-edit"></i>
            Talaba xizmatlari
          </NavLink>
        </div>
        <div className="link">
          <NavLink to="/online-library" activeClassName="active">
            <i className="pi pi-bookmark"></i>
            Online kutubxona
          </NavLink>
        </div>
      </div>
    </div>
  );
}
