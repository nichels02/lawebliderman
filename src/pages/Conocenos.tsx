
import HeaderGenerico from '../common/Componentes/HeaderGenerico.tsx';


//import EspacioVacio from '../common/Componentes/EspacioVacio.tsx';
//import Marquee from '../common/Componentes/Marquee2.tsx';
import FormularioDeContacto from '../common/Componentes/FormularioDeContacto.tsx';
import ContenedorScroll from '../common/Componentes/ContenedorScroll.tsx';
/*
import CardWithExpand from '../common/Componentes/CardWithExpand.tsx';
import FlechaGiro from '../common/Componentes/FlechaGiro.tsx';
import PorcentajeNegocio from '../common/Componentes/PorcentajeNegocio.tsx';
import DonaRotativa2 from '../common/Componentes/DonaRotativa2.tsx';
import TextoTituloEImagen from '../common/Componentes/TextoTituloEImagen.tsx';

import FormularioDeContacto from '../common/Componentes/FormularioDeContacto.tsx';

*/



function Conocenos(){

    return (
        <>

            <HeaderGenerico
                backgroundImage="src/assets/1920x1080-aesthetic-glrfk0ntspz3tvxg.jpg"
                sideImage="src/assets/images.png"
                logo="src/assets/images.png"
                title="Conócenos"
                description="El valor que aportamos como organización a la sociedad nos permite contruir un mundo mejor, más seguro e interconectado."
                button1Text="NUESTRA HISTORIA ➔"
                button2Text="Contáctanos"
                onButton1Click={() => console.log("Ver más info")}
                onButton2Click={() => console.log("Contratar servicio")}
            />
            <ContenedorScroll />
            <FormularioDeContacto />

        </>
    )
}
export default Conocenos