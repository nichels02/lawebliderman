import EspacioVacio from '../common/Componentes/EspacioVacio.tsx';
import Marquee from '../common/Componentes/Marquee.tsx';
import CardWithExpand from '../common/Componentes/CardWithExpand.tsx';
import FlechaGiro from '../common/Componentes/FlechaGiro.tsx';
import PorcentajeNegocio from '../common/Componentes/PorcentajeNegocio.tsx';
import DonaRotativa2 from '../common/Componentes/DonaRotativa2.tsx';
import TextoTituloEImagen from '../common/Componentes/TextoTituloEImagen.tsx';
import ContenedorScroll from '../common/Componentes/ContenedorScroll.tsx';
import FormularioDeContacto from '../common/Componentes/FormularioDeContacto.tsx';
import HeaderCambioDeImagen from "../common/Componentes/HeaderCambioDeImagen.tsx";
import TextImageSelector from "../common/Componentes/TextImageSelector.tsx";
import CardGrid from "../common/Componentes/CardGrid.tsx";





function Tecnologia(){

    const imagenes = [
        "https://wallpapers.com/images/hd/1920x1080-hd-space-u95406v61bxyrx3s.jpg",
        "https://wallpapers.com/images/hd/1920x1080-aesthetic-glrfk0ntspz3tvxg.jpg",
        "https://wallpapers.com/images/hd/1920-x-1080-hd-1qq8r4pnn8cmcew4.jpg",
    ];

    const textosBotones = ["Imagen 1", "Imagen 2", "Imagen 3"];
    return (
        <>
            <HeaderCambioDeImagen />
            <TextImageSelector />
            <CardGrid />
            <TextoTituloEImagen
                titulo="Título de ejemplo"
                texto="Este es un párrafo de ejemplo que acompaña al título. Este es un párrafo de ejemplo que acompaña al título. Este es un párrafo de ejemplo que acompaña al título. Este es un párrafo de ejemplo que acompaña al título. Este es un párrafo de ejemplo que acompaña al título. Este es un párrafo de ejemplo que acompaña al título."
                imagenes={imagenes}
                textosBotones={textosBotones}
                imagenALaIzquierda={false}
            />
            <ContenedorScroll />
            <FormularioDeContacto />
            <Marquee />
            <CardWithExpand />
            <FlechaGiro />
            <PorcentajeNegocio />
            <DonaRotativa2 />



            <EspacioVacio />

        </>
    )
}
export default Tecnologia