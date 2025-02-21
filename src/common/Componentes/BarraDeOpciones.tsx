import styles from '../css/BarraDeOpciones.module.css';

function BarraDeOpciones() {
    return (
        <div className={styles.barra}>
            <button className={styles.boton}>Inicio</button>
            <button className={styles.boton}>Conocenos</button>
            <button className={styles.boton}>Soluciones</button>
            <button className={styles.boton}>Lidermania unete</button>
        </div>
    );
}

export default BarraDeOpciones;