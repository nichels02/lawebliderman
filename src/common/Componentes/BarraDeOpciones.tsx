import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../css/BarraDeOpciones.module.css";
import { isDarkModeEnabled } from "./Sistemas/toggleDarkMode.ts";
import { useContent } from "./Sistemas/useContent";
import { useLanguage } from "./Sistemas/LanguageContext";
import LazyImage from "./Sistemas/LazyImage.tsx";

// Estado global para el color del SVG
let setSVGColorGlobal: (isDark: boolean) => void;

export function updateSVGColor() {
    if (setSVGColorGlobal) {
        setSVGColorGlobal(isDarkModeEnabled());
    }
}

function BarraDeOpciones() {
    const { language } = useLanguage();
    const content = useContent();
    const Imagen = content?.home.BarraDeOpciones2.Common;

    const [showPanel, setShowPanel] = useState(false);

    const [svgColor, setSvgColor] = useState(isDarkModeEnabled());

    // Guardar función para actualizar color desde fuera
    useEffect(() => {
        setSVGColorGlobal = setSvgColor;
    }, []);
    // ✅ Ahora la validación ocurre después de los hooks
    if (!content || !content.home || !content.home.BarraDeOpciones) {
        return <p>Cargando...</p>;
    }

    const textos = content.home.BarraDeOpciones[language];

    return (
        <div className={styles.barra}>
            <Link to="/" className={styles.boton}>{textos.inicio}</Link>
            <Link to="/Conocenos" className={styles.boton}>{textos.conocenos}</Link>

            <div
                className={styles.dropdown}
                onMouseEnter={() => setShowPanel(true)}
                onMouseLeave={() => setShowPanel(false)}
                onClick={() => setShowPanel(!showPanel)}
            >
                <button className={styles.boton}>
                    {textos.soluciones}
                    <div className={styles.dropdownSymbol}>
                        <LazyImage
                            src={svgColor? Imagen?.Flecha.claro : Imagen?.Flecha.oscuro}
                            alt={""} className={styles.Imagen}/>
                    </div>

                </button>

                {showPanel && (
                    <div className={styles.panel}>
                        <Link to="/Seguridad" className={styles.boton}>{textos.seguridad}</Link>
                        <Link to="/Servicios" className={styles.boton}>{textos.servicio}</Link>
                        <Link to="/Tecnologia" className={styles.boton}>{textos.tecnologia}</Link>
                    </div>
                )}
            </div>

            <Link to="/Lidermania" className={styles.boton}>
                {textos.lidermania} <span className={styles.highlight}>{textos.unete}</span>
            </Link>

            <Link to="/Legal" className={styles.boton}>
                {textos.Legal}
            </Link>
        </div>
    );
}


export default BarraDeOpciones;
