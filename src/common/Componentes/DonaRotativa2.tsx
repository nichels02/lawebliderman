import { useEffect, useRef, useState } from 'react';
import { Chart, ArcElement, ChartEvent, ActiveElement } from 'chart.js';
import styles from '../css/DonaRotativa2.module.css';

Chart.register(ArcElement);

function DonaRotativa2() {
    const chartRef = useRef<HTMLCanvasElement | null>(null);
    const [targetRotation, setTargetRotation] = useState(0);
    const chartContainerRef = useRef<HTMLDivElement | null>(null);

    // Datos de los segmentos con título, texto e imagen
    const segmentsData = [
        { title: 'Título 1', text: 'Texto 1', image: 'https://wallpapers.com/images/hd/1920x1080-hd-space-u95406v61bxyrx3s.jpg' },
        { title: 'Título 2', text: 'Texto 2', image: 'https://wallpapers.com/images/hd/1920x1080-aesthetic-glrfk0ntspz3tvxg.jpg' },
        { title: 'Título 3', text: 'Texto 3', image: 'https://wallpapers.com/images/hd/1920-x-1080-hd-1qq8r4pnn8cmcew4.jpg' },
        { title: 'Título 4', text: 'Texto 4', image: 'https://wallpapers.com/images/hd/1920x1080-hd-space-u95406v61bxyrx3s.jpg' },
    ];

    // Mapeo de segmentos a ángulos
    const segmentToAngle: Record<number, number> = {
        0: 270,
        1: 180,
        2: 90,
        3: 0
    };

    // Ángulos iniciales de los títulos
    const labelAngles = [0, 270, 180, 90];

    // Normaliza los ángulos para evitar valores negativos o mayores a 360°
    const normalizeAngle = (angle: number): number => {
        const normalized = ((angle % 360) + 360) % 360;
        return normalized > 180 ? normalized - 360 : normalized;
    };

    // Obtiene el índice del segmento activo basado en la rotación
    const getActiveSegmentIndex = () => {
        const index = Math.round(((targetRotation % 360) + 360) % 360 / 90) % 4;
        return index;
    };

    useEffect(() => {
        if (!chartRef.current) return;

        const ctx = chartRef.current.getContext('2d');
        if (!ctx) return;

        const data = {
            datasets: [{
                data: [25, 25, 25, 25],
                backgroundColor: ['#f4060d', '#36A2EB', '#ff4040', '#006a0b'],
                borderWidth: 1,
                borderColor: ['#f4060d', '#36A2EB', '#ff4040', '#006a0b'],
                spacing: 0
            }]
        };

        const options = {
            rotation: 45,
            circumference: 360,
            cutout: '50%',
            animation: false,
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: { enabled: false }
            },
            onClick: (_event: ChartEvent, elements: ActiveElement[]) => {
                if (elements.length > 0) {
                    const clickedSegmentIndex = elements[0].index;
                    const rawTargetAngle = segmentToAngle[clickedSegmentIndex];

                    let angleDifference = normalizeAngle(rawTargetAngle - targetRotation);
                    if (angleDifference === 270) angleDifference = -90;
                    else if (angleDifference === -270) angleDifference = 90;

                    setTargetRotation(targetRotation + angleDifference);
                }
            }
        };

        const chart = new Chart(ctx, { type: 'doughnut', data, options });

        return () => chart.destroy();
    }, [targetRotation]);

    useEffect(() => {
        if (chartContainerRef.current) {
            chartContainerRef.current.style.transform = `rotate(${targetRotation}deg)`;
        }
    }, [targetRotation]);

    return (
        <div className={styles.wrapper}>
            <div className={styles.imageContainer}>
                <img
                    src={segmentsData[getActiveSegmentIndex()].image}
                    alt="Fondo dinámico"
                    className={styles.backgroundImage}
                />
            </div>

            <div className={styles.chartWrapper}>
                <div ref={chartContainerRef} className={styles.chartContainer}>
                    <canvas ref={chartRef}></canvas>

                    {/* Títulos sobre cada segmento */}
                    {labelAngles.map((angle, index) => (
                        <div
                            key={index}
                            className={`${styles.segmentLabel} ${styles[`label${index + 1}`]}`}
                            style={{ transform: `rotate(${angle}deg)` }}
                        >
                            {segmentsData[index].title}
                        </div>
                    ))}
                </div>

                {/* Texto central dinámico */}
                <div className={styles.centerText}>
                    {segmentsData[getActiveSegmentIndex()].text}
                </div>
            </div>
        </div>
    );
}

export default DonaRotativa2;
