import { useEffect, useState } from 'react';
import styles from '../css/Footer.module.css';
import { Link } from 'react-router-dom'; // Asegúrate de importar Link


// Importar ambas versiones de cada imagen
import logoLight from '../../assets/ImagenesGenerales/Logo-Liderman3.svg';
import logoDark from '../../assets/ImagenesGenerales/Logo-Liderman.svg';
import facebookLight from '../../assets/ImagenesGenerales/LogoFacebook2.svg';
import facebookDark from '../../assets/ImagenesGenerales/LogoFacebook.svg';
import tiktokLight from '../../assets/ImagenesGenerales/LogoTiktok2.svg';
import tiktokDark from '../../assets/ImagenesGenerales/LogoTiktok.svg';
import linkedinLight from '../../assets/ImagenesGenerales/LogoLinkedin2.svg';
import linkedinDark from '../../assets/ImagenesGenerales/LogoLinkedin.svg';
import youtubeLight from '../../assets/ImagenesGenerales/LogoYoutube2.svg';
import youtubeDark from '../../assets/ImagenesGenerales/LogoYoutube.svg';

function Footer() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        // Verificar el modo actual al montar el componente
        const checkDarkMode = () => {
            const isDark = document.documentElement.classList.contains('dark-mode');
            setDarkMode(isDark);
        };

        checkDarkMode();

        // Configurar un observador para cambios en el atributo class
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

    // Seleccionar imágenes basadas en el modo actual
    const logo = darkMode ? logoDark : logoLight;
    const facebookIcon = darkMode ? facebookDark : facebookLight;
    const tiktokIcon = darkMode ? tiktokDark : tiktokLight;
    const linkedinIcon = darkMode ? linkedinDark : linkedinLight;
    const youtubeIcon = darkMode ? youtubeDark : youtubeLight;

    return (
        <div className={styles.footerContainer}>
            <footer className={styles.footer}>
                {/* Primera Sección */}
                <div className={styles.topSection}>
                    <div className={styles.logoSection}>
                        <img src={logo} alt="Logo Liderman" className={styles.logo} />
                        <p className={styles.logoText}>Valemos tanto como lo que cuidamos</p>
                    </div>

                    <div className={styles.columnsContainer}>
                        <div className={styles.column}>
                            <h4>Inicio</h4>
                            <Link
                                to="/#CardWithExpand"  // Navega a "/" con hash
                                className={styles.menuButton}
                            >
                                Soluciones
                            </Link>
                            <Link
                                to="/#Marquee"  // Navega a "/" con hash
                                className={styles.menuButton}
                            >
                                Certificaciones
                            </Link>
                            <Link
                                to="/#PorcentajeNegocio"  // Navega a "/" con hash
                                className={styles.menuButton}
                            >
                                Presencia
                            </Link>
                            <Link
                                to="/#ImagenYGrid2"  // Navega a "/" con hash
                                className={styles.menuButton}
                            >
                                Cultura
                            </Link>
                        </div>

                        <div className={styles.column}>

                            <h4>Conócenos</h4>
                            <Link
                                to="/Conocenos#HeaderGenerico"  // Navega a "/" con hash
                                className={styles.menuButton}
                            >
                                ¿Quiénes somos?
                            </Link>
                            <Link
                                to="/Conocenos#HeaderGenerico"  // Navega a "/" con hash
                                className={styles.menuButton}
                            >
                                Historia
                            </Link>
                        </div>

                        <div className={styles.column}>



                            <h4>Soluciones</h4>
                            <Link
                                to="/Seguridad"  // Navega a "/" con hash
                                className={styles.menuButton}
                            >
                                Seguridad
                            </Link>
                            <Link
                                to="/Tecnologia"  // Navega a "/" con hash
                                className={styles.menuButton}
                            >
                                Tecnología
                            </Link>
                            <Link
                                to="/Servicio"  // Navega a "/" con hash
                                className={styles.menuButton}
                            >
                                Servicios
                            </Link>

                        </div>

                        <div className={styles.column}>
                            <h4>Lidermanía</h4>
                            <Link
                                to="/Lidermania#DonaRotativa2"  // Navega a "/" con hash
                                className={styles.menuButton}
                            >
                                Mejores Personas
                            </Link>
                            <Link
                                to="/Lidermania#DonaRotativa2"  // Navega a "/" con hash
                                className={styles.menuButton}
                            >
                                4 AMAS
                            </Link>
                            <Link
                                to="/Lidermania#CarruselDeTrabajos"  // Navega a "/" con hash
                                className={styles.menuButton}
                            >
                                Únete al equipo
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
                                <h3 className={styles.cardTitle}>¿Necesitas asesoría?</h3>
                                <p className={styles.cardSubtitle}>Nuestros especialistas están listos para ayudarte</p>
                            </div>
                            <button className={`${styles.squareButton} ${styles.primary}`}>➔</button>
                        </div>

                        {/* Card Secundaria */}
                        <div className={`${styles.actionCard} ${styles.secondary}`}>
                            <div className={`${styles.cardTextContent} ${styles.secondary}`}>
                                <h3 className={styles.cardTitle}>Trabaja con nosotros</h3>
                                <p className={styles.cardSubtitle}>Sé parte de nuestro equipo de expertos</p>
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
                            <span className={styles.copyright}>&copy; 2025 Liderman. Todos los derechos reservados.</span>
                            <button className={styles.legalButton}>Términos y Condiciones</button>
                            <button className={styles.legalButton}>Política de Privacidad</button>
                        </div>

                        <div className={styles.socialLinks}>
                            <a href="#" className={styles.socialLink}>
                                <img src={facebookIcon} alt="Facebook" className={styles.socialIcon} />
                            </a>
                            <a href="#" className={styles.socialLink}>
                                <img src={tiktokIcon} alt="Tiktok" className={styles.socialIcon} />
                            </a>
                            <a href="#" className={styles.socialLink}>
                                <img src={linkedinIcon} alt="LinkedIn" className={styles.socialIcon} />
                            </a>
                            <a href="#" className={styles.socialLink}>
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