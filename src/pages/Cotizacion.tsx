import Header1 from '../common/Componentes/Header1.tsx';
// import Marquee from '../common/Componentes/Marquee.tsx';
// import CardWithExpand from '../common/Componentes/CardWithExpand.tsx';
// import PorcentajeNegocio from '../common/Componentes/PorcentajeNegocio.tsx';
// import TituloYSubtituloGenerico from '../common/Componentes/TituloYSubtituloGenerico.tsx';
// import ImagenYGrid2 from '../common/Componentes/ImagenYGrid2.tsx';
// import TextoGeneral from '../common/Componentes/TextoGeneral.tsx';
import { useContent } from '../common/Componentes/Sistemas/useContent.tsx';
// import { useLanguage } from '../common/Componentes/Sistemas/LanguageContext.tsx';
// import LinkACotizacion from "../common/Componentes/LinkACotizacion.tsx";
import FormCotizacion from "../common/Componentes/FormCotizacion.tsx";
// import Style from '../common/css/pages/Home.module.css'
// import GridDocumentosLegales from "../common/Componentes/GridDocumentosLegales.tsx";


function Cotizacion() {
        const content = useContent();

        if (!content) {
                return <div>Loading...</div>;
        }

        return (
            <>
                <Header1/>
                <FormCotizacion/>


            </>
        )
}

export default Cotizacion