import { createContext, useContext, useState, useEffect } from "react";

// 📌 Interfaz completa basada en el JSON
interface ContentData {

    Tecnologia: {
        HeaderCambioDeImagen:{
            Common: {
                logo: string;
                imagenes1: string;
                imagenes2: string;
                imagenes3: string;
                imagenes4: string;
            },
            es: {
                Titulo: string;
                Texto: string;
                boton1: string;
                boton2: string;
                boton3: string;
                boton4: string;
            },
            en: {
                Titulo: string;
                Texto: string;
                boton1: string;
                boton2: string;
                boton3: string;
                boton4: string;
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
