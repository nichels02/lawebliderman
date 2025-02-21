import styles from '../css/BarraDeOpciones2.module.css';


import Switch from './Switch.tsx';

function BarraDeOpciones2() {
    return (
        <div className={styles.barra}>
            <button className={styles.boton}>Contactanos</button>
            <button className={styles.boton}>Ov</button>
            <Switch />
        </div>
    );
}

export default BarraDeOpciones2;