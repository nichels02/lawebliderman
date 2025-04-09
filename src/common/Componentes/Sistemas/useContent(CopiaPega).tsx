import { createContext, useContext, useState, useEffect } from "react";

// 📌 Interfaz completa basada en el JSON
interface ContentData {

    Tecnologia: {
        CardGrid: {
            Common: {
                ImagenCarta1: string;
                ImagenCarta2: string;
                ImagenCarta3: string;
                ImagenCarta4: string;
                ImagenCarta5: string;
                ImagenCarta6: string;
                ImagenCarta7: string;

            },
            es:{
                Carta1: string;
                Carta2: string;
                Carta3: string;
                Carta4: string;
                Carta5: string;
                Carta6: string;
                Carta7: string;
            },
            en: {
                Carta1: string;
                Carta2: string;
                Carta3: string;
                Carta4: string;
                Carta5: string;
                Carta6: string;
                Carta7: string;
            }
        }
    }

}

// 🔥 Contexto para almacenar los datos
const ContentContext = createContext<ContentData | null>(null);

export function ContentProvider({ children }: { children: React.ReactNode }) {
    const [data, setData] = useState<ContentData | null>(null);

    useEffect(() => {
        fetch("/Data.json") // ✅ JSON en la carpeta public/
            .then((res) => res.json())
            .then((content: ContentData) => setData(content))
            .catch(() => console.error("Error al cargar datos"));
    }, []);

    return <ContentContext.Provider value={data}>{children}</ContentContext.Provider>;
}

// 📌 Hook para acceder a los datos con seguridad de tipos
export function useContent(): ContentData | null {
    return useContext(ContentContext);
}
