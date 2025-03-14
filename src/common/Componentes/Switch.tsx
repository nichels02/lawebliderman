import { useEffect, useState } from 'react';
import styles from '../css/Switch.module.css';
import { toggleDarkMode, isDarkModeEnabled } from './Sistemas/toggleDarkMode.ts';

function Switch() {
    // Estado para el switch (activado o desactivado)
    const [isChecked, setIsChecked] = useState(false);

    // Al montar el componente, sincronizar el estado con localStorage
    useEffect(() => {
        setIsChecked(isDarkModeEnabled()); // Verifica si el dark mode está activado
    }, []);

    const handleToggle = () => {
        toggleDarkMode(); // Alterna el dark mode
        setIsChecked(prev => !prev); // Cambia el estado del switch
    };

    return (
        <div className={styles.container}>
            <input
                type="checkbox"
                id="switch"
                className={styles.checkbox}
                checked={isChecked} // Asegurar que refleje el estado correcto
                onChange={handleToggle} // Llama a handleToggle cuando el switch cambia
            />
            <label htmlFor="switch" className={styles.switchLabel}>
                Toggle
            </label>
        </div>
    );
}

export default Switch;
