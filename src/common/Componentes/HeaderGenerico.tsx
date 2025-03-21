import React from "react";
import styles from "../css/HeaderGenerico.module.css";

interface HeaderProps {
    backgroundImage: string;
    sideImage: string;
    title: string;
    description: string;
    button1Text: string;
    button2Text: string;
    onButton1Click: () => void;
    onButton2Click: () => void;
    logo?: string;
}

const HeaderGenerico: React.FC<HeaderProps> = ({
                                                   backgroundImage,
                                                   sideImage,
                                                   title,
                                                   description,
                                                   button1Text,
                                                   button2Text,
                                                   onButton1Click,
                                                   onButton2Click,
                                                   logo,
                                               }) => {
    return (
        <header
            className={styles.header}
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            {logo && <img src={logo} alt="Logo" className={styles.logo} />}

            <img
                src={sideImage}
                alt="Ilustración"
                className={styles.sideImage}
            />

            <div className={styles.content}>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.description}>{description}</p>
                <div className={styles.buttonContainer}>
                    <button
                        className={styles.button}
                        onClick={onButton1Click}
                    >
                        {button1Text}
                    </button>
                    <button
                        className={styles.button}
                        onClick={onButton2Click}
                    >
                        {button2Text}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default HeaderGenerico;