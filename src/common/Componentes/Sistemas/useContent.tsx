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
                boton2ImagenIzquierda: string;
            }
        }
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
                BotonEnviando: string;
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
                BotonEnviando: string;
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


                Colaboradores: {
                    Titulo: string;
                    Numero: string;
                },
                CoberturaDeRiesgo:{
                    Titulo: string;
                    Numero: string;
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
        },
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
                Links: {
                    youtube: string;
                    tiktok: string;
                    linkedin: string;
                    facebook: string;
                }
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

    Conocenos: {
        HeaderGenerico: {
            Common: {
                Fondo: string;
                logo: string;
                ImagenDelCostado: string;
            },
            es: {
                Titulo: string;
                Texto: string;
                Boton1: string;
                Boton2: string;
            },
            en: {
                Titulo: string;
                Texto: string;
                Boton1: string;
                Boton2: string;
            }
        },
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
    }

    Seguridad: {
        HeaderCarruselDeImagenes: {
            Common: {
                ItemsBotones: Array<{
                    Imagen: string;
                    alt: string;
                }>;
                imagenDeFondo: string;
                "logo": string;
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
                    description:  string[];
                    showTitle: boolean;
                },
                carta2: {
                    text:  string;
                    description:  string[];
                    showTitle: boolean;
                },
                carta3: {
                    text:  string;
                    description:  string[];
                    showTitle: boolean;
                },
                carta4: {
                    text:  string;
                    description: string[];
                    showTitle: boolean;
                },
                carta5: {
                    text:  string;
                    description:  string[];
                    showTitle: boolean;
                }
            },
            es: {
                carta1: {
                    text:  string;
                    description:  string[];
                    showTitle: boolean;
                },
                carta2: {
                    text:  string;
                    description:  string[];
                    showTitle: boolean;
                },
                carta3: {
                    text:  string;
                    description:  string[];
                    showTitle: boolean;
                },
                carta4: {
                    text:  string;
                    description:  string[];
                    showTitle: boolean;
                },
                carta5: {
                    text:  string;
                    description:  string[];
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
    }

    Tecnologia: {
        HeaderCambioDeImagen:{
            Common: {
                logo: string;
                Fondo: string;
                imagenes1: string;
                imagenes2: string;
                imagenes3: string;
                imagenes4: string;
            },
            es: {
                Titulo: string;
                Texto: string;
                boton1: string;
                boton2: string;
                boton3: string;
                boton4: string;
            },
            en: {
                Titulo: string;
                Texto: string;
                boton1: string;
                boton2: string;
                boton3: string;
                boton4: string;
            }
        }
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
        CardGrid: {
            Common: {
                ImagenCarta1: string;
                ImagenCarta2: string;
                ImagenCarta3: string;
                ImagenCarta4: string;
                ImagenCarta5: string;
                ImagenCarta6: string;
                ImagenCarta7: string;

            },
            es:{
                Carta1: string;
                Carta2: string;
                Carta3: string;
                Carta4: string;
                Carta5: string;
                Carta6: string;
                Carta7: string;
            },
            en: {
                Carta1: string;
                Carta2: string;
                Carta3: string;
                Carta4: string;
                Carta5: string;
                Carta6: string;
                Carta7: string;
            }
        }
    }

    Lidermania:{
        HeaderGenerico: {
            Common: {
                Fondo: string;
                logo: string;
                ImagenDelCostado: string;
            },
            es: {
                Titulo: string;
                Texto: string;
                Boton1: string;
                Boton2: string;
            },
            en: {
                Titulo: string;
                Texto: string;
                Boton1: string;
                Boton2: string;
            }
        },
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
        TituloTextoEImagen2: {
            Common: {
                ImagenDelCostado: string;
            },
            es: {
                Titulo: string;
                Subtitulo: string;
                Subtitulo2: string;
            },
            en: {
                Titulo: string;
                Subtitulo: string;
                Subtitulo2: string;
            }
        }
        CarruselDeTrabajos: {
            Common:{
                IconoDeNoHayTrabajos: string
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
