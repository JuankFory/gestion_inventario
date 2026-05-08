const app = require("./server.js");
const connection = require("./config/db.js");
const port = process.env.PORT || 3000;

//importamos la ruta del servicio
const routeUsuario = require("./Routes/RouteUsuario.js");
const routeProducto = require("./Routes/RouteProducto.js");
const routeDashboard = require("./Routes/DashboardRoutes.js");
const movimientoRoutes =require("./Routes/RoutesMovimiento.js");




if(connection){
    console.log("Conexión a la base de datos establecida");
} else {    
    console.log("Error de Conexión a la base de datos establecida");
    
}
// Usamos las rutas
app.use("/api",routeUsuario);
app.use("/api",routeProducto);
app.use("/api", routeDashboard);
app.use("/api", routeProducto);
app.use("/api", movimientoRoutes);

app.listen(port, () => {
    console.log("Ejecutando servidor en el puerto", port);     
})

