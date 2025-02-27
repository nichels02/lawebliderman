import { useState } from 'react';
import styles from '../css/BarraDeOpciones.module.css';

function BarraDeOpciones() {
    const [showPanel, setShowPanel] = useState(false);

    return (
        <div className={styles.barra}>
            <button className={styles.boton}>Inicio</button>
            <button className={styles.boton}>Conocenos</button>
            <button
                className={styles.boton}
                onMouseEnter={() => setShowPanel(true)}
                onMouseLeave={() => setShowPanel(false)}
            >
                Soluciones
                <svg
                    className={styles.dropdownSymbol}
                    viewBox="0 0 24 24" // Ajustamos el viewBox para más espacio
                    width="20" // Aumentamos el ancho
                    height="20" // Aumentamos el alto
                >
                    <path
                        d="M5 9l7 7 7-7" // Líneas más largas
                        stroke="#393939" // Color del símbolo
                        strokeWidth="3" // Grosor de las líneas
                        fill="none"
                    />
                </svg>
                {showPanel && (
                    <div className={styles.panel}>
                        <button className={styles.boton}>Opción 1</button>
                        <button className={styles.boton}>Opción 2</button>
                        <button className={styles.boton}>Opción 3</button>
                    </div>
                )}
            </button>
            <button className={styles.boton}>
                Lidermania <span className={styles.highlight}>únete</span>
            </button>
        </div>
    );
}

export default BarraDeOpciones;