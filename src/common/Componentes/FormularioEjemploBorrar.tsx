{/*
import {useState} from "react";
import styles from "../Css/Formulario.module.css";
import {useContent} from "./Sistemas/Context.tsx";
import { validarFormulario } from "./Sistemas/ValidadorDeFormulario";
import {enviarAlBackend} from "./Sistemas/apiService.ts";
import LazyImage from './Sistemas/LazyImage.tsx';


function Formulario() {

    const Content = useContent()?.Formulario;

    const [hayMensaje, setHayMensaje] = useState(false);
    const [huboError, setHuboError] = useState(false);
    const [mensajeDeConfirmacion, setMensajeDeConfirmacion] = useState("");



    type FormularioReserva = {
        Nombre: string;
        Telefono: string;
        Correo: string;
        DiaDeReserva: string;
        HoraDeReserva: string;
        NumeroDePersonas: string;
        NumeroDeNinos: string;
        Mensaje: string;
    };



    const [form, setForm] =  useState<FormularioReserva>({
        Nombre: "",
        Telefono: "",
        Correo: "",
        DiaDeReserva: "",
        HoraDeReserva: "",
        NumeroDePersonas: "",
        NumeroDeNinos: "",
        Mensaje: ""
    });

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    }

    // function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    //     e.preventDefault();
    //     const datos = new FormData(e.currentTarget);
    //     const nombre = datos.get("nombre");
    //     const comentario = datos.get("comentario");
    //     console.log(nombre, comentario);
    // }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();



        const resultado = validarFormulario(form);

        if (!resultado.esValido) {
            setMensajeDeConfirmacion(resultado.errores[0]); // solo muestra el primer error
            setHuboError(true)
            return;
        }

        console.log("Formulario válido. Enviar al backend:", form);

        try {
            const respuesta = await enviarAlBackend<FormularioReserva>('enviar-formulario', form);
            console.log('Respuesta del backend:', respuesta);
            setMensajeDeConfirmacion('Formulario enviado correctamente.');
            setHuboError(false);

        } catch (error: unknown) {
            console.error('Error al enviar:', error);

            const mensaje = error instanceof Error ? error.message : 'Error al enviar el formulario.';
            setMensajeDeConfirmacion(mensaje);
            setHuboError(true);
        }
        setHayMensaje(true);
    }



    // Calcula la fecha de mañana en formato YYYY-MM-DD
    function getTomorrowDate() {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        return tomorrow.toISOString().split("T")[0]; // 'YYYY-MM-DD'
    }


    function handleInvalid(e: React.FormEvent<HTMLInputElement>) {
        e.currentTarget.setCustomValidity("La hora debe estar entre 09:00 y 18:00.");
    }

    function handleChangeHora(e: React.ChangeEvent<HTMLInputElement>) {
        e.currentTarget.setCustomValidity(""); // <- limpia el mensaje anterior
        handleChange(e); // Llama a tu función original para manejar el cambio
    }


    const [inputType, setInputType] = useState<"text" | "date">("text");
    const [horaInputType, setHoraInputType] = useState<"text" | "time">("text");



    return (
        <section>
            <div className={"contenedorPrincipal"}>
                <div className={styles.ContenedorPadre}>
                    <div className={styles.ContenedorImagen}>
                        <LazyImage src={Content?.ImagenFondo} className={styles.ImagenFondo} alt={""} aria-hidden="true"/>
                    </div>
                    <div className={styles.Formulario}>
                        <div className={styles.ContenedorTitulo}>
                            <h3>{Content?.Textos.CamposDeFormulario.Titulo}</h3>

 */

    /*
                        </div>




                        <div className={styles.ContenedorFormulario}>
                            <form className={styles.ContenedorGrid} onSubmit={handleSubmit}>
                                <div className={styles.filaTipo1}>
                                    <h4 className={styles.TituloFormulario}>
                                        {Content?.Textos.CamposDeFormulario.SubTitulo}</h4>
                                </div>
                                {/*Mensaje de fallo o exito*/}
{/*
                                <div className={
                                    hayMensaje
                                        ? (huboError ? styles.MensajeError : styles.MensajeExito)
                                        : styles.MensajeVacio
                                }>
                                    <p className={styles.ElMensaje}>{mensajeDeConfirmacion} </p>
                                </div>
                                <div className={styles.filaTipo1}>
                                    <input
                                        className={styles.estiloInput}
                                        type="text"
                                        name="Nombre"
                                        value={form.Nombre}
                                        onChange={handleChange}
                                        placeholder={Content?.Textos.CamposDeFormulario.Nombre}
                                    />
                                </div>

                                <div className={styles.filaTipo2}>
                                    <input
                                        className={styles.estiloInput}
                                        type="tel"
                                        name="Telefono"
                                        value={form.Telefono}
                                        onChange={handleChange}
                                        placeholder={Content?.Textos.CamposDeFormulario.NumeroDeTelefono}
                                    />

                                    <input
                                        className={styles.estiloInput}
                                        type="email"
                                        name="Correo"
                                        value={form.Correo}
                                        onChange={handleChange}
                                        placeholder= {Content?.Textos.CamposDeFormulario.Correo}
                                    />
                                </div>
                                <div className={styles.filaTipo2}>
                                    <input
                                        type={inputType}
                                        className={styles.estiloInput}
                                        onFocus={() => setInputType("date")}
                                        onBlur={(e) => {
                                            if (!e.target.value) setInputType("text");
                                        }}
                                        name="DiaDeReserva"
                                        value={form.DiaDeReserva}
                                        onChange={handleChange}
                                        min={getTomorrowDate()}
                                        placeholder={Content?.Textos.CamposDeFormulario.DiaDeLaReserva}
                                    />

                                    <input
                                        className={styles.estiloInput}
                                        type={horaInputType}
                                        name="HoraDeReserva"
                                        value={form.HoraDeReserva}
                                        onInvalid={handleInvalid}
                                        onChange={handleChangeHora}
                                        onFocus={() => setHoraInputType("time")}
                                        onBlur={(e) => {
                                            if (!e.target.value) setHoraInputType("text");
                                        }}
                                        min="09:00"
                                        max="18:00"
                                        placeholder={Content?.Textos.CamposDeFormulario.HoraDeLaReserva}
                                    />

                                </div>
                                <div className={styles.filaTipo2}>
                                    <input
                                        className={styles.estiloInput}
                                        type="number"
                                        name="NumeroDePersonas"
                                        value={form.NumeroDePersonas}
                                        onChange={handleChange}
                                        placeholder={Content?.Textos.CamposDeFormulario.NumDePersonas}
                                        min={1}
                                        max={10}
                                    />
                                    <input
                                        className={styles.estiloInput}
                                        type="number"
                                        name="NumeroDeNinos"
                                        value={form.NumeroDeNinos}
                                        onChange={handleChange}
                                        placeholder={Content?.Textos.CamposDeFormulario.NumDeNinos}
                                        min={0}
                                        max={10}
                                    />
                                </div>

                                <div className={styles.filaTipo1}>
                                    <textarea
                                        className={`${styles.estiloTexArea} ${hayMensaje ? styles.ReducirTextAreaMensaje : ''}`}
                                        name="Mensaje"
                                        value={form.Mensaje}
                                        onChange={handleChange}
                                        placeholder={Content?.Textos.CamposDeFormulario.MensajeExtra}
                                    />
                                </div>
                                <div className={styles.filaTipo3}>
                                    <small>
                                        {Content?.Textos.Advertencia}
                                    </small>
                                    <button className={styles.BotonEnviar} type="submit">{Content?.Textos.BotonEnviar}</button>
                                </div>


                            </form>
                        </div>
                        <LazyImage src={"/assets/SVG/Decoracion/CuadradosDecoracion4.svg"} className={styles.ImagenDecorativa1} alt={""} aria-hidden="true"/>
                        <LazyImage src={"/assets/SVG/Decoracion/CuadradosDecoracion5.svg"} className={styles.ImagenDecorativa2} alt={""} aria-hidden="true"/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Formulario;
*/}