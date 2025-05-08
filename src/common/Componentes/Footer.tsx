import { useEffect, useState } from 'react';
import styles from '../css/Footer.module.css';
import { Link } from 'react-router-dom';
import { useLanguage } from './Sistemas/LanguageContext';
import { useContent } from './Sistemas/useContent';

function Footer() {
    const [darkMode, setDarkMode] = useState(false);
    const { language } = useLanguage();
    const content = useContent();

    useEffect(() => {
        const checkDarkMode = () => {
            const isDark = document.documentElement.classList.contains('dark-mode');
            setDarkMode(isDark);
        };

        checkDarkMode();

        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'class') {
                    checkDarkMode();
                }
            });
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class']
        });

        return () => observer.disconnect();
    }, []);

    if (!content) return null;

    const footerContent = content.home.Footer;
    const common = footerContent.Common;
    const localized = footerContent[language];

    const logo = darkMode ? common.LidermanLogoDark : common.LidermanLogoLight;
    const facebookIcon = darkMode ? common.facebookDark : common.facebookLight;
    const tiktokIcon = darkMode ? common.tiktokDark : common.tiktokLight;
    const linkedinIcon = darkMode ? common.linkedinDark : common.linkedinLight;
    const youtubeIcon = darkMode ? common.youtubeDark : common.youtubeLight;

    return (
        <div className={styles.footerContainer}>
            <footer className={styles.footer}>
                {/* Primera Sección */}
                <div className={styles.topSection}>
                    <div className={styles.logoSection}>
                        <img src={logo} alt="Logo Liderman" className={styles.logo} />
                        <p className={styles.logoText}>{localized.Eslogan}</p>
                    </div>

                    <div className={styles.columnsContainer}>
                        <div className={styles.column}>
                            <h4>{localized.Inicio.Titulo}</h4>
                            <Link to="/#CardWithExpand" className={styles.menuButton}>
                                {localized.Inicio.Soluciones}
                            </Link>
                            <Link to="/#Marquee" className={styles.menuButton}>
                                {localized.Inicio.Certificaciones}
                            </Link>
                            <Link to="/#PorcentajeNegocio" className={styles.menuButton}>
                                {localized.Inicio.Presencia}
                            </Link>
                            <Link to="/#ImagenYGrid2" className={styles.menuButton}>
                                {localized.Inicio.Cultura}
                            </Link>
                        </div>

                        <div className={styles.column}>
                            <h4>{localized.Conocenos.Titulo}</h4>
                            <Link to="/Conocenos#HeaderGenerico" className={styles.menuButton}>
                                {localized.Conocenos.QuienesSomos}
                            </Link>
                            <Link to="/Conocenos#HeaderGenerico" className={styles.menuButton}>
                                {localized.Conocenos.Historia}
                            </Link>
                        </div>

                        <div className={styles.column}>
                            <h4>{localized.Soluciones.Titulo}</h4>
                            <Link to="/Seguridad" className={styles.menuButton}>
                                {localized.Soluciones.Seguridad}
                            </Link>
                            <Link to="/Tecnologia" className={styles.menuButton}>
                                {localized.Soluciones.Tecnologia}
                            </Link>
                            <Link to="/Servicio" className={styles.menuButton}>
                                {localized.Soluciones.Servicio}
                            </Link>
                        </div>

                        <div className={styles.column}>
                            <h4>{localized.lidermania.Titulo}</h4>
                            <Link to="/Lidermania#DonaRotativa2" className={styles.menuButton}>
                                {localized.lidermania.MejoresPersonas}
                            </Link>
                            <Link to="/Lidermania#DonaRotativa2" className={styles.menuButton}>
                                {localized.lidermania.CuatroAmas}
                            </Link>
                            <Link to="/Lidermania#CarruselDeTrabajos" className={styles.menuButton}>
                                {localized.lidermania.Unete}
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Segunda Sección - Contenedores con botones cuadrados */}
                <div className={styles.middleSection}>
                    <div className={styles.actionCardsContainer}>
                        {/* Card Primaria */}
                        <div className={`${styles.actionCard} ${styles.primary}`}>
                            <div className={`${styles.cardTextContent} ${styles.primary}`}>
                                <h3 className={styles.cardTitle}>{localized.Boton1.Titulo}</h3>
                                <p className={styles.cardSubtitle}>{localized.Boton1.Subtitulo}</p>
                            </div>
                            <button className={`${styles.squareButton} ${styles.primary}`}>➔</button>
                        </div>

                        {/* Card Secundaria */}
                        <div className={`${styles.actionCard} ${styles.secondary}`}>
                            <div className={`${styles.cardTextContent} ${styles.secondary}`}>
                                <h3 className={styles.cardTitle}>{localized.Boton2.Titulo}</h3>
                                <p className={styles.cardSubtitle}>{localized.Boton2.Subtitulo}</p>
                            </div>
                            <button className={`${styles.squareButton} ${styles.secondary}`}>➔</button>
                        </div>
                    </div>
                </div>

                {/* Tercera Sección - Todo en una línea */}
                <div className={styles.bottomSection}>
                    <div className={styles.divider}></div>

                    <div className={styles.bottomContent}>
                        <div className={styles.legal}>
                            <span className={styles.copyright}>
                                &copy; 2025 Liderman. {localized.TextosFinales.DerechosReservados}
                            </span>
                            <button className={styles.legalButton}>{localized.TextosFinales.TerminosYCondiciones}</button>
                            <button className={styles.legalButton}>{localized.TextosFinales.PoliticaDePrivacidad}</button>
                        </div>

                        <div className={styles.socialLinks}>
                            <a href={common.Links.facebook} className={styles.socialLink} target="_blank" rel="noopener noreferrer">
                                <img src={facebookIcon} alt="Facebook" className={styles.socialIcon} />
                            </a>
                            <a href={common.Links.tiktok} className={styles.socialLink} target="_blank" rel="noopener noreferrer">
                                <img src={tiktokIcon} alt="Tiktok" className={styles.socialIcon} />
                            </a>
                            <a href={common.Links.linkedin} className={styles.socialLink} target="_blank" rel="noopener noreferrer">
                                <img src={linkedinIcon} alt="LinkedIn" className={styles.socialIcon} />
                            </a>
                            <a href={common.Links.youtube} className={styles.socialLink} target="_blank" rel="noopener noreferrer">
                                <img src={youtubeIcon} alt="YouTube" className={styles.socialIcon} />
                            </a>
                        </div>

                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
