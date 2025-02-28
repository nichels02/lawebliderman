import styles from '../css/Marquee.module.css';

function Marquee() {
    const marqueeItems = [
        {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqrIaOoNLKb_PGfc_nS4s3IVBC8x7x9nYOqQ&s",
            width: 100,
            height: 100,
            alt: "1",
            subtitle1: "Subtítulo 1-1",
            subtitle2: "Subtítulo 1-2"
        },
        {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqrIaOoNLKb_PGfc_nS4s3IVBC8x7x9nYOqQ&s",
            width: 100,
            height: 100,
            alt: "2",
            subtitle1: "Subtítulo 2-1",
            subtitle2: "Subtítulo 2-2"
        },
        {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqrIaOoNLKb_PGfc_nS4s3IVBC8x7x9nYOqQ&s",
            width: 100,
            height: 100,
            alt: "3",
            subtitle1: "Subtítulo 3-1",
            subtitle2: "Subtítulo 3-2"
        },
        {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqrIaOoNLKb_PGfc_nS4s3IVBC8x7x9nYOqQ&s",
            width: 100,
            height: 100,
            alt: "4",
            subtitle1: "Subtítulo 4-1",
            subtitle2: "Subtítulo 4-2"
        },
        {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqrIaOoNLKb_PGfc_nS4s3IVBC8x7x9nYOqQ&s",
            width: 100,
            height: 100,
            alt: "5",
            subtitle1: "Subtítulo 5-1",
            subtitle2: "Subtítulo 5-2"
        },
        {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqrIaOoNLKb_PGfc_nS4s3IVBC8x7x9nYOqQ&s",
            width: 100,
            height: 100,
            alt: "6",
            subtitle1: "Subtítulo 6-1",
            subtitle2: "Subtítulo 6-2"
        },
        {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqrIaOoNLKb_PGfc_nS4s3IVBC8x7x9nYOqQ&s",
            width: 100,
            height: 100,
            alt: "6",
            subtitle1: "Subtítulo 7-1",
            subtitle2: "Subtítulo 7-2"
        },
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
                            <div key={`${repetition}-${index}`} className={styles.marqueeItemContainer}>
                                <img
                                    className={styles.marqueeItem}
                                    src={item.src}
                                    width={item.width}
                                    height={item.height}
                                    alt={item.alt}
                                />
                                <div className={styles.subtitleContainer}>
                                    <p className={styles.subtitle1}>{item.subtitle1}</p>
                                    <p className={styles.subtitle2}>{item.subtitle2}</p>
                                </div>
                            </div>
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