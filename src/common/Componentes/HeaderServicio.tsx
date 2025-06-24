// HeaderServicio.tsx
import styles from "../css/HeaderServicio.module.css";
import LazyImage from './Sistemas/LazyImage.tsx';

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
                <LazyImage
                    src={fondo}
                    alt="Header Fondo"
                    className={styles.headerImage}
                />
            </div>
            <LazyImage src={logo} alt="Logo" className="logoHeader" />
            <div className={styles.container}>
                <div className={styles.left}>
                    <div className={styles.contenedorFondo}></div>
                    <h1 className={styles.title}>{titulo}</h1>
                    <p className={styles.text}>{texto}</p>
                </div>
                <div className={styles.right}>
                    <LazyImage src={imagenLateral} alt="Imagen descriptiva" />
                </div>
            </div>
        </header>
    );
}

export default HeaderServicio;
