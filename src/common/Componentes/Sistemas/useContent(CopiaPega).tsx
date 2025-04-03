import { createContext, useContext, useState, useEffect } from "react";

// 📌 Interfaz completa basada en el JSON
interface ContentData {
    Seguridad: {
        GridBarajeable: {
            en: {
                carta1: {
                    text:  string;
                    description:  string;
                    showTitle: boolean;
                },
                carta2: {
                    text:  string;
                    description:  string;
                    showTitle: boolean;
                },
                carta3: {
                    text:  string;
                    description:  string;
                    showTitle: boolean;
                },
                carta4: {
                    text:  string;
                    description: string;
                    showTitle: boolean;
                },
                carta5: {
                    text:  string;
                    description:  string;
                    showTitle: boolean;
                }
            },
            es: {
                carta1: {
                    text:  string;
                    description:  string;
                    showTitle: boolean;
                },
                carta2: {
                    text:  string;
                    description:  string;
                    showTitle: boolean;
                },
                carta3: {
                    text:  string;
                    description:  string;
                    showTitle: boolean;
                },
                carta4: {
                    text:  string;
                    description:  string;
                    showTitle: boolean;
                },
                carta5: {
                    text:  string;
                    description:  string;
                    showTitle: boolean;
                }
            },
            contenido: {
                carta1: string;
                carta2: string;
                carta3: string;
                carta4: string;
                carta5: string;
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
