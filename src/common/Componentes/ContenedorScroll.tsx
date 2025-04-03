import { useEffect, useState, useRef } from 'react';
import styles from '../css/ContenedorScroll.module.css';

function ContenedorScroll() {
    const [scrollPercentage, setScrollPercentage] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;

            const { offsetTop, offsetHeight } = containerRef.current;
            const scrollY = window.scrollY;
            const relativeScroll = scrollY - offsetTop;

            // 1. Calcula el porcentaje bruto (0% a 100%)
            const rawPercentage = (relativeScroll / offsetHeight) * 100;

            // 2. Aplicar aceleración lineal de 1.5x
            let adjustedPercentage = rawPercentage * 1.2;

            // 3. Limitar entre 0% y 90%
            adjustedPercentage = Math.max(0, Math.min(90, adjustedPercentage));

            setScrollPercentage(adjustedPercentage);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Transformación con el porcentaje ajustado
    const internalContainerStyle: React.CSSProperties = {
        transform: `translateX(${scrollPercentage * 4}vw)`
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
            </div>
        </div>
    );
}

export default ContenedorScroll;