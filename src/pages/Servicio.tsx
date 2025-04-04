import { useContent } from "../common/Componentes/Sistemas/useContent.tsx";
import { useLanguage } from "../common/Componentes/Sistemas/LanguageContext.tsx";

import HeaderServicio from "../common/Componentes/HeaderServicio";
import TextoTituloEImagen from "../common/Componentes/TextoTituloEImagen";
import GridGenerico from "../common/Componentes/GridGenerico";
import GridBarajeable from "../common/Componentes/gridBarajeable";
import FormularioDeContacto from "../common/Componentes/FormularioDeContacto";

function Servicio() {
    const content = useContent();
    const { language } = useLanguage();

    // 🔒 Si no hay datos aún, no renderiza (o podrías poner un loading spinner)
    if (!content) return null;

    const datos1 = content.Servicio.TextoTituloEImagen;
    const datos2 = content.Servicio.TextoTituloEImagen2;

    return (
        <>
            <HeaderServicio />

            <TextoTituloEImagen
                titulo={datos1[language].Titulo}
                texto={datos1[language].Texto}
                imagenes={[
                    datos1.Contenido.Imagen1,
                    datos1.Contenido.Imagen2,
                    datos1.Contenido.Imagen3,
                ]}
                textosBotones={[
                    datos1[language].botones.Texto1,
                    datos1[language].botones.Texto2,
                    datos1[language].botones.Texto3,
                ]}
                imagenALaIzquierda={true}
            />

            <TextoTituloEImagen
                titulo={datos2[language].Titulo}
                texto={datos2[language].Texto}
                imagenes={[
                    datos2.Contenido.Imagen1,
                    datos2.Contenido.Imagen2,
                    datos2.Contenido.Imagen3,
                    datos2.Contenido.Imagen4,
                ]}
                textosBotones={[
                    datos2[language].botones.Texto1,
                    datos2[language].botones.Texto2,
                    datos2[language].botones.Texto3,
                    datos2[language].botones.Texto4,
                ]}
                imagenALaIzquierda={false}
            />

            <GridGenerico
                largeImage="/images/large-image.jpg"
                items={[
                    { image: "/images/item1.jpg", title: "Título 1", text: "Descripción 1" },
                    { image: "/images/item2.jpg", title: "Título 2", text: "Descripción 2" },
                    { image: "/images/item3.jpg", title: "Título 3", text: "Descripción 3" },
                    { image: "/images/item4.jpg", title: "Título 4", text: "Descripción 4" }
                ]}
            />

            <GridBarajeable />
            <FormularioDeContacto />
        </>
    );
}

export default Servicio;
