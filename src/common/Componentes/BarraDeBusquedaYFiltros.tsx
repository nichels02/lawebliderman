import { useState } from "react";
import styles from "../css/BarraDeBusquedaYFiltros.module.css";

const filtros: { titulo: string; opciones: string[] }[] = [
    {
        titulo: "Ubicación",
        opciones: ["Callao", "Lima", "Zona Norte", "Zona Sur"],
    },
    {
        titulo: "Nivel de Estudios",
        opciones: ["Secundaria", "Técnico", "Universitario"],
    },
    {
        titulo: "Experiencia",
        opciones: ["Sin experiencia", "3 meses", "6 meses", "9 meses", "1 año", "+2 años"],
    },
    {
        titulo: "Disponibilidad Laboral",
        opciones: ["6 horas", "8 horas", "12 horas"],
    },
];

function BarraDeBusquedaYFiltros() {
    const [mostrarFiltros, setMostrarFiltros] = useState(false);
    const [valoresSeleccionados, setValoresSeleccionados] = useState<{ [clave: string]: string }>({});

    const toggleFiltros = () => {
        setMostrarFiltros((prev) => !prev);
    };

    const handleCambioFiltro = (titulo: string, valor: string) => {
        setValoresSeleccionados((prev) => ({
            ...prev,
            [titulo]: valor,
        }));
    };

    return (
        <div className={styles.contenedorPrincipal}>
            <div className={styles.filaSuperior}>
                <div className={styles.barra}>
                    <input
                        type="text"
                        placeholder="Buscar..."
                        className={styles.input}
                    />
                    <button className={styles.botonBuscar}>🔍</button>
                </div>
                <button className={styles.botonFiltros} onClick={toggleFiltros}>
                    Filtros
                </button>
            </div>

            {mostrarFiltros && (
                <div className={styles.filtrosContenedor}>
                    {filtros.map((filtro, index) => (
                        <div key={index} className={styles.filtro}>
                            <label className={styles.tituloFiltro}>{filtro.titulo}:</label>
                            <select
                                value={valoresSeleccionados[filtro.titulo] || ""}
                                onChange={(e) => handleCambioFiltro(filtro.titulo, e.target.value)}
                            >
                                <option value="" disabled>Selecciona una opción</option>
                                {filtro.opciones.map((opcion, i) => (
                                    <option key={i} value={opcion}>{opcion}</option>
                                ))}
                            </select>
                        </div>
                    ))}
                </div>
            )}

            {/* Debug temporal: mostrar valores seleccionados */}
            {/* <pre>{JSON.stringify(valoresSeleccionados, null, 2)}</pre> */}
        </div>
    );
}

export default BarraDeBusquedaYFiltros;
