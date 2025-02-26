import { useState } from 'react';
import styles from '../css/BarraDeOpciones.module.css';

function BarraDeOpciones() {
    const [showPanel, setShowPanel] = useState(false); // Estado para controlar la visibilidad del panel

    return (
        <div className={styles.barra}>
            <button className={styles.boton}>Inicio</button>
            <button className={styles.boton}>Conocenos</button>
            <button
                className={styles.boton}
                onMouseEnter={() => setShowPanel(true)} // Muestra el panel al pasar el mouse
                onMouseLeave={() => setShowPanel(false)} // Oculta el panel al quitar el mouse
            >
                Soluciones⌵
                {showPanel && ( // Renderiza el panel si showPanel es true
                    <div className={styles.panel}>
                        <button className={styles.boton}>Opción 1</button>
                        <button className={styles.boton}>Opción 2</button>
                        <button className={styles.boton}>Opción 3</button>
                    </div>
                )}
            </button>
            <button className={styles.boton}>Lidermania unete</button>
        </div>
    );
}

export default BarraDeOpciones;