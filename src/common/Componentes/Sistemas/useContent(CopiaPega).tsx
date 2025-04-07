import { createContext, useContext, useState, useEffect } from "react";

// 📌 Interfaz completa basada en el JSON
interface ContentData {

    Conocenos: {
        contenedorScroll: {
            common: {
                items: {
                    Contenedor1: {
                        src: string;
                        alt: string;
                    },
                    Contenedor2: {
                        src: string;
                        alt: string;
                    },
                    Contenedor3: {
                        src: string;
                        alt: string;
                    },
                    Contenedor4: {
                        src: string;
                        alt: string;
                    },
                    Contenedor5: {
                        src: string;
                        alt: string;
                    },
                    Contenedor6: {
                        src: string;
                        alt: string;
                    }
                },
                imagenDePunto: string;
            },
            es: {
                Puntos: {
                    Contenedor1: {
                        fecha: string;
                        EstaALaDerecha: boolean;
                    },
                    Contenedor2: {
                        fecha: string;
                        EstaALaDerecha: boolean;
                    },
                    Contenedor3: {
                        fecha: string;
                        EstaALaDerecha: boolean;
                    },
                    Contenedor4: {
                        fecha: string;
                        EstaALaDerecha: boolean;
                    },
                    Contenedor5: {
                        fecha: string;
                        EstaALaDerecha: boolean;
                    },
                    Contenedor6: {
                        fecha: string;
                        EstaALaDerecha: boolean;
                    },
                    Contenedor7: {
                        fecha: string;
                        EstaALaDerecha: boolean;
                    },
                    Contenedor8: {
                        fecha: string;
                        EstaALaDerecha: boolean;
                    },
                    Contenedor9: {
                        fecha: string;
                        EstaALaDerecha: boolean;
                    },
                    Contenedor10: {
                        fecha: string;
                        EstaALaDerecha: boolean;
                    },
                    Contenedor11: {
                        fecha: string;
                        EstaALaDerecha: boolean;
                    }
                },
                ContenedorSimple: {
                    Contenedor1: {
                        Texto: string;
                    },
                    Contenedor2: {
                        Texto: string;
                    },
                    Contenedor3: {
                        Texto: string;
                    },
                    Contenedor4: {
                        Texto: string;
                    },
                    Contenedor5: {
                        Texto: string;
                    },
                    Contenedor6: {
                        Texto: string;
                    },
                    Contenedor: {
                        Texto: string;
                    }
                },
                ContenedorComplejo: {
                    Contenedor1:{
                        Titulo: string;
                        Texto: string;
                    },
                    Contenedor2:{
                        Titulo: string;
                        Texto: string;
                    },
                    Contenedor3:{
                        Titulo: string;
                        Texto: string;
                    },
                    Contenedor4:{
                        Titulo: string;
                        Texto: string;
                    },
                    Contenedor5:{
                        Titulo: string;
                        Texto: string;
                    },
                    Contenedor6:{
                        Titulo: string;
                        Texto: string;
                    }
                }
            },
            en: {
                Puntos: {
                    Contenedor1: {
                        fecha: string;
                        EstaALaDerecha: boolean;
                    },
                    Contenedor2: {
                        fecha: string;
                        EstaALaDerecha: boolean;
                    },
                    Contenedor3: {
                        fecha: string;
                        EstaALaDerecha: boolean;
                    },
                    Contenedor4: {
                        fecha: string;
                        EstaALaDerecha: boolean;
                    },
                    Contenedor5: {
                        fecha: string;
                        EstaALaDerecha: boolean;
                    },
                    Contenedor6: {
                        fecha: string;
                        EstaALaDerecha: boolean;
                    },
                    Contenedor7: {
                        fecha: string;
                        EstaALaDerecha: boolean;
                    },
                    Contenedor8: {
                        fecha: string;
                        EstaALaDerecha: boolean;
                    },
                    Contenedor9: {
                        fecha: string;
                        EstaALaDerecha: boolean;
                    },
                    Contenedor10: {
                        fecha: string;
                        EstaALaDerecha: boolean;
                    },
                    Contenedor11: {
                        fecha: string;
                        EstaALaDerecha: boolean;
                    }
                },
                ContenedorSimple: {
                    Contenedor1: {
                        Texto: string;
                    },
                    Contenedor2: {
                        Texto: string;
                    },
                    Contenedor3: {
                        Texto: string;
                    },
                    Contenedor4: {
                        Texto: string;
                    },
                    Contenedor5: {
                        Texto: string;
                    },
                    Contenedor6: {
                        Texto: string;
                    },
                    Contenedor: {
                        Texto: string;
                    }
                },
                ContenedorComplejo: {
                    Contenedor1:{
                        Titulo: string;
                        Texto: string;
                    },
                    Contenedor2:{
                        Titulo: string;
                        Texto: string;
                    },
                    Contenedor3:{
                        Titulo: string;
                        Texto: string;
                    },
                    Contenedor4:{
                        Titulo: string;
                        Texto: string;
                    },
                    Contenedor5:{
                        Titulo: string;
                        Texto: string;
                    },
                    Contenedor6:{
                        Titulo: string;
                        Texto: string;
                    }
                }
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
