import React, { useState } from 'react';
import styles from '../css/FormularioDeContacto2.module.css';
import { FormValidatorSingleton } from './Sistemas/FormValidator';
import imagen from '../../assets/Inicio/foto-footer.png';
import imagenLateral from '../../assets/Inicio/Peru.svg';
import logoEmpresa from '../../assets/ImagenesPrueba/facebook.svg';

const FormularioDeContacto2 = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        correo: '',
        telefono: '',
        intereses: {
            seguridad: false,
            servicios: false,
            tecnologia: false
        },
        mensaje: '',
        pais: 'pe'
    });

    const [error, setError] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            intereses: {
                ...prev.intereses,
                [name]: checked
            }
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);
        setSuccess(false);

        try {
            console.log('[Form] Iniciando validación...');
            const validator = FormValidatorSingleton.getInstance();
            const validation = await validator.validateForm(formData);

            console.log('[Form] Resultado validación:', validation);

            if (!validation.isValid) {
                console.error('[Form] Error de validación:', validation.errorMessage);
                setError(validation.errorMessage || 'Error en el formulario');
                return;
            }

            console.log('[Form] Validación exitosa, datos enviados al backend');
            setSuccess(true);

            // Reset del formulario
            setFormData({
                nombre: '',
                apellido: '',
                correo: '',
                telefono: '',
                intereses: { seguridad: false, servicios: false, tecnologia: false },
                mensaje: '',
                pais: 'pe'
            });

            alert('Formulario enviado con éxito!');

        } catch (err) {
            console.error('[Form] Error en el proceso:', err);
            setError('Ocurrió un error al procesar el formulario. Por favor intente nuevamente.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className={styles.contenedorPagina}>
            <img src={imagen} alt="Fondo" className={styles.ImagenFondo} />

            <div className={styles.contenedorIntermedio}>
                <div className={styles.contenidoCentral}>
                    <div className={styles.barraSuperior}>
                        <button type="button">Botón 1</button>
                        <button type="button">Botón 2</button>
                        <button type="button">Botón 3</button>
                    </div>

                    <div className={styles.formularioContainer}>
                        <div className={styles.encabezado}>
                            <h2>Contáctanos</h2>
                            <select
                                className={styles.dropdown}
                                name="pais"
                                value={formData.pais}
                                onChange={handleInputChange}
                            >
                                <option value="pe">Perú</option>
                                <option value="us">Estados Unidos</option>
                                <option value="cl">Chile</option>
                            </select>
                        </div>

                        <form className={styles.formulario} onSubmit={handleSubmit}>
                            {error && <div className={styles.errorMessage}>{error}</div>}
                            {success && <div className={styles.successMessage}>¡Formulario enviado con éxito!</div>}

                            <div className={styles.dosColumnas}>
                                <div className={styles.campo}>
                                    <label htmlFor="nombre">Nombre*</label>
                                    <input
                                        type="text"
                                        id="nombre"
                                        name="nombre"
                                        value={formData.nombre}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className={styles.campo}>
                                    <label htmlFor="apellido">Apellido*</label>
                                    <input
                                        type="text"
                                        id="apellido"
                                        name="apellido"
                                        value={formData.apellido}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className={styles.campo}>
                                    <label htmlFor="correo">Correo electrónico*</label>
                                    <input
                                        type="email"
                                        id="correo"
                                        name="correo"
                                        value={formData.correo}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className={styles.campo}>
                                    <label htmlFor="telefono">Teléfono*</label>
                                    <input
                                        type="tel"
                                        id="telefono"
                                        name="telefono"
                                        value={formData.telefono}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                            </div>

                            <fieldset className={styles.checkboxGroup}>
                                <legend>Elige las soluciones de tu interés*</legend>
                                <label className={styles.checkboxLabel}>
                                    <input
                                        type="checkbox"
                                        name="seguridad"
                                        checked={formData.intereses.seguridad}
                                        onChange={handleCheckboxChange}
                                        className={styles.checkbox}
                                    />
                                    <span className={styles.checkboxCustom}></span>
                                    Seguridad
                                </label>
                                <label className={styles.checkboxLabel}>
                                    <input
                                        type="checkbox"
                                        name="servicios"
                                        checked={formData.intereses.servicios}
                                        onChange={handleCheckboxChange}
                                        className={styles.checkbox}
                                    />
                                    <span className={styles.checkboxCustom}></span>
                                    Servicios
                                </label>
                                <label className={styles.checkboxLabel}>
                                    <input
                                        type="checkbox"
                                        name="tecnologia"
                                        checked={formData.intereses.tecnologia}
                                        onChange={handleCheckboxChange}
                                        className={styles.checkbox}
                                    />
                                    <span className={styles.checkboxCustom}></span>
                                    Tecnología
                                </label>
                            </fieldset>

                            <div className={styles.areaMensaje}>
                                <label htmlFor="mensaje">Mensaje*</label>
                                <textarea
                                    id="mensaje"
                                    name="mensaje"
                                    value={formData.mensaje}
                                    onChange={handleInputChange}
                                    placeholder="Escríbenos aquí..."
                                    rows={5}
                                    required
                                />
                            </div>

                            <div className={styles.contactoYBoton}>
                                <div className={styles.contactoAlternativo}>
                                    <p>También nos puedes contactar por:</p>
                                    <a href="mailto:contacto@empresa.com">contacto@empresa.com</a>
                                </div>

                                <div className={styles.botonEnviarContainer}>
                                    <button
                                        type="submit"
                                        className={styles.botonEnviar}
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className={styles.contenedorExtraInferior}>
                        <img src={logoEmpresa} alt="Logo de la empresa" />
                        <div>
                            <p className={styles.textoEncabezado}>Oficina central</p>
                            <p className={styles.textoPrincipal}>(01) 204 5200</p>
                            <p className={styles.textoSecundario}>Anexos 5259-5258-52254</p>
                        </div>
                        <div>
                            <p className={styles.textoEncabezado}>Liderman Alarmas</p>
                            <p className={styles.textoPrincipal}>(511) 204 5200</p>
                            <p className={styles.textoSecundario}>Atención al cliente: (511) 611-2300</p>
                        </div>
                    </div>
                </div>

                <img src={imagenLateral} alt="Ilustración" className={styles.imagenLateral} />
            </div>
        </div>
    );
};

export default FormularioDeContacto2;