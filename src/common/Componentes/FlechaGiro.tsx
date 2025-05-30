import React, { useState } from 'react';
import { useContent } from './Sistemas/useContent.tsx'; // Ajusta la ruta según corresponda
import { useLanguage } from './Sistemas/LanguageContext.tsx'; // Ajusta la ruta según corresponda
import styles from '../css/FlechaGiro.module.css';

function FlechaGiro() {
    const content = useContent();
    const { language } = useLanguage();
    const [rotationAngle, setRotationAngle] = useState(0);
    const [activeContainer, setActiveContainer] = useState<number | null>(null);

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

    const normalizeAngle = (angle: number): number => ((angle % 360) + 360) % 360;

    const shortestRotation = (currentAngle: number, targetAngle: number): number => {
        const diff = normalizeAngle(targetAngle - currentAngle);
        return diff > 180 ? diff - 360 : diff;
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>): void => {
        const rect = e.currentTarget.getBoundingClientRect();
        const xPercent = ((e.clientX - rect.left) / rect.width) * 100;
        const yPercent = ((e.clientY - rect.top) / rect.height) * 100;

        let targetAngle = 0;
        let containerIndex: number | null = null;

        const isMobile = window.innerWidth <= 768;

        if (isMobile) {
            // 🟢 Lógica para pantallas pequeñas (por ejemplo, 2 filas de 3 columnas)
            if (yPercent <= 50) {
                // fila superior
                if (xPercent <= 30) {
                    targetAngle = -45;
                    containerIndex = 0; // Contenedor 1 (izquierda arriba)
                } else if (xPercent <= 69) {
                    targetAngle = 0;
                    containerIndex = 1; // Contenedor 2 (centro arriba)
                } else {
                    targetAngle = 45;
                    containerIndex = 2; // Contenedor 3 (derecha arriba)
                }
            } else {
                // fila inferior
                if (xPercent <= 30) {
                    targetAngle = -135;
                    containerIndex = 5;
                     // Contenedor 4 (izquierda abajo)
                } else if (xPercent <= 69) {
                    targetAngle = 180;
                    containerIndex = 4; // Contenedor 6 (centro abajo) <-- fíjate que aquí va el 6 (índice 5)
                } else {
                    targetAngle = 135;
                    containerIndex = 3;// Contenedor 5 (derecha abajo)
                }
            }
        } else {
            // 🖥️ Lógica para pantallas grandes (3 filas, 2 columnas)
            if (xPercent >= 50 && yPercent <= 33) {
                targetAngle = 45;
                containerIndex = 0; // Contenedor 1
            } else if (xPercent > 50 && yPercent > 33 && yPercent <= 66) {
                targetAngle = 90;
                containerIndex = 1; // Contenedor 2
            } else if (xPercent > 50 && yPercent > 66) {
                targetAngle = 135;
                containerIndex = 2; // Contenedor 3
            } else if (xPercent < 50 && yPercent <= 33) {
                targetAngle = -45;
                containerIndex = 3; // Contenedor 4
            } else if (xPercent < 50 && yPercent > 33 && yPercent <= 66) {
                targetAngle = -90;
                containerIndex = 4; // Contenedor 5
            } else if (xPercent < 50 && yPercent > 66) {
                targetAngle = -135;
                containerIndex = 5; // Contenedor 6
            }
        }

        const newRotationAngle = rotationAngle + shortestRotation(rotationAngle, targetAngle);
        setRotationAngle(newRotationAngle);

        if (containerIndex !== null) {
            setActiveContainer(containerIndex);
        }
    };

    return (
        <div className={styles.contenedorPadre} onMouseMove={handleMouseMove}>
            <div className={styles.contenedorImagen}>
                <img
                    src={content.Seguridad.FlechaGiro.Contenido.ImagenFlecha}
                    alt="Flecha"
                    style={{ transform: `rotate(${rotationAngle}deg)`, transition: 'transform 0.3s ease' }}
                />
                <div className={styles.textoCentro}>{data.TituloCentral}</div>
            </div>

            {contenedores.map((item, i) => (
                <div
                    key={i}
                    className={`${styles[`contenedor${i + 1}`]} ${styles.contenedor} ${activeContainer === i ? styles.activo : ''}`}
                >
                    <div className={`${styles.numero} ${activeContainer === i ? styles.numeroActivo : ''}`}>{item.numero}</div>
                    <div className={styles.texto}>{item.texto}</div>
                </div>
            ))}
        </div>
    );
}

export default FlechaGiro;
