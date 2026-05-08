const router =require("express").Router();
const bcrypt = require("bcrypt");
// estas dos lineas comentadas es lo mismo que esta de arriba
//const { Router } = require("express");
//const router = Router();
const connection = require("../config/db.js");

router.post("/crearUsuario", async (req, res)=>{  
    try{
        const {nombre, email, password, id_rol} = req.body;
        console.log("BODY:", req.body); 
        const hashedPassword = await bcrypt.hash(password, 10);
        
        // validar email simple
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if(!emailRegex.test(email)){
                return res.status(400).json({error: "Email inválido"});
            }

            // validar contraseña
            if(password.length < 6){
                return res.status(400).json({error: "La contraseña debe tener mínimo 6 caracteres"});
            }

            const [userExist] = await connection.query("SELECT * FROM usuarios WHERE email = ?", [email]);

                if(userExist.length > 0){
                    return res.status(400).json({error: "El usuario con este email ya existe"});
                }
        const sql = "INSERT INTO usuarios(nombre, email, password, id_rol) VALUES (?, ?, ?, ?)";
        const [result] = await connection.query(sql, [nombre, email, hashedPassword, id_rol]);
        res.json({message: "Usuario creado correctamente", result});
    }catch(err){
        console.log("SQL ERROR: ", err);
        res.status(500).json({error: "Error al insertar"});
    }
});




router.get("/usuarios", async (req, res) => {  
    try {    
        const sql = "SELECT * FROM usuarios";
        const [rows]= await connection.query(sql);
        console.log("Usuarios obtenidos:", rows);
        res.send(rows);
        //res.json(rows);
  } catch (error) {
    console.error("Error al obtener los usuarios:", error);
    res.status(500).json({ error: "Error al obtener los usuarios" });
  }
});

module.exports = router;