const mysql = require("mysql2");
require("dotenv").config();
const bd_host = process.env.DB_HOST;
const bd_user = process.env.DB_USER;
const bd_pass = process.env.DB_PASS;
const bd_name = process.env.DB_NAME; 

const connection = mysql.createPool({
    host: bd_host,
    user: bd_user,
    password: bd_pass,
    database: bd_name
});

if(connection){
    console.log("Conexión a la base de datos establecida");
}else{

    console.log("Error de Conexión a la base de datos establecida");
}
/*
const connection = mysql.createConnection({
    host: bd_host,
    user: bd_user,
    password: bd_pass,
    database: bd_name
});
*/
module.exports = connection.promise();