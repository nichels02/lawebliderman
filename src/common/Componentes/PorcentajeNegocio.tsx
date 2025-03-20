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
    const [spacing, setSpacing] = useState<number>(30);
    const [showOtrosText, setShowOtrosText] = useState<boolean>(false);
    const [isMobile, setIsMobile] = useState<boolean>(false);

    const calculateSpacing = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth < 768) return 10;
        if (screenWidth < 1024) return 20;
        return 30;
    };

    const checkMobile = () => {
        setIsMobile(window.innerWidth < 1024);
    };

    useEffect(() => {
        const handleResize = () => {
            setSpacing(calculateSpacing());
            checkMobile();
        };

        checkMobile(); // Verificar al montar
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

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
                        spacing: spacing,
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
                        layout: {
                            padding: 0
                        },
                        plugins: {
                            legend: { display: false },
                            tooltip: { enabled: false }
                        },
                        onHover: (_, chartElement: ActiveElement[]) => {
                            if (chartElement.length > 0) {
                                const segmentIndex = chartElement[0].index;
                                setHoveredSegment(segmentIndex);
                                setShowOtrosText(segmentIndex === 3);
                                const images = [
                                    "https://wallpapers.com/images/hd/1920x1080-aesthetic-glrfk0ntspz3tvxg.jpg",
                                    "https://wallpapers.com/images/hd/1920x1080-hd-space-u95406v61bxyrx3s.jpg",
                                    "https://wallpapers.com/images/hd/1920-x-1080-hd-1qq8r4pnn8cmcew4.jpg",
                                    "https://wallpapers.com/images/hd/1920x1080-full-hd-nature-clear-lake-and-flowers-5et15sh9gemfv0jt.jpg"
                                ];
                                setSelectedImage(images[segmentIndex] || images[0]);

                                // En móvil, mantener última selección
                                if (isMobile) {
                                    localStorage.setItem('lastSegment', segmentIndex.toString());
                                }
                            } else {
                                if (!isMobile) { // Solo resetear en desktop
                                    setSelectedImage("https://wallpapers.com/images/hd/1920x1080-aesthetic-glrfk0ntspz3tvxg.jpg");
                                    setHoveredSegment(0);
                                    setShowOtrosText(false);
                                }
                            }
                        }
                    }
                };

                const myChart = new Chart(ctx, config);

                // Recuperar última selección en móvil
                if (isMobile) {
                    const lastSegment = localStorage.getItem('lastSegment');
                    if (lastSegment) {
                        setHoveredSegment(parseInt(lastSegment));
                    }
                }

                setTextPositions([
                    { text: "Mineria 17%" },
                    { text: "Industria 16%" },
                    { text: "Retail 13%" },
                    { text: "Otros 54%" },
                ]);

                return () => myChart.destroy();
            }
        }
    }, [spacing, isMobile]);

    return (
        <div className={styles.contenedorPadre}>
            <div className={styles.contenedorImagenGrande}>
                <img
                    src={selectedImage}
                    alt="Imagen dinámica"
                    className={styles.imagenGrande}
                />

                {showOtrosText ? (
                    <div className={styles.contenedorFondo2}></div>
                ) : (
                    <div className={styles.contenedorFondo}></div>
                )}

                <div className={styles.contenedorTextoFijo}>
                    {[
                        "○ Líder en seguridad: El mercado nos reconoce como la más grande y la mejor empresa de seguridad del Perú.",
                        "○ Innovación constante: Siempre a la vanguardia en tecnología y soluciones de seguridad.",
                        "○ Compromiso con el cliente: Garantizamos la máxima satisfacción y confianza."
                    ].map((texto, index) => (
                        <div key={index} className={styles.textoFijo}>{texto}</div>
                    ))}
                </div>

                <div className={styles.contenedorGrafico}>
                    <canvas ref={chartRef}></canvas>
                </div>

                {textPositions.map((pos, index) => (
                    <div
                        key={index}
                        className={`${styles.texto} ${styles[`texto-${index}`]}`}
                        style={{
                            fontWeight: hoveredSegment === index ? 'bold' : 'normal',
                            fontSize: hoveredSegment === index
                                ? 'clamp(16px, 2.5vw, 28px)'
                                : 'clamp(12px, 1.8vw, 20px)',
                        }}
                    >
                        {pos.text}
                    </div>
                ))}

                {showOtrosText && (
                    <div className={styles.textoOtros}>
                        {["Inmobiliaria", "Salud", "Transporte", "Educación", "Servicios",
                            "Agroindustria", "Construcción", "Financiero", "Fabricación",
                            "Logística", "Metalurgia", "Seguros"].join(" · ")}
                    </div>
                )}
            </div>
        </div>
    );
}

export default PorcentajeNegocio;