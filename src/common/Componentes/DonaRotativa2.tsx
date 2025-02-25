import { useEffect, useRef, useState } from 'react';
import { Chart, ArcElement, ChartEvent, ActiveElement } from 'chart.js';
import styles from '../css/DonaRotativa2.module.css';

Chart.register(ArcElement);

function DonaRotativa2() {
    const chartRef = useRef<HTMLCanvasElement | null>(null);
    const [targetRotation, setTargetRotation] = useState(0);
    const chartContainerRef = useRef<HTMLDivElement | null>(null);

    // Normaliza cualquier ángulo al rango [-180, 180)
    const normalizeAngle = (angle: number): number => {
        let normalized = ((angle % 360) + 360) % 360;
        if (normalized > 180) normalized -= 360;
        return normalized;
    };

    // Mapeo original de segmentos a ángulos (0°, 90°, 180°, 270°)
    const segmentToAngle = {
        0: 270,
        1: 180,
        2: 90,
        3: 0
    };

    useEffect(() => {
        if (!chartRef.current) return;

        const ctx = chartRef.current.getContext('2d');
        if (!ctx) return;

        // Configuración del gráfico
        const data = {
            datasets: [{
                data: [25, 25, 25, 25],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
                borderWidth: 0,
            }]
        };

        const options = {
            rotation: 45,
            circumference: 360,
            cutout: '50%',
            animation: false,
            plugins: {
                legend: { display: false },
                tooltip: { enabled: false }
            },
            onClick: (_event: ChartEvent, elements: ActiveElement[]) => {
                if (elements.length > 0) {
                    const clickedSegmentIndex = elements[0].index as keyof typeof segmentToAngle;
                    const rawTargetAngle = segmentToAngle[clickedSegmentIndex];

                    // Obtener la diferencia de rotación actual
                    let angleDifference = normalizeAngle(rawTargetAngle - targetRotation);

                    // Asegurar que la rotación tome el camino más corto
                    if (angleDifference === 270) angleDifference = -90;
                    else if (angleDifference === -270) angleDifference = 90;

                    setTargetRotation(targetRotation + angleDifference);
                }
            }
        };

        const chart = new Chart(ctx, { type: 'doughnut', data, options });

        return () => chart.destroy();
    }, [targetRotation]);

    // Aplica la rotación normalizada al contenedor
    useEffect(() => {
        if (chartContainerRef.current) {
            chartContainerRef.current.style.transform = `rotate(${targetRotation}deg)`;
        }
    }, [targetRotation]);

    return (
        <div className={styles.parentContainer}>
            <div ref={chartContainerRef} className={styles.chartContainer}>
                <canvas ref={chartRef}></canvas>
            </div>
        </div>
    );
}

export default DonaRotativa2;
