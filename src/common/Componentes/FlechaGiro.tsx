import React, { useState } from 'react';
import styles from '../css/FlechaGiro.module.css';
import imagen from '../../assets/icone-de-fleche-vers-le-haut-noir.png';

// Lista de títulos y textos personalizados
const contenedores = [
    { numero: 1, texto: "Conocimiento y necesidades del giro de negocio." },
    { numero: 2, texto: "Visión integral de la seguridad." },
    { numero: 3, texto: "Inducción agente-puesto." },
    { numero: 4, texto: "Integracion de la tecnología." },
    { numero: 5, texto: "Comunicación constante con el cliente." },
    { numero: 6, texto: "Presentación de KPIs." }
];

function MapaParaModificar() {
    const [rotationAngle, setRotationAngle] = useState(0);

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

        if (xPercent >= 50 && yPercent <= 33) {
            targetAngle = 45;
        } else if (xPercent > 50 && yPercent > 33 && yPercent <= 66) {
            targetAngle = 90;
        } else if (xPercent > 50 && yPercent > 66) {
            targetAngle = 135;
        } else if (xPercent < 50 && yPercent <= 33) {
            targetAngle = -45;
        } else if (xPercent < 50 && yPercent > 33 && yPercent <= 66) {
            targetAngle = -90;
        } else if (xPercent < 50 && yPercent > 66) {
            targetAngle = -135;
        }

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
                <div className={styles.textoCentro}>Texto Estático</div> {/* Aquí va el texto estático en el centro */}
            </div>

            {contenedores.map((item, i) => (
                <div key={i} className={`${styles[`contenedor${i + 1}`]} ${styles.contenedor}`}>
                    <div className={styles.numero}>{item.numero}</div>
                    <div className={styles.texto}>{item.texto}</div>
                </div>
            ))}
        </div>
    );
}

export default MapaParaModificar;
