import React from 'react';
import styles from '../css/TituloYSubtituloGenerico.module.css';

// Definimos las props que recibirá el componente
interface TituloYSubtituloGenericoProps {
    titulo: string;
    subtitulo: string;
}

const TituloYSubtituloGenerico: React.FC<TituloYSubtituloGenericoProps> = ({ titulo, subtitulo }) => {
    return (
        <div className={styles.contenedor}>
            <h1 className={styles.titulo}>{titulo}</h1>
            <h2 className={styles.subtitulo}>{subtitulo}</h2>
        </div>
    );
};

export default TituloYSubtituloGenerico;