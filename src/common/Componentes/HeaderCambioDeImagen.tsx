import { useState } from "react";
import styles from "../css/HeaderCambioDeImagen.module.css";

// Importamos imágenes
import fondo from "../../assets/1920-x-1080-hd-1qq8r4pnn8cmcew4.jpg"; // Imagen de fondo
import imgPrincipal1 from "../../assets/1920x1080-hd-space-u95406v61bxyrx3s.jpg"; // Imagen principal por defecto
import imgPrincipal2 from "../../assets/1920x1080-full-hd-nature-clear-lake-and-flowers-5et15sh9gemfv0jt.jpg";
import imgPrincipal3 from "../../assets/1920x1080-aesthetic-glrfk0ntspz3tvxg.jpg";
import imgPrincipal4 from "../../assets/1920-x-1080-hd-1qq8r4pnn8cmcew4.jpg";

// Lista de imágenes para cambiar
const imagenes = [
    { src: imgPrincipal1, label: "Imagen 1" },
    { src: imgPrincipal2, label: "Imagen 2" },
    { src: imgPrincipal3, label: "Imagen 3" },
    { src: imgPrincipal4, label: "Imagen 4" }
];

function HeaderCambioDeImagen() {
    const [imagenActual, setImagenActual] = useState(imagenes[0].src);

    return (
        <div
            className={styles.contenedorPadre}
            style={{ backgroundImage: `url(${fondo})` }} // Imagen de fondo
        >
            {/* Contenedor de texto + imagen */}
            <div className={styles.contenedorContenido}>
                {/* Contenedor del texto a la izquierda */}
                <div className={styles.contenedorTexto}>
                    <h1 className={styles.titulo}>Título del Header</h1>
                    <p className={styles.texto}>Descripción de la sección con texto explicativo.</p>
                </div>

                {/* Contenedor de la imagen principal a la derecha */}
                <div className={styles.contenedorImagen}>
                    <img src={imagenActual} alt="Imagen Principal" className={styles.imagenPrincipal} />
                </div>
            </div>

            {/* Contenedor de botones debajo */}
            <div className={styles.contenedorBotones}>
                {imagenes.map((img, index) => (
                    <button
                        key={index}
                        className={styles.boton}
                        onClick={() => setImagenActual(img.src)}
                    >
                        {img.label}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default HeaderCambioDeImagen;
