import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../css/HeaderFotosCarrusel.module.css";

export default function Header() {
    const images = [
        { id: 1, src: "src/assets/1920-x-1080-hd-1qq8r4pnn8cmcew4.jpg", label: "Opción 1" },
        { id: 2, src: "src/assets/1920x1080-aesthetic-glrfk0ntspz3tvxg.jpg", label: "Opción 2" },
        { id: 3, src: "src/assets/1920x1080-aesthetic-glrfk0ntspz3tvxg.jpg", label: "Opción 3" }
    ];

    const [selectedImage, setSelectedImage] = useState(images[0].src);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true
    };

    return (
        <header
            className={styles.header}
            style={{ backgroundImage: `url('/src/assets/fondo.jpg')` }} // Imagen de fondo
        >
            <div className={styles.overlay}>
                <div className={styles.content}>
                    {/* Sección Izquierda (Texto) */}
                    <div className={styles.textContainer}>
                        <h1>Título Principal</h1>
                        <p>Este es un texto descriptivo para el encabezado.</p>
                    </div>

                    {/* Sección Derecha (Imagen) */}
                    <div className={styles.imageContainer}>
                        <img src={selectedImage} alt="Imagen dinámica" />
                    </div>
                </div>

                {/* Carrusel de Botones */}
                <div className={styles.carouselContainer}>
                    <Slider {...settings}>
                        {images.map((item) => (
                            <button
                                key={item.id}
                                className={`${styles.carouselButton} ${selectedImage === item.src ? styles.active : ""}`}
                                onClick={() => setSelectedImage(item.src)}
                            >
                                {item.label}
                            </button>
                        ))}
                    </Slider>
                </div>
            </div>
        </header>
    );
}
