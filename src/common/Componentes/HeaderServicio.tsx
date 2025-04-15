import styles from "../css/HeaderServicio.module.css";
import { useContent } from "./Sistemas/useContent.tsx"; // Ajusta la ruta según tu estructura
import { useLanguage } from "./Sistemas/LanguageContext.tsx"; // Ajusta la ruta según tu estructura

function HeaderServicio() {
    const content = useContent();
    const { language } = useLanguage();

    // Evitar que renderice si no hay datos todavía
    if (!content) return null;

    // Accedemos a los datos del JSON
    const data = content.Servicio.header;
    const textos = data[language]; // data.es o data.en
    const fondo = data.Contenido.Fondo;
    const imagenLateral = data.Contenido.ImagenDelCostado;
    const logo = data.Contenido.logo;

    return (
        <header className={styles.header}>
            <div className={styles.headerImageContainer}>
                <img
                    src={fondo}
                    alt="Header Fondo"
                    className={styles.headerImage}
                />
            </div>
            <img src={logo} alt="Logo" className="logoHeader" />
            <div className={styles.container}>
                <div className={styles.left}>
                    <h1 className={styles.title}>{textos.Titulo}</h1>
                    <p className={styles.text}>{textos.Texto}</p>
                </div>
                <div className={styles.right}>
                    <img src={imagenLateral} alt="Imagen descriptiva" />
                </div>
            </div>
        </header>
    );
}

export default HeaderServicio;
