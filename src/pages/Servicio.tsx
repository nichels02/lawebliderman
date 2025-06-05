import { useContent } from "../common/Componentes/Sistemas/useContent.tsx";
import { useLanguage } from "../common/Componentes/Sistemas/LanguageContext.tsx";

import HeaderServicio from "../common/Componentes/HeaderServicio";
import TextoTituloEImagen from "../common/Componentes/TextoTituloEImagen";
import GridGenerico from "../common/Componentes/GridGenerico";
import GridBarajeable from "../common/Componentes/gridBarajeable";
import TituloYSubtituloGenerico from "../common/Componentes/TituloYSubtituloGenerico.tsx";

function Servicio() {
    const content = useContent();
    const { language } = useLanguage();

    // 🔒 Si no hay datos aún, no renderiza (o podrías poner un loading spinner)
    if (!content) return null;

    const datos1 = content.Servicio.TextoTituloEImagen;
    const datos2 = content.Servicio.TextoTituloEImagen2;
    const datos3 = content.Servicio.GridGenerico;
    const datos4 = content.Servicio.Titulos;

    return (
        <>
            <HeaderServicio />
            <div style={{ marginBottom: '70px' }}></div>
            <TextoTituloEImagen
                titulo={datos1[language].Titulo}
                texto={datos1[language].Texto}
                imagenes={[
                    datos1.Contenido.Imagen1,
                    datos1.Contenido.Imagen2,
                ]}
                textosBotones={[
                    datos1[language].botones.Texto1,
                    datos1[language].botones.Texto2,
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
            <TituloYSubtituloGenerico
                titulo={datos4[language].Titulo1.Titulo}
                subtitulo={datos4[language].Titulo1.Subtitulo}
            />
            <GridGenerico
                largeImage= {datos3.Contenido.ImagenGrande}
                items={[
                    { image: datos3?.Contenido?.imagenSector1, title: datos3[language]?.Sector1?.Titulo, text: datos3[language]?.Sector1.Texto },
                    { image: datos3?.Contenido?.imagenSector2, title: datos3[language]?.Sector2?.Titulo, text: datos3[language]?.Sector2.Texto },
                    { image: datos3?.Contenido?.imagenSector3, title: datos3[language]?.Sector3?.Titulo, text: datos3[language]?.Sector3.Texto },
                    { image: datos3?.Contenido?.imagenSector4, title: datos3[language]?.Sector4?.Titulo, text: datos3[language]?.Sector4.Texto }
                ]}
            />
            <TituloYSubtituloGenerico
                titulo={datos4[language].Titulo2.Titulo}
                subtitulo={datos4[language].Titulo2.Subtitulo}
            />
            <GridBarajeable />
        </>
    );
}

export default Servicio;
