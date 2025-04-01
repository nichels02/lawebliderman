import { useState } from "react";
import styles from "../css/VentanaModal1.module.css";

function VentanaModal1() {
    const [isOpen, setIsOpen] = useState(true); // Inicialmente está abierto por defecto

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
                            <h5 className={styles.modalTitle}>Título del Panel</h5>
                        </div>

                        {/* Cuerpo del modal */}
                        <div className={styles.modalBody}>
                            {/* Contenedor izquierdo */}
                            <div className={styles.modalBodyLeft}>
                                <p>Monitorea en tiempo real con nuestro sistema de CCTV P2P, conectado a internet. Obtén respuestas rápidas y precisas para incidentes sin riesgo. garantizando una gestión más eficiente.</p>
                                <p>Utilizamos una licencia especial de protocolo P2P, que simplifica la instalación al evitar abrir puertos en tu router, brindándote mayor seguridad y facilidad.</p>

                            </div>

                            {/* Contenedor derecho */}
                            <div className={styles.modalBodyRight}>
                                <img
                                    className={styles.modalImage}
                                    src="src/assets/1920-x-1080-hd-1qq8r4pnn8cmcew4.jpg"
                                    alt="Imagen del modal"
                                />
                            </div>
                        </div>

                        {/* Footer del modal */}
                        <div className={styles.modalFooter}>
                            <button onClick={closeModal} className={styles.closeButton}>Cerrar</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default VentanaModal1;
