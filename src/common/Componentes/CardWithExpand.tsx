import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importar useNavigate
import styles from '../css/CardWithExpand.module.css';

function CardWithExpand() {
    const [expandedIndex, setExpandedIndex] = useState(0);
    const navigate = useNavigate(); // Hook para redirigir a otras rutas

    const sections = [
        {
            title: "Seguridad",
            subtitle: "Gestión de riesgos",
            items: [
                "Seguridad física",
                "Resguardo de personal",
                "Supervisión de sala de control",
                "Guardianía",
                "Patrullas móviles",
                "Estudios de Seguridad",
                "Acompañamiento de mercadería en tránsito",
                "Protección perimetral",
                "Gestión de seguridad de eventos"
            ],
            imageUrl: "https://wallpapers.com/images/hd/1920x1080-hd-space-u95406v61bxyrx3s.jpg",
            link: "/Seguridad" // Ruta a la que llevará el botón
        },
        {
            title: "Servicios",
            subtitle: "Servicios de Parking",
            items: [
                "Administración de estacionamientos",
                "Valet parking",
                "Gestión de eventos"
            ],
            secondSubtitle: "Facilities",
            secondItems: [
                "Courier",
                "Mantenimiento general",
                "Limpieza",
                "Jardinería",
                "Transporte"
            ],
            imageUrl: "https://wallpapers.com/images/hd/1920x1080-aesthetic-glrfk0ntspz3tvxg.jpg",
            link: "/Servicio" // Ruta a la que llevará el botón
        },
        {
            title: "Tecnología",
            subtitle: "Tecnología",
            items: [
                "Sistemas de seguridad electrónica",
                "Seguridad con drones",
                "Biometría",
                "Protección contra incendios",
                "Control de acceso y CCTV-IA",
                "BMS"
            ],
            secondSubtitle: "Ciberseguridad",
            thirdSubtitle: "Alarmas",
            fourthSubtitle: "GPS",
            imageUrl: "https://wallpapers.com/images/hd/1920-x-1080-hd-1qq8r4pnn8cmcew4.jpg",
            link: "/Tecnologia" // Ruta a la que llevará el botón
        }
    ];

    const handleMouseEnter = (index: number) => {
        setExpandedIndex(index);
    };

    return (
        <div className={styles.container}>
            <section className={styles.section}>
                {sections.map((section, index) => (
                    <div
                        key={index}
                        className={`${styles.imgContainer} ${expandedIndex === index ? styles.expanded : ""}`}
                        onMouseEnter={() => handleMouseEnter(index)}
                    >
                        <img
                            src={section.imageUrl}
                            alt={section.title}
                            className={styles.img}
                        />

                        {/* Texto derecho (título principal) */}
                        <div className={styles.text}>
                            {section.title}
                        </div>

                        {/* Contenedor de texto izquierdo */}
                        <div className={`${styles.leftText} ${expandedIndex === index ? styles.visible : ""}`}>
                            <h2 className={styles.subtitle}>{section.subtitle}</h2>
                            <ul className={styles.list}>
                                {section.items.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>

                            {/* Si hay un segundo subtítulo */}
                            {section.secondSubtitle && (
                                <>
                                    <h2 className={styles.subtitle}>{section.secondSubtitle}</h2>
                                    <ul className={styles.list}>
                                        {section.secondItems?.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </>
                            )}

                            {/* Si hay más subtítulos individuales */}
                            {section.thirdSubtitle && <h2 className={styles.subtitle}>{section.thirdSubtitle}</h2>}
                            {section.fourthSubtitle && <h2 className={styles.subtitle}>{section.fourthSubtitle}</h2>}

                            {/* Botón de explorar que redirige a la página correspondiente */}
                            <button
                                className={styles.exploreButton}
                                onClick={() => navigate(section.link)}
                            >
                                Explorar ➔
                            </button>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
}

export default CardWithExpand;
