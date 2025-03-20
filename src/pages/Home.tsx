import Header1 from '../common/Componentes/Header1.tsx';
import Marquee from '../common/Componentes/Marquee.tsx';
import CardWithExpand from '../common/Componentes/CardWithExpand.tsx';
import PorcentajeNegocio from '../common/Componentes/PorcentajeNegocio.tsx';
import FormularioDeContacto from '../common/Componentes/FormularioDeContacto.tsx';
import TituloYSubtituloGenerico from '../common/Componentes/TituloYSubtituloGenerico.tsx';
import ImagenYGrid2 from '../common/Componentes/ImagenYGrid2.tsx';
import TextoGeneral from '../common/Componentes/TextoGeneral.tsx';




function Home(){


    return (
        <>
            <Header1 />
            <div style={{ marginBottom: '20px' }}></div>
            <TituloYSubtituloGenerico
                titulo="Soluciones"
                subtitulo="para tu tranquilidad"
            />
            <div style={{ marginBottom: '70px' }}></div>
            <CardWithExpand />
            <div style={{ marginBottom: '70px' }}></div>
            <TituloYSubtituloGenerico
                titulo="Certificaciones"
                subtitulo="Obtenidas"
            />
            <div style={{ marginBottom: '30px' }}></div>
            <Marquee />
            <TextoGeneral texto="El servicio que brindamos es a través de nuestros colaboradores, *ellos son el centro* de toda nuestra gestión." />
            <PorcentajeNegocio />
            <ImagenYGrid2 />
            <FormularioDeContacto />

        </>
    )
}
export default Home