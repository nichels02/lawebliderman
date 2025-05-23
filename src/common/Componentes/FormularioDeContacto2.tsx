import React, { useState } from 'react';
import styles from '../css/FormularioDeContacto2.module.css';
import { FormValidatorSingleton } from './Sistemas/FormValidator';
import imagen from '../../assets/Inicio/foto-footer.png';
import imagenLateral1 from '../../assets/Inicio/Peru.svg';
import imagenLateral2 from '../../assets/Inicio/chile.svg';
import imagenLateral3 from '../../assets/Inicio/eucador.svg';
import imagenLateral4 from '../../assets/Inicio/USa.svg';
import logoEmpresa from '../../assets/Inicio/Recurso 24_nuevo.svg';
import LogoColaboradores from '../../assets/Inicio/Recurso 24_nuevo.svg';
import LogoCoberturaDeRiesgo from '../../assets/Inicio/Recurso 24_nuevo.svg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useContent } from './Sistemas/useContent.tsx'; // o el path correcto
import { useLanguage } from './Sistemas/LanguageContext.tsx';

interface ArrowProps {
    className?: string;
    style?: React.CSSProperties;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const CustomPrevArrow: React.FC<ArrowProps> = ({ className, style, onClick }) => {
    return (
        <div
            className={`${className} ${styles.customPrevArrow}`}
            style={{ ...style }}
            onClick={onClick}
            aria-label="Previous slide"
        />
    );
};



const CustomNextArrow: React.FC<ArrowProps> = ({ className, style, onClick }) => {
    return (
        <div
            className={`${className} ${styles.customNextArrow}`}
            style={{ ...style }}
            onClick={onClick}
            aria-label="Next slide"
        />
    );
};

const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
};

const FormularioDeContacto2 = () => {

    type PaisKey = 'Peru' | 'Chile' | 'Ecuador' | 'Usa';
    const [Pais, setPais] = useState<PaisKey>("Peru");

    const content = useContent();
    const { language } = useLanguage();

    const ContenedorInferior={
        oficina: {
            titulo: content?.home.Formulario[language].ContenedorInferior[Pais].OficinaCentral,
            principal:  content?.home.Formulario[language].ContenedorInferior[Pais].NumeroOC,
            secundario:  content?.home.Formulario[language].ContenedorInferior[Pais].Anexo
        },
        alarmas: {
            titulo: content?.home.Formulario[language].ContenedorInferior[Pais].LidermanAlarmas,
            principal:  content?.home.Formulario[language].ContenedorInferior[Pais].NumeroLA,
            secundario:  content?.home.Formulario[language].ContenedorInferior[Pais].AtencionAlCliente
        }
    }



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
    const [imagenActual, setImagenActual] = useState(imagenLateral1);

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

    const cambiarImagen = (botonIndex: number) => {
        switch(botonIndex) {
            case 0:
                setImagenActual(imagenLateral1); // Perú
                setPais("Peru");
                break;
            case 1:
                setImagenActual(imagenLateral2); // Chile
                setPais("Chile");
                break;
            case 2:
                setImagenActual(imagenLateral3); // Ecuador
                setPais("Ecuador");
                break;
            case 3:
                setImagenActual(imagenLateral4); // USA
                setPais("Usa");
                break;
            default:
                setImagenActual(imagenLateral1);
                setPais("Peru");
        }
    };

    const textosBotones = [content?.home.Formulario[language].BotonesYDesplegable.Peru, content?.home.Formulario[language].BotonesYDesplegable.Chile, content?.home.Formulario[language].BotonesYDesplegable.Ecuador, content?.home.Formulario[language].BotonesYDesplegable.Usa];


    const renderBotonesCarrusel = () => {
        return textosBotones.map((texto, index) => (
            <div key={index}>
                <button
                    type="button"
                    className={styles.botonCarrusel}
                    onClick={() => cambiarImagen(index)}
                >
                    {texto}
                </button>
            </div>
        ));
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


                <div className={styles.InfoExtra1}>
                    <img src={LogoColaboradores} alt="Imagen 1" className={styles.InfoExtraImagen} />
                    <div className={styles.InfoExtraTexto}>
                        <h3 className={styles.InfoExtraTitulo}>{content?.home.Formulario[language].Colaboradores.Titulo}</h3>
                        <p className={styles.InfoExtraNumero}>{content?.home.Formulario[language].Colaboradores.Numero}</p>
                    </div>
                </div>

                <div className={styles.InfoExtra2}>
                    <img src={LogoCoberturaDeRiesgo} alt="Imagen 1" className={styles.InfoExtraImagen} />
                    <div className={styles.InfoExtraTexto}>
                        <h3 className={styles.InfoExtraTitulo}>{content?.home.Formulario[language].CoberturaDeRiesgo.Titulo}</h3>
                        <p className={styles.InfoExtraNumero}>{content?.home.Formulario[language].CoberturaDeRiesgo.Numero}</p>
                    </div>
                </div>



                <div className={styles.contenidoCentral}>
                    <div className={styles.barraSuperior}>
                        <Slider {...sliderSettings}>
                            {renderBotonesCarrusel()}
                        </Slider>
                    </div>

                    <div className={styles.formularioContainer}>
                        <div className={styles.encabezado}>
                            <h2>{content?.home.Formulario[language].Titulo}</h2>
                            <select
                                className={styles.dropdown}
                                name="pais"
                                value={formData.pais}
                                onChange={handleInputChange}
                            >
                                <option value="Perú">{content?.home.Formulario[language].BotonesYDesplegable.Peru}</option>
                                <option value="Estados Unidos">{content?.home.Formulario[language].BotonesYDesplegable.Usa}</option>
                                <option value="Chile">{content?.home.Formulario[language].BotonesYDesplegable.Chile}</option>
                                <option value="Ecuador">{content?.home.Formulario[language].BotonesYDesplegable.Ecuador}</option>
                            </select>
                        </div>

                        <form className={styles.formulario} onSubmit={handleSubmit}>
                            {error && <div className={styles.errorMessage}>{error}</div>}
                            {success && <div className={styles.successMessage}>{content?.home.Formulario[language].MensajeAprobatorio}</div>}

                            <div className={styles.dosColumnas}>
                                <div className={styles.campo}>
                                    <label htmlFor="nombre">{content?.home.Formulario[language].Nombre}</label>
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
                                    <label htmlFor="apellido">{content?.home.Formulario[language].Apellido}</label>
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
                                    <label htmlFor="correo">{content?.home.Formulario[language].Correo}</label>
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
                                    <label htmlFor="telefono">{content?.home.Formulario[language].Telefono}</label>
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
                                <legend>{content?.home.Formulario[language].TextoCheckBox}</legend>
                                <label className={styles.checkboxLabel}>
                                    <input
                                        type="checkbox"
                                        name="seguridad"
                                        checked={formData.intereses.seguridad}
                                        onChange={handleCheckboxChange}
                                        className={styles.checkbox}
                                    />
                                    <span className={styles.checkboxCustom}></span>
                                    {content?.home.Formulario[language].Seguridad}
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
                                    {content?.home.Formulario[language].Servicios}
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
                                    {content?.home.Formulario[language].Tecnologia}
                                </label>
                            </fieldset>

                            <div className={styles.areaMensaje}>
                                <label htmlFor="mensaje">{content?.home.Formulario[language].Mensaje}</label>
                                <textarea
                                    id="mensaje"
                                    name="mensaje"
                                    value={formData.mensaje}
                                    onChange={handleInputChange}
                                    placeholder={content?.home.Formulario[language].TextoGuiaMensaje}
                                    rows={5}
                                    required
                                />
                            </div>

                            <div className={styles.contactoYBoton}>
                                <div className={styles.contactoAlternativo}>
                                    <p>También nos puedes contactar por:</p>
                                    <a href="mailto:${content?.home.Formulario[language].ElContactoExtra}">{content?.home.Formulario[language].ElContactoExtra}</a>
                                </div>

                                <div className={styles.botonEnviarContainer}>
                                    <button
                                        type="submit"
                                        className={styles.botonEnviar}
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? content?.home.Formulario[language].BotonEnviando : content?.home.Formulario[language].BotonEnviar}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className={styles.contenedorExtraInferior}>
                        <img src={logoEmpresa} alt="Logo de la empresa" />
                        <div>
                            <p className={styles.textoEncabezado}>{ContenedorInferior.oficina.titulo}</p>
                            <p className={styles.textoPrincipal}>{ContenedorInferior.oficina.principal}</p>
                            <p className={styles.textoSecundario}>{ContenedorInferior.oficina.secundario}</p>
                        </div>
                        <div>
                            <p className={styles.textoEncabezado}>{ContenedorInferior.alarmas.titulo}</p>
                            <p className={styles.textoPrincipal}>{ContenedorInferior.alarmas.principal}</p>
                            <p className={styles.textoSecundario}>{ContenedorInferior.alarmas.secundario}</p>
                        </div>
                    </div>
                </div>

                <img src={imagenActual} alt="Ilustración" className={styles.imagenLateral} />
            </div>
        </div>
    );
};

export default FormularioDeContacto2;