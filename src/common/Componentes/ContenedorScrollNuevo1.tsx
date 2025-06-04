import { useRef, useState } from "react";
import LineaDeTiempo from "../../assets/Conocenos/Linea distribucion 2.svg";
import styles from "../css/ContenedorScrollNuevo1.module.css";
import { useContent } from "./Sistemas/useContent.tsx";
import { useLanguage } from "./Sistemas/LanguageContext.tsx";

function ContenedorScrollNuevo1() {
    const content = useContent();
    const { language } = useLanguage();
    const contenedorRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeftStart, setScrollLeftStart] = useState(0);

    const onDragStart = (clientX: number) => {
        if (!contenedorRef.current) return;
        setIsDragging(true);
        setStartX(clientX);
        setScrollLeftStart(contenedorRef.current.scrollLeft);
    };

    const onDragMove = (clientX: number) => {
        if (!isDragging || !contenedorRef.current) return;
        const walk = clientX - startX;
        contenedorRef.current.scrollLeft = scrollLeftStart - walk;
    };

    const endDrag = () => setIsDragging(false);

    const handleMouseDown = (e: React.MouseEvent) => {
        e.preventDefault();
        onDragStart(e.clientX);
    };
    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return;
        e.preventDefault();
        onDragMove(e.clientX);
    };
    const handleMouseUp = endDrag;
    const handleMouseLeave = endDrag;
    const handleTouchStart = (e: React.TouchEvent) => {
        onDragStart(e.touches[0].clientX);
    };
    const handleTouchMove = (e: React.TouchEvent) => {
        if (!isDragging) return;
        onDragMove(e.touches[0].clientX);
    };
    const handleTouchEnd = endDrag;

    return (
        <div
            ref={contenedorRef}
            className={styles.contenedorExterno}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{ cursor: isDragging ? "grabbing" : "grab" }}
        >
            <div className={styles.contenedorInterno}>
                <img
                    src={LineaDeTiempo}
                    alt="Línea de tiempo"
                    className={styles.lineaDeTiempoImg}
                    draggable={false}
                />

                <div className={styles.Posicion1}>
                    <img
                        src={content?.Conocenos.contenedorScroll.common.imagenDePunto}
                        alt="Punto 1"
                        className={styles.EstiloGeneralPunto}
                        draggable={false}
                    />
                    <span className={styles.TextoDePunto}>{content?.Conocenos.contenedorScroll[language].Puntos.Contenedor1.fecha}</span>
                    <div className={`${styles.EstiloGeneralConTextoEImagen} ${content?.Conocenos.contenedorScroll[language].ContenedorComplejo.Contenedor1.EstaAbajo ? styles.EstiloGeneralConTextoEImagenInvertido : ''}`}>
                    <h3 className={styles.Titulo}>
                            {content?.Conocenos.contenedorScroll[language].ContenedorComplejo.Contenedor1.Titulo}
                        </h3>
                        <p className={styles.texto}>
                            {content?.Conocenos.contenedorScroll[language].ContenedorComplejo.Contenedor1.Texto}
                        </p>
                        <img
                            src={content?.Conocenos.contenedorScroll.common.items.Contenedor1.src}
                            alt={content?.Conocenos.contenedorScroll.common.items.Contenedor1.alt}
                            className={styles.Imagen}
                            draggable={false}
                        />

                    </div>
                </div>

                <div className={styles.Posicion2}>
                    <img
                        src={content?.Conocenos.contenedorScroll.common.imagenDePunto}
                        alt="Punto 2"
                        className={styles.EstiloGeneralPunto}
                        draggable={false}
                    />
                    <span className={styles.TextoDePunto}>{content?.Conocenos.contenedorScroll[language].Puntos.Contenedor2.fecha}</span>
                </div>

                <div className={styles.Posicion3}>
                    <img
                        src={content?.Conocenos.contenedorScroll.common.imagenDePunto}
                        alt="Punto 3"
                        className={styles.EstiloGeneralPunto}
                        draggable={false}
                    />
                    <span className={styles.TextoDePunto}>{content?.Conocenos.contenedorScroll[language].Puntos.Contenedor3.fecha}</span>
                </div>

                <div className={styles.Posicion4}>
                    <img
                        src={content?.Conocenos.contenedorScroll.common.imagenDePunto}
                        alt="Punto 4"
                        className={styles.EstiloGeneralPunto}
                        draggable={false}
                    />
                    <span className={styles.TextoDePunto}>{content?.Conocenos.contenedorScroll[language].Puntos.Contenedor4.fecha}</span>
                </div>

                <div className={styles.Posicion5}>
                    <img
                        src={content?.Conocenos.contenedorScroll.common.imagenDePunto}
                        alt="Punto 5"
                        className={styles.EstiloGeneralPunto}
                        draggable={false}
                    />
                    <span className={styles.TextoDePunto}>{content?.Conocenos.contenedorScroll[language].Puntos.Contenedor5.fecha}</span>
                </div>

                <div className={styles.Posicion6}>
                    <img
                        src={content?.Conocenos.contenedorScroll.common.imagenDePunto}
                        alt="Punto 6"
                        className={styles.EstiloGeneralPunto}
                        draggable={false}
                    />
                    <span className={styles.TextoDePunto}>{content?.Conocenos.contenedorScroll[language].Puntos.Contenedor6.fecha}</span>
                </div>

                <div className={styles.Posicion7}>
                    <img
                        src={content?.Conocenos.contenedorScroll.common.imagenDePunto}
                        alt="Punto 7"
                        className={styles.EstiloGeneralPunto}
                        draggable={false}
                    />
                    <span className={styles.TextoDePunto}>{content?.Conocenos.contenedorScroll[language].Puntos.Contenedor7.fecha}</span>
                </div>

                <div className={styles.Posicion8}>
                    <img
                        src={content?.Conocenos.contenedorScroll.common.imagenDePunto}
                        alt="Punto 8"
                        className={styles.EstiloGeneralPunto}
                        draggable={false}
                    />
                    <span className={styles.TextoDePunto}>{content?.Conocenos.contenedorScroll[language].Puntos.Contenedor8.fecha}</span>
                </div>

                <div className={styles.Posicion9}>
                    <img
                        src={content?.Conocenos.contenedorScroll.common.imagenDePunto}
                        alt="Punto 9"
                        className={styles.EstiloGeneralPunto}
                        draggable={false}
                    />
                    <span className={styles.TextoDePunto}>{content?.Conocenos.contenedorScroll[language].Puntos.Contenedor9.fecha}</span>
                </div>

                <div className={styles.Posicion10}>
                    <img
                        src={content?.Conocenos.contenedorScroll.common.imagenDePunto}
                        alt="Punto 10"
                        className={styles.EstiloGeneralPunto}
                        draggable={false}
                    />
                    <span className={styles.TextoDePunto}>{content?.Conocenos.contenedorScroll[language].Puntos.Contenedor10.fecha}</span>
                </div>

                <div className={styles.Posicion11}>
                    <img
                        src={content?.Conocenos.contenedorScroll.common.imagenDePunto}
                        alt="Punto 11"
                        className={styles.EstiloGeneralPunto}
                        draggable={false}
                    />
                    <span className={styles.TextoDePunto}>{content?.Conocenos.contenedorScroll[language].Puntos.Contenedor11.fecha}</span>
                </div>
            </div>
        </div>
    );
}

export default ContenedorScrollNuevo1;
