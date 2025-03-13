
import styles from '../css/Header1.module.css';
import { useLanguage } from './Sistemas/LanguageContext'; // Importa el hook useLanguage

const Textos = {
    en: {
        titulo: 'We are worth as much',
        subtitulo: 'as what we take care of',
        descripcion1: 'Discover our expertise in people management, to',
        descripcion2: 'make your life safer and more reliable.',
        botonPrimario: 'Solutions➔',
        botonSecundario: 'Join',
        trabajadores: 'Workers globally',
        años: 'Years of market leadership',
        clientes: 'Satisfied customers',
    },
    es: {
        titulo: 'Valemos tanto',
        subtitulo: 'como lo que cuidamos',
        descripcion1: 'Descubre nuestra expertise en la gestión de las personas, para',
        descripcion2: 'hacer tu vida más segura y confiable.',
        botonPrimario: 'Soluciones➔',
        botonSecundario: 'Únete',
        trabajadores: 'Trabajadores a nivel global',
        años: 'Años de liderazgo en el mercado',
        clientes: 'Clientes satisfechos',
    },
};

function Header1() {
    const { language } = useLanguage(); // Obtiene el idioma actual del contexto
    const textos = Textos[language]; // Selecciona los textos según el idioma

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
                    <h1 className={styles.text1}>{textos.titulo}</h1>
                    <p className={styles.text2}>{textos.subtitulo}</p>
                    <p className={styles.text3}>{textos.descripcion1}</p>
                    <p className={styles.text3}>{textos.descripcion2}</p>
                </div>

                {/* Contenedor de botones */}
                <div className={styles.buttonContainer}>
                    <button className={styles.buttonPrimary}>{textos.botonPrimario}</button>
                    <button className={styles.buttonSecondary}>{textos.botonSecundario}</button>
                </div>

                {/* Logo */}
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdgeUI4uPpTnu5OJ_OEMNc9bPfyUE9IYU8mg&s"
                    alt="Logo"
                    className={styles.logo}
                />
            </div>

            {/* Contenedor centrado en la parte inferior (ahora relacionado con el header) */}
            <div className={styles.centeredBottomContainer}>
                {/* Fila superior */}
                <div className={styles.gridItemTop}>+24,000</div>
                <div className={styles.gridItemTop}>35</div>
                <div className={styles.gridItemTop}>2,100</div>

                {/* Fila inferior */}
                <div className={styles.gridItemBottom}>{textos.trabajadores}</div>
                <div className={styles.gridItemBottom}>{textos.años}</div>
                <div className={styles.gridItemBottom}>{textos.clientes}</div>
            </div>
        </header>
    );
}

export default Header1;