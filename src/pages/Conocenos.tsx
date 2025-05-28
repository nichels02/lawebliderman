import { useContent } from '../common/Componentes/Sistemas/useContent.tsx';
import { useLanguage } from '../common/Componentes/Sistemas/LanguageContext.tsx';
import HeaderGenerico from '../common/Componentes/HeaderGenerico.tsx';
import ContenedorScroll from '../common/Componentes/ContenedorScroll.tsx';
import TituloYSubtituloGenerico from "../common/Componentes/TituloYSubtituloGenerico.tsx";

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
                onButton1Click={() => console.log("Ver más info")}
                onButton2Click={() => console.log("Contratar servicio")}
            />
            <div style={{ marginBottom: '40px' }}></div>
            <TituloYSubtituloGenerico
                titulo={content.Conocenos.Titulos[language].Titulo1.Titulo}
                subtitulo={content.Conocenos.Titulos[language].Titulo1.Subtitulo}
            />
            <div style={{ marginBottom: '70px' }}></div>
            <ContenedorScroll />
        </>
    );
}

export default Conocenos;