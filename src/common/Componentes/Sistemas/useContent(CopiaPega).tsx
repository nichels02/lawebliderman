import { createContext, useContext, useState, useEffect } from "react";

// 📌 Interfaz completa basada en el JSON
interface ContentData {

    Tecnologia: {
        Modal1: {
            Common: {
                Imagen: string;
            };
            es: {
                Titulo: string;
                Texto: string;
                BotonCerrar: string;
            };
            en: {
                Titulo: string;
                Texto: string;
                BotonCerrar: string;
            };
        };
        Modal2: {
            Common: {
                ImagenIzq: string;
                ImagenDer: string;
            };
            es: {
                Titulo: string;
                Texto: string;
                TituloDer: string;
                TituloIzq: string;
                TextoDer: string;
                TextoIzq: string;
                BotonCerrar: string;
            };
            en: {
                Titulo: string;
                Texto: string;
                TituloDer: string;
                TituloIzq: string;
                TextoDer: string;
                TextoIzq: string;
                BotonCerrar: string;
            };
        };
        Modal3: {
            Common: {
                ImagenDerArriba: string;
                ImagenIzqArriba: string;
                ImagenDerAbajo: string;
                ImagenIzqAbajo: string;
            };
            es: {
                Titulo: string;
                Texto: string;
                TituloDerArriba: string;
                TituloIzqArriba: string;
                TituloDerAbajo: string;
                TituloIzqAbajo: string;
                TextoDerArriba: string;
                TextoIzqArriba: string;
                TextoDerAbajo: string;
                TextoIzqAbajo: string;
                BotonCerrar: string;
            };
            en: {
                Titulo: string;
                Texto: string;
                TituloDerArriba: string;
                TituloIzqArriba: string;
                TituloDerAbajo: string;
                TituloIzqAbajo: string;
                TextoDerArriba: string;
                TextoIzqArriba: string;
                TextoDerAbajo: string;
                TextoIzqAbajo: string;
                BotonCerrar: string;
            };
        };
        Modal4: {
            Common: {
                Imagen1: string;
                Imagen2: string;
                Imagen3: string;
                Imagen4: string;
            };
            es: {
                Titulo: string;
                Texto: string;
                Subtitulo1: string;
                Subtitulo2: string;
                Subtitulo3: string;
                Subtitulo4: string;
                Texto1: string;
                Texto2: string;
                Texto3: string;
                Texto4: string;
                BotonCerrar: string;
            };
            en: {
                Titulo: string;
                Texto: string;
                Subtitulo1: string;
                Subtitulo2: string;
                Subtitulo3: string;
                Subtitulo4: string;
                Texto1: string;
                Texto2: string;
                Texto3: string;
                Texto4: string;
                BotonCerrar: string;
            };
        };
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
