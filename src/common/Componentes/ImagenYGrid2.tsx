import styles from '../css/imagenYGrid2.module.css';
import { useContent } from './Sistemas/useContent.tsx';
import { useLanguage } from './Sistemas/LanguageContext.tsx';

function ImagenYGrid2() {
    const content = useContent();
    const { language } = useLanguage();

    if (!content) return <p>Cargando...</p>;

    const data = content.home.ImagenYGrid2;
    const textos = data[language];
    const imagenes = data.contenido;

    return (
        <div className={styles.contenedorPadre}>
            <div className={styles.contenedorHijo}>
                {/* Imagen principal a la izquierda */}
                <div className={styles.contenedorIzquierdo}>
                    <img src={imagenes.imagenPrincipal} alt="Imagen principal" className={styles.imagen} />
                </div>

                {/* Contenido a la derecha */}
                <div className={styles.contenedorDerecho}>
                    {/* Títulos superiores */}
                    <div className={styles.contenedorSuperior}>
                        <p className={styles.textoSuperior}>{textos.tituloSuperior}</p>
                        <p className={styles.textoInferior}>{textos.tituloInferior}</p>
                    </div>

                    {/* Sección de reconocimientos */}
                    <div className={styles.contenedorMedio}>
                        <div className={styles.contenedorMedioIzquierdo}>
                            <div className={styles.contenedorLogoTexto}>
                                <img src={imagenes.logo1} alt="Reconocimiento 1" className={styles.logo} />
                                <p className={styles.textoLogo}>{textos.reconocimiento1}</p>
                            </div>
                        </div>
                        <div className={styles.contenedorMedioDerecho}>
                            <div className={styles.contenedorLogoTexto}>
                                <img src={imagenes.logo2} alt="Reconocimiento 2" className={styles.logo} />
                                <p className={styles.textoLogo}>{textos.reconocimiento2}</p>
                            </div>
                        </div>
                    </div>

                    {/* Botones de acción */}
                    <div className={styles.contenedorInferior}>
                        <div className={styles.contenedorInferiorIzquierdo}>
                            <button className={styles.botonContenedorIzquierdo}>
                                <img src={imagenes.boton1ImagenIzquierda} alt="Icono izquierda" className={styles.imagenBoton} />
                                <div className={styles.textosBoton}>
                                    <p className={styles.tituloBotonIzquierdo}>{textos.boton1.titulo}</p>
                                    <p className={styles.subtituloBotonIzquierdo}>{textos.boton1.subtitulo}</p>
                                </div>
                                <img src={imagenes.boton1ImagenDerecha} alt="Icono derecha" className={styles.imagenBoton} />
                            </button>
                        </div>
                        <div className={styles.contenedorInferiorDerecho}>
                            <button className={styles.botonContenedorDerecho}>
                                <img src={imagenes.boton2ImagenIzquierda} alt="Icono izquierda" className={styles.imagenBoton} />
                                <div className={styles.textosBoton}>
                                    <p className={styles.tituloBotonDerecho}>{textos.boton2.titulo}</p>
                                    <p className={styles.subtituloBotonDerecho}>{textos.boton2.subtitulo}</p>
                                </div>
                                <img src={imagenes.boton2ImagenDerecha} alt="Icono derecha" className={styles.imagenBoton} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ImagenYGrid2;
