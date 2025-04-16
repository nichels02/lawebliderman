import { useContent } from "./Sistemas/useContent";  // Importar el contexto de contenido
import { useLanguage } from "./Sistemas/LanguageContext";  // Importar el contexto de idioma
import styles from "../css/VentanaModal4.module.css";

// Ahora `VentanaModal4` recibe `onClose` como prop
function VentanaModal4({ onClose }: { onClose: () => void }) {
    const contentData = useContent(); // Obtener datos del contexto Content
    const { language } = useLanguage(); // Obtener el idioma actual

    // Si no hay datos, no mostrar el modal
    if (!contentData) {
        return null;
    }

    // Obtener los datos del modal de acuerdo al idioma actual
    const modalData = contentData.Tecnologia.Modal4;
    const modalContent = modalData[language];

    // Función para cerrar el modal al hacer clic fuera del panel
    const handleOverlayClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();  // Llamar a onClose cuando se hace clic fuera del modal
        }
    };

    return (
        <>
            {/* Panel */}
            <div className={styles.modalOverlay} onClick={handleOverlayClick}>
                <div className={styles.modal}>
                    {/* Header */}
                    <div className={styles.modalHeader}>
                        <h5 className={styles.modalTitle}>{modalContent.Titulo}</h5>
                    </div>

                    {/* Cuerpo */}
                    <div className={styles.modalBody}>
                        <div className={styles.mainTextContainer}>
                            <p className={styles.mainText}>
                                {modalContent.Texto}
                            </p>
                        </div>

                        {/* Fila única con 4 contenedores */}
                        <div className={styles.row}>
                            <div className={styles.container}>
                                <img className={styles.image} src={modalData.Common.Imagen1} alt="Función 1" />
                                <h6 className={styles.title}>{modalContent.Subtitulo1}</h6>
                                <p className={styles.text}>{modalContent.Texto1}</p>
                            </div>

                            <div className={styles.container}>
                                <img className={styles.image} src={modalData.Common.Imagen2} alt="Función 2" />
                                <h6 className={styles.title}>{modalContent.Subtitulo2}</h6>
                                <p className={styles.text}>{modalContent.Texto2}</p>
                            </div>

                            <div className={styles.container}>
                                <img className={styles.image} src={modalData.Common.Imagen3} alt="Función 3" />
                                <h6 className={styles.title}>{modalContent.Subtitulo3}</h6>
                                <p className={styles.text}>{modalContent.Texto3}</p>
                            </div>

                            <div className={styles.container}>
                                <img className={styles.image} src={modalData.Common.Imagen4} alt="Función 4" />
                                <h6 className={styles.title}>{modalContent.Subtitulo4}</h6>
                                <p className={styles.text}>{modalContent.Texto4}</p>
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className={styles.modalFooter}>
                        <button onClick={onClose} className={styles.closeButton}>
                            {modalContent.BotonCerrar}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default VentanaModal4;
