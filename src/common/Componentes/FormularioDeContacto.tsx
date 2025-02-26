import { useEffect, useRef } from 'react';
import styles from '../css/FormularioDeContacto.module.css';

const FormularioDeContacto = () => {
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const autoAjustarAltura = () => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = 'auto';
            textarea.style.height = `${textarea.scrollHeight}px`;
        }
    };

    useEffect(() => {
        const textarea = textareaRef.current;
        if (textarea) {
            autoAjustarAltura();
            textarea.addEventListener('input', autoAjustarAltura);
            return () => {
                textarea.removeEventListener('input', autoAjustarAltura);
            };
        }
    }, []);

    return (
        <div className={styles.contenedor_padre}>
            <div className={styles.contenedor_secundario}>
                <div className={styles.contenedor_formulario}>
                    <h1 className={styles.titulo}>Contactanos</h1>
                    <h3 className={styles.subtitulo}></h3>

                    <form action="submeter-formulario.php" method="post" className={styles.formulario}>
                        {/* Fila 1: Nombre y Apellido */}
                        <div className={styles.fila}>
                            <div className={styles.campo}>
                                <label htmlFor="nombre" className={styles.label}>
                                    Nombre<span className={styles.obligatorio}>*</span>
                                </label>
                                <input type="text" id="nombre" className={styles.input} required />
                            </div>
                            <div className={styles.campo}>
                                <label htmlFor="apellido" className={styles.label}>
                                    Apellido<span className={styles.obligatorio}>*</span>
                                </label>
                                <input type="text" id="apellido" className={styles.input} required />
                            </div>
                        </div>

                        {/* Fila 2: Correo y Teléfono */}
                        <div className={styles.fila}>
                            <div className={styles.campo}>
                                <label htmlFor="email" className={styles.label}>
                                    Correo<span className={styles.obligatorio}>*</span>
                                </label>
                                <input type="email" id="email" className={styles.input} required />
                            </div>
                            <div className={styles.campo}>
                                <label htmlFor="telefono" className={styles.label}>
                                    Teléfono<span className={styles.obligatorio}>*</span>
                                </label>
                                <input type="tel" id="telefono" className={styles.input} required />
                            </div>
                        </div>

                        {/* Fila 3: Checkboxes */}
                        <div className={styles.fila_fusionada}>
                            <div className={styles.campo}>
                                <label className={styles.label}>
                                    Elige las soluciones de tu interés
                                </label>
                                <div className={styles.checkboxGroup}>
                                    <label className={styles.checkboxContainer}>
                                        <input
                                            type="checkbox"
                                            name="soluciones"
                                            value="web"
                                            className={styles.checkboxInput}
                                        />
                                        <span className={styles.checkboxCustom}></span>
                                        <span className={styles.checkboxLabel}>Seguridad</span>
                                    </label>

                                    <label className={styles.checkboxContainer}>
                                        <input
                                            type="checkbox"
                                            name="soluciones"
                                            value="movil"
                                            className={styles.checkboxInput}
                                        />
                                        <span className={styles.checkboxCustom}></span>
                                        <span className={styles.checkboxLabel}>Servicios</span>
                                    </label>

                                    <label className={styles.checkboxContainer}>
                                        <input
                                            type="checkbox"
                                            name="soluciones"
                                            value="marketing"
                                            className={styles.checkboxInput}
                                        />
                                        <span className={styles.checkboxCustom}></span>
                                        <span className={styles.checkboxLabel}>Tecnología</span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        {/* Fila 4: Mensaje */}
                        <div className={styles.fila}>
                            <div className={styles.campo} style={{ gridColumn: '1 / -1' }}>
                                <label htmlFor="mensaje" className={styles.label}>
                                    Mensaje<span className={styles.obligatorio}>*</span>
                                </label>
                                <textarea
                                    ref={textareaRef}
                                    id="mensaje"
                                    className={styles.textarea}
                                    required
                                    placeholder="Deja aquí tu mensaje..."
                                ></textarea>
                            </div>
                        </div>

                        {/* Fila 5: Contacto alternativo y Botón */}
                        <div className={styles.texto_boton}>
                            <div className={styles.contacto_alternativo}>
                                <h4 className={styles.contacto_titulo}>También nos puedes contactar por:</h4>
                                <a href="mailto:contacto@empresa.com" className={styles.contacto_email}>
                                    contacto@empresa.com
                                </a>
                            </div>
                            <button type="submit" className={styles.boton}>
                                Enviar mensaje
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FormularioDeContacto;