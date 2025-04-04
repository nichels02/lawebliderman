import { useEffect, useState, useRef } from 'react';
import styles from '../css/ContenedorScroll.module.css';

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

function ContenedorScroll() {
    const [scrollPercentage, setScrollPercentage] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    const points: Point[] = [
        { x: 47500, y: 7000, year: "2000", isRight: true },
        { x: 43100, y: 12500, year: "2001", isRight: false },
        { x: 38800, y: 11000, year: "2002", isRight: true },
        { x: 39400, y: 16000, year: "2003", isRight: false },
        { x: 36400, y: 19000, year: "2004", isRight: true },
        { x: 32400, y: 25500, year: "2005", isRight: false },
        { x: 27000, y: 24000, year: "2006", isRight: true },
        { x: 26400, y: 30000, year: "2007", isRight: false },
        { x: 21400, y: 36000, year: "2008", isRight: true },
        { x: 16400, y: 40000, year: "2009", isRight: false },
        { x: 11400, y: 46000, year: "2010", isRight: true },
    ];

    const contenedoresPersonalizados: ContenedorPersonalizado[] = [
        { x: 47500, y: 5000, texto: "Registro de nuestra empresa de seguridad bajo el nombre de \"J&V Resguardo\"." },
        { x: 43100, y: 10000, texto: "Texto 2" },
        { x: 38800, y: 15000, texto: "Texto 3" },
        { x: 39400, y: 20000, texto: "Texto 4" },
        { x: 36400, y: 25000, texto: "Texto 5" },
        { x: 32400, y: 30000, texto: "Texto 6" },
        { x: 27000, y: 35000, texto: "Texto 7" },
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

                {/* 🔴 PUNTOS CON PIN */}
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
                            src="src/assets/alfiler.png"
                            alt="Punto"
                            className={styles.punto}
                            style={{
                                width: '100px',
                                height: '100px',
                            }}
                        />
                        <div
                            className={`${styles.titulo} ${point.isRight ? styles.tituloDerecha : styles.tituloIzquierda}`}
                        >
                            {point.year}
                        </div>
                    </div>
                ))}

                {/* 🔵 CAJAS PERSONALIZADAS */}
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
            </div>
        </div>
    );
}

export default ContenedorScroll;
