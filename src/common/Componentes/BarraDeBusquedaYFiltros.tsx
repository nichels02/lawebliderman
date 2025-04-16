import { useState } from "react";
import styles from "../css/BarraDeBusquedaYFiltros.module.css";
// Importa el archivo JSON
import filtrosData from "../../../public/DataTrabajos.json";

// Tipo derivado de la estructura del JSON
type FiltrosDisponibles = typeof filtrosData.filtrosDisponibles;

function BarraDeBusquedaYFiltros() {
    const [mostrarFiltros, setMostrarFiltros] = useState(false);
    const [valoresSeleccionados, setValoresSeleccionados] = useState<
        Partial<Record<keyof FiltrosDisponibles, string>>
    >({});

    // Usamos los filtros desde el JSON importado
    const filtros: FiltrosDisponibles = filtrosData.filtrosDisponibles;
    const clavesFiltros = Object.keys(filtros) as (keyof FiltrosDisponibles)[];

    const toggleFiltros = () => {
        setMostrarFiltros((prev) => !prev);
    };

    const handleCambioFiltro = (titulo: keyof FiltrosDisponibles, valor: string) => {
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
                    {clavesFiltros.map((clave, idx) => (
                        <div key={idx} className={styles.filtro}>
                            <label className={styles.tituloFiltro}>
                                {clave.replace(/([A-Z])/g, " $1").toUpperCase()}:
                            </label>
                            <select
                                value={valoresSeleccionados[clave] ?? ""}
                                onChange={(e) => handleCambioFiltro(clave, e.target.value)}
                            >
                                <option value="" disabled>
                                    Selecciona una opción
                                </option>
                                {filtros[clave].map((opcion, i) => (
                                    <option key={i} value={opcion}>
                                        {opcion}
                                    </option>
                                ))}
                            </select>
                        </div>
                    ))}
                </div>
            )}

            {/* Para depuración */}
            {/* <pre>{JSON.stringify(valoresSeleccionados, null, 2)}</pre> */}
        </div>
    );
}

export default BarraDeBusquedaYFiltros;
