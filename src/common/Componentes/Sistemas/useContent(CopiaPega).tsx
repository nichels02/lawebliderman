import { createContext, useContext, useState, useEffect } from "react";

// 📌 Interfaz completa basada en el JSON
interface ContentData {

    Conocenos: {
        HeaderGenerico: {
            Common: {
                Fondo: string;
                logo: string;
                ImagenDelCostado: string;
            },
            es: {
                Titulo: string;
                Texto: string;
                Boton1: string;
                Boton2: string;
            },
            en: {
                Titulo: string;
                Texto: string;
                Boton1: string;
                Boton2: string;
            }
        }
    },

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
