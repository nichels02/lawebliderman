import Header1 from '../common/Componentes/Header1.tsx';
import EspacioVacio from '../common/Componentes/EspacioVacio.tsx';
import Marquee from '../common/Componentes/Marquee.tsx';
import CardWithExpand from '../common/Componentes/CardWithExpand.tsx';
import FlechaGiro from '../common/Componentes/FlechaGiro.tsx';
import PorcentajeNegocio from '../common/Componentes/PorcentajeNegocio.tsx';
import DonaRotativa2 from '../common/Componentes/DonaRotativa2.tsx';





function Home(){
    return (
        <>
            <Header1 />
            <Marquee />
            <CardWithExpand />
            <FlechaGiro />
            <PorcentajeNegocio />
            <DonaRotativa2 />



            <EspacioVacio />

        </>
    )
}
export default Home