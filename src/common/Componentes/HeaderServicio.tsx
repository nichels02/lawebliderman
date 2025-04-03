import styles from "../css/HeaderServicio.module.css";
import imagenes from "../../assets/1920x1080-hd-space-u95406v61bxyrx3s.jpg"; // Asegúrate de que la ruta es correcta
import imagenes2 from "../../assets/1920x1080-full-hd-nature-clear-lake-and-flowers-5et15sh9gemfv0jt.jpg"; // Asegúrate de que la ruta es correcta
import imagenes3 from "../../assets/1920x1080-full-hd-nature-clear-lake-and-flowers-5et15sh9gemfv0jt.jpg"; // Asegúrate de que la ruta es correcta

function HeaderServicio() {
    return (
        <header className={styles.header}>
            <div className={styles.headerImageContainer}>
                <img
                    src={imagenes}
                    alt="Header Image"
                    className={styles.headerImage}
                />
            </div>
            <img src={imagenes3} alt="Logo" className="logoHeader" />
            <div className={styles.container}>
                <div className={styles.left}>
                    <h1>Título del Servicio</h1>
                    <p>Descripción breve del servicio ofrecido.</p>
                </div>
                <div className={styles.right}>
                    <img src={imagenes2} alt="Imagen descriptiva" />
                </div>
            </div>
        </header>
    );
}

export default HeaderServicio;
