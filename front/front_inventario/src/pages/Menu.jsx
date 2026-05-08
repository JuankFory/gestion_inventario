import { Navigate } from "react-router-dom";
import {Link, Outlet} from "react-router-dom";
//import { FaHome } from "react-icons/fa";
import { RiArrowGoBackFill } from "react-icons/ri";
import{Bar} from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale,LinearScale, BarElement, LineElement, PointElement,
  Title,  Tooltip, Legend} from 'chart.js';

//Registro clave para gráficos
ChartJS.register( CategoryScale, LinearScale, BarElement,LineElement, PointElement,
  Title, Tooltip, Legend);

function Menu(){

const usuario = localStorage.getItem("user") || "Admin";
const dataBar = {
  labels: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
  datasets: [
    {
      label: 'Entradas',
      data: [12, 19, 8, 15, 10, 14, 6],
      backgroundColor: '#2e07de',
    },
    {
      label: 'Salidas',
      data: [8, 11, 5, 9, 7, 10, 4],
      backgroundColor: '#e91368',
    },
  ],
};

const optionsBar = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
  },
};
    return(
        
        <div className="layout">

  
  <aside className="sidebar">
    <div className="brand">      
      <h2>Inventario</h2>
      <span>Panel Admin</span>
    </div>

    <nav className="menu">
      <Link to="dashboard" className="menu-item">
  <span>🏠</span>
  <span>Dashboard</span>
</Link>

<Link to="productos" className="menu-item">
  <span>📦</span>
  <span>Productos</span>
</Link>

<Link to="entradas" className="menu-item">
  <span>📥</span>
  <span>Entradas</span>
</Link>

<Link to="salidas" className="menu-item">
  <span>📤</span>
  <span>Salidas</span>
</Link>

<Link to="usuarios" className="menu-item">
  <span>👥</span>
  <span>Usuarios</span>
</Link>

<Link to="reportes" className="menu-item">
  <span>📊</span>
  <span>Reportes</span>
</Link>

<Link to="configuracion" className="menu-item">
  <span>⚙️</span>
  <span>Configuración</span>
</Link>

<Link to="/logout" className="menu-item">
  <span>🚪</span>
  <span>Cerrar Sesión</span>
</Link>
    </nav>
  </aside>
  
  <main className="main-content">
    <header className="topbar">
      <Link to="/menu/dashboard">
      </Link> 
      <h1>Menu Principal</h1>
      <div className="user-box">
        Bienvenido, {usuario}
      </div>
    </header>

    <section className="content-area">

     <div style={{ width: 'vw', height: 'vh' }}>
      <Bar data={dataBar} options={optionsBar} />
      </div>
    
    </section>
  </main>
</div>        
  
   );
}
export default Menu;