import { useContent } from '../common/Componentes/Sistemas/useContent.tsx';
import { useLanguage } from '../common/Componentes/Sistemas/LanguageContext.tsx';
import TituloYSubtituloGenerico from "../common/Componentes/TituloYSubtituloGenerico.tsx";
import GridDocumentosLegales from "../common/Componentes/GridDocumentosLegales.tsx";
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