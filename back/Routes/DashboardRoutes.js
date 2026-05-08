const router = require("express").Router();
//const router = express.Router();
const {obtenerDashboard} = require("../Controllers/DashboardControllers");
//const dashboardConstrollers = require("../Controllers/DashboardControllers")
router.get("/dashboard", obtenerDashboard);
module.exports = router;


