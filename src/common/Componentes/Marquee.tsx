import React from 'react'; // Importación necesaria para JSX
import styles from '../css/Marquee.module.css';

function Marquee() {
    // Datos de los elementos del marquee
    const marqueeItems = [
        { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqrIaOoNLKb_PGfc_nS4s3IVBC8x7x9nYOqQ&s", width: 100, height: 100, alt: "1" },
        { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqrIaOoNLKb_PGfc_nS4s3IVBC8x7x9nYOqQ&s", width: 100, height: 100, alt: "2" },
        { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqrIaOoNLKb_PGfc_nS4s3IVBC8x7x9nYOqQ&s", width: 100, height: 100, alt: "3" },
        { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqrIaOoNLKb_PGfc_nS4s3IVBC8x7x9nYOqQ&s", width: 100, height: 100, alt: "4" },
        { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqrIaOoNLKb_PGfc_nS4s3IVBC8x7x9nYOqQ&s", width: 100, height: 100, alt: "5" },
        { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqrIaOoNLKb_PGfc_nS4s3IVBC8x7x9nYOqQ&s", width: 100, height: 100, alt: "6" },
    ];

    return (
        <div className={`${styles.marquee} ${styles['marquee--6']}`}>
            {marqueeItems.map((item, index) => (
                <img
                    key={index}
                    className={styles.marquee__item}
                    src={item.src}
                    width={item.width}
                    height={item.height}
                    alt={item.alt}
                    style={{ '--index': index } as React.CSSProperties & { '--index': number }} // Corrección para TypeScript
                />
            ))}
        </div>
    );
}

export default Marquee;