import { useState } from "react";
import styles from "../css/CuadriculaDeModals.module.css";
import VentanaModal1 from "./VentanaModal1";
import VentanaModal2 from "./VentanaModal2";
import VentanaModal3 from "./VentanaModal3";
import VentanaModal4 from "./VentanaModal4";
import { useContent } from "./Sistemas/useContent.tsx";
import { useLanguage } from "./Sistemas/LanguageContext.tsx";

function CuadriculaDeModals() {
    const [modalAbierto, setModalAbierto] = useState<number | null>(null);
    const content = useContent();
    const { language } = useLanguage();

    // Asegúrate de que el contenido esté cargado antes de acceder a él
    if (!content) return <div>Cargando...</div>;

    const data = content.Tecnologia.CuadriculaDeModals;
    const modalData = data[language]; // Accede a los datos según el idioma seleccionado
    const commonData = data.Common; // Accede a los fondos comunes

    const modals = [
        {
            title: modalData.Sector1.Titulo,
            text: modalData.Sector1.Texto,
            image: commonData.Fondo1, // Fondo común
            moreInfoText: modalData.Sector1.MasInformacion, // Texto "Más información"
            buttonText: modalData.Sector1.TextoOSimboloDeBoton, // Texto del botón "+"
            component: <VentanaModal1 />
        },
        {
            title: modalData.Sector2.Titulo,
            text: modalData.Sector2.Texto,
            image: commonData.Fondo2, // Fondo común
            moreInfoText: modalData.Sector2.MasInformacion, // Texto "Más información"
            buttonText: modalData.Sector2.TextoOSimboloDeBoton, // Texto del botón "+"
            component: <VentanaModal2 />
        },
        {
            title: modalData.Sector3.Titulo,
            text: modalData.Sector3.Texto,
            image: commonData.Fondo3, // Fondo común
            moreInfoText: modalData.Sector3.MasInformacion, // Texto "Más información"
            buttonText: modalData.Sector3.TextoOSimboloDeBoton, // Texto del botón "+"
            component: <VentanaModal3 />
        },
        {
            title: modalData.Sector4.Titulo,
            text: modalData.Sector4.Texto,
            image: commonData.Fondo4, // Fondo común
            moreInfoText: modalData.Sector4.MasInformacion, // Texto "Más información"
            buttonText: modalData.Sector4.TextoOSimboloDeBoton, // Texto del botón "+"
            component: <VentanaModal4 />
        }
    ];

    return (
        <div className={styles.container}>
            <div className={styles.grid}>
                {modals.map((modal, index) => (
                    <div key={index} className={styles.box} style={{ backgroundImage: `url(${modal.image})` }}>
                        <h3 className={styles.title}>{modal.title}</h3>
                        <p className={styles.text}>{modal.text}</p>
                        <div className={styles.bottomRightContainer}>
                            <span className={styles.smallText}>{modal.moreInfoText}</span>
                            <button className={styles.button} onClick={() => setModalAbierto(index)}>{modal.buttonText}</button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Renderiza solo el modal seleccionado */}
            {modalAbierto !== null && modals[modalAbierto].component}
        </div>
    );
}

export default CuadriculaDeModals;
