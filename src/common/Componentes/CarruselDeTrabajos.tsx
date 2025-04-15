import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../css/CarruselDeTrabajos.module.css';

interface CarouselItem {
    id: number;
    title: string;
    ubicacion: string;
    imagenUbicacion: string;
    descripcion: string[];
    masInformacion: string;
    imagenMasInformacion: string;
    link: string;
}

function CarruselDeTrabajos() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    // Configuración responsiva
    const getItemsPerView = () => {
        if (windowWidth < 768) return 1;
        if (windowWidth < 1024) return 2;
        return 3;
    };

    const itemsPerView = getItemsPerView();
    const cardWidth = Math.min(350, windowWidth * 0.8 / itemsPerView);
    const gap = 20;

    // Calculamos el padding necesario para centrar
    const containerPadding = Math.max(20, (windowWidth - (itemsPerView * cardWidth + (itemsPerView - 1) * gap)) / 2);

    // Datos del carrusel
    const carouselData = Array.from({ length: 10000 }, (_, i) => ({
        id: i + 1,
        title: `Título ${i + 1}`,
        ubicacion: "Callao",
        imagenUbicacion: "https://cdn-icons-png.flaticon.com/512/2776/2776067.png",
        descripcion: [
            "• Secundaria completa certificada o C4.",
            "• Curso sucamec vigente (deseable), en caso no esté vigente Liderman te capacita.",
            "• Experiencia mínima de 03 meses como Agente de Seguridad (certificada).",
            "• Disponibilidad para laborar 12 horas rotativas.",
            "• Disponibilidad para laborar en Callao."
        ],
        masInformacion: "Más información",
        imagenMasInformacion: "https://cdn-icons-png.flaticon.com/512/1384/1384062.png",
        link: `https://ejemplo.com/oferta-${i + 1}`
    }));

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleNavigation = (direction: number) => {
        if (isAnimating) return;

        setIsAnimating(true);
        setCurrentIndex(prev => {
            const newIndex = prev + direction;
            // Lógica circular
            if (newIndex < 0) return carouselData.length - 1;
            if (newIndex >= carouselData.length) return 0;
            return newIndex;
        });

        setTimeout(() => setIsAnimating(false), 300);
    };

    const TarjetaTrabajo = ({ item }: { item: CarouselItem }) => (
        <motion.div
            className={styles.card}
            style={{ width: `${cardWidth}px` }}
            whileHover={{
                boxShadow: "0 15px 30px rgba(0, 0, 0, 0.5)",
                transform: "translateY(-5px)"
            }}
        >
            <h3 className={styles.title}>{item.title}</h3>
            <div className={styles.location}>
                <img
                    src={item.imagenUbicacion}
                    alt="Ubicación"
                    className={styles.locationIcon}
                />
                <span>{item.ubicacion}</span>
            </div>
            <ul className={styles.description}>
                {item.descripcion.map((desc, i) => (
                    <li key={i} className={styles.descriptionItem}>{desc}</li>
                ))}
            </ul>
            <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
            >
                {item.masInformacion}
                <img
                    src={item.imagenMasInformacion}
                    alt="Más información"
                    className={styles.linkIcon}
                />
            </a>
        </motion.div>
    );

    return (
        <div className={styles.container}>
            <div
                className={styles.navContainer}
                style={{ padding: `0 ${containerPadding}px` }}
            >
                <button
                    className={styles.navButton}
                    onClick={() => handleNavigation(-1)}
                >
                    ◀
                </button>

                <div className={styles.cardsContainer}>
                    {Array.from({ length: itemsPerView }).map((_, index) => {
                        const realIndex = (currentIndex + index) % carouselData.length;
                        const item = carouselData[realIndex];
                        return <TarjetaTrabajo key={`${realIndex}-${index}`} item={item} />;
                    })}
                </div>

                <button
                    className={styles.navButton}
                    onClick={() => handleNavigation(1)}
                >
                    ▶
                </button>
            </div>
        </div>
    );
}

export default CarruselDeTrabajos;