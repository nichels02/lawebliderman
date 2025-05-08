import { createContext, useContext, useState, useEffect } from "react";

// 📌 Interfaz completa basada en el JSON
interface ContentData {

    home: {
        Footer: {
            Common: {
                LidermanLogoDark: string;
                LidermanLogoLight: string;
                facebookLight: string;
                facebookDark: string;
                tiktokLight: string;
                tiktokDark: string;
                linkedinLight: string;
                linkedinDark: string;
                youtubeLight: string;
                youtubeDark: string;

            },
            es: {
                Eslogan: string;
                Inicio: {
                    Titulo: string;
                    Soluciones:string;
                    Certificaciones: string;
                    Presencia: string;
                    Cultura: string;
                },
                Conocenos: {
                    Titulo: string;
                    QuienesSomos: string;
                    Historia: string;
                },
                Soluciones: {
                    Titulo: string;
                    Seguridad: string;
                    Tecnologia: string;
                    Servicio: string;
                },
                lidermania: {
                    Titulo: string;
                    MejoresPersonas: string;
                    CuatroAmas: string;
                    Unete: string;
                },
                "Boton1": {
                    "Titulo": string;
                    "Subtitulo": string;
                },
                "Boton2": {
                    "Titulo": string;
                    "Subtitulo": string;
                },
                TextosFinales: {
                    DerechosReservados: string;
                    TerminosYCondiciones: string;
                    PoliticaDePrivacidad: string;
                }
            },
            en: {
                Eslogan: string;
                Inicio: {
                    Titulo: string;
                    Soluciones: string;
                    Certificaciones: string;
                    Presencia: string;
                    Cultura: string;
                },
                Conocenos: {
                    Titulo: string;
                    QuienesSomos: string;
                    Historia: string;
                },
                Soluciones: {
                    Titulo: string;
                    Seguridad: string;
                    Tecnologia: string;
                    Servicio: string;
                },
                lidermania: {
                    Titulo: string;
                    MejoresPersonas: string;
                    CuatroAmas: string;
                    Unete: string;
                },
                Boton1: {
                    Titulo: string;
                    Subtitulo: string;
                },
                Boton2: {
                    Titulo: string;
                    Subtitulo: string;
                },
                TextosFinales: {
                    DerechosReservados: string;
                    TerminosYCondiciones: string;
                    PoliticaDePrivacidad: string;
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
