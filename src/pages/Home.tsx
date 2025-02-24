import Header1 from '../common/Componentes/Header1.tsx';
import EspacioVacio from '../common/Componentes/EspacioVacio.tsx';
import Marquee from '../common/Componentes/Marquee.tsx';
import CardWithExpand from '../common/Componentes/CardWithExpand.tsx';
import FlechaGiro from '../common/Componentes/FlechaGiro.tsx';
import PorcentajeNegocio from '../common/Componentes/PorcentajeNegocio.tsx';





function Home(){
    return (
        <>
            <Header1 />
            <Marquee />
            <CardWithExpand />
            <FlechaGiro />
            <PorcentajeNegocio />



            <EspacioVacio />

        </>
    )
}
export default Home