import styles from '../css/Footer.module.css';
import logo from '../../assets/logo.svg';

function Footer() {
    return (
        <footer className={styles.footer}>
            {/* Primera Sección */}
            <div className={styles.topSection}>
                <div className={styles.logoSection}>
                    <img src={logo} alt="Logo" className={styles.logo} />
                    <p className={styles.logoText}>Texto descriptivo de la empresa</p>
                </div>

                <div className={styles.columnsContainer}>
                    {/* Columnas se mantienen igual */}
                    <div className={styles.column}>
                        <h4>Inicio</h4>
                        <button className={styles.menuButton}>Soluciones</button>
                        <button className={styles.menuButton}>Certificaciones</button>
                        <button className={styles.menuButton}>Presencia</button>
                        <button className={styles.menuButton}>Cultura</button>
                    </div>

                    <div className={styles.column}>
                        <h4>Conócenos</h4>
                        <button className={styles.menuButton}>¿Quiénes somos?</button>
                        <button className={styles.menuButton}>Historia</button>
                    </div>

                    <div className={styles.column}>
                        <h4>Soluciones</h4>
                        <button className={styles.menuButton}>Seguridad</button>
                        <button className={styles.menuButton}>Tecnología</button>
                        <button className={styles.menuButton}>Servicios</button>
                    </div>

                    <div className={styles.column}>
                        <h4>Lidermanía</h4>
                        <button className={styles.menuButton}>Mejores Personas</button>
                        <button className={styles.menuButton}>4 AMAS</button>
                        <button className={styles.menuButton}>Únete</button>
                    </div>
                </div>
            </div>

            {/* Segunda Sección */}
            <div className={styles.middleSection}>
                <button className={styles.mainButton}>Botón Principal 1</button>
                <button className={styles.mainButton}>Botón Principal 2</button>
            </div>

            {/* Tercera Sección */}
            <div className={styles.bottomSection}>
                <div className={styles.divider}></div>

                <div className={styles.bottomContent}>
                    <div className={styles.legal}>
                        <p>&copy; {new Date().getFullYear()} Mi Empresa. Todos los derechos reservados.</p>
                        <div className={styles.legalLinks}>
                            <button className={styles.legalButton}>Términos y Condiciones</button>
                            <button className={styles.legalButton}>Política de Privacidad</button>
                        </div>
                    </div>

                    <div className={styles.socialLinks}>
                        <a href="#" className={styles.socialLink}>
                            <img src="/facebook-icon.png" alt="Facebook" className={styles.socialIcon} />
                        </a>
                        <a href="#" className={styles.socialLink}>
                            <img src="/twitter-icon.png" alt="Twitter" className={styles.socialIcon} />
                        </a>
                        <a href="#" className={styles.socialLink}>
                            <img src="/instagram-icon.png" alt="Instagram" className={styles.socialIcon} />
                        </a>
                        <a href="#" className={styles.socialLink}>
                            <img src="/linkedin-icon.png" alt="LinkedIn" className={styles.socialIcon} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;