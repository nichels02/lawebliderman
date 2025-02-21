import { useState } from "react";
import styles from '../css/CardWithExpand.module.css';

function CardWithExpand() {
    const [expandedIndex, setExpandedIndex] = useState(0); // Estado para guardar el índice de la imagen expandida (inicia con 0)

    const imageUrls = [
        "https://wallpapers.com/images/hd/1920x1080-hd-space-u95406v61bxyrx3s.jpg",
        "https://wallpapers.com/images/hd/1920x1080-aesthetic-glrfk0ntspz3tvxg.jpg",
        "https://wallpapers.com/images/hd/1920-x-1080-hd-1qq8r4pnn8cmcew4.jpg"
    ];

    const handleMouseEnter = (index: number) => {
        setExpandedIndex(index); // Expandir la imagen sobre la que se hace hover
    };

    return (
        <div className={styles.container}> {/* Contenedor principal */}
            <section className={styles.section}>
                {imageUrls.map((url, index) => (
                    <img
                        key={index}
                        src={url}
                        alt={`Imagen ${index + 1}`}
                        className={`${styles.img} ${expandedIndex === index ? styles.expanded : ""}`}
                        onMouseEnter={() => handleMouseEnter(index)}
                    />
                ))}
            </section>
        </div>
    );
}

export default CardWithExpand;