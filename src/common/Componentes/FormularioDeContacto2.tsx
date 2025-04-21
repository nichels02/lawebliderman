import React, { useState } from 'react';
import styles from '../css/FormularioDeContacto2.module.css';
import imagen from '../../assets/ImagenesPrueba/1920x1080-hd-space-u95406v61bxyrx3s.jpg';
import imagenLateral from '../../assets/ImagenesPrueba/1920x1080-full-hd-nature-clear-lake-and-flowers-5et15sh9gemfv0jt.jpg';
import logoEmpresa from '../../assets/ImagenesPrueba/facebook.svg';

const FormularioDeContacto2 = () => {
    // Estado inicial basado en la interfaz FormularioContacto
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
        pais: 'pe' // Valor por defecto para Perú
    });

    // Manejador de cambios para inputs normales
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Manejador de cambios para checkboxes
    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;
        setFormData({
            ...formData,
            intereses: {
                ...formData.intereses,
                [name]: checked
            }
        });
    };

    // Manejador del envío del formulario
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Datos del formulario:', formData);
        // Aquí puedes agregar la lógica para enviar los datos a tu API
    };

    return (
        <div className={styles.contenedorPagina}>
            {/* Imagen de fondo */}
            <img src={imagen} alt="Fondo" className={styles.ImagenFondo} />

            {/* Contenedor intermedio */}
            <div className={styles.contenedorIntermedio}>
                {/* Contenedor central */}
                <div className={styles.contenidoCentral}>
                    {/* Botones superiores */}
                    <div className={styles.barraSuperior}>
                        <button>Botón 1</button>
                        <button>Botón 2</button>
                        <button>Botón 3</button>
                    </div>

                    {/* Contenedor del formulario */}
                    <div className={styles.formularioContainer}>
                        {/* Encabezado */}
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
                            {/* Fila de inputs en dos columnas */}
                            <div className={styles.dosColumnas}>
                                <div className={styles.campo}>
                                    <label htmlFor="nombre">Nombre</label>
                                    <input
                                        type="text"
                                        id="nombre"
                                        name="nombre"
                                        value={formData.nombre}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className={styles.campo}>
                                    <label htmlFor="apellido">Apellido</label>
                                    <input
                                        type="text"
                                        id="apellido"
                                        name="apellido"
                                        value={formData.apellido}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className={styles.campo}>
                                    <label htmlFor="correo">Correo electrónico</label>
                                    <input
                                        type="email"
                                        id="correo"
                                        name="correo"
                                        value={formData.correo}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className={styles.campo}>
                                    <label htmlFor="telefono">Teléfono</label>
                                    <input
                                        type="tel"
                                        id="telefono"
                                        name="telefono"
                                        value={formData.telefono}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>

                            {/* Checkboxes en fila horizontal */}
                            <fieldset className={styles.checkboxGroup}>
                                <legend>Elige las soluciones de tu interés</legend>
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

                            {/* Área de mensaje */}
                            <div className={styles.areaMensaje}>
                                <label htmlFor="mensaje">Mensaje</label>
                                <textarea
                                    id="mensaje"
                                    name="mensaje"
                                    value={formData.mensaje}
                                    onChange={handleInputChange}
                                    placeholder="Escríbenos aquí..."
                                    rows={5}
                                />
                            </div>

                            {/* Sección final de contacto alternativo y botón */}
                            <div className={styles.contactoYBoton}>
                                {/* Contacto alternativo */}
                                <div className={styles.contactoAlternativo}>
                                    <p>También nos puedes contactar por:</p>
                                    <a href="mailto:contacto@empresa.com">contacto@empresa.com</a>
                                </div>

                                {/* Botón enviar */}
                                <div className={styles.botonEnviarContainer}>
                                    <button type="submit" className={styles.botonEnviar}>
                                        Enviar mensaje
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>

                    {/* Contenedor extra inferior */}
                    <div className={styles.contenedorExtraInferior}>
                        {/* Columna 1: Imagen */}
                        <img src={logoEmpresa} alt="Logo de la empresa" />

                        {/* Columna 2: Oficina central */}
                        <div>
                            <p className={styles.textoEncabezado}>Oficina central</p>
                            <p className={styles.textoPrincipal}>(01) 204 5200</p>
                            <p className={styles.textoSecundario}>Anexos 5259-5258-52254</p>
                        </div>

                        {/* Columna 3: Liderman Alarmas */}
                        <div>
                            <p className={styles.textoEncabezado}>Liderman Alarmas</p>
                            <p className={styles.textoPrincipal}>(511) 204 5200</p>
                            <p className={styles.textoSecundario}>Atención al cliente: (511) 611-2300</p>
                        </div>
                    </div>
                </div>

                {/* Imagen lateral derecha */}
                <img src={imagenLateral} alt="Ilustración" className={styles.imagenLateral} />
            </div>
        </div>
    );
};

export default FormularioDeContacto2;