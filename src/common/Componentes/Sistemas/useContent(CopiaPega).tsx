import { createContext, useContext, useState, useEffect } from "react";

// 📌 Interfaz completa basada en el JSON
interface ContentData {
    Servicio: {
        TextoTituloEImagen: {
            Contenido: {
                Imagen1: string;
                Imagen2: string;
                Imagen3: string;
            },
            es: {
                botones: {
                    Texto1: string;
                    Texto2: string;
                    Texto3: string;
                },
                Titulo: string;
                Texto: string;
            },
            en: {
                botones: {
                    Texto1: string;
                    Texto2: string;
                    Texto3: string;
                },
                Titulo: string;
                Texto: string;
            }
        }
        TextoTituloEImagen2: {
            Contenido: {
                Imagen1: string;
                Imagen2: string;
                Imagen3: string;
                Imagen4: string;
            },
            es: {
                botones: {
                    Texto1: string;
                    Texto2: string;
                    Texto3: string;
                    Texto4: string;
                },
                Titulo: string;
                Texto: string;
            },
            en: {
                botones: {
                    Texto1: string;
                    Texto2: string;
                    Texto3: string;
                    Texto4: string;
                },
                Titulo: string;
                Texto: string;
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

