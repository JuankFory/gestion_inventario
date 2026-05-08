const usuarioModel  = require("../Models/UsuarioModel");

const Login = (req, res) => {
    const {email, password}= req.body;
    usuarioModel.obtenerUsuario(email, password, (error, result) =>{
        if(error){
            console.error("Error al obtener el usuario", error);
            return res.status(500).json({error: "Error al obtener el usuario"});
        }
    })
    if(!email || !password){
        return res.status(400).json({error: "Email y contraseña son requeridos"});
    }

    if(result.length > 0){
        return res.status(200).json({message: "Login exitoso", user: result[0]});
    } else {
        return res.status(401).json({error: "Email o contraseña incorrectos"});
    }
    res.send('Obteniendo usuarios');
};

const Register = (req, resp) => {
    const {nombre,email, password} = req.body;

usuarioModel.crearUsuario((error, results)=>{

    if(error) {
        console.error("error al crear usuario", error);
         return resp.status(500).json({message:"Error al crear un usuario "})
    }

    if(result.length > 0){
        return res.status(200).json({message: "Usuario Creado con exigto", user: result[0]});
    } else {
        return res.status(401).json({error: "Email o contraseña incorrectos"});
    }
    res.send(' usuarios Creado');

})



}

module.exports = { Login,Register };