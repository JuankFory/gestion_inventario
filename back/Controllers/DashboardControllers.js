const dashboardModel = require("../Models/DashboardModel");

const obtenerDashboard = async (req, res) => {

   try {

      const datos = await dashboardModel.obtenerMovimientosSemana();

      res.status(200).json(datos);

   } catch (error) {

      console.error(error);

      res.status(500).json({
         error: "Error al obtener dashboard"
      });
   }
};

module.exports = {obtenerDashboard};