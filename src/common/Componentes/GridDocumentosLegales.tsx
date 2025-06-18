// import { useState, useEffect } from "react";
// import { useContent } from './Sistemas/useContent';
// import { useLanguage } from './Sistemas/LanguageContext';
import styles from "../css/GridDocumentosLegales.module.css";

import { useLanguage } from './Sistemas/LanguageContext';
import { useContent } from './Sistemas/useContent';


function GridDocumentosLegales() {

    const { language } = useLanguage();
    const Documentos = useContent()?.PaginaLegal?.GridDocumentoLegal;
    return (
        <div className={styles.ContenedorPadre}>
            <div className={styles.contenedorCentrado}>
                <div className={styles.GridPadre}>

                    {Documentos?.map((doc, index) => (
                        <a
                            key={index}
                            href={doc.Common.Pdf}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.GridObjeto}
                        >
                            <div className={styles.EspacioImagen}>
                                <img
                                    src={doc.Common.Imagen}
                                    alt={doc[language]?.Nombre || "Documento"}
                                    className={styles.ImagenDelDocumento}
                                />
                            </div>
                            <div className={styles.EspacioTexto}>
                                <div className={styles.TextoDelObjeto}>
                                    {doc[language]?.Nombre || "Sin nombre"}
                                </div>
                            </div>
                        </a>
                    ))}


                </div>
            </div>
        </div>
    );
}

export default GridDocumentosLegales;
