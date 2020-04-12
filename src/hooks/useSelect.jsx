import React, { useState } from "react";

const useSelect = (stateInicial, opciones) => {
  // State para el custom hoot
  const [state, setState] = useState(stateInicial);

  // SFC para seleccion de categoría
  const SelectNoticias = () => (
    <select
      className="browser-default"
      value={state}
      onChange={(e) => setState(e.target.value)}
    >
      {opciones.map((opcion) => (
        <option key={opcion.value} value={opcion.value}>
          {opcion.label}
        </option>
      ))}
    </select>
  );

  // Retorno del state actual y el SFC de categorías
  return [state, SelectNoticias];
};

export default useSelect;
