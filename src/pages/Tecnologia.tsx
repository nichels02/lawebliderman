// import EspacioVacio from '../common/Componentes/EspacioVacio.tsx';
// import Marquee from '../common/Componentes/Marquee.tsx';
// import CardWithExpand from '../common/Componentes/CardWithExpand.tsx';
import FlechaGiro from '../common/Componentes/FlechaGiro.tsx';
// import PorcentajeNegocio from '../common/Componentes/PorcentajeNegocio.tsx';
// import DonaRotativa2 from '../common/Componentes/DonaRotativa2.tsx';
// import TextoTituloEImagen from '../common/Componentes/TextoTituloEImagen.tsx';
// import ContenedorScroll from '../common/Componentes/ContenedorScroll.tsx';
import FormularioDeContacto from '../common/Componentes/FormularioDeContacto.tsx';
import HeaderCambioDeImagen from "../common/Componentes/HeaderCambioDeImagen.tsx";
import TextImageSelector from "../common/Componentes/TextImageSelector.tsx";
import CardGrid from "../common/Componentes/CardGrid.tsx";
import CuadriculaDeModals from "../common/Componentes/CuadriculaDeModals.tsx";
//import TituloTextoEImagen2 from "../common/Componentes/TituloTextoEImagen2.tsx";





function Tecnologia(){


    return (
        <>
            <HeaderCambioDeImagen />
            <TextImageSelector
                items={[
                    {
                        description: "Disfruta de la belleza de la naturaleza con este paisaje relajante.",
                        image: "src/assets/1920-x-1080-hd-1qq8r4pnn8cmcew4.jpg"
                    },
                    {
                        description: "Colores y formas que crean una estética visual única.",
                        image: "src/assets/1920x1080-aesthetic-glrfk0ntspz3tvxg.jpg"
                    },
                    {
                        description: "Un lago sereno rodeado de montañas y naturaleza.",
                        image: "src/assets/1920x1080-full-hd-nature-clear-lake-and-flowers-5et15sh9gemfv0jt.jpg"
                    },
                    {
                        description: "Explora la inmensidad del universo con esta imagen del espacio.",
                        image: "src/assets/1920x1080-hd-space-u95406v61bxyrx3s.jpg"
                    },
                    {
                        description: "Otra imagen con estética vibrante y atractiva.",
                        image: "src/assets/1920x1080-aesthetic-glrfk0ntspz3tvxg.jpg"
                    },
                ]}
                textosBotones={["Naturaleza", "Aesthetic", "Lago", "Espacio", "Repetido"]}
                imagenALaIzquierda={true} // Cambia a false si quieres que la imagen esté a la derecha
            />




            <TextImageSelector
                items={[
                    {
                        description: "﻿\n" +
                            "\n" +
                            "Adaptamos salas de reuniones empresariales con tecnología de vanguardia, proporcionando soluciones óptimas para mejorar la conectividad y productividad en entornos corporativos.",
                        image: "src/assets/1920-x-1080-hd-1qq8r4pnn8cmcew4.jpg"
                    },
                    {
                        description: "Colores y formas que crean una estética visual única.",
                        image: "src/assets/1920-x-1080-hd-1qq8r4pnn8cmcew4.jpg"
                    },
                    {
                        description: "Un lago sereno rodeado de montañas y naturaleza.",
                        image: "src/assets/1920x1080-full-hd-nature-clear-lake-and-flowers-5et15sh9gemfv0jt.jpg"
                    },
                    {
                        description: "Explora la inmensidad del universo con esta imagen del espacio.",
                        image: "src/assets/1920x1080-hd-space-u95406v61bxyrx3s.jpg"
                    },
                    {
                        description: "Otra imagen con estética vibrante y atractiva.",
                        image: "src/assets/1920x1080-aesthetic-glrfk0ntspz3tvxg.jpg"
                    },
                ]}
                textosBotones={["Naturaleza1", "Aesthetic1", "Lago1", "Espacio2", "Repetido4"]}
                imagenALaIzquierda={false} // Cambia a false si quieres que la imagen esté a la derecha
            />
            <CuadriculaDeModals />
            <CardGrid />
            <FlechaGiro />

            <FormularioDeContacto />


        </>
    )
}
export default Tecnologia