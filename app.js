const port = process.env.PORT;
const app = require("./server.js");
const router = require("./Routes/RouteUsuario.js");
const express = require("express");
require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);


app.listen(port, () => {
    console.log("Ejecutando servidor en el puerto", port);   
})

