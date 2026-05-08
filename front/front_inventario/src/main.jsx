import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// Tema (puedes cambiarlo)
//import "primereact/resources/themes/lara-dark-indigo/theme.css";
//import "primereact/resources/themes/vela-blue/theme.css";
//import "primereact/resources/themes/lara-light-purple/theme.css";
//import "primereact/resources/themes/lara-light-indigo/theme.css"; 
//import "primereact/resources/themes/lara-light-purple/theme.css";
//import "primereact/resources/themes/lara-light-teal/theme.css";
// Core
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import Login from './Login.jsx'
import Menu from './pages/Menu.jsx';
import Productos from './pages/Productos.jsx';
import Reportes from './pages/Reportes.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Usuarios from './pages/Usuarios.jsx';
import Entradas from './pages/Entradas.jsx';
import Salidas from './pages/Salidas.jsx';
import Layout from './Layout.jsx';
import Register from './pages/Register.jsx'
import ProtectedRoute from './pages/ProtectedRoute.jsx';
//Esto se usa para proteger la ruta y evitar que un usuario no autenticado acceda al menú principal
//<Route path="/menu"element={<ProtectedRoute><Menu /></ProtectedRoute>}></Route>


createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/menu" element={<Layout />}>
      
      {/* Ruta por defecto */}
      <Route index element={<Dashboard />} />

      <Route path="productos" element={<Productos />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="reportes" element={<Reportes />} />
      <Route path="usuarios" element={<Usuarios />} />
      <Route path="entradas" element={<Entradas />} />
      <Route path="salidas" element={<Salidas />} />
      <Route path="register" element={<Register />} />

    </Route>
  </Routes>
</BrowserRouter>     
   
)
