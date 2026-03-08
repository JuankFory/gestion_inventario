const app = require("./server.js");
const connection = require("./db.js");
const port = process.env.PORT || 3000;

if(connection){
    console.log("Conexión a la base de datos establecida");
} else {    
    console.log("Error de Conexión a la base de datos establecida");

}

app.listen(port, () => {
    console.log("Ejecutando servidor en el puerto", port);   
})

