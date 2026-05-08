import { Outlet, Link } from "react-router-dom";
import {useLocation} from "react-router-dom"

function Layout() {
  const location = useLocation();
  // Extraemos el último segmento de la ruta para usarlo como título
  const ruta = location.pathname.split("/")[2];
  return(
        <>
        <div className="layout">

  
  <aside className="sidebar">

    <div className="brand">
      <h2>Inventario</h2>
      <span>Panel Admin</span>
    </div>

    <nav className="menu">

      <Link to="/menu/dashboard" className="menu-item ">
        <span>🏠</span>
        <span>Dashboard</span>
      </Link>
  
      <Link to="/menu/productos" className="menu-item">
        <span>📦</span>
        <span>Productos</span>
      </Link>

      <Link to="/menu/entradas" className="menu-item">
        <span>🧾</span>
        <span>Entradas</span>
      </Link>

      <Link to="/menu/salidas" className="menu-item">
        <span>🚚</span>
        <span>Salidas</span>
      </Link>

      <Link to="/menu/usuarios" className="menu-item">
        <span>👥</span>
        <span>Usuarios</span>
      </Link>

      <Link to="/menu/reportes" className="menu-item">
        <span>📊</span>
        <span>Reportes</span>
      </Link>

      <Link to="/menu/configuracion" className="menu-item">
        <span>⚙️</span>
        <span>Configuración</span>
      </Link>

      <Link to="/menu/cerrar-sesion" className="menu-item">
        <span>🚪</span>
        <span>Cerrar Sesión</span>
      </Link>  

    </nav>

  </aside>

  
  <main className="main-content">

    <header className="topbar">
      <h1>{ruta}</h1>
      <div className="user-box">
        Bienvenido, Admin
      </div>
    </header>

    {/*
    <section className="content-area">    
      <div className="card-box">
        <h2>Contenido Dinámico</h2>
        <p>Aquí renderizas tus componentes de React.</p>
      </div>
    */}
    <Outlet />
      {/*  
    </section>
    */}
  </main>
</div>        
  </>
   );
}

export default Layout;