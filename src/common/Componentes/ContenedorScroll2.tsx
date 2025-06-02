import { useRef, useLayoutEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import LineaDeTiempo from "../../assets/Conocenos/LineaDeTiempo.svg";

function ContenedorScroll2() {
    const containerRef = useRef<HTMLDivElement>(null);
    const imgRef = useRef<HTMLImageElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"], // cuando entra y cuando sale
    });

    const [moveDistance, setMoveDistance] = useState(0);

    // Calcular cuánto debe moverse la imagen
    useLayoutEffect(() => {
        const img = imgRef.current;
        const container = containerRef.current;
        if (img && container) {
            const diff = img.scrollWidth - container.offsetWidth;
            setMoveDistance(-diff); // desplazamiento negativo (de derecha a izquierda)
        }
    }, []);

    // Mapear progreso de scroll a desplazamiento horizontal
    const x = useTransform(scrollYProgress, [0, 1], [0, moveDistance]);

    return (
        <div
            ref={containerRef}
            style={{
                position: "relative",
                overflow: "hidden",
                height: "300vh", // suficiente scroll vertical
            }}
        >
            <motion.img
                ref={imgRef}
                src={LineaDeTiempo}
                alt="Linea de tiempo"
                style={{
                    x,
                    width: "1500px", // o el tamaño real de tu SVG
                    height: "auto",
                    maxWidth: "none",
                    position: "absolute",
                    top: "50%",
                    transform: "translateY(-50%)",
                }}
            />
        </div>
    );
}

export default ContenedorScroll2;
