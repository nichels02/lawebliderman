import React, { useState } from 'react';
import { useContent } from './Sistemas/useContent.tsx'; // Ajusta la ruta según corresponda
import { useLanguage } from './Sistemas/LanguageContext.tsx'; // Ajusta la ruta según corresponda
import styles from '../css/FlechaGiro.module.css';
import imagen from '../../assets/icone-de-fleche-vers-le-haut-noir.png';

function FlechaGiro() {
    const content = useContent();
    const { language } = useLanguage();
    const [rotationAngle, setRotationAngle] = useState(0);

    // 📌 Obtiene los datos del JSON según el idioma actual
    const data = content?.Seguridad?.FlechaGiro?.[language];

    if (!data) {
        return <div>Cargando...</div>;
    }

    const contenedores = [
        { numero: data.Contenedor1.Titulo, texto: data.Contenedor1.Texto },
        { numero: data.Contenedor2.Titulo, texto: data.Contenedor2.Texto },
        { numero: data.Contenedor3.Titulo, texto: data.Contenedor3.Texto },
        { numero: data.Contenedor4.Titulo, texto: data.Contenedor4.Texto },
        { numero: data.Contenedor5.Titulo, texto: data.Contenedor5.Texto },
        { numero: data.Contenedor6.Titulo, texto: data.Contenedor6.Texto },
    ];

    // 📌 Normaliza el ángulo a un rango de 0-360°
    const normalizeAngle = (angle: number): number => ((angle % 360) + 360) % 360;

    // 📌 Calcula la rotación más corta para llegar al nuevo ángulo
    const shortestRotation = (currentAngle: number, targetAngle: number): number => {
        const diff = normalizeAngle(targetAngle - currentAngle);
        return diff > 180 ? diff - 360 : diff;
    };

    // 📌 Maneja la rotación basada en la posición del mouse
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>): void => {
        const rect = e.currentTarget.getBoundingClientRect();
        const xPercent = ((e.clientX - rect.left) / rect.width) * 100;
        const yPercent = ((e.clientY - rect.top) / rect.height) * 100;

        let targetAngle = 0;
        if (xPercent >= 50 && yPercent <= 33) targetAngle = 45;
        else if (xPercent > 50 && yPercent > 33 && yPercent <= 66) targetAngle = 90;
        else if (xPercent > 50 && yPercent > 66) targetAngle = 135;
        else if (xPercent < 50 && yPercent <= 33) targetAngle = -45;
        else if (xPercent < 50 && yPercent > 33 && yPercent <= 66) targetAngle = -90;
        else if (xPercent < 50 && yPercent > 66) targetAngle = -135;

        const newRotationAngle = rotationAngle + shortestRotation(rotationAngle, targetAngle);
        setRotationAngle(newRotationAngle);
    };

    return (
        <div className={styles.contenedorPadre} onMouseMove={handleMouseMove}>
            <div className={styles.contenedorImagen}>
                <img
                    src={imagen}
                    alt="Flecha"
                    style={{ transform: `rotate(${rotationAngle}deg)`, transition: 'transform 0.3s ease' }}
                />
                <div className={styles.textoCentro}>{data.TituloCentral}</div> {/* Texto del centro dinámico */}
            </div>

            {contenedores.map((item, i) => (
                <div key={i} className={`${styles[`contenedor${i + 1}`]} ${styles.contenedor}`}>
                    <div className={styles.numero}>{item.numero}</div> {/* Número como título con estilo */}
                    <div className={styles.texto}>{item.texto}</div> {/* Texto dinámico */}
                </div>
            ))}
        </div>
    );
}

export default FlechaGiro;
