import { createContext, useContext, useState, useEffect } from "react";

// 📌 Interfaz completa basada en el JSON
interface ContentData {

    Tecnologia: {
        CuadriculaDeModals: {
            Common: {
                Fondo1: string;
                Fondo2: string;
                Fondo3: string;
                Fondo4: string;
            },
            es: {
                Sector1: {
                    Titulo: string;
                    Texto: string;
                    MasInformacion: string;
                    TextoOSimboloDeBoton: string;
                },
                Sector2: {
                    Titulo: string;
                    Texto: string;
                    MasInformacion: string;
                    TextoOSimboloDeBoton: string;
                },
                Sector3: {
                    Titulo: string;
                    Texto: string;
                    MasInformacion: string;
                    TextoOSimboloDeBoton: string;
                },
                Sector4: {
                    Titulo: string;
                    Texto: string;
                    MasInformacion: string;
                    TextoOSimboloDeBoton: string;
                }
            },
            en: {
                Sector1: {
                    Titulo: string;
                    Texto: string;
                    MasInformacion: string;
                    TextoOSimboloDeBoton: string;
                },
                Sector2: {
                    Titulo: string;
                    Texto: string;
                    MasInformacion: string;
                    TextoOSimboloDeBoton: string;
                },
                Sector3: {
                    Titulo: string;
                    Texto: string;
                    MasInformacion: string;
                    TextoOSimboloDeBoton: string;
                },
                Sector4: {
                    Titulo: string;
                    Texto: string;
                    MasInformacion: string;
                    TextoOSimboloDeBoton: string;
                }
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
