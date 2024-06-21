import "../../style/pages/_loginPage.scss";
import userIcon from "../../img/loginPageImg/userIcon.svg";
import userPass from "../../img/loginPageImg/userPass.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Alert } from "@mui/material";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState("password");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (username === "user" && password === "1234") {
      localStorage.setItem("user", username);
      navigate("/");
    } else {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  };

  return (
    <div className="login">
      <div className="login_logo">
        <h1>LOGO</h1>
      </div>
      <div className="login_text">
        {error && (
          <Alert style={{ position: "absolute", top: "10px" }} severity="error">
            Invalid username or password.
          </Alert>
        )}
        <form onSubmit={handleSubmit}>
          <h1>LOGO</h1>
          <label>
            <img src={userIcon} alt="user icon" />
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
            />
          </label>
          <label>
            <img
              onClick={() => {
                setShowPassword(
                  showPassword === "password" ? "text" : "password"
                );
              }}
              src={userPass}
              alt="password icon"
            />
            <input
              type={showPassword}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </label>
          <button type="submit">Log in</button>
        </form>
      </div>
    </div>
  );
}
