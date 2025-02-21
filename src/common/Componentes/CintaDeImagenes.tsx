import { useEffect, useRef, useState } from 'react';
import styles from '../css/CintaDeImagenes.module.css'; // Asegúrate de que la ruta es correcta

function CintaDeImagenes({ separacion = 26 }: { separacion?: number }) {
    const cintaRef = useRef<HTMLDivElement>(null); // Referencia al contenedor de la cinta con tipado
    const cintaContainerRef = useRef<HTMLDivElement>(null); // Referencia al contenedor principal
    const [containerWidth, setContainerWidth] = useState(0); // Estado para almacenar el ancho del contenedor

    const images = [
        'https://cdn.pixabay.com/photo/2016/07/23/13/18/pokemon-1536849_640.png',
        'https://cdn.pixabay.com/photo/2016/07/23/13/18/pokemon-1536849_640.png',
        'https://cdn.pixabay.com/photo/2016/07/23/13/18/pokemon-1536849_640.png',
        'https://cdn.pixabay.com/photo/2016/07/23/13/18/pokemon-1536849_640.png',
        'https://cdn.pixabay.com/photo/2016/07/23/13/18/pokemon-1536849_640.png',
        'https://cdn.pixabay.com/photo/2016/07/23/13/18/pokemon-1536849_640.png',
        'https://cdn.pixabay.com/photo/2016/07/23/13/18/pokemon-1536849_640.png',
        'https://cdn.pixabay.com/photo/2016/07/23/13/18/pokemon-1536849_640.png',
        'https://cdn.pixabay.com/photo/2016/07/23/13/18/pokemon-1536849_640.png',
        'https://cdn.pixabay.com/photo/2016/07/23/13/18/pokemon-1536849_640.png',
        'https://cdn.pixabay.com/photo/2016/07/23/13/18/pokemon-1536849_640.png',
        'https://cdn.pixabay.com/photo/2016/07/23/13/18/pokemon-1536849_640.png',
        'https://cdn.pixabay.com/photo/2016/07/23/13/18/pokemon-1536849_640.png',
    ];

    const posicionTepeoPorcentaje = -10; // 10% del ancho del contenedor (izquierda)
    const nuevaPosicionPorcentaje = 110; // 110% del ancho del contenedor (derecha)

    useEffect(() => {
        // Actualiza el ancho del contenedor cuando el componente se monta o se redimensiona
        const updateContainerWidth = () => {
            if (cintaContainerRef.current) {
                setContainerWidth(cintaContainerRef.current.offsetWidth);
            }
        };

        updateContainerWidth(); // Actualiza el ancho inicial
        window.addEventListener('resize', updateContainerWidth); // Escucha cambios de tamaño

        return () => {
            window.removeEventListener('resize', updateContainerWidth); // Limpia el listener
        };
    }, []);

    useEffect(() => {
        const cinta = cintaRef.current;
        if (!cinta || containerWidth === 0) return; // Verifica que `cinta` y `containerWidth` sean válidos

        const imagesElements = cinta.querySelectorAll<HTMLDivElement>(`.${styles.imagenContainer}`);
        let animationFrame: number | undefined; // Tipo explícito para `animationFrame`

        // Convierte los porcentajes a píxeles
        const posicionTepeo = (posicionTepeoPorcentaje / 100) * containerWidth;
        const nuevaPosicion = (nuevaPosicionPorcentaje / 100) * containerWidth;

        const moveImages = () => {
            imagesElements.forEach((img: HTMLDivElement) => {
                const currentPosition = parseFloat(img.style.left || '0');
                img.style.left = `${currentPosition - 1}px`; // Ajusta la velocidad aquí

                // Si la imagen alcanza la posición de tepeo, la reposiciona a la nueva posición
                if (currentPosition <= posicionTepeo) {
                    img.style.left = `${nuevaPosicion}px`;
                }
            });

            animationFrame = requestAnimationFrame(moveImages);
        };

        // Inicia la animación
        animationFrame = requestAnimationFrame(moveImages);

        // Limpia la animación al desmontar el componente
        return () => {
            if (animationFrame) cancelAnimationFrame(animationFrame);
        };
    }, [containerWidth, separacion]); // Dependencia: `containerWidth` y `separacion`

    return (
        <div ref={cintaContainerRef} className={styles.cintaContainer}>
            <div ref={cintaRef} className={styles.cinta}>
                {images.map((img, index) => (
                    <div
                        key={index}
                        className={styles.imagenContainer}
                        style={{ left: `${index * (150 + separacion)}px` }} // Posición inicial con separación ajustable
                    >
                        <img src={img} alt={`Imagen ${index}`} className={styles.imagen} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CintaDeImagenes;