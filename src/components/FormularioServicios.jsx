import React, { useState } from "react";

const FormularioServicios = () => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [servicio, setServicio] = useState("Consulta Médica");
  const [errores, setErrores] = useState({});

  const validar = () => {
    const nuevosErrores = {};
    if (!nombre.trim()) nuevosErrores.nombre = "El nombre es obligatorio.";
    if (!correo.trim()) {
      nuevosErrores.correo = "El correo es obligatorio.";
    } else if (!/\S+@\S+\.\S+/.test(correo)) {
      nuevosErrores.correo = "El formato del correo no es válido.";
    }
    if (!servicio) nuevosErrores.servicio = "Seleccione un servicio.";

    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (validar()) {
      console.log({ nombre, correo, servicio });
      alert("Formulario enviado con éxito.");
      setNombre("");
      setCorreo("");
      setServicio("Consulta Médica");
    }
  };

  return (
    <section id="formulario" className="bg-blue-50 py-16 px-8">
      <h3 className="text-3xl font-bold text-center text-blue-700 mb-10">
        Agenda tu Servicio
      </h3>
      <form
        onSubmit={manejarEnvio}
        className="max-w-xl mx-auto space-y-6 bg-white p-8 rounded-xl shadow"
      >
        <div>
          <label className="block font-medium text-gray-700 mb-1">
            Nombre completo
          </label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          />
          {errores.nombre && (
            <p className="text-red-500 text-sm mt-1">{errores.nombre}</p>
          )}
        </div>

        <div>
          <label className="block font-medium text-gray-700 mb-1">
            Correo electrónico
          </label>
          <input
            type="email"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          />
          {errores.correo && (
            <p className="text-red-500 text-sm mt-1">{errores.correo}</p>
          )}
        </div>

        <div>
          <label className="block font-medium text-gray-700 mb-1">
            Servicio deseado
          </label>
          <select
            value={servicio}
            onChange={(e) => setServicio(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg"
          >
            <option>Consulta Médica</option>
            <option>Ecografía</option>
            <option>Laboratorio</option>
            <option>Interpretación de Laboratorios</option>
            <option>Electrocardiograma (ECG)</option>
          </select>
          {errores.servicio && (
            <p className="text-red-500 text-sm mt-1">{errores.servicio}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Enviar solicitud
        </button>
      </form>
    </section>
  );
};

export default FormularioServicios;
