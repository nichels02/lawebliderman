import { useContent } from '../common/Componentes/Sistemas/useContent.tsx';
import { useLanguage } from '../common/Componentes/Sistemas/LanguageContext.tsx';
import TituloYSubtituloGenerico from "../common/Componentes/TituloYSubtituloGenerico.tsx";
import GridDocumentosLegales from "../common/Componentes/GridDocumentosLegales.tsx";
import HeaderServicio from "../common/Componentes/HeaderServicio.tsx";
// import Style from "../common/css/pages/Conocenos.module.css";

function Legal() {
    const content = useContent();
    const { language } = useLanguage();

    if (!content) {
        return <div>Loading...</div>;
    }

    // const { Common, es, en } = content.Conocenos.HeaderGenerico;
    // const currentLang = language === 'es' ? es : en;

    return (
        <>
            <HeaderServicio
                fondo={content.Servicio.header.Contenido.Fondo}
                logo={content.Servicio.header.Contenido.logo}
                imagenLateral={content.Servicio.header.Contenido.ImagenDelCostado}
                titulo={content.Servicio.header[language].Titulo}
                texto={content.Servicio.header[language].Texto}
            />
            <TituloYSubtituloGenerico
                // className={Style.LineaDeTiempo}
                titulo={content.Conocenos.Titulos[language].Titulo1.Titulo}
                subtitulo={content.Conocenos.Titulos[language].Titulo1.Subtitulo}
            />
            <GridDocumentosLegales/>
        </>
    );
}

export default Legal;