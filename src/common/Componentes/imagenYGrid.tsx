
import styles from '../css/imagenYGrid.module.css'; // Importa el archivo CSS único


function imagenYGrid() {
    return (
        <div className={styles.parentContainer}>
            {/* Contenedor que agrupa la imagen y el grid */}
            <div className={styles.contentContainer}>
                {/* Sección de la imagen */}
                <div className={styles.imageSection}>
                    <img src="https://wallpapers.com/images/hd/1920-x-1080-hd-1qq8r4pnn8cmcew4.jpg" alt="Descripción de la imagen" className={styles.image} />
                </div>

                {/* Sección del grid */}
                <div className={styles.gridSection}>
                    <div className={styles.grid}>
                        {/* Fusionamos los dos primeros cuadritos */}
                        <div className={`${styles.gridItem} ${styles.merged}`}>1 y 2</div>

                        {/* Cuadro 3 con imagen y texto */}
                        <div className={`${styles.gridItem} ${styles.gridItemWithContent}`}>
                            <img src="https://wallpapers.com/images/hd/1920-x-1080-hd-1qq8r4pnn8cmcew4.jpg" alt="Imagen 3" />
                            <p>Texto 3</p>
                        </div>

                        {/* Cuadro 4 con imagen y texto */}
                        <div className={`${styles.gridItem} ${styles.gridItemWithContent}`}>
                            <img src="https://wallpapers.com/images/hd/1920-x-1080-hd-1qq8r4pnn8cmcew4.jpg" alt="Imagen 4" />
                            <p>Texto 4</p>
                        </div>

                        {/* Cuadro 5 con estilo específico */}
                        <div className={`${styles.gridItem} ${styles.gridItem5}`}>5</div>

                        {/* Cuadro 6 con estilo específico */}
                        <div className={`${styles.gridItem} ${styles.gridItem6}`}>6</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default imagenYGrid;