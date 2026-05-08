const movimientoModel =require("../Models/MovimientoModel");



// ===================================
// CREAR MOVIMIENTO
// ===================================

const crearMovimiento = async (req, res) => {

   try {

      const {

         id_producto,
         id_usuario,
         tipo_movimiento,
         cantidad,
         motivo

      } = req.body;


      // ==============================
      // VALIDAR STOCK EN SALIDAS
      // ==============================

      if (tipo_movimiento === "SALIDA") {

         const [producto] = await require("../config/db").query(

            `
               SELECT stock
               FROM productos
               WHERE id_producto = ?
            `,

            [id_producto]

         );

         if (producto[0].stock < cantidad) {

            return res.status(400).json({

               error:
                  "Stock insuficiente para realizar la salida"

            });
         }
      }


      const resultado =
         await movimientoModel.crearMovimiento(

            id_producto,
            id_usuario,
            tipo_movimiento,
            cantidad,
            motivo

         );


      return res.status(201).json({

         message:
            "Movimiento registrado correctamente",

         resultado

      });

   } catch (error) {

      console.error(error);

      return res.status(500).json({

         error:
            "Error al registrar movimiento"

      });
   }
};




// ===================================
// OBTENER MOVIMIENTOS
// ===================================

const obtenerMovimientos = async (req, res) => {

   try {

      const movimientos =
         await movimientoModel.obtenerMovimientos();

      return res.status(200).json(movimientos);

   } catch (error) {

      console.error(error);

      return res.status(500).json({

         error:
            "Error al obtener movimientos"

      });
   }
};


module.exports = {

   crearMovimiento,
   obtenerMovimientos

};