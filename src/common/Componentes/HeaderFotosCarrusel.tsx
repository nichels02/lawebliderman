import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../css/HeaderFotosCarrusel.module.css";
import { CustomArrowProps } from "react-slick"; // Importamos el tipo correcto
import { CSSProperties } from "react";

// Flechas personalizadas sin texto
const CustomPrevArrow = ({ className, style, onClick }: CustomArrowProps) => {
    return (
        <div
            className={className}
            style={{ ...style, display: "block" } as CSSProperties}
            onClick={onClick}
        />
    );
};

const CustomNextArrow = ({ className, style, onClick }: CustomArrowProps) => {
    return (
        <div
            className={className}
            style={{ ...style, display: "block" } as CSSProperties}
            onClick={onClick}
        />
    );
};

export default function Header() {
    // Array con imágenes y etiquetas
    const images = [
        { id: 1, src: "src/assets/security-señor.png", label: "Opción 1" },
        { id: 2, src: "src/assets/seguridad-fisica.png", label: "Opción 2" },
        { id: 3, src: "src/assets/1920x1080-full-hd-nature-clear-lake-and-flowers-5et15sh9gemfv0jt.jpg", label: "Opción 3" },
        { id: 4, src: "src/assets/1920x1080-hd-space-u95406v61bxyrx3s.jpg", label: "Opción 4" },
        { id: 5, src: "imagen5.jpg", label: "Opción 5" },
        { id: 6, src: "imagen6.jpg", label: "Opción 6" },
        { id: 7, src: "imagen7.jpg", label: "Opción 7" },
        { id: 8, src: "imagen8.jpg", label: "Opción 8" },
        { id: 9, src: "imagen9.jpg", label: "Opción 9" },
    ];

    const [selectedImage, setSelectedImage] = useState(images[0].src);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4, // Muestra 4 botones a la vez
        slidesToScroll: 4, // Avanza de 4 en 4
        arrows: true, // Mantener flechas activas
        variableWidth: false,
        prevArrow: <CustomPrevArrow />, // Flecha personalizada
        nextArrow: <CustomNextArrow />, // Flecha personalizada
        centerMode: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    // Aquí definimos la URL de la imagen de fondo
    const backgroundImageUrl = "src/assets/1920-x-1080-hd-1qq8r4pnn8cmcew4.jpg"; // Ruta de la imagen

    return (
        <header
            className={styles.header}
            style={{ backgroundImage: `url(${backgroundImageUrl})` }} // Imagen de fondo desde TSX
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
