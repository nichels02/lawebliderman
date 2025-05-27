import { createContext, useContext, useState, useEffect } from "react";

// 📌 Interfaz completa basada en el JSON
interface ContentData {

    home: {
        ValidadorFormulario: {
            es: {
                NombreVacio: string;
                ApellidoVacio: string;
                CorreoVacio: string;
                FormatoDeCorreo: string;
                TelefonoVacio: string;
                TelefonoSoloNumeros: string;
                TelefonoCantidadDeDigitos: string;
                MensajeVacio: string;
                PaisVacio: string;
                InteresVacio: string;
                ErrorGuardando: string;
                ErrorDeConexion: string;

            },
            en: {
                NombreVacio: string;
                ApellidoVacio: string;
                CorreoVacio: string;
                FormatoDeCorreo: string;
                TelefonoVacio: string;
                TelefonoSoloNumeros: string;
                TelefonoCantidadDeDigitos: string;
                MensajeVacio: string;
                PaisVacio: string;
                InteresVacio: string;
                ErrorGuardando: string;
                ErrorDeConexion: string;
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
