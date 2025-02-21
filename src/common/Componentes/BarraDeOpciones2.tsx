import styles from '../css/BarraDeOpciones2.module.css';

function BarraDeOpciones2() {
    return (
        <div className={styles.barra}>
            <button className={styles.boton}>Contactanos</button>
            <button className={styles.boton}>Ov</button>
            <button className={styles.boton}>boton</button>
        </div>
    );
}

export default BarraDeOpciones2;