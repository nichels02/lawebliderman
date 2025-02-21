import styles from '../css/Header1.module.css';

function Header1() {
    return (
        <header className={styles.header}>
            <img
                src="https://wallpapers.com/images/hd/1920x1080-aesthetic-glrfk0ntspz3tvxg.jpg" // Reemplaza con la ruta de tu imagen
                alt="Header Image"
                className={styles.headerImage}
            />
            <div className={styles.textContainer}>
                <h1 className={styles.text1}>VALEMOS TANTO</h1>
                <p className={styles.text2}>COMO LO QUE CUIDAMOS</p>
                <p className={styles.text3}>Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3</p>
            </div>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdgeUI4uPpTnu5OJ_OEMNc9bPfyUE9IYU8mg&s" // Reemplaza con la ruta de tu logo
                alt="Logo"
                className={styles.logo}
            />
        </header>
    );
}

export default Header1;