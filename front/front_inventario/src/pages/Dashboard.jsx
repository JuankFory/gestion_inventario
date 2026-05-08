import { useEffect, useState } from "react";
import axios from "axios";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  Title
);

function Dashboard() {

  const usuario =
    localStorage.getItem("user.nombre") || "Admin";

  const [chartData, setChartData] = useState({
    labels: [],
    datasets: []
  });

  useEffect(() => {
    obtenerDatosDashboard();
  }, []);

  const obtenerDatosDashboard = async () => {

    try {

      const response = await axios.get(
        "http://localhost:3000/api/dashboard"
      );

      const datos = response.data;

      const labels = datos.map(item => item.dia);

      const entradas = datos.map(
        item => item.entradas
      );

      const salidas = datos.map(
        item => item.salidas
      );

      setChartData({
        labels,
        datasets: [
          {
            label: "Entradas",
            data: entradas,
            backgroundColor: "#2e07de",
          },
          {
            label: "Salidas",
            data: salidas,
            backgroundColor: "#e91368",
          },
        ],
      });

    } catch (error) {

      console.error(
        "Error al obtener dashboard",
        error
      );
    }
  };

  const optionsBar = {

    responsive: true,

    plugins: {

      legend: {
        position: "top",
      },

      title: {
        display: true,
        text: "Movimientos de Inventario",
      },
    },
  };

  return (

    <section className="content-area">

      {/* Header */}

      <div
        className="d-flex justify-content-between align-items-center mb-4"
      >    

      </div>

      {/* Gráfico */}

      <div className="card shadow border-0 rounded-4">

        <div className="card-body">

          <Bar
            data={chartData}
            options={optionsBar}
          />

        </div>

      </div>

    </section>
  );
}

export default Dashboard;