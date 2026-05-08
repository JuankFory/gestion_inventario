const conexion = require("../config/db");

// Crear Prodcutos
const crearProducto = async (
   codigo,
   nombre,
   descripcion,
   precio,
   stock,
   stock_minimo,
   id_categoria,
   id_proveedor
) => {

   const sql = `INSERT INTO productos ( codigo, nombre, descripcion, precio, stock, stock_minimo, id_categoria, id_proveedor ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;     

   const [results] = await conexion.query(sql, [ codigo, nombre, descripcion, precio,
      stock, stock_minimo, id_categoria, id_proveedor]);

   return results;
};


//Obtener Productos
const obtenerProductos = async () => {

   const sql = ` SELECT * FROM productos `;    

   const [rows] = await conexion.query(sql);

   return rows;
};

module.exports = { crearProducto, obtenerProductos };