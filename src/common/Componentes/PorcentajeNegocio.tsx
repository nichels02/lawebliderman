import { useRef, useEffect, useState } from 'react';
import { Chart, ChartConfiguration } from 'chart.js/auto';
import styles from '../css/PorcentajeNegocio.module.css';

function PorcentajeNegocio() {
    const chartRef = useRef<HTMLCanvasElement>(null);
    const [textPositions, setTextPositions] = useState<{ text: string }[]>([]);
    const [selectedSegment, setSelectedSegment] = useState<number | null>(null); // Inicialmente no hay selección
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
                        ] as string[],
                        borderColor: [
                            'rgba(204,16,116,0)',
                            'rgba(204,16,116,0)',
                            'rgba(204,16,116,0)',
                            'rgba(204,16,116,0)',
                            'rgba(0, 0, 0, 0)',
                        ] as string[],
                        borderWidth: 1,
                        hoverBackgroundColor: [
                            'rgb(181,14,14)',
                            'rgb(181,14,14)',
                            'rgb(181,14,14)',
                            'rgb(181,14,14)',
                            'rgba(0, 0, 0, 0)',
                        ] as string[],
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

                // Seleccionar "Minería" por defecto si no hay selección
                if (selectedSegment === null) {
                    setSelectedSegment(0); // 0 = Minería
                    setSelectedImage("https://wallpapers.com/images/hd/1920x1080-aesthetic-glrfk0ntspz3tvxg.jpg");
                }

                return () => {
                    myChart.destroy();
                };
            }
        }
    }, [selectedSegment]); // Dependencia para manejar la selección

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
                            fontWeight: selectedSegment === index ? 'bold' : 'normal',
                            fontSize: selectedSegment === index ? 'clamp(16px, 2vw, 24px)' : 'clamp(8px, 1vw, 16px)',
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