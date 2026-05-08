import { layouts } from "chart.js";
import Layout from "../Layout.jsx"
import UsuariosContent from "../UsuariosContent.jsx"
import { Outlet } from "react-router-dom";

function Usuarios(){
    return(  
      <div>
                <main className="main-content">
                    <section className="content-area">
                        <div className="card-box">                
                            <h1>Usuarios</h1>
                            <p>Aquí irían los usuarios.</p>
                            <p>Aquí renderizas tus componentes de React.</p>
                        </div>
                    </section>  
                </main>
            </div>
    )
}
            
        
    

export default Usuarios;