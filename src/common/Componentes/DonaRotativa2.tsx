import { useEffect, useRef, useState } from 'react';
import { Chart, ArcElement, ChartEvent, ActiveElement } from 'chart.js';
import styles from '../css/DonaRotativa2.module.css';

Chart.register(ArcElement);

function DonaRotativa2() {
    const chartRef = useRef<HTMLCanvasElement | null>(null);
    const [targetRotation, setTargetRotation] = useState(0);
    const chartContainerRef = useRef<HTMLDivElement | null>(null);

    const normalizeAngle = (angle: number): number => {
        let normalized = ((angle % 360) + 360) % 360;
        if (normalized > 180) normalized -= 360;
        return normalized;
    };

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

        const data = {
            datasets: [{
                data: [25, 25, 25, 25],
                backgroundColor: ['#f4060d', '#36A2EB', '#ff4040', '#006a0b'],
                borderWidth: 0,
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
                    const clickedSegmentIndex = elements[0].index as keyof typeof segmentToAngle;
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
                    src="https://wallpapers.com/images/hd/1920x1080-hd-space-u95406v61bxyrx3s.jpg"
                    alt="Fondo espacial"
                    className={styles.backgroundImage}
                />
            </div>

            <div className={styles.chartWrapper}>
                <div ref={chartContainerRef} className={styles.chartContainer}>
                    <canvas ref={chartRef}></canvas>

                    {/* Textos sobre cada segmento (sin doble rotación) */}
                    <div className={`${styles.segmentLabel} ${styles.label1}`}
                         style={{ transform: `rotate(${-targetRotation}deg)` }}>
                        Texto 1
                    </div>
                    <div className={`${styles.segmentLabel} ${styles.label2}`}
                         style={{ transform: `rotate(${-targetRotation}deg)` }}>
                        Texto 2
                    </div>
                    <div className={`${styles.segmentLabel} ${styles.label3}`}
                         style={{ transform: `rotate(${-targetRotation}deg)` }}>
                        Texto 3
                    </div>
                    <div className={`${styles.segmentLabel} ${styles.label4}`}
                         style={{ transform: `rotate(${-targetRotation}deg)` }}>
                        Texto 4
                    </div>
                </div>

                <div className={styles.centerText}>Texto Central</div>
            </div>
        </div>
    );
}

export default DonaRotativa2;
