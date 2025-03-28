import Header1 from '../common/Componentes/Header1.tsx';
import EspacioVacio from '../common/Componentes/EspacioVacio.tsx';
import FlechaGiro from '../common/Componentes/FlechaGiro.tsx';
import PorcentajeNegocio from '../common/Componentes/PorcentajeNegocio.tsx';
import DonaRotativa2 from '../common/Componentes/DonaRotativa2.tsx';
import TextoTituloEImagen from '../common/Componentes/TextoTituloEImagen.tsx';
import GridGenerico from "../common/Componentes/GridGenerico.tsx";
import GridBarajeable from "../common/Componentes/gridBarajeable.tsx";





function Seguridad(){

    const imagenes = [
        "https://wallpapers.com/images/hd/1920x1080-hd-space-u95406v61bxyrx3s.jpg",
        "https://wallpapers.com/images/hd/1920x1080-aesthetic-glrfk0ntspz3tvxg.jpg",
        "https://wallpapers.com/images/hd/1920-x-1080-hd-1qq8r4pnn8cmcew4.jpg",
    ];

    const textosBotones = ["Imagen 1", "Imagen 2", "Imagen 3"];
    return (
        <>
            <Header1 />

            <GridGenerico
                largeImage="src/assets/1920-x-1080-hd-1qq8r4pnn8cmcew4.jpg"
                items={[
                    { image: "src/assets/Tiktok.svg", title: "Título 1", text: "Texto descriptivo." },
                    { image: "src/assets/Tiktok.svg", title: "Título 2", text: "Este es un párrafo de ejemplo que acompaña al título. Este es un párrafo de ejemplo que acompaña al título. Este es un párrafo de ejemplo que acompaña al título. " },
                    { image: "src/assets/Tiktok.svg", title: "Título 3", text: "Texto descriptivo." },
                    { image: "src/assets/Tiktok.svg", title: "Título 4", text: "Este es un párrafo de ejemplo que acompaña al título. Este es un párrafo de ejemplo que acompaña al título. Este es un párrafo de ejemplo que acompaña al título. " },
                ]}
            />
            <FlechaGiro />
            <EspacioVacio />
            <GridBarajeable />
            <TextoTituloEImagen
                titulo="Título de ejemplo"
                texto="Este es un párrafo de ejemplo que acompaña al título. Este es un párrafo de ejemplo que acompaña al título. Este es un párrafo de ejemplo que acompaña al título. Este es un párrafo de ejemplo que acompaña al título. Este es un párrafo de ejemplo que acompaña al título. Este es un párrafo de ejemplo que acompaña al título."
                imagenes={imagenes}
                textosBotones={textosBotones}
                imagenALaIzquierda={false}
            />
            <PorcentajeNegocio />
            <DonaRotativa2 />



            <EspacioVacio />

        </>
    )
}
export default Seguridad