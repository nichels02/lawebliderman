import styles from '../css/TextoGeneral.module.css';

function TextoGeneral() {
    return (
        <div className={styles.textContainer}>
            <p className={styles.texto}>
                Este es un <span className={styles.resaltado}>texto destacado</span> dentro de un párrafo general.
            </p>
        </div>
    );
}

export default TextoGeneral;