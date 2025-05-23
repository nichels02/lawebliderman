import { createContext, useContext, useState, useEffect } from "react";

// 📌 Interfaz completa basada en el JSON
interface ContentData {

    home: {
        Formulario: {
            es: {
                BotonesYDesplegable: {
                    Peru: string;
                    Usa: string;
                    Chile: string;
                    Ecuador: string;
                },
                Titulo: string;
                Nombre: string;
                Apellido: string;
                Correo: string;
                Telefono: string;
                TextoCheckBox: string;
                Seguridad: string;
                Servicios: string;
                Tecnologia: string;
                Mensaje: string;
                TextoGuiaMensaje: string;
                OtroMetodoDeContacto: string;
                ElContactoExtra: string;
                BotonEnviar: string;
                MensajeAprobatorio: string;

                ContenedorInferior:{
                    Peru: {
                        OficinaCentral: string;
                        NumeroOC: string;
                        Anexo: string;

                        LidermanAlarmas: string;
                        NumeroLA: string;
                        AtencionAlCliente: string;
                    },
                    Usa: {
                        OficinaCentral: string;
                        NumeroOC: string;
                        Anexo: string;

                        LidermanAlarmas: string;
                        NumeroLA: string;
                        AtencionAlCliente: string;
                    },
                    Chile: {
                        OficinaCentral: string;
                        NumeroOC: string;
                        Anexo: string;

                        LidermanAlarmas: string;
                        NumeroLA: string;
                        AtencionAlCliente: string;
                    },
                    Ecuador: {
                        OficinaCentral: string;
                        NumeroOC: string;
                        Anexo: string;

                        LidermanAlarmas: string;
                        NumeroLA: string;
                        AtencionAlCliente: string;
                    }
                },

                Colaboradores: {
                    Titulo: string;
                    Numero: string;
                },
                CoberturaDeRiesgo:{
                    Titulo: string;
                    Numero: string;
                }
            },
            en: {
                BotonesYDesplegable: {
                    Peru: string;
                    Usa: string;
                    Chile: string;
                    Ecuador: string;
                },
                Titulo: string;
                Nombre: string;
                Apellido: string;
                Correo: string;
                Telefono: string;
                TextoCheckBox: string;
                Seguridad: string;
                Servicios: string;
                Tecnologia: string;
                Mensaje: string;
                TextoGuiaMensaje: string;
                OtroMetodoDeContacto: string;
                ElContactoExtra: string;
                BotonEnviar: string;
                MensajeAprobatorio: string;



                ContenedorInferior: {
                    Peru: {
                        OficinaCentral: string;
                        NumeroOC: string;
                        Anexo: string;

                        LidermanAlarmas: string;
                        NumeroLA: string;
                        AtencionAlCliente: string;
                    },
                    Usa: {
                        OficinaCentral: string;
                        NumeroOC: string;
                        Anexo: string;

                        LidermanAlarmas: string;
                        NumeroLA: string;
                        AtencionAlCliente: string;
                    },
                    Chile: {
                        OficinaCentral: string;
                        NumeroOC: string;
                        Anexo: string;

                        LidermanAlarmas: string;
                        NumeroLA: string;
                        AtencionAlCliente: string;
                    },
                    Ecuador: {
                        OficinaCentral: string;
                        NumeroOC: string;
                        Anexo: string;

                        LidermanAlarmas: string;
                        NumeroLA: string;
                        AtencionAlCliente: string;
                    }
                }

            },
            common: {
                imagenDeFondo: string;
                ImagenDeLaDerecha:{
                    Peru: string;
                    Usa: string;
                    Ecuador: string;
                    Chile: string;
                },
                Colaboradores: string;
                CoberturaDeReisgo: string;
                ImagenContenedorInferior: string;
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
