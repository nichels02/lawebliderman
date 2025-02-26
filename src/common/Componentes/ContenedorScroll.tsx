import { useEffect, useState, useRef } from 'react';
import styles from '../css/ContenedorScroll.module.css';

function ContenedorScroll() {
    const [scrollPercentage, setScrollPercentage] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null); // Referencia al contenedor principal

    useEffect(() => {
        const handleScroll = () => {
            if (containerRef.current) {
                const container = containerRef.current;
                const scrollY = window.scrollY; // Scroll global de la página
                const containerTop = container.offsetTop; // Posición superior del contenedor
                const containerHeight = container.offsetHeight; // Altura del contenedor

                // Calcula el scroll relativo al contenedor
                const relativeScroll = scrollY - containerTop;
                const percentage = (relativeScroll / containerHeight) * 100;

                // Limita el porcentaje entre 0% y 100%
                setScrollPercentage(Math.max(0, Math.min(100, percentage)));
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Estilo dinámico del contenedor interno
    const internalContainerStyle: React.CSSProperties = {
        transform: `translateX(-${scrollPercentage}%)`, // Mueve el contenedor interno horizontalmente
    };

    // Estilo 1 del contenedor pequeño (posición 1)
    const smallContainerStyle1: React.CSSProperties = {
        top: '10%', // Posición vertical (porcentaje)
        left: '5%', // Posición horizontal (porcentaje)
    };

    // Estilo 2 del contenedor pequeño (posición 2)
    const smallContainerStyle2: React.CSSProperties = {
        top: '30%', // Posición vertical (porcentaje)
        left: '15%', // Posición horizontal (porcentaje)
    };

    return (
        <div ref={containerRef} className={styles.contenedorScroll}>
            {/* Contenedor interno (más grande que la ventana) */}
            <div
                className={styles.contenedorInterno}
                style={internalContainerStyle}
            >
                {/* Contenedor pequeño 1 */}
                <div
                    className={styles.contenedorPequeno}
                    style={smallContainerStyle1}
                >
                    <h3>Contenedor 1</h3>
                    <img
                        src="https://via.placeholder.com/150"
                        alt="Imagen 1"
                    />
                    <p>Este es el contenido del contenedor 1.</p>
                </div>

                {/* Contenedor pequeño 2 */}
                <div
                    className={styles.contenedorPequeno}
                    style={smallContainerStyle2}
                >
                    <h3>Contenedor 2</h3>
                    <img
                        src="https://via.placeholder.com/150"
                        alt="Imagen 2"
                    />
                    <p>Este es el contenido del contenedor 2.</p>
                </div>
            </div>
        </div>
    );
}

export default ContenedorScroll;