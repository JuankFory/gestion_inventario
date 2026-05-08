import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { useNavigate } from 'react-router-dom'
import swal from 'sweetalert2'
import {Link, Outlet} from 'react-router-dom'

import './App.css'
function Login() {
  
  const [nombre, setNombre]= useState("");
  const [email, setEmail]= useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(()=>{
    //IngresarMenu();

  },[]);

  /* para eliminar un registro
  Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) Swal.fire({
    title: "Deleted!",
    text: "Your file has been deleted.",
    icon: "success"
  });
});
  */ 

   const  IngresarMenu = async (e) => {  
    e.preventDefault();   

     const respo =  await fetch("http://localhost:3000/api/usuarios").then(
      data => data.json().then(data =>    
        {console.log("Data obtenida", data)
        const userRegistrado = data.find(u => u.nombre);
        //console.log("Usuario registrado", userRegistrado);
        

const nombres = userRegistrado;

localStorage.setItem("user", nombres);

console.log("Nombre guardado:", nombres);
          const user = data.find(u => u.email === nombre && u.password === password);
          if(user){
            swal.fire({
              title: "Bienvenido",
              text: "Ingreso correcto",
              icon: "success",
              timer: 1500,
              confirmButtonText: "Aceptar"
            });
            localStorage.setItem("user", JSON.stringify(user));
            localStorage.setItem("userRegistrado", JSON.stringify(userRegistrado));
            navigate('./menu');
          } else {
            swal.fire({
              title: "Error",
              text: "Usuario o contraseña incorrectos",
              icon: "error",
              confirmButtonText: "Aceptar"
            });
          }
        }
      
      )
     )
    }
     /*
    if(nombre === nombre && password==="Admin1234"){
      swal.fire({
        title:"Bienvenido",
        text:"ingreso correcto",
        icon:"success",
        timer:1500,
        confirmButtonText:"Aceptar"
      })
      localStorage.setItem("user",usuario);
      navigate('./menu');
    }else{
      swal.fire({
        title:"Error",
        text:"Usuario o contraseña incorrectos",
        icon:"error",
        confirmButtonText:"Aceptar"
      } );
    }
  }
*/
  return (
    <>
    <div className="login-container">
  <div className="login-card">
    
    <div className="login-header">
      <h2>Iniciar Sesión</h2>
      <p>Ingrese sus credenciales para continuar</p>
    </div>

    <form onSubmit={IngresarMenu}>
      <div className="form-group">
        <label for="usuario">Usuario</label>
        <input 
          type="text" 
          id="usuario" 
          name="usuario" 
          placeholder="Ingrese su usuario"
          required
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>

      <div className="form-group">
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

      <div className="form-options">
        <label>
          <Link to="/menu/register">Registrarse</Link>
        </label>
        <a href="#">¿Olvidó su contraseña?</a>
      </div>

      <button type="submit"  className="btn-login">
        Ingresar
      </button>
    </form>

  </div>
</div>
    
    </>
  )
}

export default Login;
