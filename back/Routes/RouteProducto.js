const router = require("express").Router();
//const express = require("express");
//const router = express.Router();

//importamos las funciones del controlador
const {  crearProducto,obtenerProductos } = require("../Controllers/ProductoControllers");


router.post("/crear-producto", crearProducto);
router.get("/productos", obtenerProductos);


module.exports = router;