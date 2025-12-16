import { useState, useEffect } from 'react';
import styles from '../css/BarraDeOpciones2.module.css';
import Switch from './Switch.tsx';
import { useLanguage } from './Sistemas/LanguageContext';
import { useContent } from './Sistemas/useContent';
import { isDarkModeEnabled } from './Sistemas/toggleDarkMode.ts';
import { useLocation } from 'react-router-dom';
import ScrollLink from "./Sistemas/ScrollLink.tsx";
import LazyImage from "./Sistemas/LazyImage.tsx";

// Estado global para el color
let setSVGColorGlobal: (isDark: boolean) => void;

export function updateSVGColor() {
    if (setSVGColorGlobal) {
        setSVGColorGlobal(isDarkModeEnabled());
    }
}

function BarraDeOpciones2() {
    const [showPanelPaises, setShowPanelPaises] = useState(false);
    const { language, setLanguage } = useLanguage();
    const content = useContent();
    const location = useLocation();

    // Estado para el color del SVG (debe declararse antes de cualquier `return`)
    const [svgColor, setSvgColor] = useState(isDarkModeEnabled());

    // Guardar función para actualizar color desde fuera
    useEffect(() => {
        setSVGColorGlobal = setSvgColor;
    }, []);

    // 🔹 Evita el error de hooks ejecutando `return` después de definirlos
    if (!content || !content.home || !content.home.BarraDeOpciones2) {
        return <p>Cargando...</p>;
    }

    const textos = content.home.BarraDeOpciones2[language];
    const Imagen = content.home.BarraDeOpciones2.Common;

    return (
        <div className={styles.barra}>
            {/*<Link*/}
            {/*    to={}*/}
            {/*    className={styles.boton}*/}
            {/*>*/}
            {/*    {textos.contactanos}*/}
            {/*</Link>*/}
            <ScrollLink to= {`${location.pathname}#FormularioDeContacto`}
                 scrollMode="top" className={styles.boton} >
                {textos.contactanos}
            </ScrollLink>
            <div
                className={styles.dropdownContainer}
            >
                <button className={`${styles.boton} ${styles.idioma}`}
                        onClick={() =>
                            language=='es'?
                                setLanguage('en'):
                                setLanguage('es')}
                >
                    <div className={styles.ContenedorImagenesBanderaIdiomas}>
                        <LazyImage
                            //src={svgColor? Imagen.Flecha.claro : Imagen.Flecha.oscuro}
                            src={language=='es'? Imagen.BanderaEspanol : Imagen.BanderaIngles}
                            alt={""}
                            className={styles.ImagenesBanderaIdiomas}
                        />
                    </div>

                    {language=='es'? 'ES':'EN'}
                </button>
            </div>


            <div
                className={styles.dropdownContainer}
                onMouseEnter={() => setShowPanelPaises(true)}
                onMouseLeave={() => setShowPanelPaises(false)}
            >
                <button className={styles.boton}>
                    <div className={styles.globeIcon}>
                        <LazyImage
                            // src={svgColor? Imagen.Bandera_Inicial.oscuro : Imagen.Bandera_Inicial.claro}
                            src={svgColor? Imagen.Mundo.claro : Imagen.Mundo.oscuro}
                            alt={""} className={styles.Imagen}/>
                    </div>
                    <div className={styles.dropdownSymbol}>
                        <LazyImage
                            src={svgColor? Imagen.Flecha.claro : Imagen.Flecha.oscuro}
                            alt={""} className={styles.Imagen}/>
                    </div>
                </button>
                {showPanelPaises && (
                    <div className={styles.panelPaises}>
                        {/*<button className={styles.boton} onClick={() => setLanguage('es')}>*/}
                        {/*    {textos.espanol} 🇪🇸*/}
                        {/*</button>*/}
                        {/*<button className={styles.boton} onClick={() => setLanguage('en')}>*/}
                        {/*    {textos.ingles} 🇺🇸*/}
                        {/*</button>*/}

                        {Imagen.Banderas.map((opcion, i) => (
                            <a
                                key={i}
                                href={opcion.Link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.boton}
                                aria-label={opcion.Nombre}
                            >
                                <LazyImage
                                    src={opcion.imagen}
                                    alt=""
                                    aria-hidden="true"
                                    className={styles.Imagen}
                                />
                            </a>
                        ))}
                    </div>
                )}
            </div>


            <Switch />
        </div>
    );
}

export default BarraDeOpciones2;
