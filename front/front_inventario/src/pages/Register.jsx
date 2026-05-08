import React from "react";
import { useState, useEffect } from "react";
import {Link, Outlet} from "react-router-dom";
import Swal from "sweetalert2";
const Register = () => {

    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  

   async function registrarUsuario(e){
        e.preventDefault();

        try {
                 const respo =  await fetch("http://localhost:3000/api/crearUsuario",{
                  method:'POST',
                  headers:{
                    'Content-Type':'application/json'
                  },
                  body: JSON.stringify({
                  nombre,
                 email,
                 password,
                 id_rol: 2
                  
                })
        
                 });
                 const data = await respo.json();
                 if(respo.ok){
            Swal.fire({
                icon: 'success',
                title: 'Usuario creado',
                text: data.message
            });
            // limpiar formulario
            setNombre("");
            setEmail("");
            setPassword("");

        }else{
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: data.error
            });
        }
                 console.log("Data registrada", data);
              
            } catch (error) {
              console.error(error)
              
            }
    }
  
    return  (
    <>
    <div class="login-container">
  <div class="login-card">
    
    <div class="login-header">
      <h2>Registrar Usuario</h2>
      <p>Ingrese sus datos  para continuar</p>
    </div>

    <form onSubmit={registrarUsuario}>
      <div class="form-group">
        <label for="nombre">Nombre Completo</label>
        <input 
          type="text"   
          id="nombre" 
          name="nombre" 
          placeholder="Ingrese su nombre completo"
          required
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          placeholder="Ingrese su email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div class="form-group">
        <label for="password">Contraseña</label>
        <input 
          type="password" 
          id="password" 
          name="password" 
          placeholder="Ingrese su contraseña"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div class="form-options">
        <label>¿ Ya estas registrado ?
          <Link to="/"> Iniciar Sesion</Link>
        </label>
        
      </div>

      <button type="submit" onClick={registrarUsuario} class="btn-login">
        Registrar
      </button>
    </form>

  </div>
  <Outlet/>
</div>
    
    </>
);

}
export default Register;