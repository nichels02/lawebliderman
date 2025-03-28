import { useState } from "react";
import styles from "../css/TextImageSelector.module.css";

const data = [
    {
        title: "Naturaleza",
        description: "Disfruta de la belleza de la naturaleza con este paisaje relajante.",
        image: "src/assets/1920-x-1080-hd-1qq8r4pnn8cmcew4.jpg"
    },
    {
        title: "Aesthetic",
        description: "Colores y formas que crean una estética visual única.",
        image: "src/assets/1920x1080-aesthetic-glrfk0ntspz3tvxg.jpg"
    },
    {
        title: "Lago",
        description: "Un lago sereno rodeado de montañas y naturaleza.",
        image: "src/assets/1920x1080-full-hd-nature-clear-lake-and-flowers-5et15sh9gemfv0jt.jpg"
    },
    {
        title: "Espacio",
        description: "Explora la inmensidad del universo con esta imagen del espacio.",
        image: "src/assets/1920x1080-hd-space-u95406v61bxyrx3s.jpg"
    },
    {
        title: "Repetido",
        description: "Otra imagen con estética vibrante y atractiva.",
        image: "src/assets/1920x1080-aesthetic-glrfk0ntspz3tvxg.jpg"
    },
];

function TextImageSelector() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className={styles.container}>
            {/* Contenido (Texto e Imagen) */}
            <div className={styles.contentBox}>
                <div className={styles.textContainer}>
                    <h2 className={styles.title}>{data[activeIndex].title}</h2>
                    <p className={styles.description}>{data[activeIndex].description}</p>
                </div>
                <img className={styles.image} src={data[activeIndex].image} alt="Imagen" />
            </div>

            {/* Botones */}
            <div className={styles.buttonContainer}>
                {data.map((item, index) => (
                    <button
                        key={index}
                        className={`${styles.button} ${activeIndex === index ? styles.active : ""}`}
                        onClick={() => setActiveIndex(index)}
                    >
                        {item.title}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default TextImageSelector;

