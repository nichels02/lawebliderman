import styles from '../css/Footer.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            <p>&copy; {new Date().getFullYear()} Mi Empresa. Todos los derechos reservados.</p>
            <p>
                <a href="/politica-de-privacidad" className={styles.link}>Política de Privacidad</a> |
                <a href="/terminos-y-condiciones" className={styles.link}>Términos y Condiciones</a>
            </p>
        </footer>
    );
}

export default Footer;