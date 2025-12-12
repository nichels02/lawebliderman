import { useContent } from "./Sistemas/useContent";
import { useLanguage } from "./Sistemas/LanguageContext";
import styles from "../css/LinkACotizacion.module.css";
// import LazyImage from './Sistemas/LazyImage.tsx';
import {Link} from "react-router-dom";

function LinkACotizacion() {
    const { language } = useLanguage();
    const content = useContent();

    // ✅ Verifica que `content` y `content.home` existan antes de acceder
    if (!content || !content.home) return <p>Cargando...</p>;

    const textos = content.home.LinkCotizacion[language]; // ✅ Seguridad de tipos

    return (
        <div className={styles.ContenedorPadre}>
            <div className={styles.Titulo}>
                <h3>{textos.Titulo}</h3>

            </div>
            <Link
                to="/Cotizacion"
                className={styles.boton}
            >
                <p>{textos.TextoBoton}</p>
            </Link>
        </div>
    );
}

export default LinkACotizacion;
