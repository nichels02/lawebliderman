import Header1 from '../common/Componentes/Header1.tsx';
import Marquee from '../common/Componentes/Marquee.tsx';
import CardWithExpand from '../common/Componentes/CardWithExpand.tsx';
import PorcentajeNegocio from '../common/Componentes/PorcentajeNegocio.tsx';
import FormularioDeContacto from '../common/Componentes/FormularioDeContacto.tsx';
import TituloYSubtituloGenerico from '../common/Componentes/TituloYSubtituloGenerico.tsx';
import ImagenYGrid from '../common/Componentes/imagenYGrid.tsx';




function Home(){


    return (
        <>
            <Header1 />
            <TituloYSubtituloGenerico
                titulo="Soluciones"
                subtitulo="para tu tranquilidad"
            />
            <CardWithExpand />
            <TituloYSubtituloGenerico
                titulo="Certificaciones"
                subtitulo="Obtenidas"
            />
            <Marquee />
            <PorcentajeNegocio />
            <ImagenYGrid />
            <FormularioDeContacto />

        </>
    )
}
export default Home