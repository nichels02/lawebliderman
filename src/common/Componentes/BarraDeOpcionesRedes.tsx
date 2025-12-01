import styles from '../css/BarraDeOpcionesRedes.module.css';
import { useContent } from './Sistemas/useContent.tsx'; // Asegúrate de importar el contexto correctamente
import LazyImage from './Sistemas/LazyImage.tsx'; // o ajusta el path si está en otro lado

function BarraDeOpcionesRedes() {
    const data = useContent();

    if (!data) return null; // Si los datos aún no están cargados, no mostrar nada

    return (
        <div className={styles.barra}>
            {data.home.BarraDeRedes.map((item, index) => (
                <a
                    key={index}
                    href={item.Link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.icono}
                >
                    <LazyImage src={item.imagen} alt={item.Nombre} className={styles.Imagen}/>
                </a>
            ))}
        </div>

    );
}

export default BarraDeOpcionesRedes;
