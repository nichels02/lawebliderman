import { useState } from "react";
import styles from "../css/gridBarajeable.module.css";

interface Item {
    id: number;
    text: string;
    image: string;
    showTitle: boolean;
    description: string;
}

const initialItems: Item[] = [
    { id: 1, text: "Elemento 1", image: "src/assets/1920-x-1080-hd-1qq8r4pnn8cmcew4.jpg", showTitle: true, description: "Descripción del elemento 1" },
    { id: 2, text: "Elemento 2", image: "src/assets/1920x1080-aesthetic-glrfk0ntspz3tvxg.jpg", showTitle: true, description: "Descripción del elemento 2" },
    { id: 3, text: "Elemento 3", image: "src/assets/1920x1080-full-hd-nature-clear-lake-and-flowers-5et15sh9gemfv0jt.jpg", showTitle: false, description: "Descripción del elemento 3" },
    { id: 4, text: "Elemento 4", image: "src/assets/1920x1080-hd-space-u95406v61bxyrx3s.jpg", showTitle: true, description: "Descripción del elemento 4" },
    { id: 5, text: "Elemento 5", image: "src/assets/1920-x-1080-hd-1qq8r4pnn8cmcew4.jpg", showTitle: true, description: "Descripción del elemento 5" }
];

function GridBarajeable() {
    const [mainItem, setMainItem] = useState<Item>(initialItems[0]);
    const [smallItems, setSmallItems] = useState<Item[]>(initialItems.slice(1));

    const handleClick = (clickedItem: Item) => {
        setSmallItems(prevItems =>
            prevItems.map(item => (item.id === clickedItem.id ? mainItem : item))
        );
        setMainItem(clickedItem);
    };

    return (
        <div className={styles.gridContainer}>
            {/* Elemento grande */}
            <div className={styles.mainItem} style={{ backgroundImage: `url(${mainItem.image})` }}>
                <div className={styles.overlay}>
                    {mainItem.showTitle && <h2>{mainItem.text}</h2>} {/* ✅ Solo si showTitle es true */}
                    <p>{mainItem.description}</p> {/* ✅ Siempre visible */}
                </div>
            </div>

            {/* Elementos pequeños */}
            {smallItems.map(item => (
                <div key={item.id}
                     className={styles.smallItem}
                     style={{ backgroundImage: `url(${item.image})` }}
                     onClick={() => handleClick(item)}>
                    <div className={styles.overlay}>
                        {item.showTitle && <h3>{item.text}</h3>} {/* ✅ Solo si showTitle es true */}
                        <p>{item.description}</p> {/* ✅ Siempre visible */}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default GridBarajeable;
