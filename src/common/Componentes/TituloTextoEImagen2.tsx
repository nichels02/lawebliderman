import styles from "../css/TituloTextoEImagen2.module.css";

function TituloTextoEImagen2() {
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h2 className={styles.title}>
                    Título del <span className={styles.highlight}>Contenido</span>
                </h2>
                <p className={styles.text}>
                    Este es un texto descriptivo que acompaña al título. Aquí puedes agregar información relevante.
                </p>
            </div>
            <div className={styles.imageContainer}>
                <img className={styles.image} src="src/assets/1920x1080-full-hd-nature-clear-lake-and-flowers-5et15sh9gemfv0jt.jpg" alt="Ejemplo" />
            </div>
        </div>
    );
}

export default TituloTextoEImagen2;
