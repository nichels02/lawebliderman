import styles from '../css/BarraDeOpcionesRedes.module.css';

function BarraDeOpcionesRedes() {
    return (
        <div className={styles.barra}>
            <div className={styles.icono}>📘</div> {/* Ícono de ejemplo */}
            <div className={styles.icono}>📷</div> {/* Ícono de ejemplo */}
            <div className={styles.icono}>🔔</div> {/* Ícono de ejemplo */}
            <div className={styles.icono}>✉️</div> {/* Ícono de ejemplo */}
        </div>
    );
}

export default BarraDeOpcionesRedes;