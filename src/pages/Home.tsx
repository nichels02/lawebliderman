import Header1 from '../common/Componentes/Header1.tsx';
import Marquee from '../common/Componentes/Marquee.tsx';
import CardWithExpand from '../common/Componentes/CardWithExpand.tsx';
import PorcentajeNegocio from '../common/Componentes/PorcentajeNegocio.tsx';
import TituloYSubtituloGenerico from '../common/Componentes/TituloYSubtituloGenerico.tsx';
import ImagenYGrid2 from '../common/Componentes/ImagenYGrid2.tsx';
import TextoGeneral from '../common/Componentes/TextoGeneral.tsx';
import { useContent } from '../common/Componentes/Sistemas/useContent.tsx';
import { useLanguage } from '../common/Componentes/Sistemas/LanguageContext.tsx';




function Home(){
        const content = useContent();
        const { language } = useLanguage();

        if (!content) {
                return <div>Loading...</div>;
        }

        return (
            <>

                    <Header1 />
                    <div style={{ marginBottom: '20px' }}></div>
                    <TituloYSubtituloGenerico
                        titulo={content.home.Titulos[language].Titulo1.Titulo}
                        subtitulo={content.home.Titulos[language].Titulo1.Subtitulo}
                    />
                    <div style={{ marginBottom: '70px' }}></div>
                    <CardWithExpand />
                    <div style={{ marginBottom: '70px' }}></div>
                    <TituloYSubtituloGenerico
                        titulo={content.home.Titulos[language].Titulo2.Titulo}
                        subtitulo={content.home.Titulos[language].Titulo2.Subtitulo}
                    />
                    <div style={{ marginBottom: '30px' }}></div>
                    <Marquee />
                    <TextoGeneral texto="El servicio que brindamos es a través de nuestros colaboradores, *ellos son el centro* de toda nuestra gestión." />
                    <TituloYSubtituloGenerico
                        titulo={content.home.Titulos[language].Titulo3.Titulo}
                        subtitulo={content.home.Titulos[language].Titulo3.Subtitulo}
                    />
                    <PorcentajeNegocio />
                    <TituloYSubtituloGenerico
                        titulo={content.home.Titulos[language].Titulo4.Titulo}
                        subtitulo={content.home.Titulos[language].Titulo4.Subtitulo}
                    />
                    <ImagenYGrid2 />


            </>
        )
}
export default Home