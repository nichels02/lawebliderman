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
        BarraDeRedes: {
            Item1: {
                Link: string;
                imagen: string;
            },
            Item2: {
                Link: string;
                imagen: string;
            },
            Item3: {
                Link: string;
                imagen: string;
            },
            Item4: {
                Link: string;
                imagen: string;
            }
        };
        CardWithExpand: {
            Seguridad: {
                es: {
                    title: string;
                    subtitle: string;
                    items: string[];
                    buttonText: string;
                },
                en: {
                    title: string;
                    subtitle: string;
                    items: string[];
                    buttonText: string;
                },
                imageUrl: string;
                link: string;
            },
            Servicios: {
                es: {
                    title: string;
                    subtitle: string;
                    items: string[];
                    secondSubtitle: string;
                    secondItems: string[]
                    buttonText: string;
                },
                en: {
                    title: string;
                    subtitle: string;
                    items: string[];
                    secondSubtitle: string;
                    secondItems: string[];
                    buttonText: string;
                },
                imageUrl: string;
                link: string;
            },
            Tecnologia: {
                es: {
                    title: string;
                    subtitle: string;
                    items: string[];
                    secondSubtitle: string;
                    thirdSubtitle: string;
                    fourthSubtitle: string;
                    buttonText: string;
                },
                en: {
                    title: string;
                    subtitle: string;
                    items: string[];
                    secondSubtitle: string;
                    thirdSubtitle: string;
                    fourthSubtitle: string;
                    buttonText: string;
                },
                imageUrl: string;
                link: string;
            }
        };
        Marquee: {
            common: {
                items:
                    {
                        src: string;
                        alt: string;
                    }[
                        ]
            },
            es: {
                items:
                    {
                        subtitle1: string;
                        subtitle2: string;
                    }[
                        ]
            },
            en: {
                items:
                    {
                        subtitle1: string;
                        subtitle2: string;
                    }[
                        ]
            }
        }
        porcentajeNegocio: {
            common: {
                images: string[];
            };
            es: {
                items: {
                    label: string;
                    percentage: string;
                }[];
                fixedTexts: string[];
                otrosCategories: string[];
            };
            en: {
                items: {
                    label: string;
                    percentage: string;
                }[];
                fixedTexts: string[];
                otrosCategories: string[];
            };
        };
        ImagenYGrid2: {
            es: {
                tituloSuperior: string;
                tituloInferior: string;
                reconocimiento1: string;
                reconocimiento2: string;
                boton1: {
                    titulo: string;
                    subtitulo: string;
                },
                boton2: {
                    titulo: string;
                    subtitulo: string;
                }
            },
            en: {
                tituloSuperior: string;
                tituloInferior: string;
                reconocimiento1: string;
                reconocimiento2: string;
                boton1: {
                    titulo: string;
                    subtitulo: string;
                },
                boton2: {
                    titulo: string;
                    subtitulo: string;
                }
            },
            contenido: {
                imagenPrincipal: string;
                logo1: string;
                logo2: string;
                boton1ImagenIzquierda: string;
                boton1ImagenDerecha: string;
                boton2ImagenIzquierda: string;
                boton2ImagenDerecha: string;
            }
        }


    }

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
                    Contenedor7: {
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
                    Contenedor7: {
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
    Seguridad: {
        HeaderCarruselDeImagenes: {
            Common: {
                ItemsBotones: Array<{
                    Imagen: string;
                    alt: string;
                }>;
                imagenDeFondo: string;
            },
            es: {
                Titulo: string;
                Texto: string;
                TextosBotones: Array<{
                    Texto: string;
                }>;
            },
            en: {
                Titulo: string;
                Texto:string;
                TextosBotones: Array<{
                    Texto: string;
                }>;
            }
        },
        GridGenerico: {
            en: {
                Sector1: {
                    Titulo: string;
                    Texto: string;
                },
                Sector2: {
                    Titulo: string;
                    Texto: string;
                },
                Sector3: {
                    Titulo: string;
                    Texto: string;
                },
                Sector4: {
                    Titulo: string;
                    Texto: string;
                }

            },
            es: {
                Sector1: {
                    Titulo: string;
                    Texto: string;
                },
                Sector2: {
                    Titulo: string;
                    Texto: string;
                },
                Sector3: {
                    Titulo: string;
                    Texto: string;
                },
                Sector4: {
                    Titulo: string;
                    Texto: string;
                }
            },
            Contenido: {
                ImagenGrande: string;
                imagenSector1: string;
                imagenSector2: string;
                imagenSector3: string;
                imagenSector4: string;

            }
        }
        FlechaGiro: {
            en: {
                TituloCentral: string;
                Contenedor1: {
                    Titulo:string;
                    Texto: string;
                },
                Contenedor2: {
                    Titulo:string;
                    Texto: string;
                },
                Contenedor3: {
                    Titulo:string;
                    Texto: string;
                },
                Contenedor4: {
                    Titulo:string;
                    Texto: string;
                },
                Contenedor5: {
                    Titulo:string;
                    Texto: string;
                },
                Contenedor6: {
                    Titulo:string;
                    Texto: string;
                }
            },
            es: {
                TituloCentral: string;
                Contenedor1: {
                    Titulo:string;
                    Texto: string;
                },
                Contenedor2: {
                    Titulo:string;
                    Texto: string;
                },
                Contenedor3: {
                    Titulo:string;
                    Texto: string;
                },
                Contenedor4: {
                    Titulo:string;
                    Texto: string;
                },
                Contenedor5: {
                    Titulo:string;
                    Texto: string;
                },
                Contenedor6: {
                    Titulo:string;
                    Texto: string;
                }

            },
            Contenido: {
                ImagenFlecha: string;
            }
        }
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
    },

    Servicio: {
        header: {
            Contenido: {
                logo: string;
                Fondo: string;
                ImagenDelCostado: string;
            },
            es:{
                Titulo: string;
                Texto: string;
            },
            en: {
                Titulo: string;
                Texto: string;
            }
        }
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
        },
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
    /*
    Tecnologia: {

    },*/
    Lidermania:{
        DonaRotativa: {
            es: {
                Grupo1: {
                    Titulo: string;
                    Texto: string;
                },
                Grupo2: {
                    Titulo: string;
                    Texto: string;
                },
                Grupo3: {
                    Titulo: string;
                    Texto: string;
                },
                Grupo4: {
                    Titulo: string;
                    Texto: string;
                }
            },
            en: {
                Grupo1: {
                    Titulo: string;
                    Texto: string;
                },
                Grupo2: {
                    Titulo: string;
                    Texto: string;
                },
                Grupo3: {
                    Titulo: string;
                    Texto: string;
                },
                Grupo4: {
                    Titulo: string;
                    Texto: string;
                }
            },
            "contenido":{
                Imagen1: string;
                Imagen2: string;
                Imagen3: string;
                Imagen4: string;
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
