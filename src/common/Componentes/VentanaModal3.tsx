import { useState } from "react";
import styles from "../css/VentanaModal3.module.css";

function VentanaModal3() {
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
                            {/* Contenedor principal */}
                            <div className={styles.mainTextContainer}>
                                <p className={styles.mainText}>
                                    Nuestra plataforma permite a los clientes corporativos gestionar sus cuentas conectadas al servicio de monitoreo de alarmas de Liderman. Accede desde cualquier navegador para revisar el estado de tus cuentas en tiempo real, recibir alertas auditivas, contactar con Liderman y generar reportes personalizados.
                                </p>
                            </div>

                            {/* Fila de contenedores izquierdo y derecho */}
                            <div className={styles.row}>
                                <div className={styles.container}>
                                    <img className={styles.image} src="src/assets/Tiktok.svg" alt="Imagen izquierda" />
                                    <h6 className={styles.title}>Título Izquierda</h6>
                                    <p className={styles.text}>Texto debajo del título izquierdo.</p>
                                </div>

                                <div className={styles.container}>
                                    <img className={styles.image} src="src/assets/Tiktok.svg" alt="Imagen derecha" />
                                    <h6 className={styles.title}>Título Derecha</h6>
                                    <p className={styles.text}>Texto debajo del título derecho.</p>
                                </div>
                            </div>

                            {/* Fila de contenedores abajo */}
                            <div className={styles.row}>
                                <div className={styles.container}>
                                    <img className={styles.image} src="src/assets/Tiktok.svg" alt="Imagen inferior izquierda" />
                                    <h6 className={styles.title}>Título Inferior Izquierda</h6>
                                    <p className={styles.text}>Texto debajo del título inferior izquierdo.</p>
                                </div>

                                <div className={styles.container}>
                                    <img className={styles.image} src="src/assets/Tiktok.svg" alt="Imagen inferior derecha" />
                                    <h6 className={styles.title}>Título Inferior Derecha</h6>
                                    <p className={styles.text}>Texto debajo del título inferior derecho.</p>
                                </div>
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

export default VentanaModal3;
