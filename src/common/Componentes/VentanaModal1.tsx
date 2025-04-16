import { useState, useEffect } from "react";
import styles from "../css/VentanaModal1.module.css";
import { useContent } from "./Sistemas/useContent.tsx"; // Importa el hook del ContentProvider
import { useLanguage } from "./Sistemas/LanguageContext.tsx"; // Importa el hook del LanguageProvider

type VentanaModal1Props = {
    onClose: () => void;
};

function VentanaModal1({ onClose }: VentanaModal1Props) {
    const [isOpen, setIsOpen] = useState(true); // Inicialmente está abierto por defecto
    const { language } = useLanguage(); // Obtiene el idioma actual
    const data = useContent(); // Obtiene los datos del contexto

    useEffect(() => {
        if (!isOpen) {
            onClose(); // Notifica al padre que el modal se cerró
        }
    }, [isOpen, onClose]);

    if (!data) {
        return <div>Cargando...</div>; // Muestra un mensaje mientras se carga el contenido
    }

    const modalData = language === 'es' ? data.Tecnologia.Modal1.es : data.Tecnologia.Modal1.en;

    const closeModal = () => setIsOpen(false);

    const handleOverlayClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    };

    return (
        <>
            {isOpen && (
                <div className={styles.modalOverlay} onClick={handleOverlayClick}>
                    <div className={styles.modal}>
                        <div className={styles.modalHeader}>
                            <h5 className={styles.modalTitle}>{modalData.Titulo}</h5>
                        </div>

                        <div className={styles.modalBody}>
                            <div className={styles.modalBodyLeft}>
                                <p>{modalData.Texto}</p>
                            </div>
                            <div className={styles.modalBodyRight}>
                                <img
                                    className={styles.modalImage}
                                    src={data.Tecnologia.Modal1.Common.Imagen}
                                    alt="Imagen del modal"
                                />
                            </div>
                        </div>

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
