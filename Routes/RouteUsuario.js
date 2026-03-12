const router =require("express").Router();
const connection = require("../db.js");


router.post("/crearUsuario", (req, res)=>{   

    try{
     const {nombre, email, password,id_rol} = req.body;
    const sql = "INSERT INTO usuarios(nombre, email, password, id_rol) VALUES (?, ?, ?, ?)";

 connection.query(sql, [nombre, email, password, id_rol], (err, results) => {

        if(res.status(201)){
            console.log("Usuario creado con exito")
        }else{
            console.log("Error al crear el usuario")
                }

            }      );                               
    }catch(err){
        console.log("SQL ERROR: ", err)
    }
    res.json({message: "Usuario creado correctamente"});
   

});


router.get("/usuarios", (req, res) => {
  const sql = "SELECT * FROM usuarios";
    connection.query(sql, (err, results) => {   

        if(res.status(200)){ 
            console.log("Usuarios obtenidos correctamente");    
        }else{ 
                console.log("Error al obtener los usuarios");
        }         
        if (err) {
            console.error("Error al obtener los usuarios:", err);   
            res.status(500).json({ error: "Error al obtener los usuarios" });
            return;
        }   
        res.json(results);  
    }); 
});

module.exports = router;