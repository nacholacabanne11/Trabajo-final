import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { doCreateUserWithEmailAndPassword } from "../../config/auth";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../config/firebase.js";

const Register =  () => {

  const navigate = useNavigate();
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = {
      user: formData.get("user"),
      nombre: formData.get("nombre"),
      apellido: formData.get("apellido"),
      password: formData.get("password"),
    };
    try {
      await doCreateUserWithEmailAndPassword(data.user, data.password);
      await addDoc(collection(db, "Usuarios"), {
        email: data.user,
        nombre: data.nombre,
        apellido: data.apellido,
        password: data.password,
      });
      navigate(`/shop`);
    } catch (er) {
      console.log(er);
    }
    
  };
 
  return (
    <div id="logg">
      <h2>Registro</h2>
      <form onSubmit={handleSubmit} ref={formRef}>
        <input type="text" placeholder="email" name="user" required />
        <input type="text" placeholder="nombre" name="nombre" required />
        <input type="text" placeholder="apellido" name="apellido" required />
        <input
          type="password"
          placeholder="Contraseña"
          name="password"
          required
        />
        <input type="submit" value="Crear Usuario" />
      </form>
    </div>
  );
};

export default Register;
