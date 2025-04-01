import HeaderGenerico from '../common/Componentes/HeaderGenerico.tsx';
// import EspacioVacio from '../common/Componentes/EspacioVacio.tsx';
// import Marquee from '../common/Componentes/Marquee.tsx';
// import CardWithExpand from '../common/Componentes/CardWithExpand.tsx';
// import FlechaGiro from '../common/Componentes/FlechaGiro.tsx';
// import PorcentajeNegocio from '../common/Componentes/PorcentajeNegocio.tsx';
import DonaRotativa2 from '../common/Componentes/DonaRotativa2.tsx';
import TextoTituloEImagen from '../common/Componentes/TextoTituloEImagen.tsx';
import FormularioDeContacto from '../common/Componentes/FormularioDeContacto.tsx';
import TituloTextoEImagen2 from "../common/Componentes/TituloTextoEImagen2.tsx";





function Lidermania(){

    const imagenes = [
        "https://wallpapers.com/images/hd/1920x1080-hd-space-u95406v61bxyrx3s.jpg",
        "https://wallpapers.com/images/hd/1920x1080-aesthetic-glrfk0ntspz3tvxg.jpg",
        "https://wallpapers.com/images/hd/1920-x-1080-hd-1qq8r4pnn8cmcew4.jpg",
    ];

    const textosBotones = ["Imagen 1", "Imagen 2", "Imagen 3"];
    return (
        <>
            <HeaderGenerico
                backgroundImage="src/assets/1920x1080-aesthetic-glrfk0ntspz3tvxg.jpg"
                sideImage="src/assets/images.png"
                logo="src/assets/images.png"
                title="Lidermanía"
                description="Implementamos un conjunto de practicas y programas diseñados para atender las necesidades de nuestros Lidermans en los aspectos mas importantes para ellos y sus familias. promoviendo un ambiente de apoyo, crecimiento y equilibrio personal."
                button1Text="Nuestra cultura ➔ "
                button2Text="Únete"
                onButton1Click={() => console.log("Ver más info")}
                onButton2Click={() => console.log("Contratar servicio")}
            />
            <DonaRotativa2 />
            <TextoTituloEImagen
                titulo="Título de ejemplo"
                texto="Este es un párrafo de ejemplo que acompaña al título. Este es un párrafo de ejemplo que acompaña al título. Este es un párrafo de ejemplo que acompaña al título. Este es un párrafo de ejemplo que acompaña al título. Este es un párrafo de ejemplo que acompaña al título. Este es un párrafo de ejemplo que acompaña al título."
                imagenes={imagenes}
                textosBotones={textosBotones}
                imagenALaIzquierda={false}
            />
            <TituloTextoEImagen2 />
            <FormularioDeContacto />


        </>
    )
}
export default Lidermania