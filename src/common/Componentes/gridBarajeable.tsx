import { useState, useEffect } from "react";
import { useContent } from './Sistemas/useContent'; // Asegúrate de importar correctamente
import { useLanguage } from './Sistemas/LanguageContext'; // Asegúrate de importar correctamente
import styles from "../css/gridBarajeable.module.css";

interface Item {
    id: number;
    text: string;
    image: string;
    showTitle: boolean;
    description: string;
}

function GridBarajeable() {
    const [mainItem, setMainItem] = useState<Item | null>(null);
    const [smallItems, setSmallItems] = useState<Item[]>([]);

    // Obtener el contenido del contexto
    const content = useContent();

    // Obtener el idioma actual del contexto
    const { language } = useLanguage();

    // Cuando se recibe el contenido, actualizar los elementos
    useEffect(() => {
        if (content) {
            const languageData = content.Seguridad.GridBarajeable[language];

            // Mapear los datos del contexto a los elementos del grid
            const updatedItems = Object.keys(languageData).map((key, index) => {
                const item = languageData[key as keyof typeof languageData];

                // Acceder a las rutas de las imágenes directamente desde el contenido
                const imagePath = content.Seguridad.GridBarajeable.contenido[key as keyof typeof content.Seguridad.GridBarajeable.contenido];

                return {
                    id: index + 1,
                    text: item.text,
                    image: imagePath,  // Usamos directamente la ruta de la imagen del JSON
                    showTitle: item.showTitle,
                    description: item.description,
                };
            });

            setMainItem(updatedItems[0]);
            setSmallItems(updatedItems.slice(1));
        }
    }, [content, language]);

    // Verificar si los datos están disponibles
    if (!content || !mainItem) {
        return <div>Loading...</div>; // Mostrar un mensaje de carga mientras se cargan los datos
    }

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
                <div className={styles.mainOverlay}>
                    {mainItem.showTitle && <h2>{mainItem.text}</h2>} {/* ✅ Solo si showTitle es true */}
                    <p>{mainItem.description}</p> {/* ✅ Siempre visible */}
                </div>
            </div>

            {/* Elementos pequeños */}
            {smallItems.map(item => (
                <div
                    key={item.id}
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
