import React, { useState } from 'react';
import styles from '../css/MapaParaModificar.module.css';
import imagen from '../../assets/3.png'; // Importa la imagen

function MapaParaModificar() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false); // Estado para controlar si el mouse está sobre el contenedor

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left; // Posición X relativa al contenedor
        const y = e.clientY - rect.top; // Posición Y relativa al contenedor

        setMousePosition({ x, y });
    };

    const handleMouseEnter = () => {
        setIsHovered(true); // Activar el estado cuando el mouse entra en el contenedor
    };

    const handleMouseLeave = () => {
        setIsHovered(false); // Desactivar el estado cuando el mouse sale del contenedor
    };

    // Calcular la rotación de la imagen basada en la posición del mouse
    const calcularRotacion = () => {
        const rect = document.querySelector(`.${styles.contenedorPadre}`)?.getBoundingClientRect();
        if (!rect) return 0;

        const xPercent = (mousePosition.x / rect.width) * 100;
        const yPercent = (mousePosition.y / rect.height) * 100;

        // Definir la rotación basada en la posición del mouse
        if (xPercent >= 0 && xPercent <= 50 && yPercent >= 0 && yPercent <= 50) {
            return 45; // Rotar 45 grados
        } else if (xPercent > 50 && xPercent <= 100 && yPercent > 50 && yPercent <= 100) {
            return -45; // Rotar -45 grados
        } else if (xPercent > 50 && xPercent <= 100 && yPercent >= 0 && yPercent <= 50) {
            return 90; // Rotar 90 grados
        } else if (xPercent >= 0 && xPercent <= 50 && yPercent > 50 && yPercent <= 100) {
            return -90; // Rotar -90 grados
        } else {
            return 0; // Sin rotación
        }
    };

    return (
        <div
            className={styles.contenedorPadre}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className={styles.contenedorImagen}>
                {/* Usa la imagen importada y aplícale la rotación */}
                <img
                    src={imagen}
                    alt="Descripción de la imagen"
                    style={{
                        transform: isHovered ? `rotate(${calcularRotacion()}deg)` : 'rotate(0deg)',
                        transition: 'transform 0.3s ease', // Transición suave
                    }}
                />
            </div>
        </div>
    );
}

export default MapaParaModificar;