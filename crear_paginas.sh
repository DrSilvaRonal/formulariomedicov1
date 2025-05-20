#!/bin/bash

# Ruta base donde se creará la carpeta pages
BASE_DIR="src/pages"

# Crear carpeta pages si no existe
mkdir -p $BASE_DIR

# Array con nombres de archivos a crear
archivos=(
  "ConsultaMedica.jsx"
  "Ecografia.jsx"
  "RiesgoCardiovascular.jsx"
  "Laboratorio.jsx"
  "InterpretacionLaboratorio.jsx"
  "Electrocardiograma.jsx"
)

# Contenido básico para cada archivo (componente funcional React)
read -r -d '' contenido_base << EOM
import React from "react";

export default function COMPONENT_NAME() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">COMPONENT_TITLE</h1>
      <p>Contenido específico de la página COMPONENT_TITLE.</p>
    </div>
  );
}
EOM

# Crear cada archivo con contenido personalizado
for archivo in "\${archivos[@]}"; do
  componente="\${archivo%.jsx}"
  contenido="\${contenido_base//COMPONENT_NAME/\$componente}"
  contenido="\${contenido//COMPONENT_TITLE/\$componente}"
  echo "\$contenido" > "\$BASE_DIR/\$archivo"
  echo "Creado: \$BASE_DIR/\$archivo"
done

echo "¡Archivos creados correctamente!"
