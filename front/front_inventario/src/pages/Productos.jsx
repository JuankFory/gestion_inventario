import { useState } from "react";
import axios from "axios";

function Productos() {

   const [formData, setFormData] = useState({

      codigo: "",
      nombre: "",
      descripcion: "",
      precio: "",
      stock: "",
      stock_minimo: "",
      id_categoria: "",
      id_proveedor: ""

   });


   const handleChange = (e) => {
      const { name, value } = e.target;

      setFormData({
         ...formData,
         [name]: value

      });
   };


   const handleSubmit = async (e) => {

      e.preventDefault();

      try {

         await axios.post( "http://localhost:3000/api/crear-producto",formData

         );

         alert("Producto creado correctamente");


         setFormData({

            codigo: "",
            nombre: "",
            descripcion: "",
            precio: "",
            stock: "",
            stock_minimo: "",
            id_categoria: "",
            id_proveedor: ""

         });

      } catch (error) {

         console.error(error);

         alert("Error al crear producto");
      }
   };


   return (

      <div className="container mt-5">

         <div className="row justify-content-center">

            <div className="col-lg-10">

               <div className="card shadow-lg border-0 rounded-4">

                  {/* HEADER */}

                  <div
                     className="card-header text-white rounded-top-4"
                     style={{
                        background:
                           "linear-gradient(90deg, #3a0ca3, #7209b7)"
                     }}
                  >

                     <div className="d-flex justify-content-between align-items-center ">

                        <div>
                           <h5 className="fw-bold mb-1 ">
                              Gestión de Productos
                           </h5>

                           
                        </div>

                        <div className="fs-1">
                           📦
                        </div>

                     </div>

                  </div>

                  {/* BODY */}

                  <div className="card-body p-2">
                     <form onSubmit={handleSubmit}>
                        <div className="row">
                           {/* CODIGO */}

                           <div className="col-md-4 mb-4">

                              <label className="form-label fw-semibold">
                                 Código
                              </label>

                              <input
                                 type="text"
                                 className="form-control form-control-lg"
                                 placeholder="Ej: 001"
                                 name="codigo"
                                 value={formData.codigo}
                                 onChange={handleChange}
                                 required
                              />
                           </div>

                           {/* NOMBRE */}
                           <div className="col-md-8 mb-4">
                              <label className="form-label fw-semibold">
                                 Nombre
                              </label>

                              <input
                                 type="text"
                                 className="form-control form-control-lg"
                                 placeholder="Nombre producto"
                                 name="nombre"
                                 value={formData.nombre}
                                 onChange={handleChange}
                                 required
                              />

                           </div>


                           {/* DESCRIPCION */}

                           <div className="col-12 mb-4">

                              <label className="form-label fw-semibold">
                                 Descripción
                              </label>

                              <textarea
                                 className="form-control"
                                 rows="4"
                                 placeholder="Descripción del producto"
                                 name="descripcion"
                                 value={formData.descripcion}
                                 onChange={handleChange}
                              ></textarea>

                           </div>


                           {/* PRECIO */}

                           <div className="col-md-3 mb-4">

                              <label className="form-label fw-semibold">
                                 Precio
                              </label>

                              <input
                                 type="number"
                                 className="form-control form-control-lg"
                                 placeholder="0"
                                 name="precio"
                                 value={formData.precio}
                                 onChange={handleChange}
                                 required
                              />

                           </div>


                           {/* STOCK */}

                           <div className="col-md-3 mb-4">

                              <label className="form-label fw-semibold">
                                 Stock
                              </label>

                              <input
                                 type="number"
                                 className="form-control form-control-lg"
                                 placeholder="0"
                                 name="stock"
                                 value={formData.stock}
                                 onChange={handleChange}
                                 required
                              />

                           </div>


                           {/* STOCK MINIMO */}

                           <div className="col-md-3 mb-4">

                              <label className="form-label fw-semibold">
                                 Stock mínimo
                              </label>

                              <input
                                 type="number"
                                 className="form-control form-control-lg"
                                 placeholder="0"
                                 name="stock_minimo"
                                 value={formData.stock_minimo}
                                 onChange={handleChange}
                                 required
                              />

                           </div>


                           {/* CATEGORIA */}

                           <div className="col-md-3 mb-4">

                              <label className="form-label fw-semibold">
                                 ID Categoría
                              </label>

                              <input
                                 type="number"
                                 className="form-control form-control-lg"
                                 placeholder="1"
                                 name="id_categoria"
                                 value={formData.id_categoria}
                                 onChange={handleChange}
                              />

                           </div>


                           {/* PROVEEDOR */}

                           <div className="col-md-6 mb-4">

                              <label className="form-label fw-semibold">
                                 ID Proveedor
                              </label>

                              <input
                                 type="number"
                                 className="form-control form-control-lg"
                                 placeholder="1"
                                 name="id_proveedor"
                                 value={formData.id_proveedor}
                                 onChange={handleChange}
                              />

                           </div>

                        </div>


                        {/* BOTON */}

                        <div className="d-grid mt-3">

                           <button
                              type="submit"
                              className="btn btn-lg text-white fw-bold"
                              style={{
                                 background:
                                    "linear-gradient(90deg, #3a0ca3, #7209b7)"
                              }}
                           >

                              Guardar Producto

                           </button>

                        </div>

                     </form>

                  </div>

               </div>

            </div>

         </div>

      </div>
   );
}

export default Productos;