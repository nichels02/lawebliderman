import React, { useState } from 'react';
import styles from '../css/FlechaGiro.module.css';
import imagen from '../../assets/icone-de-fleche-vers-le-haut-noir.png'; // Importa la imagen

function MapaParaModificar() {
    const [isHovered, setIsHovered] = useState(false); // Estado para controlar si el mouse está sobre el contenedor
    const [rotationAngle, setRotationAngle] = useState(0); // Estado para almacenar el ángulo de rotación

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const xPercent = ((e.clientX - rect.left) / rect.width) * 100; // Posición X en porcentaje
        const yPercent = ((e.clientY - rect.top) / rect.height) * 100; // Posición Y en porcentaje

        // Definir las áreas de los contenedores en porcentajes
        if (xPercent >= 50 && xPercent <= 100 && yPercent >= 0 && yPercent <= 33) {
            setRotationAngle(45); // Rotar 45 grados
        } else if (xPercent > 50 && xPercent <= 100 && yPercent > 33 && yPercent <= 66) {
            setRotationAngle(90); // Rotar -45 grados
        } else if (xPercent > 50 && xPercent <= 100 && yPercent >= 66 && yPercent <= 100) {
            setRotationAngle(135); // Rotar 135 grados
        } else if (xPercent >= 0 && xPercent <= 50 && yPercent > 0 && yPercent <= 33) {
            setRotationAngle(-45); // Rotar -45 grados
        } else if (xPercent >= 0 && xPercent <= 50 && yPercent > 33 && yPercent <= 66) {
            setRotationAngle(-90); // Rotar -90 grados
        } else if (xPercent >= 0 && xPercent <= 50 && yPercent > 66 && yPercent <= 100) {
            setRotationAngle(-135); // Rotar -135 grados
        } else {
            setRotationAngle(0); // Sin rotación
        }
    };

    const handleMouseEnter = () => {
        setIsHovered(true); // Activar el estado cuando el mouse entra en el contenedor
    };

    const handleMouseLeave = () => {
        setIsHovered(false); // Desactivar el estado cuando el mouse sale del contenedor
        setRotationAngle(0); // Restablecer la rotación
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
                        transform: isHovered ? `rotate(${rotationAngle}deg)` : 'rotate(0deg)',
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