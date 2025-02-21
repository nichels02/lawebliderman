import Header1 from '../common/Componentes/Header1.tsx';
import EspacioVacio from '../common/Componentes/EspacioVacio.tsx';
import Marquee from '../common/Componentes/Marquee.tsx';
import CardWithExpand from '../common/Componentes/CardWithExpand.tsx';




function Home(){
    return (
        <>
            <Header1 />
            <Marquee />
            <CardWithExpand />


            <EspacioVacio />

        </>
    )
}
export default Home