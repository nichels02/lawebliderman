import { useState } from "react";
import { useContent } from "./Sistemas/useContent.tsx";  // Contexto de los datos
import { useLanguage } from "./Sistemas/LanguageContext.tsx"; // Contexto de los idiomas
import styles from "../css/VentanaModal3.module.css";

function VentanaModal3() {
    const [isOpen, setIsOpen] = useState(true); // Inicialmente está abierto por defecto

    const contentData = useContent(); // Obtener datos del contexto Content
    const { language } = useLanguage(); // Obtener el idioma actual

    // Si no hay datos, no mostrar el modal
    if (!contentData) {
        return null;
    }

    // Obtener los datos correspondientes del modal según el idioma
    const modalData = contentData.Tecnologia.Modal3;
    const modalContent = modalData[language];

    // Función para cerrar el modal
    const closeModal = () => setIsOpen(false);

    // Función para cerrar el modal al hacer clic fuera del panel
    const handleOverlayClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    };

    return (
        <>
            {/* Panel */}
            {isOpen && (
                <div className={styles.modalOverlay} onClick={handleOverlayClick}>
                    <div className={styles.modal}>
                        {/* Header del modal */}
                        <div className={styles.modalHeader}>
                            <h5 className={styles.modalTitle}>{modalContent.Titulo}</h5>
                        </div>

                        {/* Cuerpo del modal */}
                        <div className={styles.modalBody}>
                            {/* Contenedor principal */}
                            <div className={styles.mainTextContainer}>
                                <p className={styles.mainText}>
                                    {modalContent.Texto}
                                </p>
                            </div>

                            {/* Fila de contenedores izquierdo y derecho */}
                            <div className={styles.row}>
                                <div className={styles.container}>
                                    <img className={styles.image} src={modalData.Common.ImagenIzqArriba} alt="Imagen izquierda" />
                                    <h6 className={styles.title}>{modalContent.TituloIzqArriba}</h6>
                                    <p className={styles.text}>{modalContent.TextoIzqArriba}</p>
                                </div>

                                <div className={styles.container}>
                                    <img className={styles.image} src={modalData.Common.ImagenDerArriba} alt="Imagen derecha" />
                                    <h6 className={styles.title}>{modalContent.TituloDerArriba}</h6>
                                    <p className={styles.text}>{modalContent.TextoDerArriba}</p>
                                </div>
                            </div>

                            {/* Fila de contenedores abajo */}
                            <div className={styles.row}>
                                <div className={styles.container}>
                                    <img className={styles.image} src={modalData.Common.ImagenIzqAbajo} alt="Imagen inferior izquierda" />
                                    <h6 className={styles.title}>{modalContent.TituloIzqAbajo}</h6>
                                    <p className={styles.text}>{modalContent.TextoIzqAbajo}</p>
                                </div>

                                <div className={styles.container}>
                                    <img className={styles.image} src={modalData.Common.ImagenDerAbajo} alt="Imagen inferior derecha" />
                                    <h6 className={styles.title}>{modalContent.TituloDerAbajo}</h6>
                                    <p className={styles.text}>{modalContent.TextoDerAbajo}</p>
                                </div>
                            </div>
                        </div>

                        {/* Footer del modal */}
                        <div className={styles.modalFooter}>
                            <button onClick={closeModal} className={styles.closeButton}>
                                {modalContent.BotonCerrar}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default VentanaModal3;
