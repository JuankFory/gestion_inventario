import React from "react"


function UsuariosContent(){

return (
<main className="main-content">
    <header className="topbar">
        <h1>Dashboard</h1>         
        <div className="user-box">
          Bienvenido, Admin
        </div>
      </header>    

      <section className="content-are">
        <div className="card-box">
          <h2>Contenido Dinámico</h2>
        </div>
      </section>
                    <section className="content-area">
                        <div className="card-box">
                            <h1>Usuarios</h1>
                            <p>Aquí irían los usuarios.</p>
                            <p>Aquí renderizas tus componentes de React.</p>
                        </div>
                    </section>  
                </main>
                
          
            )
        }

        export default UsuariosContent;