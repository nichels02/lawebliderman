import styles from "../css/CardGrid.module.css";

const data = [
    { text: "Imagen 1", image: "src/assets/youtube.svg" },
    { text: "Imagen 2", image: "src/assets/youtube.svg" },
    { text: "Imagen 3", image: "src/assets/youtube.svg" },
    { text: "Imagen 4", image: "src/assets/youtube.svg" },
    { text: "Imagen 5", image: "src/assets/youtube.svg" },
    { text: "Imagen 6", image: "src/assets/youtube.svg" },
    { text: "Imagen 7", image: "src/assets/youtube.svg" },
];

function CardGrid() {
    return (
        <div className={styles.grid}>
            {data.map((item, index) => (
                <div key={index} className={styles.card}>
                    <img className={styles.image} src={item.image} alt={item.text} />
                    <p className={styles.text}>{item.text}</p>
                </div>
            ))}
        </div>
    );
}

export default CardGrid;
