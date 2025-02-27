
import styles from '../css/Header1.module.css';

function Header1() {
    return (
        <header className={styles.header}>
            {/* Contenedor de la imagen */}
            <div className={styles.headerImageContainer}>
                {/* Imagen de fondo */}
                <img
                    src="https://wallpapers.com/images/hd/1920x1080-aesthetic-glrfk0ntspz3tvxg.jpg"
                    alt="Header Image"
                    className={styles.headerImage}
                />

                {/* Contenedor de texto */}
                <div className={styles.textContainer}>
                    <h1 className={styles.text1}>Valemos tanto</h1>
                    <p className={styles.text2}>como lo que cuidamos</p>
                    <p className={styles.text3}>Descubre nuestra expertise en la gestión de las personas, para </p>
                    <p className={styles.text3}>hacer tu vida mas segura y confiable.</p>
                </div>

                {/* Contenedor de botones */}
                <div className={styles.buttonContainer}>
                    <button className={styles.buttonPrimary}>Soluciones➔ </button>
                    <button className={styles.buttonSecondary}>Únete</button>
                </div>

                {/* Contenedor centrado en la parte inferior */}
                <div className={styles.centeredBottomContainer}>
                    {/* Fila superior */}
                    <div className={styles.gridItemTop}>+24,000</div>
                    <div className={styles.gridItemTop}>35</div>
                    <div className={styles.gridItemTop}>2,100</div>

                    {/* Fila inferior */}
                    <div className={styles.gridItemBottom}>Trabajadores a nivel global</div>
                    <div className={styles.gridItemBottom}>Años de liderazgo en el mercado</div>
                    <div className={styles.gridItemBottom}>Clientes satisfechos</div>
                </div>

                {/* Logo */}
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdgeUI4uPpTnu5OJ_OEMNc9bPfyUE9IYU8mg&s"
                    alt="Logo"
                    className={styles.logo}
                />
            </div>
        </header>
    );
}

export default Header1;