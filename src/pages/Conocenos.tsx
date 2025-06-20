import { useContent } from '../common/Componentes/Sistemas/useContent.tsx';
import { useLanguage } from '../common/Componentes/Sistemas/LanguageContext.tsx';
import HeaderGenerico from '../common/Componentes/HeaderGenerico.tsx';
import ContenedorScrollNuevo1 from '../common/Componentes/ContenedorScrollNuevo1.tsx';
import TituloYSubtituloGenerico from "../common/Componentes/TituloYSubtituloGenerico.tsx";
// import Style from "../common/css/pages/Conocenos.module.css";

function Conocenos() {
    const content = useContent();
    const { language } = useLanguage();

    if (!content) {
        return <div>Loading...</div>;
    }

    const { Common, es, en } = content.Conocenos.HeaderGenerico;
    const currentLang = language === 'es' ? es : en;

    return (
        <>
            <HeaderGenerico
                backgroundImage={Common.Fondo}
                sideImage={Common.ImagenDelCostado}
                logo={Common.logo}
                title={currentLang.Titulo}
                description={currentLang.Texto}
                button1Text={currentLang.Boton1}
                button2Text={currentLang.Boton2}
                onButton1ClickPosicion={"/Conocenos#LineaDeTiempo"}
                onButton1ClickModo={"top"}
                onButton2ClickPosicion={"/Conocenos#FormularioDeContacto"}
                onButton2ClickModo={"top"}
            />
            <TituloYSubtituloGenerico
                // className={Style.LineaDeTiempo}
                titulo={content.Conocenos.Titulos[language].Titulo1.Titulo}
                subtitulo={content.Conocenos.Titulos[language].Titulo1.Subtitulo}
            />
            <ContenedorScrollNuevo1 />
        </>
    );
}

export default Conocenos;