const mysql = require("mysql2");
const bd_host = process.env.DB_HOST;
const bd_user = process.env.DB_USER;
const bd_pass = process.env.DB_PASS;
const bd_name = process.env.DB_NAME;    

const connection = mysql.createConnection({
    host: bd_host,
    user: bd_user,
    password: bd_pass,
    database: bd_name
});

connection.connect((err) => {
    if (err) {
        console.error("Error al conectar a la base de datos:", err);
        return;
    }   
    if(!connection){
        console.log("Error de Conexión a la base de datos establecida");
    }
    console.log("Conexión a la base de datos establecida");
});

module.exports = connection;