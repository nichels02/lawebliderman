import { useState, useEffect } from "react";
import { useContent } from './Sistemas/useContent';
import { useLanguage } from './Sistemas/LanguageContext';
import styles from "../css/gridBarajeable.module.css";

interface Item {
    id: number;
    text: string;
    image: string;
    showTitle: boolean;
    description: string[];
}

function GridBarajeable() {
    const [mainItem, setMainItem] = useState<Item | null>(null);
    const [smallItems, setSmallItems] = useState<Item[]>([]);
    const [isMobile, setIsMobile] = useState<boolean>(false); // nuevo estado

    const content = useContent();
    const { language } = useLanguage();

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // puedes ajustar el ancho según tu diseño
        };

        handleResize(); // inicializa al montar
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (content) {
            const languageData = content.Seguridad.GridBarajeable[language];

            const updatedItems = Object.keys(languageData).map((key, index) => {
                const item = languageData[key as keyof typeof languageData];
                const imagePath = content.Seguridad.GridBarajeable.contenido[key as keyof typeof content.Seguridad.GridBarajeable.contenido];

                return {
                    id: index + 1,
                    text: item.text,
                    image: imagePath,
                    showTitle: item.showTitle,
                    description: Array.isArray(item.description) ? item.description : [item.description],
                };
            });

            setMainItem(updatedItems[0]);
            setSmallItems(updatedItems.slice(1));
        }
    }, [content, language]);

    if (!content || !mainItem) {
        return <div>Loading...</div>;
    }

    const handleClick = (clickedItem: Item) => {
        setSmallItems(prevItems =>
            prevItems.map(item => (item.id === clickedItem.id ? mainItem : item))
        );
        setMainItem(clickedItem);
    };

    return (
        <div className={styles.contenedorPadre}>
            <div className={styles.gridContainer}>
                {/* Elemento grande */}
                <div className={styles.mainItem} style={{ backgroundImage: `url(${mainItem.image})` }}>
                    <div className={styles.mainOverlay}>
                        {mainItem.showTitle && <h2>{mainItem.text}</h2>}
                        {mainItem.description.map((desc, idx) => (
                            <p key={idx} className="p1">{desc}</p>
                        ))}
                    </div>
                </div>

                {/* Elementos pequeños */}
                {smallItems.map(item => (
                    <div
                        key={item.id}
                        className={styles.smallItem}
                        style={{ backgroundImage: `url(${item.image})` }}
                        onClick={() => handleClick(item)}
                    >
                        <div className={styles.overlay}>
                            {item.showTitle && <h3>{item.text}</h3>}
                            {!isMobile && item.description.map((desc, idx) => (
                                <p key={idx} className="p2">{desc}</p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default GridBarajeable;
