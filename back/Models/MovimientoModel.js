const conexion = require("../config/db");


// ======================================
// REGISTRAR MOVIMIENTO
// ======================================

const crearMovimiento = async (

   id_producto,
   id_usuario,
   tipo_movimiento,
   cantidad,
   motivo

) => {

   const sql = `

      INSERT INTO movimientos_inventario
      (
         id_producto,
         id_usuario,
         tipo_movimiento,
         cantidad,
         motivo
      )

      VALUES (?, ?, ?, ?, ?)

   `;

   const [results] = await conexion.query(sql, [

      id_producto,
      id_usuario,
      tipo_movimiento,
      cantidad,
      motivo

   ]);


   // =========================================
   // ACTUALIZAR STOCK
   // =========================================

   if (tipo_movimiento === "ENTRADA") {

      await conexion.query(

         `
            UPDATE productos
            SET stock = stock + ?
            WHERE id_producto = ?
         `,

         [cantidad, id_producto]

      );

   }


   if (tipo_movimiento === "SALIDA") {

      await conexion.query(

         `
            UPDATE productos
            SET stock = stock - ?
            WHERE id_producto = ?
         `,

         [cantidad, id_producto]

      );

   }

   return results;
};



// ======================================
// OBTENER MOVIMIENTOS
// ======================================

const obtenerMovimientos = async () => {

   const sql = `

      SELECT

         m.id_movimiento,
         p.nombre AS producto,
         u.nombre AS usuario,
         m.tipo_movimiento,
         m.cantidad,
         m.motivo,
         m.fecha_movimiento

      FROM movimientos_inventario m

      INNER JOIN productos p
      ON m.id_producto = p.id_producto

      INNER JOIN usuarios u
      ON m.id_usuario = u.id_usuario

      ORDER BY m.fecha_movimiento DESC

   `;

   const [rows] = await conexion.query(sql);

   return rows;
};


module.exports = {

   crearMovimiento,
   obtenerMovimientos

};