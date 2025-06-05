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

    const headerData = content?.Seguridad.HeaderCarruselDeImagenes;
    const commonData = headerData?.Common;
    const languageData = headerData?.[language];

    // Estado: sin botón seleccionado al inicio
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

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
            { breakpoint: 1024, settings: { slidesToShow: 4, slidesToScroll: 4 } },
            { breakpoint: 768, settings: { slidesToShow: 3, slidesToScroll: 3 } },
            { breakpoint: 480, settings: { slidesToShow: 3, slidesToScroll: 3 } }
        ]
    };

    if (!commonData || !languageData) {
        return <div>Cargando...</div>;
    }

    return (
        <header
            className={styles.header}
            // style={{ backgroundImage: `url(${commonData.imagenDeFondo})` }}
        >
            <div
                className={styles.backgroundOverlay}
                style={{ backgroundImage: `url(${commonData.imagenDeFondo})` }}
            />
            {/* Logo */}
            <img src={commonData.logo} className="logoHeader" alt="Logo" />

            <div className={styles.overlay}>
                <div className={styles.content}>
                    {/* Título y texto dinámico */}
                    <div className={styles.textContainer}>
                        <h1>{languageData.Titulo}</h1>
                        <p>
                            {selectedIndex === null
                                ? languageData.Texto
                                : languageData.TextosBotones[selectedIndex]?.TextoDescripcion}
                        </p>
                    </div>

                    {/* Imagen fija */}
                    <div className={styles.imageContainer}>
                        <img
                            src={commonData.ImagenDerecha?.imagen}
                            alt={commonData.ImagenDerecha?.alt}
                        />
                    </div>
                </div>

                {/* Carrusel de botones */}
                <div className={styles.carouselContainer}>
                    <Slider {...settings}>
                        {languageData.TextosBotones.map((boton, index) => (
                            <button
                                key={index}
                                className={`${styles.carouselButton} ${
                                    selectedIndex === index ? styles.active : ""
                                }`}
                                onClick={() => setSelectedIndex(index)}
                            >
                                {boton.Texto}
                            </button>
                        ))}
                    </Slider>
                </div>
            </div>
        </header>
    );
}
