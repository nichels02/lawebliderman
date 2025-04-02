import { useState } from "react";
import styles from "../css/VentanaModal4.module.css";

function VentanaModal4() {
    const [isOpen, setIsOpen] = useState(true);

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
                        {/* Header */}
                        <div className={styles.modalHeader}>
                            <h5 className={styles.modalTitle}>Título del Panel</h5>
                        </div>

                        {/* Cuerpo */}
                        <div className={styles.modalBody}>
                            <div className={styles.mainTextContainer}>
                                <p className={styles.mainText}>
                                    Nuestra plataforma permite a los clientes corporativos gestionar sus cuentas conectadas al servicio de monitoreo de alarmas de Liderman. Accede desde cualquier navegador para revisar el estado de tus cuentas en tiempo real, recibir alertas auditivas, contactar con Liderman y generar reportes personalizados.
                                </p>
                            </div>

                            {/* Fila única con 4 contenedores */}
                            <div className={styles.row}>
                                <div className={styles.container}>
                                    <img className={styles.image} src="src/assets/Tiktok.svg" alt="Función 1" />
                                    <h6 className={styles.title}>Monitoreo en Tiempo Real</h6>
                                    <p className={styles.text}>Seguimiento continuo de todas tus alarmas conectadas</p>
                                </div>

                                <div className={styles.container}>
                                    <img className={styles.image} src="src/assets/Tiktok.svg" alt="Función 2" />
                                    <h6 className={styles.title}>Alertas Instantáneas</h6>
                                    <p className={styles.text}>Notificaciones inmediatas ante cualquier evento</p>
                                </div>

                                <div className={styles.container}>
                                    <img className={styles.image} src="src/assets/Tiktok.svg" alt="Función 3" />
                                    <h6 className={styles.title}>Reportes Personalizados</h6>
                                    <p className={styles.text}>Genera documentos detallados en múltiples formatos</p>
                                </div>

                                <div className={styles.container}>
                                    <img className={styles.image} src="src/assets/Tiktok.svg" alt="Función 4" />
                                    <h6 className={styles.title}>Soporte 24/7</h6>
                                    <p className={styles.text}>Conexión directa con nuestro equipo técnico</p>
                                </div>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className={styles.modalFooter}>
                            <button onClick={closeModal} className={styles.closeButton}>
                                Cerrar Panel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default VentanaModal4;