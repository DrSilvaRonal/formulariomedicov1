// src/components/FormularioServicios.js
import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

const FormularioServicios = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    servicio: "Consulta Médica"
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "clientes"), formData);
      alert("¡Solicitud enviada con éxito!");
      setFormData({ nombre: "", correo: "", telefono: "", servicio: "Consulta Médica" });
    } catch (error) {
      console.error("Error al guardar datos:", error);
      alert("Hubo un error. Intente de nuevo.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6 bg-white p-8 rounded-xl shadow">
      <div>
        <label className="block font-medium text-gray-700 mb-1">Nombre completo</label>
        <input
          name="nombre"
          type="text"
          value={formData.nombre}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg"
          required
        />
      </div>
      <div>
        <label className="block font-medium text-gray-700 mb-1">Correo electrónico</label>
        <input
          name="correo"
          type="email"
          value={formData.correo}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg"
          required
        />
      </div>
      <div>
    <label className="block font-medium text-gray-700 mb-1">Número de teléfono</label>
    <input
      type="tel"
      name="telefono"
      value={formData.telefono}
      onChange={handleChange}
      className="w-full p-3 border border-gray-300 rounded-lg"
      required
      placeholder="+58 412-1234567"
    />
  </div>

      <div>
        <label className="block font-medium text-gray-700 mb-1">Servicio deseado</label>
        <select
          name="servicio"
          value={formData.servicio}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg"
        >
          <option>Consulta Médica</option>
          <option>Ecografía</option>
          <option>Laboratorio</option>
          <option>Interpretación de Laboratorios</option>
          <option>Electrocardiograma (ECG)</option>
        </select>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
      >
        Enviar solicitud
      </button>
    </form>
  );
};

export default FormularioServicios;
