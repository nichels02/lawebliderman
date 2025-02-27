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
                O
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