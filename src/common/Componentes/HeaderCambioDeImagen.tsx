import { useState, useEffect } from "react";
import styles from "../css/HeaderCambioDeImagen.module.css";
import { useContent } from "./Sistemas/useContent.tsx";
import { useLanguage } from "./Sistemas/LanguageContext.tsx";

type Boton = {
    Nombre: string;
    Texto: string;
};

type LanguageContent = {
    Titulo: string;
    Texto: string;
    boton1: Boton;
    boton2: Boton;
    boton3: Boton;
    boton4: Boton;
};

function HeaderCambioDeImagen() {
    const { language } = useLanguage();
    const content = useContent()?.Tecnologia.HeaderCambioDeImagen;

    const langContent = content?.[language] as LanguageContent | undefined;
    const fallbackContent = content?.es as LanguageContent | undefined;
    const actualContent = langContent ?? fallbackContent;

    const [textoActual, setTextoActual] = useState("");

    useEffect(() => {
        if (actualContent?.Texto) {
            setTextoActual(actualContent.Texto);
        }
    }, [actualContent]);

    return (
        <div
            className={styles.contenedorPadre}
            style={{ backgroundImage: `url(${content?.Common?.Fondo ?? ""})` }}
        >
            <img
                src={content?.Common?.logo}
                alt="Logo"
                className="logoHeader"
            />

            <div className={styles.contenedorContenido}>
                <div className={styles.contenedorTexto}>
                    <h1 className={styles.titulo}>
                        {actualContent?.Titulo ?? ""}
                    </h1>
                    <p className={styles.texto}>
                        {textoActual}
                    </p>
                </div>

                <div className={styles.contenedorImagen}>
                    <img
                        src={content?.Common?.imagenDerecha ?? ""}
                        alt="Imagen Principal"
                        className={styles.imagenPrincipal}
                    />
                </div>
            </div>

            <div className={styles.contenedorBotones}>
                {[1, 2, 3, 4].map((index) => {
                    const key = `boton${index}` as keyof LanguageContent;
                    const boton = actualContent?.[key];

                    // ✅ Validación para asegurar que es del tipo Boton
                    const isValidBoton =
                        typeof boton === "object" &&
                        boton !== null &&
                        "Nombre" in boton &&
                        "Texto" in boton;

                    return (
                        <button
                            key={index}
                            className={styles.boton}
                            onClick={() => {
                                if (isValidBoton) {
                                    setTextoActual((boton as Boton).Texto);
                                }
                            }}
                        >
                            {isValidBoton ? (boton as Boton).Nombre : `Botón ${index}`}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}

export default HeaderCambioDeImagen;
