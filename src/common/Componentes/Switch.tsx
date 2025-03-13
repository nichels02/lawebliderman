import styles from '../css/Switch.module.css';
import { useLanguage } from './Sistemas/LanguageContext'; // Importa el hook useLanguage

function Switch() {
    const { toggleLanguage } = useLanguage(); // Obtiene la función toggleLanguage del contexto

    // Manejador de eventos para el cambio del switch
    const handleToggle = () => {
        toggleLanguage(); // Cambia el idioma
    };

    return (
        <div className={styles.container}>
            <input
                type="checkbox"
                id="switch"
                className={styles.checkbox}
                onChange={handleToggle} // Llama a handleToggle cuando el switch cambia
            />
            <label
                htmlFor="switch"
                className={styles.switchLabel}
            >
                Toggle
            </label>
        </div>
    );
}

export default Switch;