import { useState } from 'react';
import styles from '../css/BarraDeOpciones2.module.css';
import Switch from './Switch.tsx';

function BarraDeOpciones2() {
    const [showPanel, setShowPanel] = useState(false);

    return (
        <div className={styles.barra}>
            <button className={styles.boton}>Contactanos</button>
            <button
                className={styles.boton}
                onMouseEnter={() => setShowPanel(true)}
                onMouseLeave={() => setShowPanel(false)}
            >
                {/* SVG del globo terráqueo (escalado) */}
                <svg
                    className={styles.globeIcon}
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                >
                    {/* Círculo que representa el globo */}
                    <circle cx="12" cy="12" r="10" stroke="#393939" strokeWidth="2" fill="none" />
                    {/* Líneas horizontales */}
                    <line x1="2" y1="9" x2="22" y2="9" stroke="#393939" strokeWidth="2" />
                    <line x1="2" y1="15" x2="22" y2="15" stroke="#393939" strokeWidth="2" />
                    {/* Líneas verticales curvas */}
                    <path
                        d="M12,2 C17,6 17,18 12,22"
                        stroke="#393939"
                        strokeWidth="2"
                        fill="none"
                    />
                    <path
                        d="M12,2 C7,6 7,18 12,22"
                        stroke="#393939"
                        strokeWidth="2"
                        fill="none"
                    />
                </svg>
                {/* SVG de la flecha (dropdown) */}
                <svg
                    className={styles.dropdownSymbol}
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                >
                    <path
                        d="M5 9l7 7 7-7"
                        stroke="#393939"
                        strokeWidth="3"
                        fill="none"
                    />
                </svg>
                {/* Panel desplegable */}
                {showPanel && (
                    <div className={styles.panel}>
                        <button className={styles.boton}>Opción 1</button>
                        <button className={styles.boton}>Opción 2</button>
                        <button className={styles.boton}>Opción 3</button>
                    </div>
                )}
            </button>
            <Switch />
        </div>
    );
}

export default BarraDeOpciones2;