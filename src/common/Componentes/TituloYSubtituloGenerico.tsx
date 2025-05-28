import React from 'react';
import styles from '../css/TituloYSubtituloGenerico.module.css';

interface TituloYSubtituloGenericoProps {
    titulo: string;
    subtitulo: string;
    className?: string;
    textoEspecial?: boolean;
}

const TituloYSubtituloGenerico: React.FC<TituloYSubtituloGenericoProps> = ({
                                                                               titulo,
                                                                               subtitulo,
                                                                               className,
                                                                               textoEspecial = false,
                                                                           }) => {
    return (
        <div className={`${styles.contenedor} ${className || ''}`}>
            <h1 className={styles.titulo}>{titulo}</h1>
            <h2 className={`${styles.subtitulo} ${textoEspecial ? styles.textoEspecial : ''}`}>
                {subtitulo}
            </h2>
        </div>
    );
};

export default TituloYSubtituloGenerico;
