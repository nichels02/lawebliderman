// import React, { useState } from 'react';
import styles from '../css/FormCotizacion.module.css';



// import imagen from '../../assets/Inicio/foto-footer.png';
// import imagenLateral1 from '../../assets/Inicio/Peru.svg';
// import imagenLateral2 from '../../assets/Inicio/chile.svg';
// import imagenLateral3 from '../../assets/Inicio/eucador.svg';
// import imagenLateral4 from '../../assets/Inicio/USa.svg';
// import logoEmpresa from '../../assets/Inicio/Recurso 24_nuevo.svg';



// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, {useState} from "react";
import { useContent } from './Sistemas/useContent.tsx'; // o el path correcto
import { useLanguage } from './Sistemas/LanguageContext.tsx';
// import TituloYSubtituloGenerico from "./TituloYSubtituloGenerico.tsx";
// import LazyImage from './Sistemas/LazyImage.tsx';
import { FormValidatorSingleton } from './Sistemas/FormValidatorCotizacion.ts';
import {enviarAlBackend} from "./Sistemas/apiService.ts";







const FormCotizacion = () => {



    //region Datos
    const content = useContent();
    const { language } = useLanguage();

    type FormularioData = {
        nombre: string;
        apellido: string;
        correo: string;
        RazonSocialEmpresa: string;
        RUCEmpresa: string;
        Region: string;
        Distrito: string;
        Direccion: string;

        intereses: {
            SeguridadElectronica: boolean;
            SeguridadFisica: boolean;
            FacilityManagement: boolean;
            Outsourcing: boolean;
        };

        Requerimiento: string;
        Codigo: string;
        telefono: string;

        PorDondeContactar: {
            Telefonicamente: boolean;
            Whatsapp: boolean;
            Email: boolean;
        };

        Permisos: {
            condicionesDePrivacidad: boolean;
            AceptoQueMeContacte: boolean;
        };
    };


    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        correo: '',
        RazonSocialEmpresa: '',
        RUCEmpresa: '',
        Region: '',
        Distrito: '',
        Direccion: '',

        intereses:{
            SeguridadElectronica: false,
            SeguridadFisica: false,
            FacilityManagement: false,
            Outsourcing: false
        },

        Requerimiento: '',
        Codigo:'',
        telefono:'',

        PorDondeContactar:{
            Telefonicamente: false,
            Whatsapp: false,
            Email: false
        },

        Permisos:{
            condicionesDePrivacidad: false,
            AceptoQueMeContacte: false
        }

    });

    const [error, setError] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);


    //endregion

    //region Guardar datos FormData

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const target = e.target;
        const { name } = target;

        // Type guard para asegurar que es input y es checkbox
        const isCheckbox = (t: typeof target): t is HTMLInputElement =>
            t instanceof HTMLInputElement && t.type === "checkbox";

        const finalValue = isCheckbox(target) ? target.checked : target.value;

        const keys = name.split("."); // ej: ["intereses", "SeguridadFisica"]

        if (keys.length === 2) {
            const [group, field] = keys;

            setFormData(prev => ({
                ...prev,
                [group]: {
                    ...(prev[group as keyof typeof prev] as Record<string, unknown>),
                    [field]: finalValue
                }
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: finalValue
            }));
        }
    };




    //endregion

    //region Subir datos Form

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        setIsSubmitting(true);
        setError(null);
        setSuccess(false);

        try {
            console.log('[Form] Enviando datos al validador...');

            const validator = FormValidatorSingleton.getInstance();
            const validation = await validator.validateForm(formData);

            console.log('[Form] Resultado validador:', validation);

            // --- Si hay errores ---
            if (!validation.isValid) {
                {/*
                const errores = validation.errores as unknown as Record<string, boolean>;
                const mensajes = content?.Cotizacion.ValidadorFormulario[language] as Record<string, string>;


                // Orden en que se revisarán los errores
                const ordenErrores = [
                    "nombreVacio",
                    "apellidoVacio",
                    "correoVacio",
                    "FormatoDeCorreo",
                    "RazonSocialEmpresaVacio",
                    "RUCEmpresaVacio",
                    "RegionVacio",
                    "DistritoVacio",
                    "DireccionVacio",
                    "interesesVacio",
                    "RequerimientoVacio",
                    "CodigoVacio",
                    "telefonoVacio",
                    "TelefonoSoloNumeros",
                    "TelefonoCantidadDeDigitos",
                    "PorDondeContactarVacio",
                    "ErrorGuardando",
                    "ErrorDeConexion"
                ];

                // Buscar el primer error verdadero
                for (const clave of ordenErrores) {
                    if (errores[clave]) {
                        const msg = mensajes[clave] || "Error desconocido en el formulario";
                        setError(msg);
                        console.error("[Form] Error:", msg);
                        setIsSubmitting(false);
                        return;
                    }
                }
                */}
                setError(validation.errores[0]); // solo muestra el primer error
                return;
            }

            const respuesta = await enviarAlBackend<FormularioData>('enviar-cotizacion', formData);
            console.log('Respuesta del backend:', respuesta);

            // --- Si está válido ---
            console.log("[Form] Validación OK");
            setSuccess(true);

        } catch (err) {
            console.error("[Form] Error inesperado:", err);
            setError("Hubo un problema inesperado al validar el formulario.");
        } finally {
            setIsSubmitting(false);
        }
    };

    //endregion

    return (
        <div id="FormularioCotizacion" className={styles.contenedorPadre}>
            <div className={styles.ContenedorGeneral}>
                <div className={styles.Titulo}>
                    Cotiza Nuestros Servicios
                </div>
                <div className={styles.Texto}>
                    Este formulario llega directamente al área comercial. Para gestión de colaboradores, utilice sólo el formulario "Central de Agentes".
                </div>
                <form className={styles.GridFormulario} onSubmit={handleSubmit}>
                    {error &&
                        <div className={styles.errorMessage}>
                            {error}
                        </div>}
                    {success &&
                        <div className={styles.successMessage}>
                            {/*{content?.home.Formulario[language].MensajeAprobatorio}*/}
                        </div>}





                    <div className={`${styles.campo} ${styles.Posicion1}`}>
                        <label htmlFor="nombre">{content?.Cotizacion.Form[language].nombre}</label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleInputChange}
                            className={styles.BarraInput}
                            required
                        />
                    </div>
                    <div className={`${styles.campo} ${styles.Posicion2}`}>
                        <label htmlFor="apellido">{content?.Cotizacion.Form[language].apellido}</label>
                        <input
                            type="text"
                            id="apellido"
                            name="apellido"
                            value={formData.apellido}
                            onChange={handleInputChange}
                            className={styles.BarraInput}
                            required
                        />
                    </div>
                    <div className={`${styles.campo} ${styles.Posicion3}`}>
                        <label htmlFor="correo">{content?.Cotizacion.Form[language].correo}</label>
                        <input
                            type="text"
                            id="correo"
                            name="correo"
                            value={formData.correo}
                            onChange={handleInputChange}
                            className={styles.BarraInput}
                            required
                        />
                    </div>
                    <div className={`${styles.CampoVacio} ${styles.Posicion4}`}>
                    </div>
                    <div className={`${styles.campo} ${styles.Posicion5 }`}>
                        <label htmlFor="RazonSocialEmpresa">{content?.Cotizacion.Form[language].RazonSocialEmpresa}</label>
                        <input
                            type="text"
                            id="RazonSocialEmpresa"
                            name="RazonSocialEmpresa"
                            value={formData.RazonSocialEmpresa}
                            onChange={handleInputChange}
                            className={styles.BarraInput}
                            required
                        />
                    </div>
                    <div className={`${styles.campo} ${styles.Posicion6 }`}>
                        <label htmlFor="RUCEmpresa">{content?.Cotizacion.Form[language].RUCEmpresa}</label>
                        <input
                            type="text"
                            id="RUCEmpresa"
                            name="RUCEmpresa"
                            value={formData.RUCEmpresa}
                            onChange={handleInputChange}
                            className={styles.BarraInput}
                            required
                        />
                    </div>
                    <div className={`${styles.campo} ${styles.Posicion7 }`}>
                        <label htmlFor="Region">{content?.Cotizacion.Form[language].Region}</label>
                        <input
                            type="text"
                            id="Region"
                            name="Region"
                            value={formData.Region}
                            onChange={handleInputChange}
                            className={styles.BarraInput}
                            required
                        />
                    </div>
                    <div className={`${styles.campo} ${styles.Posicion8 }`}>
                        <label htmlFor="Distrito">{content?.Cotizacion.Form[language].Distrito}</label>
                        <input
                            type="text"
                            id="Distrito"
                            name="Distrito"
                            value={formData.Distrito}
                            onChange={handleInputChange}
                            className={styles.BarraInput}
                            required
                        />
                    </div>
                    <div className={`${styles.campo} ${styles.Posicion9 }`}>
                        <label htmlFor="Direccion">{content?.Cotizacion.Form[language].Direccion}</label>
                        <input
                            type="text"
                            id="Direccion"
                            name="Direccion"
                            value={formData.Direccion}
                            onChange={handleInputChange}
                            className={styles.BarraInput}
                            required
                        />
                    </div>

                    <div className={`${styles.campo} ${styles.Posicion10 }`}>
                        {/*titulo*/}
                        <div className={styles.TituloIntereses}>
                            {content?.Cotizacion.Form[language].intereses.TituloIntereses}
                        </div>

                    </div>
                    <div  className={`${styles.campoCheckBox} ${styles.Posicion11 }`} >
                        <input
                            type="checkbox"
                            id="SeguridadElectronica"
                            name="intereses.SeguridadElectronica"
                            checked={formData.intereses.SeguridadElectronica}
                            onChange={handleInputChange}
                        />
                        <label htmlFor="SeguridadElectronica">{content?.Cotizacion.Form[language].intereses.SeguridadElectronica}</label>
                    </div>
                    <div className={`${styles.campoCheckBox} ${styles.Posicion12 }`}>
                        <input
                            type="checkbox"
                            id="SeguridadFisica"
                            name="intereses.SeguridadFisica"
                            checked={formData.intereses.SeguridadFisica}
                            onChange={handleInputChange}
                        />
                        <label htmlFor="SeguridadFisica">{content?.Cotizacion.Form[language].intereses.SeguridadFisica}</label>
                    </div>
                    <div className={`${styles.campoCheckBox} ${styles.Posicion13 }`}>

                        <input
                            type="checkbox"
                            id="FacilityManagement"
                            name="intereses.FacilityManagement"
                            checked={formData.intereses.FacilityManagement}
                            onChange={handleInputChange}
                        />
                        <label htmlFor="FacilityManagement">{content?.Cotizacion.Form[language].intereses.FacilityManagement}</label>
                    </div>
                    <div className={`${styles.campoCheckBox} ${styles.Posicion14 }`}>

                        <input
                            type="checkbox"
                            id="Outsourcing"
                            name="intereses.Outsourcing"
                            checked={formData.intereses.Outsourcing}
                            onChange={handleInputChange}
                        />
                        <label htmlFor="Outsourcing">{content?.Cotizacion.Form[language].intereses.Outsourcing}</label>
                    </div>


                    <div className={`${styles.campo} ${styles.Posicion15 }`}>
                        <label htmlFor="Requerimiento">{content?.Cotizacion.Form[language].Requerimiento}</label>
                        <textarea
                            id="Requerimiento"
                            name="Requerimiento"
                            value={formData.Requerimiento}
                            onChange={handleInputChange}
                            className={`${styles.BarraInput} ${styles.ElTextArea }`}
                            required
                        />
                    </div>
                    <div  className={styles.Posicion16 }>
                        <div className={styles.campo}>
                            <label htmlFor="Codigo">{content?.Cotizacion.Form[language].Codigo}</label>

                            <select
                                id="Codigo"
                                name="Codigo"
                                value={formData.Codigo}
                                onChange={handleInputChange}
                                className={styles.BarraInput}
                                required
                            >

                                <option value="" className={styles.Option}>Seleccione una opción</option>
                                {content?.Cotizacion.Form[language].Codigos.map((item, index) => (
                                    <option key={index} value={item.Codigo} className={styles.Option}>
                                        {item.Nombre}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className={styles.campo}>
                            <label htmlFor="telefono">{content?.Cotizacion.Form[language].telefono}</label>
                            <input
                                type="text"
                                id="telefono"
                                name="telefono"
                                value={formData.telefono}
                                onChange={handleInputChange}
                                className={styles.BarraInput}
                                required
                            />
                        </div>
                    </div>


                    <div className={styles.Posicion17}>
                        <div className={styles.campoCheckBox}>

                            <input
                                type="checkbox"
                                id="Telefonicamente"
                                name="PorDondeContactar.Telefonicamente"
                                checked={formData.PorDondeContactar.Telefonicamente}
                                onChange={handleInputChange}
                            />
                            <label
                                htmlFor="Telefonicamente">{content?.Cotizacion.Form[language].PorDondeContactar.Telefonicamente}</label>
                        </div>
                        <div className={styles.campoCheckBox}>

                            <input
                                type="checkbox"
                                id="Whatsapp"
                                name="PorDondeContactar.Whatsapp"
                                checked={formData.PorDondeContactar.Whatsapp}
                                onChange={handleInputChange}
                            />
                            <label
                                htmlFor="Whatsapp">{content?.Cotizacion.Form[language].PorDondeContactar.Whatsapp}</label>
                        </div>
                        <div className={styles.campoCheckBox}>

                            <input
                                type="checkbox"
                                id="Email"
                                name="PorDondeContactar.Email"
                                checked={formData.PorDondeContactar.Email}
                                onChange={handleInputChange}
                            />
                            <label htmlFor="Email">{content?.Cotizacion.Form[language].PorDondeContactar.Email}</label>
                        </div>
                    </div>

                    <div className={styles.Posicion18}>
                        <div className={styles.campoCheckBox}>

                        <input
                            type="checkbox"
                            id="condicionesDePrivacidad"
                            name="Permisos.condicionesDePrivacidad"
                            checked={formData.Permisos.condicionesDePrivacidad}
                            onChange={handleInputChange}
                            required
                        />
                        <label htmlFor="condicionesDePrivacidad">{content?.Cotizacion.Form[language].Permisos.condicionesDePrivacidad}</label>
                    </div>
                    </div>
                    <div className={styles.Posicion19}>
                        <div className={styles.campoCheckBox}>

                            <input
                                type="checkbox"
                                id="AceptoQueMeContacte"
                                name="Permisos.AceptoQueMeContacte"
                                checked={formData.Permisos.AceptoQueMeContacte}
                                onChange={handleInputChange}
                                required
                            />
                            <label
                                htmlFor="AceptoQueMeContacte">{content?.Cotizacion.Form[language].Permisos.AceptoQueMeContacte}</label>
                        </div>
                    </div>
                    <div className={styles.Posicion20}>
                        <div className={styles.CampoBoton}>
                            <button
                                id="Boton"
                                type="submit"
                                className={styles.botonEnviar}
                                disabled={isSubmitting}
                            >
                                {content?.Cotizacion.Form[language].boton}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FormCotizacion;