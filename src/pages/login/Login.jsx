import React from "react";
import Home from "../home/Home";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  return (
    <div id="logg">
      <h2>Login</h2>
      <form>
        <input type="text" placeholder="Usuario" required />
        <input type="password" placeholder="Contraseña" required />
        <input
          type="submit"
          value="Iniciar Sesión"
          onClick={() => navigate(`/shop`)}
        />
        <input
          type="submit"
          value="Crear Usuario"
          onClick={() => navigate(`/Register`)}
        />
      </form>
    </div>
  );
}
export default Login;
