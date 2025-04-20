import { useEffect, useState } from "react";
import styles from "../css/BarraDeBusquedaYFiltros.module.css";

// Tipado para los datos del JSON
interface FiltrosDisponibles {
    [clave: string]: string[];
}

function BarraDeBusquedaYFiltros() {
    const [mostrarFiltros, setMostrarFiltros] = useState(false);
    const [filtros, setFiltros] = useState<FiltrosDisponibles>({});
    const [valoresSeleccionados, setValoresSeleccionados] = useState<
        Partial<Record<string, string>>
    >({});

    useEffect(() => {
        fetch("/DataTrabajos.json")
            .then((res) => res.json())
            .then((data) => {
                setFiltros(data.filtrosDisponibles);
            })
            .catch((error) => {
                console.error("Error al cargar filtros:", error);
            });
    }, []);

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
                    {Object.keys(filtros).map((clave, idx) => (
                        <div key={idx} className={styles.filtro}>
                            <label className={styles.tituloFiltro}>
                                {String(clave)
                                    .replace(/([A-Z])/g, " $1")
                                    .toUpperCase()}
                                :
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
        </div>
    );
}

export default BarraDeBusquedaYFiltros;
