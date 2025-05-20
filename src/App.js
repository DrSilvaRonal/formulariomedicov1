import React, { useEffect } from "react";
import { getApps } from "firebase/app";
import FormularioServicios from "./components/FormularioServicios";

function App() {
  useEffect(() => {
    const apps = getApps();
    if (apps.length > 0) {
      console.log("✅ Firebase está inicializado correctamente:", apps[0].name);
    } else {
      console.error("❌ Firebase NO está inicializado.");
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-700">Salud Integral Dr. Ronal</h1>
        <nav className="space-x-6">
          <a href="#servicios" className="text-gray-700 hover:text-blue-600 font-medium">Servicios</a>
          <a href="#contacto" className="text-gray-700 hover:text-blue-600 font-medium">Contacto</a>
        </nav>
      </header>

      {/* Hero / Captación */}
      <section className="py-20 px-8 text-center bg-blue-100">
        <h2 className="text-4xl font-bold mb-4 text-blue-800">Tu salud, nuestra prioridad</h2>
        <p className="text-lg mb-6 text-gray-700">
          Atención primaria con calidez humana: consultas, ecografías, laboratorios e interpretación médica experta.
        </p>
        <a href="#formulario" className="bg-blue-600 text-white py-3 px-6 rounded-full hover:bg-blue-700 transition">
          Reserva tu cita
        </a>
      </section>

      {/* Servicios */}
      <section id="servicios" className="py-16 px-8">
        <h3 className="text-3xl font-bold text-center text-blue-700 mb-10">Nuestros Servicios</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            ["Consulta Médica", "Evaluación integral y seguimiento personalizado."],
            ["Ecografía", "Imágenes diagnósticas al momento, sin esperas."],
            ["Laboratorios", "Toma de muestras y resultados en corto tiempo."],
            ["Interpretación de Laboratorios", "Análisis detallado de tus exámenes con orientación clínica."],
            ["Electrocardiograma (ECG)", "Registro y análisis de tu ritmo cardíaco."]
          ].map(([titulo, descripcion], index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <h4 className="text-xl font-semibold mb-2 text-blue-800">{titulo}</h4>
              <p className="text-gray-600">{descripcion}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Formulario de contacto */}
      <FormularioServicios />

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500 text-sm">
        © 2025 Dr. Ronal | Atención Primaria Integral
      </footer>
    </div>
  );
}

export default App;