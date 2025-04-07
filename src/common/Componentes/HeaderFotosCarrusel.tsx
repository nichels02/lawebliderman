import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../css/HeaderFotosCarrusel.module.css";
import { CustomArrowProps } from "react-slick";
import { CSSProperties } from "react";
import { useContent } from "./Sistemas/useContent"; // Ajusta la ruta
import { useLanguage } from "./Sistemas/LanguageContext"; // Ajusta la ruta

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
    const { language } = useLanguage();
    const content = useContent();

    // Obtener datos del contexto
    const headerData = content?.Seguridad.HeaderCarruselDeImagenes;
    const commonData = headerData?.Common;
    const languageData = headerData?.[language];

    // Estado para la imagen seleccionada
    const [selectedImage, setSelectedImage] = useState(
        commonData?.ItemsBotones?.[0]?.Imagen || ""
    );

    // Configuración del carrusel
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: true,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 4, slidesToScroll: 4 }
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 3, slidesToScroll: 3 }
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 1, slidesToScroll: 1 }
            }
        ]
    };

    if (!commonData || !languageData) {
        return <div>Cargando...</div>; // Estado de carga
    }

    return (
        <header
            className={styles.header}
            style={{ backgroundImage: `url(${commonData.imagenDeFondo})` }}
        >
            <div className={styles.overlay}>
                <div className={styles.content}>
                    {/* Sección de Texto */}
                    <div className={styles.textContainer}>
                        <h1>{languageData.Titulo}</h1>
                        <p>{languageData.Texto}</p>
                    </div>

                    {/* Imagen Principal */}
                    <div className={styles.imageContainer}>
                        <img src={selectedImage} alt="Imagen dinámica" />
                    </div>
                </div>

                {/* Carrusel de Botones */}
                <div className={styles.carouselContainer}>
                    <Slider {...settings}>
                        {commonData.ItemsBotones.map((boton, index) => (
                            <button
                                key={index}
                                className={`${styles.carouselButton} ${
                                    selectedImage === boton.Imagen ? styles.active : ""
                                }`}
                                onClick={() => setSelectedImage(boton.Imagen)}
                            >
                                {languageData.TextosBotones[index]?.Texto}
                            </button>
                        ))}
                    </Slider>
                </div>
            </div>
        </header>
    );
}