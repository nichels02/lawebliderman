// import { useEffect } from "react";
import styles from "../css/RedireccionamientoAFacebookTrabajos.module.css";
import imagen1 from "/assets/Lidermania/Banner-trabaja-con-nosotros.jpg"
// import { useContent } from "./Sistemas/useContent.tsx";

function RedireccionamientoAFacebookTrabajos() {

    return (
        <div className={styles.ContenedorPadre}>
            <div className={styles.ContenedorCentrado}>
                <div className={styles.ContenedorImagen}>
                    <img src={imagen1} className={styles.Laimagen}/>
                    <div className={styles.ContenedorInterno}>
                        <div className={styles.ContenedorGrid}>
                            <p className={styles.Texto}>
                                Trabaja con nosotros
                            </p>
                            <a
                                className={styles.Boton}
                                href="https://www.facebook.com/tupagina"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Únete
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default RedireccionamientoAFacebookTrabajos;
