import { useEffect, useState, useRef } from 'react';
import styles from '../css/ContenedorScroll.module.css';
import { useContent } from './Sistemas/useContent.tsx';
import { useLanguage } from './Sistemas/LanguageContext.tsx';

interface Point {
    x: number;
    y: number;
    year: string;
    isRight: boolean;
}

interface ContenedorPersonalizado {
    x: number;
    y: number;
    texto: string;
}

interface ContenedorConImagen {
    x: number;
    y: number;
    titulo: string;
    texto: string;
    imagenUrl: string;
}

function ContenedorScroll() {
    const [scrollPercentage, setScrollPercentage] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const content = useContent();
    const { language } = useLanguage();

    // Obtener datos del contexto
    const puntosData = content?.Conocenos.contenedorScroll[language].Puntos;
    const contenedoresSimpleData = content?.Conocenos.contenedorScroll[language].ContenedorSimple;
    const contenedoresComplejoData = content?.Conocenos.contenedorScroll[language].ContenedorComplejo;
    const commonImages = content?.Conocenos.contenedorScroll.common.items;
    const imagenPunto = content?.Conocenos.contenedorScroll.common.imagenDePunto || "src/assets/alfiler.png";

    // 🔴 Puntos con datos del JSON o valores por defecto
    const points: Point[] = [
        { x: 47500, y: 7000, year: puntosData?.Contenedor1?.fecha || "2000", isRight: puntosData?.Contenedor1?.EstaALaDerecha ?? true },
        { x: 43100, y: 12500, year: puntosData?.Contenedor2?.fecha || "2001", isRight: puntosData?.Contenedor2?.EstaALaDerecha ?? false },
        { x: 38800, y: 11000, year: puntosData?.Contenedor3?.fecha || "2002", isRight: puntosData?.Contenedor3?.EstaALaDerecha ?? true },
        { x: 38300, y: 17000, year: puntosData?.Contenedor4?.fecha || "2003", isRight: puntosData?.Contenedor4?.EstaALaDerecha ?? false },
        { x: 33400, y: 22000, year: puntosData?.Contenedor5?.fecha || "2004", isRight: puntosData?.Contenedor5?.EstaALaDerecha ?? true },
        { x: 27700, y: 25500, year: puntosData?.Contenedor6?.fecha || "2005", isRight: puntosData?.Contenedor6?.EstaALaDerecha ?? false },
        { x: 24500, y: 31500, year: puntosData?.Contenedor7?.fecha || "2006", isRight: puntosData?.Contenedor7?.EstaALaDerecha ?? true },
        { x: 22400, y: 34000, year: puntosData?.Contenedor8?.fecha || "2007", isRight: puntosData?.Contenedor8?.EstaALaDerecha ?? false },
        { x: 16400, y: 40000, year: puntosData?.Contenedor9?.fecha || "2008", isRight: puntosData?.Contenedor9?.EstaALaDerecha ?? true },
        { x: 13200, y: 44000, year: puntosData?.Contenedor10?.fecha || "2009", isRight: puntosData?.Contenedor10?.EstaALaDerecha ?? false },
        { x: 8400, y: 49000, year: puntosData?.Contenedor11?.fecha || "2010", isRight: puntosData?.Contenedor11?.EstaALaDerecha ?? false },
    ];

    // 🔵 Contenedores simples con texto del JSON
    const contenedoresPersonalizados: ContenedorPersonalizado[] = [
        { x: 47000, y: 10000, texto: contenedoresSimpleData?.Contenedor1?.Texto || "Registro de nuestra empresa de seguridad bajo el nombre de \"J&V Resguardo\"." },
        { x: 43200, y: 14500, texto: contenedoresSimpleData?.Contenedor2?.Texto || "Texto 2" },
        { x: 40300, y: 9000, texto: contenedoresSimpleData?.Contenedor3?.Texto || "Texto 3" },
        { x: 35700, y: 22000, texto: contenedoresSimpleData?.Contenedor4?.Texto || "Texto 4" },
        { x: 26400, y: 32000, texto: contenedoresSimpleData?.Contenedor5?.Texto || "Texto 5" },
        { x: 19800, y: 33000, texto: contenedoresSimpleData?.Contenedor6?.Texto || "Texto 6" },
        { x: 11000, y: 43000, texto: contenedoresSimpleData?.Contenedor7?.Texto || "Texto 7" },
    ];

    // 🟡 Contenedores complejos con datos del JSON
    const contenedoresConImagen: ContenedorConImagen[] = [
        {
            x: 44000,
            y: 4000,
            titulo: contenedoresComplejoData?.Contenedor1?.Titulo || "Nuestro nacimiento",
            texto: contenedoresComplejoData?.Contenedor1?.Texto || "Desde el inicio, hemos liderado con pasión y propósito, marcando la diferencia en el sector y en nuestras vidas.",
            imagenUrl: commonImages?.Contenedor1?.src || "src/assets/1920-x-1080-hd-1qq8r4pnn8cmcew4.jpg"
        },
        {
            x: 35000,
            y: 14500,
            titulo: contenedoresComplejoData?.Contenedor2?.Titulo || "Título 2",
            texto: contenedoresComplejoData?.Contenedor2?.Texto || "Descripción del segundo punto con imagen.",
            imagenUrl: commonImages?.Contenedor2?.src || "src/assets/ejemplo2.png"
        },
        {
            x: 30000,
            y: 21000,
            titulo: contenedoresComplejoData?.Contenedor3?.Titulo || "Título 3",
            texto: contenedoresComplejoData?.Contenedor3?.Texto || "Texto complementario para el tercer punto visual.",
            imagenUrl: commonImages?.Contenedor3?.src || "src/assets/ejemplo3.png"
        },
        {
            x: 24000,
            y: 26000,
            titulo: contenedoresComplejoData?.Contenedor4?.Titulo || "Título 4",
            texto: contenedoresComplejoData?.Contenedor4?.Texto || "Breve explicación o historia del cuarto punto.",
            imagenUrl: commonImages?.Contenedor4?.src || "src/assets/ejemplo4.png"
        },
        {
            x: 18400,
            y: 41000,
            titulo: contenedoresComplejoData?.Contenedor5?.Titulo || "Título 5",
            texto: contenedoresComplejoData?.Contenedor5?.Texto || "Este contenido describe el quinto evento.",
            imagenUrl: commonImages?.Contenedor5?.src || "src/assets/ejemplo5.png"
        },
        {
            x: 11000,
            y: 49000,
            titulo: contenedoresComplejoData?.Contenedor6?.Titulo || "Título 6",
            texto: contenedoresComplejoData?.Contenedor6?.Texto || "Una pequeña historia o anécdota final.",
            imagenUrl: commonImages?.Contenedor6?.src || "src/assets/ejemplo6.png"
        },
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;

            const { offsetTop, offsetHeight } = containerRef.current;
            const scrollY = window.scrollY;
            const relativeScroll = scrollY - offsetTop;

            const rawPercentage = (relativeScroll / offsetHeight) * 100;
            let adjustedPercentage = rawPercentage * 1.2;
            adjustedPercentage = Math.max(0, Math.min(90, adjustedPercentage));

            setScrollPercentage(adjustedPercentage);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const internalContainerStyle: React.CSSProperties = {
        transform: `translateX(${scrollPercentage * 4}vw)`,
    };

    return (
        <div ref={containerRef} className={styles.contenedorScroll}>
            <div className={styles.contenedorInterno} style={internalContainerStyle}>
                <svg
                    className={styles.svgScroll}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 46057.076 54670.84"
                    preserveAspectRatio="none"
                >
                    <defs>
                        <style>{`
                            .line {
                                stroke: #a0a3a3;
                                stroke-width: 400;
                                stroke-miterlimit: 22.93;
                                fill: none;
                            }
                        `}</style>
                    </defs>
                    <g id="Capa_1" transform="matrix(1.72221, 0, 0, 1.72221, -23824.8, -14455.3)">
                        <path className="line" d="M45746 7476c-839 998 -5049 6009 -5889 7007 -415 494 -234 803 390 1271 488 365 886 703 384 1301 -485 577 -982 68 -2245 -823 -1429 -1009 -1883 -1346 -2323 -795 -387 485 -104 682 505 1210 528 457 589 1046 333 1351 -460 547 -3301 3928 -3761 4475 -360 429 -367 996 164 1346 639 419 1078 669 627 1206 -525 625 -1055 307 -2310 -827 -1182 -1069 -1711 -1407 -2195 -831 -526 626 -63 1150 331 1450 580 441 668 887 302 1323 -706 840 -3170 3772 -3759 4473 -345 411 -277 1024 231 1353 507 328 944 742 545 1217 -535 637 -1390 134 -2419 -616 -1393 -1016 -1995 -1152 -2485 -569 -510 607 -52 1056 475 1346 452 248 733 741 401 1136l-8502 10117"/>
                    </g>
                </svg>

                {/* 🔴 Puntos con alfiler */}
                {points.map((point, index) => (
                    <div
                        key={index}
                        className={styles.puntoContainer}
                        style={{
                            left: `${(point.x / 46057.076) * 100}%`,
                            top: `${(point.y / 54670.84) * 100}%`,
                        }}
                    >
                        <img
                            src={imagenPunto}
                            alt="Punto"
                            className={styles.punto}
                            style={{ width: '100px', height: '100px' }}
                        />
                        <div className={`${styles.titulo} ${point.isRight ? styles.tituloDerecha : styles.tituloIzquierda}`}>
                            {point.year}
                        </div>
                    </div>
                ))}

                {/* 🔵 Contenedores simples */}
                {contenedoresPersonalizados.map((box, index) => (
                    <div
                        key={`caja-${index}`}
                        className={styles.cajaCustom}
                        style={{
                            left: `${(box.x / 46057.076) * 100}%`,
                            top: `${(box.y / 54670.84) * 100}%`,
                        }}
                    >
                        {box.texto}
                    </div>
                ))}

                {/* 🟡 Contenedores complejos con estilos personalizados */}
                {contenedoresConImagen.map((item, index) => (
                    <div
                        key={`caja-imagen-${index}`}
                        className={`${styles.cajaConImagen} ${styles[`contenedor${index + 1}`]}`}
                        style={{
                            left: `${(item.x / 46057.076) * 100}%`,
                            top: `${(item.y / 54670.84) * 100}%`,
                        }}
                    >
                        <div className={styles.columnaTexto}>
                            <h3 className={styles.tituloCaja}>{item.titulo}</h3>
                            <p className={styles.textoCaja}>{item.texto}</p>
                        </div>
                        <div className={styles.columnaImagen}>
                            <img src={item.imagenUrl} alt={`Imagen ${index + 1}`} className={styles.imagenCaja} />
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
}

export default ContenedorScroll;