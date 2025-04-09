import styles from "../css/CardGrid.module.css";
import { useContent } from "./Sistemas/useContent.tsx";
import { useLanguage } from "./Sistemas/LanguageContext.tsx";

function CardGrid() {
    const content = useContent();
    const { language } = useLanguage();

    if (!content) {
        return <div>Loading...</div>;
    }

    const { Common, es, en } = content.Tecnologia.CardGrid;
    const currentLang = language === 'es' ? es : en;

    // Generar array de 1 a 7 para las cartas
    const cards = Array.from({ length: 7 }, (_, i) => i + 1);

    return (
        <div className={styles.grid}>
            {cards.map((cardNumber) => {
                const imageKey = `ImagenCarta${cardNumber}` as keyof typeof Common;
                const textKey = `Carta${cardNumber}` as keyof typeof currentLang;

                return (
                    <div key={cardNumber} className={styles.card}>
                        <img
                            className={styles.image}
                            src={Common[imageKey]}
                            alt={currentLang[textKey]}
                        />
                        <p className={styles.text}>
                            {currentLang[textKey]}
                        </p>
                    </div>
                );
            })}
        </div>
    );
}

export default CardGrid;