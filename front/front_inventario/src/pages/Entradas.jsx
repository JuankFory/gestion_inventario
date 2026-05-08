import Layout from "../Layout.jsx"
import { useState, useEffect } from "react";
import axios from "axios";

export default function MovimientoInventario() {

  const [formData, setFormData] = useState({
    id_producto: "",
    id_usuario: "",
    tipo_movimiento: "ENTRADA",
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
      const response = await axios.get("http://localhost:3000/api/productos");
      setProductos(response.data);
    } catch (error) {
      console.error("Error al obtener productos", error);
    }
  };

  const obtenerUsuarios = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/usuarios");
      setUsuarios(response.data);
    } catch (error) {
      console.error("Error al obtener usuarios", error);
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
        "http://localhost:3000/api/movimientos",
        formData
      );

      alert("Movimiento registrado correctamente");

      setFormData({
        id_producto: "",
        id_usuario: "",
        tipo_movimiento: "ENTRADA",
        cantidad: "",
        motivo: ""
      });

    } catch (error) {
      console.error("Error al registrar movimiento", error);
    }
  };

  return (
    <div className="container mt-2">

      <div className="row justify-content-center">

        <div className="col-lg-8">

          <div
            className="card border-0 shadow-lg rounded-4"
          >

            <div
              className={`card-header text-white rounded-top-4 ${
                formData.tipo_movimiento === "ENTRADA"
                  ? "bg-success"
                  : formData.tipo_movimiento === "SALIDA"
                  ? "bg-danger"
                  : "bg-warning"
              }`}
            >
              <h6 className="mb-0 fw-bold mt--1">
                Gestión de Movimiento de Inventario
              </h6>
            </div>

            <div className="card-body p-1">

              <form onSubmit={handleSubmit}>

                {/* Producto */}
                <div className="mb-2">
                  <label className="form-label fw-semibold">
                    Producto
                  </label>

                  <select
                    className="form-select form-select-md"
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
                    Usuario Responsable
                  </label>

                  <select
                    className="form-select form-select-md"
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

                {/* Tipo Movimiento */}
                <div className="mb-2">
                  <label className="form-label fw-semibold">
                    Tipo de Movimiento
                  </label>

                  <select
                    className="form-select form-select-md"
                    name="tipo_movimiento"
                    value={formData.tipo_movimiento}
                    onChange={handleChange}
                    required
                  >
                    <option value="ENTRADA">
                      ENTRADA
                    </option>

                    <option value="SALIDA">
                      SALIDA
                    </option>

                    <option value="AJUSTE">
                      AJUSTE
                    </option>
                  </select>
                </div>

                {/* Cantidad */}
                <div className="mb-2">
                  <label className="form-label fw-semibold">
                    Cantidad
                  </label>

                  <input
                    type="number"
                    className="form-control form-control-md"
                    placeholder="Ingrese la cantidad"
                    name="cantidad"
                    value={formData.cantidad}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Motivo */}
                <div className="mb-2">
                  <label className="form-label fw-semibold">
                    Motivo
                  </label>

                  <textarea
                    className="form-control form-control-md"
                    rows="4"
                    placeholder="Describa el motivo del movimiento"
                    name="motivo"
                    value={formData.motivo}
                    onChange={handleChange}
                  ></textarea>
                </div>

                {/* Botón */}
                <div className="d-grid">

                  <button
                    type="submit"
                    className={`btn btn-lg fw-bold text-white ${
                      formData.tipo_movimiento === "ENTRADA"
                        ? "btn-success"
                        : formData.tipo_movimiento === "SALIDA"
                        ? "btn-danger"
                        : "btn-warning"
                    }`}
                  >
                    Registrar Movimiento
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
