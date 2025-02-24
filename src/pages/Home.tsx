import Header1 from '../common/Componentes/Header1.tsx';
import EspacioVacio from '../common/Componentes/EspacioVacio.tsx';
import Marquee from '../common/Componentes/Marquee.tsx';
import CardWithExpand from '../common/Componentes/CardWithExpand.tsx';
import FlechaGiro from '../common/Componentes/FlechaGiro.tsx';
import PorcentajeNegocio from '../common/Componentes/PorcentajeNegocio.tsx';
import DonaRotativa from '../common/Componentes/DonaRotativa.tsx';





function Home(){
    return (
        <>
            <Header1 />
            <Marquee />
            <CardWithExpand />
            <FlechaGiro />
            <PorcentajeNegocio />
            <DonaRotativa />



            <EspacioVacio />

        </>
    )
}
export default Home