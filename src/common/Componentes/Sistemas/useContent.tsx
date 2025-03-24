import { createContext, useContext, useState, useEffect } from "react";

// 📌 Interfaz completa basada en el JSON
interface ContentData {
    home: {
        Header: {
            en: {
                titulo: string;
                subtitulo: string;
                descripcion1: string;
                descripcion2: string;
                botonPrimario: string;
                botonSecundario: string;
                trabajadores: string;
                years: string;
                clientes: string;
                Numero_trabajadores: string,
                Numero_years: string,
                Numero_clientes: string
            };
            es: {
                titulo: string;
                subtitulo: string;
                descripcion1: string;
                descripcion2: string;
                botonPrimario: string;
                botonSecundario: string;
                trabajadores: string;
                years: string;
                clientes: string;
                Numero_trabajadores: string,
                Numero_years: string,
                Numero_clientes: string
            };
            contenido: {
                logo: string;
                imagen_De_Fondo: string;
            };
        };

        BarraDeOpciones: {
            es: {
                inicio: string;
                conocenos: string;
                soluciones: string;
                seguridad: string;
                servicio: string;
                tecnologia: string;
                lidermania: string;
                unete: string;
            },
            en: {
                inicio: string;
                conocenos: string;
                soluciones: string;
                seguridad: string;
                servicio: string;
                tecnologia: string;
                lidermania: string;
                unete: string;
            };
        };
        BarraDeOpciones2: {
            es: {
                contactanos: string;
                espanol: string;
                ingles: string;
            };
            en: {
                contactanos: string;
                espanol: string;
                ingles: string;
            };
        };
    };
}

// 🔥 Contexto para almacenar los datos
const ContentContext = createContext<ContentData | null>(null);

export function ContentProvider({ children }: { children: React.ReactNode }) {
    const [data, setData] = useState<ContentData | null>(null);

    useEffect(() => {
        fetch("/Data.json") // ✅ JSON en la carpeta `public/`
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
