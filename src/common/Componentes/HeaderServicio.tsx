// HeaderServicio.tsx
import styles from "../css/HeaderServicio.module.css";

interface HeaderServicioProps {
    fondo: string;
    logo: string;
    imagenLateral: string;
    titulo: string;
    texto: string;
}

function HeaderServicio({
                            fondo,
                            logo,
                            imagenLateral,
                            titulo,
                            texto
                        }: HeaderServicioProps) {
    return (
        <header className={styles.header}>
            <div className={styles.headerImageContainer}>
                <img
                    src={fondo}
                    alt="Header Fondo"
                    className={styles.headerImage}
                />
            </div>
            <img src={logo} alt="Logo" className="logoHeader" />
            <div className={styles.container}>
                <div className={styles.left}>
                    <div className={styles.contenedorFondo}></div>
                    <h1 className={styles.title}>{titulo}</h1>
                    <p className={styles.text}>{texto}</p>
                </div>
                <div className={styles.right}>
                    <img src={imagenLateral} alt="Imagen descriptiva" />
                </div>
            </div>
        </header>
    );
}

export default HeaderServicio;
