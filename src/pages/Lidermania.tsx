import { useState } from 'react';
import { useContent } from '../common/Componentes/Sistemas/useContent.tsx';
import { useLanguage } from '../common/Componentes/Sistemas/LanguageContext.tsx';
import HeaderGenerico from '../common/Componentes/HeaderGenerico.tsx';
import DonaRotativa2 from '../common/Componentes/DonaRotativa2.tsx';
import TituloTextoEImagen2 from "../common/Componentes/TituloTextoEImagen2.tsx";
import FormularioDeContacto from '../common/Componentes/FormularioDeContacto.tsx';
import CarruselDeTrabajos from "../common/Componentes/CarruselDeTrabajos.tsx";
import BarraDeBusquedaYFiltros from "../common/Componentes/BarraDeBusquedaYFiltros.tsx";
import { Trabajo } from '../common/Componentes/Sistemas/trabajos.interface.ts'; // Asegúrate de tener esta ruta bien

function Lidermania() {
    const content = useContent();
    const { language } = useLanguage();
    const [trabajosFiltrados, setTrabajosFiltrados] = useState<Trabajo[]>([]);

    if (!content) {
        return <div>Loading...</div>;
    }

    const { Common, es, en } = content.Lidermania.HeaderGenerico;
    const currentLang = language === 'es' ? es : en;

    return (
        <>
            <HeaderGenerico
                backgroundImage={Common.Fondo}
                sideImage={Common.ImagenDelCostado}
                logo={Common.logo}
                title={currentLang.Titulo}
                description={currentLang.Texto}
                button1Text={currentLang.Boton1}
                button2Text={currentLang.Boton2}
                onButton1Click={() => console.log("Ver más info")}
                onButton2Click={() => console.log("Contratar servicio")}
            />
            <DonaRotativa2 />

            <BarraDeBusquedaYFiltros onBuscar={setTrabajosFiltrados} />

            <CarruselDeTrabajos trabajos={trabajosFiltrados} />

            <TituloTextoEImagen2 />
            <FormularioDeContacto />
        </>
    );
}

export default Lidermania;
