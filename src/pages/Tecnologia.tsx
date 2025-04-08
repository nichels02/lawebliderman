import { useLanguage } from '../common/Componentes/Sistemas/LanguageContext.tsx';
import { useContent } from '../common/Componentes/Sistemas/useContent.tsx';
import FlechaGiro from '../common/Componentes/FlechaGiro.tsx';
import FormularioDeContacto from '../common/Componentes/FormularioDeContacto.tsx';
import HeaderCambioDeImagen from "../common/Componentes/HeaderCambioDeImagen.tsx";
import TextImageSelector from "../common/Componentes/TextImageSelector.tsx";
import CardGrid from "../common/Componentes/CardGrid.tsx";
import CuadriculaDeModals from "../common/Componentes/CuadriculaDeModals.tsx";

// Tipos para las claves
type BotonKey = 'boton1' | 'boton2' | 'boton3' | 'boton4' | 'boton5';
type ImageKey = 'ImagenBoton1' | 'ImagenBoton2' | 'ImagenBoton3' | 'ImagenBoton4' | 'ImagenBoton5';

// Tipo mejorado para el selector
type SelectorContent = {
    Common: {
        [key in ImageKey]: string; // Solo claves de imagen como strings
    } & {
        imagenALaIzquierda: boolean; // Propiedad separada para el boolean
    };
    es: Record<BotonKey, { Titulo: string; Texto: string }>;
    en: Record<BotonKey, { Titulo: string; Texto: string }>;
};

function Tecnologia() {
    const { language } = useLanguage();
    const content = useContent();

    if (!content) return null;

    const botones: BotonKey[] = ['boton1', 'boton2', 'boton3', 'boton4', 'boton5'];
    const imageKeys: ImageKey[] = ['ImagenBoton1', 'ImagenBoton2', 'ImagenBoton3', 'ImagenBoton4', 'ImagenBoton5'];

    const mapSelectorContent = (selector: SelectorContent) => {
        return botones.map((key, index) => ({
            description: selector[language][key].Texto,
            image: selector.Common[imageKeys[index]] // Acceso seguro por índice
        }));
    };

    return (
        <>
            <HeaderCambioDeImagen />

            {/* Primer Selector */}
            <TextImageSelector
                items={mapSelectorContent(content.Tecnologia.TextImageSelector)}
                textosBotones={botones.map(key => (
                    content.Tecnologia.TextImageSelector[language][key].Titulo
                ))}
                imagenALaIzquierda={content.Tecnologia.TextImageSelector.Common.imagenALaIzquierda}
            />

            {/* Segundo Selector */}
            <TextImageSelector
                items={mapSelectorContent(content.Tecnologia.TextImageSelector2)}
                textosBotones={botones.map(key => (
                    content.Tecnologia.TextImageSelector2[language][key].Titulo
                ))}
                imagenALaIzquierda={content.Tecnologia.TextImageSelector2.Common.imagenALaIzquierda}
            />

            <CuadriculaDeModals />
            <CardGrid />
            <FlechaGiro />
            <FormularioDeContacto />
        </>
    );
}

export default Tecnologia;