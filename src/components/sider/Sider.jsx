import { NavLink } from "react-router-dom";
import "../../style/pages/_siderPage.scss";
export default function Sider() {
  return (
    <div className="sider">
      <ul>
        <li>
          <NavLink to="/personalPo">Bosh sahifa</NavLink>
        </li>
        <li>
          <NavLink to="/">  </NavLink>
        </li>
        <li>
          <NavLink to="/">Bosh sahifa</NavLink>
        </li>
        <li>
          <NavLink to="/">Bosh sahifa</NavLink>
        </li>
      </ul>
    </div>
  );
}
