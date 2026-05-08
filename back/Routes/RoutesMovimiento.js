const router = require("express").Router();

const {  crearMovimiento,  obtenerMovimientos
} = require("../Controllers/MovimientoControllers");



// =======================
// RUTAS
// =======================

router.post("/crearMovimiento", crearMovimiento);

router.get("/movimientos", obtenerMovimientos);


module.exports = router;