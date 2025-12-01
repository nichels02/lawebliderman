import { useContent } from "./Sistemas/useContent";
import styles from "../css/BotonWhatsapp.module.css";
import LazyImage from './Sistemas/LazyImage.tsx';

function BotonWhatsapp() {
    const content = useContent();

    // ✅ Verifica que `content` y `content.home` existan antes de acceder
    if (!content || !content.home) return <p>Cargando...</p>;

    const Common = content.home.BotonWhatsapp

    return (
        <div className={styles.ContenedorPadre}>
            <a
                href={Common.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.boton}
                aria-label={Common.nombre}
            >
                <LazyImage
                    src={Common.Imagen}
                    alt=""
                    aria-hidden="true"
                    className={styles.Imagen}
                />
            </a>
        </div>
    );
}

export default BotonWhatsapp;
