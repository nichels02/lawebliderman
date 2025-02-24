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
                        ] as string[], // Asegura que es un array de strings
                        borderColor: [
                            'rgba(204,16,116,0)',
                            'rgba(204,16,116,0)',
                            'rgba(204,16,116,0)',
                            'rgba(204,16,116,0)',
                            'rgba(0, 0, 0, 0)',
                        ] as string[], // Asegura que es un array de strings
                        borderWidth: 1,
                        hoverBackgroundColor: [
                            'rgb(181,14,14)',
                            'rgb(181,14,14)',
                            'rgb(181,14,14)',
                            'rgb(181,14,14)',
                            'rgba(0, 0, 0, 0)',
                        ] as string[], // Asegura que es un array de strings
                        spacing: 30,
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
                                // Cambiar la imagen en función del segmento seleccionado
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
                                // Si no hay hover, mostrar la imagen por defecto (Minería)
                                setSelectedImage("https://wallpapers.com/images/hd/1920x1080-aesthetic-glrfk0ntspz3tvxg.jpg");
                                setHoveredSegment(0); // Volver al segmento de Minería por defecto
                            }
                        }
                    }
                };

                const myChart = new Chart(ctx, config);

                // Definir los textos para cada segmento
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
    }, []);

    return (
        <div className={styles.contenedorPadre}>
            <div className={styles.contenedorImagenGrande}>
                <img
                    src={selectedImage}
                    alt="Imagen grande"
                    className={styles.imagenGrande}
                />
                <div className={styles.contenedorGrafico}>
                    <canvas ref={chartRef}></canvas>
                </div>
                {/* Textos posicionados con CSS */}
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
            </div>
        </div>
    );
}

export default PorcentajeNegocio;