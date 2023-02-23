import React from "react";
import styles from "./Formulario.module.css";

function Formulario() {
  return (
    <form>
      <fieldset>
        <label htmlFor="">Monto</label>
        <input type="number" />
      </fieldset>
      <fieldset>
        <label htmlFor="">Plazo</label>
        <input type="number" />
      </fieldset>
      <fieldset>
        <label htmlFor="">Interés</label>
        <input type="number" />
      </fieldset>
      <fieldset>
        <button className={styles.miboton}>Calcular</button>
      </fieldset>
    </form>
  );
}

export default Formulario;
