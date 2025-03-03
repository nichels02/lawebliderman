
import styles from '../css/imagenYGrid2.module.css'; // Importa el archivo CSS único

function ImagenYGrid2() {
    return (
        <div className={styles.contenedorPadre}>
            <div className={styles.contenedorHijo}>
                <div className={styles.contenedorIzquierdo}>
                    <img src="https://wallpapers.com/images/hd/1920-x-1080-hd-1qq8r4pnn8cmcew4.jpg" alt="Descripción de la imagen" className={styles.imagen} />
                </div>
                <div className={styles.contenedorDerecho}>
                    <div className={styles.contenedorSuperior}>
                        <p className={styles.textoSuperior}>Conoce la</p>
                        <p className={styles.textoInferior}>Lidermanía</p>
                    </div>
                    <div className={styles.contenedorMedio}>
                        <div className={styles.contenedorMedioIzquierdo}>
                            <div className={styles.contenedorLogoTexto}>
                                <img src="https://d1ih8jugeo2m5m.cloudfront.net/2022/12/que-es-un-logo-lays.png" alt="Logo" className={styles.logo} />
                                <p className={styles.textoLogo}>Mejor Reputación "Empresas Lideres" MERCO.</p>
                            </div>
                        </div>
                        <div className={styles.contenedorMedioDerecho}>
                            <div className={styles.contenedorLogoTexto}>
                                <img src="https://d1ih8jugeo2m5m.cloudfront.net/2022/12/que-es-un-logo-lays.png" alt="Logo" className={styles.logo} />
                                <p className={styles.textoLogo}>Contamos con una central de agentes para brindar soporte.</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.contenedorInferior}>
                        <div className={styles.contenedorInferiorIzquierdo}>
                            <button className={styles.botonContenedor}>
                                <img src="https://via.placeholder.com/50" alt="Imagen izquierda" className={styles.imagenBoton} />
                                <div className={styles.textosBoton}>
                                    <p className={styles.tituloBoton}>Título izquierdo</p>
                                    <p className={styles.subtituloBoton}>Subtítulo izquierdo</p>
                                </div>
                                <img src="https://via.placeholder.com/50" alt="Imagen derecha" className={styles.imagenBoton} />
                            </button>
                        </div>
                        <div className={styles.contenedorInferiorDerecho}>
                            <button className={styles.botonContenedor}>
                                <img src="https://via.placeholder.com/50" alt="Imagen izquierda" className={styles.imagenBoton} />
                                <div className={styles.textosBoton}>
                                    <p className={styles.tituloBoton}>Título derecho</p>
                                    <p className={styles.subtituloBoton}>Subtítulo derecho</p>
                                </div>
                                <img src="https://via.placeholder.com/50" alt="Imagen derecha" className={styles.imagenBoton} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ImagenYGrid2;