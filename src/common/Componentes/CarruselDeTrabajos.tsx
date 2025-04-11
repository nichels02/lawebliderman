import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../css/CarruselDeTrabajos.module.css";

interface ArrowProps {
    className?: string;
    style?: React.CSSProperties;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}

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

const CustomPrevArrow = ({ className, style, onClick }: ArrowProps) => {
    return (
        <div
            className={`${className} ${styles.customArrow}`}
            style={{ ...style }}
            onClick={onClick}
        />
    );
};

const CustomNextArrow = ({ className, style, onClick }: ArrowProps) => {
    return (
        <div
            className={`${className} ${styles.customArrow}`}
            style={{ ...style }}
            onClick={onClick}
        />
    );
};

function CarruselDeTrabajos() {
    const carouselData: { items: CarouselItem[] } = {
        items: [
            {
                id: 1,
                title: "Agente de seguridad/zona norte",
                ubicacion: "Callao",
                imagenUbicacion: "/ruta/a/icono-ubicacion.png",
                descripcion: [
                    "• Secundaria completa certificada o C4.",
                    "• Curso sucamec vigente (deseable), en caso no esté vigente Liderman te capacita.",
                    "• Experiencia mínima de 03 meses como Agente de Seguridad (certificada).",
                    "• Disponibilidad para laborar 12 horas rotativas.",
                    "• Disponibilidad para laborar en Callao."
                ],
                masInformacion: "Más información",
                imagenMasInformacion: "src/assets/ImagenesGenerales/LogoLinkedin.svg",
                link: "https://ejemplo.com/oferta-1"
            },
            {
                id: 2,
                title: "Agente de seguridad/zona norte",
                ubicacion: "Callao",
                imagenUbicacion: "/ruta/a/icono-ubicacion.png",
                descripcion: [
                    "• Secundaria completa certificada o C4.",
                    "• Curso sucamec vigente (deseable), en caso no esté vigente Liderman te capacita.",
                    "• Experiencia mínima de 03 meses como Agente de Seguridad (certificada).",
                    "• Disponibilidad para laborar 12 horas rotativas.",
                    "• Disponibilidad para laborar en Callao."
                ],
                masInformacion: "Más información",
                imagenMasInformacion: "/ruta/a/icono-informacion.png",
                link: "https://ejemplo.com/oferta-1"
            },
            {
                id: 3,
                title: "Agente de seguridad/zona norte",
                ubicacion: "Callao",
                imagenUbicacion: "/ruta/a/icono-ubicacion.png",
                descripcion: [
                    "• Secundaria completa certificada o C4.",
                    "• Curso sucamec vigente (deseable), en caso no esté vigente Liderman te capacita.",
                    "• Experiencia mínima de 03 meses como Agente de Seguridad (certificada).",
                    "• Disponibilidad para laborar 12 horas rotativas.",
                    "• Disponibilidad para laborar en Callao."
                ],
                masInformacion: "Más información",
                imagenMasInformacion: "/ruta/a/icono-informacion.png",
                link: "https://ejemplo.com/oferta-1"
            },
            {
                id: 4,
                title: "Agente de seguridad/zona norte",
                ubicacion: "Callao",
                imagenUbicacion: "/ruta/a/icono-ubicacion.png",
                descripcion: [
                    "• Secundaria completa certificada o C4.",
                    "• Curso sucamec vigente (deseable), en caso no esté vigente Liderman te capacita.",
                    "• Experiencia mínima de 03 meses como Agente de Seguridad (certificada).",
                    "• Disponibilidad para laborar 12 horas rotativas.",
                    "• Disponibilidad para laborar en Callao."
                ],
                masInformacion: "Más información",
                imagenMasInformacion: "/ruta/a/icono-informacion.png",
                link: "https://ejemplo.com/oferta-1"
            },
            {
                id: 5,
                title: "Agente de seguridad/zona norte",
                ubicacion: "Callao",
                imagenUbicacion: "/ruta/a/icono-ubicacion.png",
                descripcion: [
                    "• Secundaria completa certificada o C4.",
                    "• Curso sucamec vigente (deseable), en caso no esté vigente Liderman te capacita.",
                    "• Experiencia mínima de 03 meses como Agente de Seguridad (certificada).",
                    "• Disponibilidad para laborar 12 horas rotativas.",
                    "• Disponibilidad para laborar en Callao."
                ],
                masInformacion: "Más información",
                imagenMasInformacion: "/ruta/a/icono-informacion.png",
                link: "https://ejemplo.com/oferta-1"
            },
            {
                id: 6,
                title: "Agente de seguridad/zona norte",
                ubicacion: "Callao",
                imagenUbicacion: "/ruta/a/icono-ubicacion.png",
                descripcion: [
                    "• Secundaria completa certificada o C4.",
                    "• Curso sucamec vigente (deseable), en caso no esté vigente Liderman te capacita.",
                    "• Experiencia mínima de 03 meses como Agente de Seguridad (certificada).",
                    "• Disponibilidad para laborar 12 horas rotativas.",
                    "• Disponibilidad para laborar en Callao."
                ],
                masInformacion: "Más información",
                imagenMasInformacion: "/ruta/a/icono-informacion.png",
                link: "https://ejemplo.com/oferta-1"
            },
        ]
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2, slidesToScroll: 1 }
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 1, slidesToScroll: 1 }
            }
        ]
    };

    return (
        <div id="CarruselDeTrabajos" className={styles.carruselContainer}>
            <Slider {...settings} className={styles.slider}>
                {carouselData.items.map((item) => (
                    <div key={item.id} className={styles.slideItem}>
                        <div className={styles.contentContainer}>
                            <h3 className={styles.slideTitle}>{item.title}</h3>

                            <div className={styles.ubicacionContainer}>
                                <img
                                    src={item.imagenUbicacion}
                                    alt="Ubicación"
                                    className={styles.ubicacionIcon}
                                />
                                <span className={styles.ubicacionText}>{item.ubicacion}</span>
                            </div>

                            <div className={styles.descripcionContainer}>
                                {item.descripcion.map((punto, index) => (
                                    <p key={index} className={styles.descripcionPunto}>{punto}</p>
                                ))}
                            </div>

                            <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.masInformacionLink}
                            >
                                <div className={styles.masInformacionContainer}>
                                    <span className={styles.masInformacionText}>
                                        {item.masInformacion}
                                    </span>
                                    <img
                                        src={item.imagenMasInformacion}
                                        alt="Más información"
                                        className={styles.masInformacionIcon}
                                    />
                                </div>
                            </a>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default CarruselDeTrabajos;