import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { doSingInWithEmailAndPassword } from "../../config/auth";

function Login() {
  const navigate = useNavigate();
  const formRef = useRef(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = {
      user: formData.get("user"),
      password: formData.get("password"),
    };
    try {
      await doSingInWithEmailAndPassword(data.user, data.password);
      navigate(`/shop`);
    } catch (error) {
      console.log(error);
    }
  };

const isLogin={}
const title=isLogin?"Login":"no tiene titulo"
  return (
    
    <div id="logg">
      <h2>{title}</h2>  
      <form onSubmit={handleSubmit} ref={formRef}>
        <input type="text" placeholder="Usuario" name="user"  />
        <input
          type="password"
          placeholder="Contraseña"
          name="password"
        />
        <input type="submit" value="Iniciar Sesión" />
        <input
          type="submit"
          value="Crear Usuario"
          onClick={() => navigate(`/register`)}
        />
      </form>
    </div>
  );
}
export default Login;
