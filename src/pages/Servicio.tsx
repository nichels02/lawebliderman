//import Header1 from '../common/Componentes/Header1.tsx';
// import EspacioVacio from '../common/Componentes/EspacioVacio.tsx';
// import Marquee from '../common/Componentes/Marquee.tsx';
// import CardWithExpand from '../common/Componentes/CardWithExpand.tsx';
// import FlechaGiro from '../common/Componentes/FlechaGiro.tsx';
// import PorcentajeNegocio from '../common/Componentes/PorcentajeNegocio.tsx';
//import DonaRotativa2 from '../common/Componentes/DonaRotativa2.tsx';
import TextoTituloEImagen from '../common/Componentes/TextoTituloEImagen.tsx';
//import ContenedorScroll from '../common/Componentes/ContenedorScroll.tsx';
import FormularioDeContacto from '../common/Componentes/FormularioDeContacto.tsx';
import GridGenerico from "../common/Componentes/GridGenerico.tsx";
import GridBarajeable from "../common/Componentes/gridBarajeable.tsx";
import HeaderServicio from "../common/Componentes/HeaderServicio.tsx";





function Servicio(){

    const data = {
        largeImage: "/images/large-image.jpg",
        items: [
            { image: "/images/item1.jpg", title: "Título 1", text: "Descripción 1" },
            { image: "/images/item2.jpg", title: "Título 2", text: "Descripción 2" },
            { image: "/images/item3.jpg", title: "Título 3", text: "Descripción 3" },
            { image: "/images/item4.jpg", title: "Título 4", text: "Descripción 4" }
        ]
    };

    const imagenes = [
        "https://wallpapers.com/images/hd/1920x1080-hd-space-u95406v61bxyrx3s.jpg",
        "https://wallpapers.com/images/hd/1920x1080-aesthetic-glrfk0ntspz3tvxg.jpg",
        "https://wallpapers.com/images/hd/1920-x-1080-hd-1qq8r4pnn8cmcew4.jpg",
    ];

    const textosBotones = ["Valet parking", "Administración de estacionamientos", "Gestión de eventos"];

    const imagenes2 = [
        "https://wallpapers.com/images/hd/1920x1080-hd-space-u95406v61bxyrx3s.jpg",
        "https://wallpapers.com/images/hd/1920x1080-aesthetic-glrfk0ntspz3tvxg.jpg",
        "https://wallpapers.com/images/hd/1920-x-1080-hd-1qq8r4pnn8cmcew4.jpg",
        "https://wallpapers.com/images/hd/1920x1080-aesthetic-glrfk0ntspz3tvxg.jpg",
    ];

    const textosBotones2 = ["Courier", "Limpieza", "Jardinería", "Transporte"];
    return (
        <>
            <HeaderServicio />
            <TextoTituloEImagen
                titulo="Parking"
                texto="Rapidez y seguridad en el manejo de vehículos, brindando una experiencia premium a los usuarios y facilitando la logística de estacionamiento en eventos y establecimientos."
                imagenes={imagenes}
                textosBotones={textosBotones}
                imagenALaIzquierda={true}
            />
            <TextoTituloEImagen
                titulo="Facilities"
                texto="Nuestro equipo garantiza un mantenimiento impecable, enfocado en la higiene, la organización y el bienestar del espacio."
                imagenes={imagenes2}
                textosBotones={textosBotones2}
                imagenALaIzquierda={false}
            />
            <GridGenerico
                largeImage={data.largeImage}
                items={data.items}
            />
            <GridBarajeable />
            <FormularioDeContacto />

        </>
    )
}
export default Servicio