const productoModel = require("../Models/ProductoModel");

//Crear Producto
const crearProducto = async (req, res) => {

   try {

      const {

         codigo,
         nombre,
         descripcion,
         precio,
         stock,
         stock_minimo,
         id_categoria,
         id_proveedor

      } = req.body;


      const resultado = await productoModel.crearProducto(

         codigo,
         nombre,
         descripcion,
         precio,
         stock,
         stock_minimo,
         id_categoria,
         id_proveedor

      );


      return res.status(201).json({message: "Producto creado correctamente",  resultado});

   } catch (error) {

      console.error(error);

      return res.status(500).json({ error: "Error al crear producto" });
   }
};

//Obtener Productos
const obtenerProductos = async (req, res) => {

   try {

      const productos = await productoModel.obtenerProductos();
      return res.status(200).json(productos);

   } catch (error) {

      console.error(error);

      return res.status(500).json({error: "Error al obtener productos" });
   }
};


module.exports = { crearProducto, obtenerProductos };