import React from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Registro</h2>
      <form>
        <input type="text" placeholder="Usuario" required />
        <input type="password" placeholder="Contraseña" required />
        <input type="password" placeholder="Confirme Contraseña" required />
        <input
          type="submit"
          value="Crear Usuario"
          onClick={() => navigate(`/shop`)}
        />
      </form>
    </div>
  );
};

export default Register;
