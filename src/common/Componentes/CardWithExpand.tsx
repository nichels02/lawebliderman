import { useState } from "react";
import styles from '../css/CardWithExpand.module.css';

function CardWithExpand() {
    const [expandedIndex, setExpandedIndex] = useState(0); // Estado para guardar el índice de la imagen expandida

    const imageUrls = [
        "https://wallpapers.com/images/hd/1920x1080-hd-space-u95406v61bxyrx3s.jpg",
        "https://wallpapers.com/images/hd/1920x1080-aesthetic-glrfk0ntspz3tvxg.jpg",
        "https://wallpapers.com/images/hd/1920-x-1080-hd-1qq8r4pnn8cmcew4.jpg"
    ];

    const handleMouseEnter = (index: number) => {
        setExpandedIndex(index); // Expande la imagen sobre la que se hace hover
    };

    return (
        <div className={styles.container}>
            <section className={styles.section}>
                {imageUrls.map((url, index) => (
                    <div
                        key={index}
                        className={`${styles.imgContainer} ${expandedIndex === index ? styles.expanded : ""}`}
                        onMouseEnter={() => handleMouseEnter(index)}
                    >
                        <img
                            src={url}
                            alt={`Imagen ${index + 1}`}
                            className={styles.img}
                        />
                        {/* Texto que cambia de posición según el estado */}
                        <div className={styles.text}>
                            Texto {index + 1}
                        </div>
                        {/* Texto alineado a la izquierda cuando está expandido */}
                        <div className={`${styles.leftText} ${expandedIndex === index ? styles.visible : ""}`}>
                            Izquierda {index + 1}
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
}

export default CardWithExpand;
