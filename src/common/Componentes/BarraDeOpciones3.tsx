import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../css/BarraDeOpciones3.module.css";
import { isDarkModeEnabled } from "./Sistemas/toggleDarkMode.ts";
import { useContent } from "./Sistemas/useContent";
import { useLanguage } from "./Sistemas/LanguageContext";
import Switch from "./Switch.tsx";

let setSVGColorGlobal: (color: string) => void;

export function updateSVGColor() {
    if (setSVGColorGlobal) {
        setSVGColorGlobal(isDarkModeEnabled() ? "#FFFFFF" : "#393939");
    }
}

function BarraDeOpciones3() {
    const { language, setLanguage } = useLanguage();
    const content = useContent();

    const [showBar, setShowBar] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const [showLanguagePanel, setShowLanguagePanel] = useState(false);
    const [svgColor, setSvgColor] = useState(isDarkModeEnabled() ? "#FFFFFF" : "#393939");

    useEffect(() => {
        setSVGColorGlobal = setSvgColor;
    }, []);

    useEffect(() => {
        const observer = new MutationObserver(() => {
            setSvgColor(isDarkModeEnabled() ? "#FFFFFF" : "#393939");
        });

        observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

        return () => observer.disconnect();
    }, []);

    if (!content || !content.home || !content.home.BarraDeOpciones || !content.home.BarraDeOpciones2) {
        return <p>Cargando...</p>;
    }

    const textos1 = content.home.BarraDeOpciones[language];
    const textos2 = content.home.BarraDeOpciones2[language];

    return (
        <>
            {/* Botón SIEMPRE visible para abrir la barra */}
            <button className={styles.toggleButton} onClick={() => setShowBar(!showBar)}>
                ☰
            </button>

            {/* Barra de opciones */}
            <div className={`${styles.barra} ${showBar ? styles.visible : ""}`}>
                <Link to="/" className={styles.boton}>{textos1.inicio}</Link>
                <Link to="/Conocenos" className={styles.boton}>{textos1.conocenos}</Link>

                {/* Dropdown soluciones */}
                <div className={styles.dropdown}>
                    <button className={styles.boton} onClick={() => setShowDropdown(!showDropdown)}>
                        {textos1.soluciones}
                        <svg className={styles.dropdownSymbol} viewBox="0 0 24 24" width="20" height="20">
                            <path d="M5 9l7 7 7-7" stroke={svgColor} strokeWidth="3" fill="none" />
                        </svg>
                    </button>

                    {showDropdown && (
                        <div className={styles.panel}>
                            <Link to="/Seguridad" className={styles.boton}>{textos1.seguridad}</Link>
                            <Link to="/Servicio" className={styles.boton}>{textos1.servicio}</Link>
                            <Link to="/Tecnologia" className={styles.boton}>{textos1.tecnologia}</Link>
                        </div>
                    )}
                </div>

                <Link to="/Lidermania" className={styles.boton}>
                    {textos1.lidermania} <span className={styles.highlight}>{textos1.unete}</span>
                </Link>

                {/* Botón Contacto */}
                <button className={styles.boton}>{textos2.contactanos}</button>

                {/* Dropdown idioma con el nuevo SVG */}
                <div className={styles.dropdown}>
                    <button className={styles.boton} onClick={() => setShowLanguagePanel(!showLanguagePanel)}>
                        <svg
                            className={styles.globeIcon}
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                        >
                            <circle cx="12" cy="12" r="10" stroke={svgColor} strokeWidth="2" fill="none" />
                            <line x1="2" y1="9" x2="22" y2="9" stroke={svgColor} strokeWidth="2" />
                            <line x1="2" y1="15" x2="22" y2="15" stroke={svgColor} strokeWidth="2" />
                            <path d="M12,2 C17,6 17,18 12,22" stroke={svgColor} strokeWidth="2" fill="none" />
                            <path d="M12,2 C7,6 7,18 12,22" stroke={svgColor} strokeWidth="2" fill="none" />
                        </svg>
                        <svg className={styles.dropdownSymbol} viewBox="0 0 24 24" width="20" height="20">
                            <path d="M5 9l7 7 7-7" stroke={svgColor} strokeWidth="3" fill="none" />
                        </svg>
                    </button>

                    {showLanguagePanel && (
                        <div className={styles.panel}>
                            <button className={styles.boton} onClick={() => setLanguage('es')}>
                                {textos2.espanol} 🇪🇸
                            </button>
                            <button className={styles.boton} onClick={() => setLanguage('en')}>
                                {textos2.ingles} 🇺🇸
                            </button>
                        </div>
                    )}
                </div>
                <div style={{ height: "15px" }}></div>

                <Switch />
            </div>
        </>
    );
}

export default BarraDeOpciones3;
