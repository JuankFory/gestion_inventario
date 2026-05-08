const conexion = require("../config/db");

const obtenerMovimientosSemana = async () => {

   const sql = `

      SELECT

         DAYNAME(fecha_movimiento) AS dia,

         SUM(
            CASE
               WHEN tipo_movimiento = 'ENTRADA'
               THEN cantidad
               ELSE 0
            END
         ) AS entradas,

         SUM(
            CASE
               WHEN tipo_movimiento = 'SALIDA'
               THEN cantidad
               ELSE 0
            END
         ) AS salidas

      FROM movimientos_inventario

      GROUP BY DAYNAME(fecha_movimiento),
      DAYOFWEEK(fecha_movimiento)

      ORDER BY DAYOFWEEK(fecha_movimiento)

   `;

   const [rows] = await conexion.query(sql);

   return rows;
};

module.exports = { obtenerMovimientosSemana};