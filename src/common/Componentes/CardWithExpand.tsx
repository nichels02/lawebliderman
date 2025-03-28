import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "./Sistemas/LanguageContext";
import { useContent } from "./Sistemas/useContent.tsx";
import styles from "../css/CardWithExpand.module.css";

function CardWithExpand() {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
    const navigate = useNavigate();
    const { language } = useLanguage();
    const content = useContent();

    if (!content || !content.home || !content.home.CardWithExpand) {
        return <p>Cargando...</p>;
    }

    const seguridad = content.home.CardWithExpand.Seguridad?.[language];
    const servicios = content.home.CardWithExpand.Servicios?.[language];
    const tecnologia = content.home.CardWithExpand.Tecnologia?.[language];

    return (
        <div className={styles.container}>
            <section className={styles.section}>
                {seguridad && (
                    <div
                        className={`${styles.imgContainer} ${expandedIndex === 0 ? styles.expanded : ""}`}
                        onMouseEnter={() => setExpandedIndex(0)}
                    >
                        <img
                            src={content.home.CardWithExpand.Seguridad.imageUrl}
                            alt={seguridad.title}
                            className={`${styles.img} ${styles.seguridad}`}
                        />
                        <div className={styles.text}>{seguridad.title}</div>
                        <div className={`${styles.leftText} ${expandedIndex === 0 ? styles.visible : ""}`}>
                            <h2 className={styles.subtitle}>{seguridad.subtitle}</h2>
                            <ul className={styles.list}>
                                {seguridad.items.map((item: string, i: number) => <li key={i}>{item}</li>)}
                            </ul>
                            <button className={styles.exploreButton} onClick={() => navigate("/Seguridad")}>
                                {seguridad.buttonText}
                            </button>
                        </div>
                    </div>
                )}

                {servicios && (
                    <div
                        className={`${styles.imgContainer} ${expandedIndex === 1 ? styles.expanded : ""}`}
                        onMouseEnter={() => setExpandedIndex(1)}
                    >
                        <img
                            src={content.home.CardWithExpand.Servicios.imageUrl}
                            alt={servicios.title}
                            className={`${styles.img} ${styles.servicios}`}
                        />
                        <div className={styles.text}>{servicios.title}</div>
                        <div className={`${styles.leftText} ${expandedIndex === 1 ? styles.visible : ""}`}>
                            <h2 className={styles.subtitle}>{servicios.subtitle}</h2>
                            <ul className={styles.list}>
                                {servicios.items.map((item: string, i: number) => <li key={i}>{item}</li>)}
                            </ul>

                            {servicios.secondSubtitle && servicios.secondItems && (
                                <>
                                    <h2 className={styles.subtitle}>{servicios.secondSubtitle}</h2>
                                    <ul className={styles.list}>
                                        {servicios.secondItems.map((item: string, i: number) => <li key={i}>{item}</li>)}
                                    </ul>
                                </>
                            )}

                            <button className={styles.exploreButton} onClick={() => navigate("/Servicio")}>
                                {servicios.buttonText}
                            </button>
                        </div>
                    </div>
                )}

                {tecnologia && (
                    <div
                        className={`${styles.imgContainer} ${expandedIndex === 2 ? styles.expanded : ""}`}
                        onMouseEnter={() => setExpandedIndex(2)}
                    >
                        <img
                            src={content.home.CardWithExpand.Tecnologia.imageUrl}
                            alt={tecnologia.title}
                            className={`${styles.img} ${styles.tecnologia}`}
                        />
                        <div className={styles.text}>{tecnologia.title}</div>
                        <div className={`${styles.leftText} ${expandedIndex === 2 ? styles.visible : ""}`}>
                            <h2 className={styles.subtitle}>{tecnologia.subtitle}</h2>
                            <ul className={styles.list}>
                                {tecnologia.items.map((item: string, i: number) => <li key={i}>{item}</li>)}
                            </ul>

                            {tecnologia.thirdSubtitle && <h2 className={styles.subtitle}>{tecnologia.thirdSubtitle}</h2>}
                            {tecnologia.fourthSubtitle && <h2 className={styles.subtitle}>{tecnologia.fourthSubtitle}</h2>}

                            <button className={styles.exploreButton} onClick={() => navigate("/Tecnologia")}>
                                {tecnologia.buttonText}
                            </button>
                        </div>
                    </div>
                )}
            </section>
        </div>
    );
}

export default CardWithExpand;
