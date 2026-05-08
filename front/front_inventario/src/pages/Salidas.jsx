
import Layout from "../Layout.jsx"

import { useState, useEffect } from "react";
import axios from "axios";

export default function SalidaInventario() {

  const [formData, setFormData] = useState({
    id_producto: "",
    id_usuario: "",
    tipo_movimiento: "SALIDA",
    cantidad: "",
    motivo: ""
  });

  const [productos, setProductos] = useState([]);
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    obtenerProductos();
    obtenerUsuarios();
  }, []);

  const obtenerProductos = async () => {

    try {

      const response = await axios.get(
        "http://localhost:3000/productos"
      );

      setProductos(response.data);

    } catch (error) {

      console.error(
        "Error al obtener productos",
        error
      );
    }
  };

  const obtenerUsuarios = async () => {

    try {

      const response = await axios.get(
        "http://localhost:3000/usuarios"
      );

      setUsuarios(response.data);

    } catch (error) {

      console.error(
        "Error al obtener usuarios",
        error
      );
    }
  };

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

      await axios.post(
        "http://localhost:3000/movimientos",
        formData
      );

      alert("Salida registrada correctamente");

      setFormData({
        id_producto: "",
        id_usuario: "",
        tipo_movimiento: "SALIDA",
        cantidad: "",
        motivo: ""
      });

    } catch (error) {

      console.error(
        "Error al registrar salida",
        error
      );
    }
  };

  return (

    <div className="container mt-2">

      <div className="row justify-content-center">

        <div className="col-md-6">

          <div className="card border-0 shadow-lg rounded-4">

            {/* Header */}

            <div className="card-header bg-danger text-white rounded-top-4">

              <div className="d-flex align-items-center justify-content-between">

                <div>
                  <h2 className="fw-bold mb-1">
                    Salida de Inventario
                  </h2>

                  <p className="mb-0 opacity-75">
                    Registro de productos retirados del almacén
                  </p>
                </div>

                <div className="fs-1">
                  <i className="bi bi-box-arrow-right"></i>
                </div>

              </div>

            </div>

            {/* Body */}

            <div className="card-body p-2">

              <form onSubmit={handleSubmit}>

                {/* Producto */}

                <div className="mb-2">

                  <label className="form-label fw-semibold">
                    Producto
                  </label>

                  <select
                    className="form-select form-select-lg"
                    name="id_producto"
                    value={formData.id_producto}
                    onChange={handleChange}
                    required
                  >

                    <option value="">
                      Seleccione un producto
                    </option>

                    {productos.map((producto) => (

                      <option
                        key={producto.id_producto}
                        value={producto.id_producto}
                      >
                        {producto.nombre}
                      </option>

                    ))}

                  </select>

                </div>

                {/* Usuario */}

                <div className="mb-2">

                  <label className="form-label fw-semibold">
                    Responsable
                  </label>

                  <select
                    className="form-select form-select-lg"
                    name="id_usuario"
                    value={formData.id_usuario}
                    onChange={handleChange}
                    required
                  >

                    <option value="">
                      Seleccione un usuario
                    </option>

                    {usuarios.map((usuario) => (

                      <option
                        key={usuario.id_usuario}
                        value={usuario.id_usuario}
                      >
                        {usuario.nombre}
                      </option>

                    ))}

                  </select>

                </div>

                {/* Cantidad */}

                <div className="mb-2">

                  <label className="form-label fw-semibold">
                    Cantidad de salida
                  </label>

                  <input
                    type="number"
                    className="form-control form-control-lg"
                    placeholder="Ingrese cantidad"
                    name="cantidad"
                    value={formData.cantidad}
                    onChange={handleChange}
                    required
                    min="1"
                  />

                </div>

                {/* Motivo */}

                <div className="mb-2">

                  <label className="form-label fw-semibold">
                    Motivo de salida
                  </label>

                  <textarea
                    className="form-control"
                    rows="4"
                    placeholder="Ej: Venta, daño, devolución, uso interno..."
                    name="motivo"
                    value={formData.motivo}
                    onChange={handleChange}
                    required
                  ></textarea>

                </div>           
                
                {/* Botón */}
                <div className="d-grid">

                  <button
                    type="submit"
                    className="btn btn-danger btn-lg fw-bold rounded-3"
                  >
                    Registrar Salida
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