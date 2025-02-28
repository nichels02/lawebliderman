import styles from '../css/Marquee.module.css';

function Marquee() {
    const marqueeItems = [
        { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqrIaOoNLKb_PGfc_nS4s3IVBC8x7x9nYOqQ&s", width: 100, height: 100, alt: "1" },
        { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqrIaOoNLKb_PGfc_nS4s3IVBC8x7x9nYOqQ&s", width: 100, height: 100, alt: "2" },
        { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqrIaOoNLKb_PGfc_nS4s3IVBC8x7x9nYOqQ&s", width: 100, height: 100, alt: "3" },
        { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqrIaOoNLKb_PGfc_nS4s3IVBC8x7x9nYOqQ&s", width: 100, height: 100, alt: "4" },
        { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqrIaOoNLKb_PGfc_nS4s3IVBC8x7x9nYOqQ&s", width: 100, height: 100, alt: "5" },
        { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqrIaOoNLKb_PGfc_nS4s3IVBC8x7x9nYOqQ&s", width: 100, height: 100, alt: "6" },
    ];

    return (
        <div className={styles.marqueeWrapper}>
            {/* Rectángulo izquierdo con gradiente */}
            <div className={styles.leftFade}></div>

            {/* Contenedor del marquee */}
            <div className={styles.marqueeContainer}>
                <div className={styles.marqueeContent}>
                    {/* Repetimos las imágenes 3 veces */}
                    {[...Array(3)].map((_, repetition) =>
                        marqueeItems.map((item, index) => (
                            <img
                                key={`${repetition}-${index}`}
                                className={styles.marqueeItem}
                                src={item.src}
                                width={item.width}
                                height={item.height}
                                alt={item.alt}
                            />
                        ))
                    )}
                </div>
            </div>

            {/* Rectángulo derecho con gradiente */}
            <div className={styles.rightFade}></div>
        </div>
    );
}

export default Marquee;