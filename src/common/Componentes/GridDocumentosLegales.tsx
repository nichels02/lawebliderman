// import { useState, useEffect } from "react";
// import { useContent } from './Sistemas/useContent';
// import { useLanguage } from './Sistemas/LanguageContext';
import styles from "../css/GridDocumentosLegales.module.css";
import Imagen1 from "/assets/ImagenesPrueba/Google_Docs_2020_Logo.svg.png";


function GridDocumentosLegales() {


    return (
        <div className={styles.ContenedorPadre}>
            <div className={styles.contenedorCentrado}>
                <div className={styles.GridPadre}>
                    <div className={styles.GridObjeto} /*onClick={""}*/>
                        <div className={styles.EspacioImagen}>
                            <img src={Imagen1} className={styles.ImagenDelDocumento}/>
                        </div>
                        <div className={styles.EspacioTexto}>
                            <div className={styles.TextoDelObjeto}>
                                Objeto legal
                            </div>
                        </div>
                    </div>

                    <div className={styles.GridObjeto}>
                        <div className={styles.EspacioImagen}>
                            <img src={Imagen1} className={styles.ImagenDelDocumento}/>
                        </div>
                        <div className={styles.EspacioTexto}>
                            <div className={styles.TextoDelObjeto}>
                                Objeto legal
                            </div>
                        </div>
                    </div>
                    <div className={styles.GridObjeto}>
                        <div className={styles.EspacioImagen}>
                            <img src={Imagen1} className={styles.ImagenDelDocumento}/>
                        </div>
                        <div className={styles.EspacioTexto}>
                            <div className={styles.TextoDelObjeto}>
                                Objeto legal
                            </div>
                        </div>
                    </div>
                    <div className={styles.GridObjeto}>
                        <div className={styles.EspacioImagen}>
                            <img src={Imagen1} className={styles.ImagenDelDocumento}/>
                        </div>
                        <div className={styles.EspacioTexto}>
                            <div className={styles.TextoDelObjeto}>
                                Objeto legal
                            </div>
                        </div>
                    </div>
                    <div className={styles.GridObjeto}>
                        <div className={styles.EspacioImagen}>
                            <img src={Imagen1} className={styles.ImagenDelDocumento}/>
                        </div>
                        <div className={styles.EspacioTexto}>
                            <div className={styles.TextoDelObjeto}>
                                Objeto legal
                            </div>
                        </div>
                    </div>
                    <div className={styles.GridObjeto}>
                        <div className={styles.EspacioImagen}>
                            <img src={Imagen1} className={styles.ImagenDelDocumento}/>
                        </div>
                        <div className={styles.EspacioTexto}>
                            <div className={styles.TextoDelObjeto}>
                                Objeto legal
                            </div>
                        </div>
                    </div>
                    <div className={styles.GridObjeto}>
                        <div className={styles.EspacioImagen}>
                            <img src={Imagen1} className={styles.ImagenDelDocumento}/>
                        </div>
                        <div className={styles.EspacioTexto}>
                            <div className={styles.TextoDelObjeto}>
                                Objeto legal
                            </div>
                        </div>
                    </div>
                    <div className={styles.GridObjeto}>
                        <div className={styles.EspacioImagen}>
                            <img src={Imagen1} className={styles.ImagenDelDocumento}/>
                        </div>
                        <div className={styles.EspacioTexto}>
                            <div className={styles.TextoDelObjeto}>
                                Objeto legal
                            </div>
                        </div>
                    </div>
                    <div className={styles.GridObjeto}>
                        <div className={styles.EspacioImagen}>
                            <img src={Imagen1} className={styles.ImagenDelDocumento}/>
                        </div>
                        <div className={styles.EspacioTexto}>
                            <div className={styles.TextoDelObjeto}>
                                Objeto legal
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GridDocumentosLegales;
