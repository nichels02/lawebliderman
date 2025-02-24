import React, { useState } from 'react';
import styles from '../css/FlechaGiro.module.css';
import imagen from '../../assets/icone-de-fleche-vers-le-haut-noir.png'; // Importa la imagen

function MapaParaModificar() {
    const [isHovered, setIsHovered] = useState(false); // Estado para controlar si el mouse está sobre el contenedor
    const [rotationAngle, setRotationAngle] = useState(0); // Estado para almacenar el ángulo de rotación

    const normalizeAngle = (angle: number): number => {
        // Normaliza el ángulo para que esté en el rango de 0 a 360 grados
        return ((angle % 360) + 360) % 360;
    };

    const shortestRotation = (currentAngle: number, targetAngle: number): number => {
        // Calcula la diferencia entre los ángulos
        const diff = normalizeAngle(targetAngle - currentAngle);
        // Si la diferencia es mayor que 180, gira en la dirección opuesta
        return diff > 180 ? diff - 360 : diff;
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>): void => {
        const rect = e.currentTarget.getBoundingClientRect();
        const xPercent = ((e.clientX - rect.left) / rect.width) * 100; // Posición X en porcentaje
        const yPercent = ((e.clientY - rect.top) / rect.height) * 100; // Posición Y en porcentaje

        let targetAngle = 0;

        // Definir las áreas de los contenedores en porcentajes
        if (xPercent >= 50 && xPercent <= 100 && yPercent >= 0 && yPercent <= 33) {
            targetAngle = 45; // Rotar 45 grados
        } else if (xPercent > 50 && xPercent <= 100 && yPercent > 33 && yPercent <= 66) {
            targetAngle = 90; // Rotar 90 grados
        } else if (xPercent > 50 && xPercent <= 100 && yPercent >= 66 && yPercent <= 100) {
            targetAngle = 135; // Rotar 135 grados
        } else if (xPercent >= 0 && xPercent <= 50 && yPercent > 0 && yPercent <= 33) {
            targetAngle = -45; // Rotar -45 grados
        } else if (xPercent >= 0 && xPercent <= 50 && yPercent > 33 && yPercent <= 66) {
            targetAngle = -90; // Rotar -90 grados
        } else if (xPercent >= 0 && xPercent <= 50 && yPercent > 66 && yPercent <= 100) {
            targetAngle = -135; // Rotar -135 grados
        }

        // Calcula la rotación más corta
        const newRotationAngle = rotationAngle + shortestRotation(rotationAngle, targetAngle);
        setRotationAngle(newRotationAngle);
    };

    const handleMouseEnter = (): void => {
        setIsHovered(true); // Activar el estado cuando el mouse entra en el contenedor
    };

    const handleMouseLeave = (): void => {
        setIsHovered(false); // Desactivar el estado cuando el mouse sale del contenedor
        // Eliminamos la línea que restablece la rotación a 0
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
                        transform: isHovered ? `rotate(${rotationAngle}deg)` : `rotate(${rotationAngle}deg)`, // Mantén la rotación actual
                        transition: 'transform 0.3s ease', // Transición suave
                    }}
                />
            </div>

            {/* Contenedores alrededor de la imagen */}
            <div className={styles.contenedor1}></div>
            <div className={styles.contenedor2}></div>
            <div className={styles.contenedor3}></div>
            <div className={styles.contenedor4}></div>
            <div className={styles.contenedor5}></div>
            <div className={styles.contenedor6}></div>
        </div>
    );
}

export default MapaParaModificar;