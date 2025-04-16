import { useState } from "react";
import styles from "../css/VentanaModal1.module.css";
import { useContent } from "./Sistemas/useContent.tsx"; // Importa el hook del ContentProvider
import { useLanguage } from "./Sistemas/LanguageContext.tsx"; // Importa el hook del LanguageProvider

function VentanaModal1() {
    const [isOpen, setIsOpen] = useState(true); // Inicialmente está abierto por defecto
    const { language } = useLanguage(); // Obtiene el idioma actual
    const data = useContent(); // Obtiene los datos del contexto

    if (!data) {
        return <div>Cargando...</div>; // Muestra un mensaje mientras se carga el contenido
    }

    // Accede a los datos del Modal1 dependiendo del idioma actual
    const modalData = language === 'es' ? data.Tecnologia.Modal1.es : data.Tecnologia.Modal1.en;

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
                            <h5 className={styles.modalTitle}>{modalData.Titulo}</h5>
                        </div>

                        {/* Cuerpo del modal */}
                        <div className={styles.modalBody}>
                            {/* Contenedor izquierdo */}
                            <div className={styles.modalBodyLeft}>
                                <p>{modalData.Texto}</p>
                            </div>

                            {/* Contenedor derecho */}
                            <div className={styles.modalBodyRight}>
                                <img
                                    className={styles.modalImage}
                                    src={data.Tecnologia.Modal1.Common.Imagen}
                                    alt="Imagen del modal"
                                />
                            </div>
                        </div>

                        {/* Footer del modal */}
                        <div className={styles.modalFooter}>
                            <button onClick={closeModal} className={styles.closeButton}>
                                {modalData.BotonCerrar}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default VentanaModal1;
