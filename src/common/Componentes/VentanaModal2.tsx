import { useContent } from "./Sistemas/useContent.tsx";  // Asegúrate de que el nombre de la ruta sea el correcto
import { useLanguage } from "./Sistemas/LanguageContext.tsx";  // Asegúrate de que el nombre de la ruta sea el correcto
import styles from "../css/VentanaModal2.module.css";

// Cambiar la definición del componente para recibir `onClose` como prop
function VentanaModal2({ onClose }: { onClose: () => void }) {
    const { language } = useLanguage();  // Obtener el idioma actual
    const content = useContent();  // Obtener los datos del JSON

    // Si los datos aún no están disponibles, muestra un mensaje de carga.
    if (!content) {
        return <div>Cargando...</div>;
    }

    // Obtenemos los datos correspondientes para el modal en el idioma actual
    const modalData = content.Tecnologia.Modal2[language];

    const handleOverlayClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();  // Llamar a onClose cuando se hace clic fuera del modal
        }
    };

    return (
        <>
            <div className={styles.modalOverlay} onClick={handleOverlayClick}>
                <div className={styles.modal}>
                    <div className={styles.modalHeader}>
                        <h5 className={styles.modalTitle}>{modalData.Titulo}</h5>
                    </div>

                    <div className={styles.modalBody}>
                        <div className={styles.mainTextContainer}>
                            <p className={styles.mainText}>{modalData.Texto}</p>
                        </div>

                        <div className={styles.row}>
                            <div className={styles.containerLeft}>
                                <img className={styles.image} src={content.Tecnologia.Modal2.Common.ImagenIzq} alt="Imagen izquierda" />
                                <h6 className={styles.title}>{modalData.TituloIzq}</h6>
                                <p className={styles.text}>{modalData.TextoIzq}</p>
                            </div>

                            <div className={styles.containerRight}>
                                <img className={styles.image} src={content.Tecnologia.Modal2.Common.ImagenDer} alt="Imagen derecha" />
                                <h6 className={styles.title}>{modalData.TituloDer}</h6>
                                <p className={styles.text}>{modalData.TextoDer}</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.modalFooter}>
                        <button onClick={onClose} className={styles.closeButton}>
                            {modalData.BotonCerrar}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default VentanaModal2;
