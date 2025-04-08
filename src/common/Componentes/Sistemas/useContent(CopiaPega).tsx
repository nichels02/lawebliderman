import { createContext, useContext, useState, useEffect } from "react";

// 📌 Interfaz completa basada en el JSON
interface ContentData {

    Tecnologia: {
        TextImageSelector: {
            Common: {
                ImagenBoton1: string;
                ImagenBoton2: string;
                ImagenBoton3: string;
                ImagenBoton4: string;
                ImagenBoton5: string;
                imagenALaIzquierda: boolean;
            },
            es: {
                boton1: {
                    Titulo: string;
                    Texto: string;
                },
                boton2: {
                    Titulo: string;
                    Texto: string;
                },
                boton3: {
                    Titulo: string;
                    Texto: string;
                },
                boton4: {
                    Titulo: string;
                    Texto: string;
                },
                boton5: {
                    Titulo: string;
                    Texto: string;
                }
            },
            en: {
                boton1: {
                    Titulo: string;
                    Texto: string;
                },
                boton2: {
                    Titulo: string;
                    Texto: string;
                },
                boton3: {
                    Titulo: string;
                    Texto: string;
                },
                boton4: {
                    Titulo: string;
                    Texto: string;
                },
                boton5: {
                    Titulo: string;
                    Texto: string;
                }
            }
        }
        TextImageSelector2: {
            Common: {
                ImagenBoton1: string;
                ImagenBoton2: string;
                ImagenBoton3: string;
                ImagenBoton4: string;
                ImagenBoton5: string;
                imagenALaIzquierda: boolean;
            },
            es: {
                boton1: {
                    Titulo: string;
                    Texto: string;
                },
                boton2: {
                    Titulo: string;
                    Texto: string;
                },
                boton3: {
                    Titulo: string;
                    Texto: string;
                },
                boton4: {
                    Titulo: string;
                    Texto: string;
                },
                boton5: {
                    Titulo: string;
                    Texto: string;
                }
            },
            en: {
                boton1: {
                    Titulo: string;
                    Texto: string;
                },
                boton2: {
                    Titulo: string;
                    Texto: string;
                },
                boton3: {
                    Titulo: string;
                    Texto: string;
                },
                boton4: {
                    Titulo: string;
                    Texto: string;
                },
                boton5: {
                    Titulo: string;
                    Texto: string;
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
