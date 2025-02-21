import styles from '../css/Switch.module.css';

function Switch() {
    return (
        <div className={styles.container}>
            <input
                type="checkbox"
                id="switch"
                className={styles.checkbox}
            />
            <label
                htmlFor="switch"
                className={styles.switchLabel}
            >
                Toggle
            </label>
        </div>
    );
}

export default Switch;