import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/BarraDeOpciones.module.css';

function BarraDeOpciones() {
    const [showPanel, setShowPanel] = useState(false);

    return (
        <div className={styles.barra}>
            <Link to="/" className={styles.boton}>Inicio</Link>
            <Link to="/Conocenos" className={styles.boton}>Conócenos</Link>

            {/* Contenedor para manejar el hover y clic del menú */}
            <div
                className={styles.dropdown}
                onMouseEnter={() => setShowPanel(true)}
                onMouseLeave={() => setShowPanel(false)}
                onClick={() => setShowPanel(!showPanel)} // Mantiene abierto al hacer clic
            >
                <button className={styles.boton}>
                    Soluciones
                    <svg className={styles.dropdownSymbol} viewBox="0 0 24 24" width="20" height="20">
                        <path d="M5 9l7 7 7-7" stroke="#393939" strokeWidth="3" fill="none" />
                    </svg>
                </button>

                {showPanel && (
                    <div className={styles.panel}>
                        <Link to="/Seguridad" className={styles.boton}>Seguridad</Link>
                        <Link to="/Servicio" className={styles.boton}>Servicio</Link>
                        <Link to="/Tecnologia" className={styles.boton}>Tecnología</Link>
                    </div>
                )}
            </div>

            <Link to="/Lidermania" className={styles.boton}>
                Lidermania <span className={styles.highlight}>únete</span>
            </Link>
        </div>
    );
}

export default BarraDeOpciones;
