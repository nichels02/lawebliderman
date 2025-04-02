import { useState } from "react";
import styles from "../css/CuadriculaDeModals.module.css";
import VentanaModal1 from "./VentanaModal1";
import VentanaModal2 from "./VentanaModal2";
import VentanaModal3 from "./VentanaModal3";
import VentanaModal4 from "./VentanaModal4";

function CuadriculaDeModals() {
    const [modalAbierto, setModalAbierto] = useState<number | null>(null);

    const modals = [
        { title: "Título 1", text: "Integración de video y sistema de CCTV P2P conectado a internet " +
                "que permiten tener una respuesta más eficiente y precisa ante incidentes que no " +
                "representan una amenaza real.", image: "src/assets/1920-x-1080-hd-1qq8r4pnn8cmcew4.jpg", component: <VentanaModal1 /> },
        { title: "Título 2", text: "Texto del segundo cuadro.", image: "src/assets/1920-x-1080-hd-1qq8r4pnn8cmcew4.jpg", component: <VentanaModal2 /> },
        { title: "Título 3", text: "Otro texto más.", image: "src/assets/1920-x-1080-hd-1qq8r4pnn8cmcew4.jpg", component: <VentanaModal3 /> },
        { title: "Título 4", text: "Descripción final.", image: "src/assets/1920-x-1080-hd-1qq8r4pnn8cmcew4.jpg", component: <VentanaModal4 /> },
    ];

    return (
        <div className={styles.container}>
            <div className={styles.grid}>
                {modals.map((modal, index) => (
                    <div key={index} className={styles.box} style={{ backgroundImage: `url(${modal.image})` }}>
                        <h3 className={styles.title}>{modal.title}</h3>
                        <p className={styles.text}>{modal.text}</p>
                        <div className={styles.bottomRightContainer}>
                            <span className={styles.smallText}>Más información</span>
                            <button className={styles.button} onClick={() => setModalAbierto(index)}>+</button>
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
