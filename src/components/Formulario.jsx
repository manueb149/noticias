import React from "react";
import styles from "./Formulario.module.css";
import useSelect from "../hooks/useSelect";

const Formulario = ({ setCategoria }) => {
  // Opciones para el useSelect
  const OPCIONES = [
    { value: "general", label: "General" },
    { value: "entertainment", label: "Entretenimiento" },
    { value: "health", label: "Salud" },
    { value: "science", label: "Ciencia" },
    { value: "sports", label: "Deporte" },
    { value: "technology", label: "Tecnología" },
    { value: "business", label: "Negocios" },
  ];

  // Custom hook
  const [categoria, SelectNoticias] = useSelect("general", OPCIONES);

  // Handle submit, pasar categoria hacia App.js
  const handleSubmit = (e) => {
    e.preventDefault();
    setCategoria(categoria);
  };

  return (
    <div className={`${styles.buscador} row`}>
      <div className="col s12 m8 offset-m2">
        <form onSubmit={handleSubmit}>
          <h2 className={styles.heading}>Encuentra noticias por categoría</h2>

          <SelectNoticias />

          <div className="input-field col s12">
            <button
              type="submit"
              className={`${styles["btn-block"]} btn-large amber darken-2`}
            >
              Buscar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Formulario;
