import { useRef, useEffect, useState } from 'react';
import { Chart, ActiveElement, ChartConfiguration } from 'chart.js/auto';
import styles from '../css/PorcentajeNegocio.module.css';

function PorcentajeNegocio() {
    const chartRef = useRef<HTMLCanvasElement>(null);
    const [textPositions, setTextPositions] = useState<{ text: string }[]>([]);
    const [hoveredSegment, setHoveredSegment] = useState<number | null>(0);
    const [selectedImage, setSelectedImage] = useState<string>(
        "https://wallpapers.com/images/hd/1920x1080-aesthetic-glrfk0ntspz3tvxg.jpg"
    );
    const [spacing, setSpacing] = useState<number>(30); // Estado para el espaciado
    const [showOtrosText, setShowOtrosText] = useState<boolean>(false); // Estado para mostrar el texto de "Otros"

    // Función para calcular el espaciado en función del ancho de la pantalla
    const calculateSpacing = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth < 768) { // Pantallas pequeñas
            return 10;
        } else if (screenWidth >= 768 && screenWidth < 1024) { // Tablets
            return 20;
        } else { // Pantallas grandes
            return 30;
        }
    };

    // Efecto para actualizar el espaciado cuando cambia el tamaño de la pantalla
    useEffect(() => {
        const handleResize = () => {
            setSpacing(calculateSpacing());
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Efecto para crear o actualizar el gráfico
    useEffect(() => {
        if (chartRef.current) {
            const ctx = chartRef.current.getContext('2d');
            if (ctx) {
                const data = {
                    labels: ['Minería', 'Industria', 'Retail', 'Otros'],
                    datasets: [{
                        label: 'Porcentaje vendido',
                        data: [15, 10, 12.5, 12.5, 50],
                        backgroundColor: [
                            'rgba(195,195,195,0.8)',
                            'rgba(195,195,195,0.8)',
                            'rgba(195,195,195,0.8)',
                            'rgba(195,195,195,0.8)',
                            'rgba(0, 0, 0, 0)',
                        ],
                        borderColor: [
                            'rgba(204,16,116,0)',
                            'rgba(204,16,116,0)',
                            'rgba(204,16,116,0)',
                            'rgba(204,16,116,0)',
                            'rgba(0, 0, 0, 0)',
                        ],
                        borderWidth: 1,
                        hoverBackgroundColor: [
                            'rgb(181,14,14)',
                            'rgb(181,14,14)',
                            'rgb(181,14,14)',
                            'rgb(181,14,14)',
                            'rgba(0, 0, 0, 0)',
                        ],
                        spacing: spacing, // Usar el estado de espaciado
                    }]
                };

                const config: ChartConfiguration<'doughnut', number[], string> = {
                    type: 'doughnut',
                    data: data,
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        circumference: 360,
                        rotation: -180,
                        plugins: {
                            legend: {
                                display: false,
                            },
                            tooltip: {
                                enabled: false,
                            }
                        },
                        onHover: (_, chartElement: ActiveElement[]) => {
                            if (chartElement.length > 0) {
                                const segmentIndex = chartElement[0].index;
                                setHoveredSegment(segmentIndex);
                                setShowOtrosText(segmentIndex === 3); // Mostrar texto solo cuando el segmento "Otros" esté en hover
                                switch (segmentIndex) {
                                    case 0:
                                        setSelectedImage("https://wallpapers.com/images/hd/1920x1080-aesthetic-glrfk0ntspz3tvxg.jpg");
                                        break;
                                    case 1:
                                        setSelectedImage("https://wallpapers.com/images/hd/1920x1080-hd-space-u95406v61bxyrx3s.jpg");
                                        break;
                                    case 2:
                                        setSelectedImage("https://wallpapers.com/images/hd/1920-x-1080-hd-1qq8r4pnn8cmcew4.jpg");
                                        break;
                                    case 3:
                                        setSelectedImage("https://wallpapers.com/images/hd/1920x1080-full-hd-nature-clear-lake-and-flowers-5et15sh9gemfv0jt.jpg");
                                        break;
                                    default:
                                        setSelectedImage("https://wallpapers.com/images/hd/1920x1080-aesthetic-glrfk0ntspz3tvxg.jpg");
                                }
                            } else {
                                setSelectedImage("https://wallpapers.com/images/hd/1920x1080-aesthetic-glrfk0ntspz3tvxg.jpg");
                                setHoveredSegment(0);
                                setShowOtrosText(false); // Ocultar texto cuando no hay hover
                            }
                        }
                    }
                };

                const myChart = new Chart(ctx, config);

                const texts = [
                    { text: "Mineria 17%" },
                    { text: "Industria 16%" },
                    { text: "Retail 13%" },
                    { text: "Otros 54%" },
                ];
                setTextPositions(texts);

                return () => {
                    myChart.destroy();
                };
            }
        }
    }, [spacing]); // Recrear el gráfico cuando cambie el espaciado

    return (
        <div className={styles.contenedorPadre}>
            <div className={styles.contenedorImagenGrande}>
                <img
                    src={selectedImage}
                    alt="Imagen grande"
                    className={styles.imagenGrande}
                />
                {/* Contenedor para los textos fijos */}
                <div className={styles.contenedorTextoFijo}>
                    <div className={styles.textoFijo}>
                        ○ Líder en seguridad: El mercado nos reconoce como la más grande y la mejor empresa de seguridad del Perú.
                    </div>
                    <div className={styles.textoFijo}>
                        ○ Innovación constante: Siempre a la vanguardia en tecnología y soluciones de seguridad.
                    </div>
                    <div className={styles.textoFijo}>
                        ○ Compromiso con el cliente: Garantizamos la máxima satisfacción y confianza.
                    </div>
                </div>
                {/* Contenedor del gráfico */}
                <div className={styles.contenedorGrafico}>
                    <canvas ref={chartRef}></canvas>
                </div>
                {/* Textos dinámicos (porcentajes) */}
                {textPositions.map((pos, index) => (
                    <div
                        key={index}
                        className={`${styles.texto} ${styles[`texto-${index}`]}`}
                        style={{
                            fontWeight: hoveredSegment === index ? 'bold' : 'normal',
                            fontSize: hoveredSegment === index ? 'clamp(16px, 2vw, 24px)' : 'clamp(8px, 1vw, 16px)',
                        }}
                    >
                        {pos.text}
                    </div>
                ))}
                {/* Texto condicional para "Otros" */}
                {showOtrosText && (
                    <div className={styles.textoOtros}>
                        Inmobiliaria
                        Salud
                        Otros
                        Transporte
                        Educación
                        Servicios
                        Agroindustria
                        Construcción
                        Financiero
                        Fabricacíon
                        Logística
                        Metalurgia
                        Seguros
                    </div>
                )}
            </div>
        </div>
    );
}

export default PorcentajeNegocio;