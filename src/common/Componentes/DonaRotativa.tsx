import styles from '../css/DonaRotativa.module.css';

function DonaRotativa({ color1 = "red", color2 = "blue", color3 = "green", color4 = "yellow" }) {
    return (
        <div className={styles.contenedorPrincipal}>
            {/* Contenedor para la imagen */}
            <div className={styles.contenedorImagen}>
                <img src="https://wallpapers.com/images/hd/1920x1080-hd-space-u95406v61bxyrx3s.jpg" alt="Imagen de fondo" className={styles.imagenFondo} />
            </div>

            {/* Contenedor de la dona */}
            <div className={styles.contenedorDona}>
                {/* SVG para la dona */}
                <svg width="200" height="200" viewBox="0 0 200 200" className={styles.dona}>
                    {/* Segmento 1 */}
                    <circle cx="100" cy="100" r="80" fill="transparent" stroke={color1} strokeWidth="60" strokeDasharray="125.66 125.66" strokeDashoffset="0" />
                    {/* Segmento 2 */}
                    <circle cx="100" cy="100" r="80" fill="transparent" stroke={color2} strokeWidth="60" strokeDasharray="125.66 125.66" strokeDashoffset="125.66" />
                    {/* Segmento 3 */}
                    <circle cx="100" cy="100" r="80" fill="transparent" stroke={color3} strokeWidth="60" strokeDasharray="125.66 125.66" strokeDashoffset="251.32" />
                    {/* Segmento 4 */}
                    <circle cx="100" cy="100" r="80" fill="transparent" stroke={color4} strokeWidth="60" strokeDasharray="125.66 125.66" strokeDashoffset="376.98" />
                </svg>

                {/* Texto en el centro de la dona */}
                <div className={styles.textoDona}>
                    <p>Texto en el centro</p>
                </div>
            </div>
        </div>
    );
}

export default DonaRotativa;