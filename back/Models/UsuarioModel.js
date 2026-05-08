const conexion = require('../config/db');

const crearUsuario = () =>{
     conexion.query("INSERT INTO usuarios (nombre, email, password) VALUES (?,?,?))", [nombre, email, password], (error, results) => {
         console.log("Usuario creado exitosamente");

         if(error){
         console.error("Error al crear el usuario", error);
            return;
        }
    });

}

const obtenerUsuario = (email, password) => {
    conexion.query("SELECT * FROM usuarios WHERE email = ? AND password = ?", [email, password], (error, results) => {
        if(error){
            console.error("Error al obtener el usuario", error);
            return;
        }
        if(results.length > 0){
            console.log("Usuario encontrado:", results[0]);
        } else {
            console.log("Usuario no encontrado");
        }
    });
}


module.exports = { crearUsuario, obtenerUsuario };