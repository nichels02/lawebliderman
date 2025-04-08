import { useState, useEffect } from "react";
import styles from "../css/HeaderCambioDeImagen.module.css";
import { useContent } from "./Sistemas/useContent.tsx";
import { useLanguage } from "./Sistemas/LanguageContext.tsx";

function HeaderCambioDeImagen() {
    const { language } = useLanguage();
    const content = useContent()?.Tecnologia.HeaderCambioDeImagen;
    const [imagenActual, setImagenActual] = useState("");

    // Efecto para cargar la imagen inicial
    useEffect(() => {
        if (content?.Common?.imagenes1) {
            setImagenActual(content.Common.imagenes1);
        }
    }, [content]);

    return (
        <div
            className={styles.contenedorPadre}
            style={{ backgroundImage: `url(${content?.Common?.Fondo})` }}
        >
            <img
                src={content?.Common?.logo}
                alt="Logo"
                className="logoHeader"
            />

            <div className={styles.contenedorContenido}>
                <div className={styles.contenedorTexto}>
                    <h1 className={styles.titulo}>
                        {content?.[language]?.Titulo ?? content?.es?.Titulo}
                    </h1>
                    <p className={styles.texto}>
                        {content?.[language]?.Texto ?? content?.es?.Texto}
                    </p>
                </div>

                <div className={styles.contenedorImagen}>
                    <img
                        src={imagenActual}
                        alt="Imagen Principal"
                        className={styles.imagenPrincipal}
                    />
                </div>
            </div>

            <div className={styles.contenedorBotones}>
                {[1, 2, 3, 4].map((index) => (
                    <button
                        key={index}
                        className={styles.boton}
                        onClick={() => setImagenActual(
                            content?.Common?.[`imagenes${index}` as keyof typeof content.Common] || ""
                        )}
                    >
                        {content?.[language]?.[`boton${index}` as keyof typeof content.es] ??
                            content?.es?.[`boton${index}` as keyof typeof content.es]}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default HeaderCambioDeImagen;