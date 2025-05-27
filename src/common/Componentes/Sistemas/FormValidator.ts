import { FormularioContacto } from './FormularioContacto.interface';
import { ErroresFormulario } from './ErroresFormulario.interface.ts';
import ConectarBackend from './ConectarBackend.ts';

export class FormValidatorSingleton {
    private static instance: FormValidatorSingleton;

    private constructor() {}

    public static getInstance(): FormValidatorSingleton {
        if (!FormValidatorSingleton.instance) {
            FormValidatorSingleton.instance = new FormValidatorSingleton();
        }
        return FormValidatorSingleton.instance;
    }

    private getErroresDefault(): ErroresFormulario {
        return {
            NombreVacio: false,
            ApellidoVacio: false,
            CorreoVacio: false,
            FormatoDeCorreo: false,
            TelefonoVacio: false,
            TelefonoSoloNumeros: false,
            TelefonoCantidadDeDigitos: false,
            MensajeVacio: false,
            PaisVacio: false,
            InteresVacio: false,
            ErrorGuardando: false,
            ErrorDeConexion: false,
        };
    }

    public async validateForm(data: FormularioContacto): Promise<{ isValid: boolean; errores: ErroresFormulario }> {
        const errores = this.getErroresDefault();

        if (!data.nombre || data.nombre.trim() === '') {
            errores.NombreVacio = true;
            return { isValid: false, errores };
        }

        if (!data.apellido || data.apellido.trim() === '') {
            errores.ApellidoVacio = true;
            return { isValid: false, errores };
        }

        if (!data.correo || data.correo.trim() === '') {
            errores.CorreoVacio = true;
            return { isValid: false, errores };
        }

        if (!this.isValidEmail(data.correo)) {
            errores.FormatoDeCorreo = true;
            return { isValid: false, errores };
        }

        if (!data.telefono || data.telefono.trim() === '') {
            errores.TelefonoVacio = true;
            return { isValid: false, errores };
        }

        const numericPhone = data.telefono.replace(/\s+/g, '');
        if (/[^0-9]/.test(numericPhone)) {
            errores.TelefonoSoloNumeros = true;
            return { isValid: false, errores };
        }

        if (numericPhone.length < 7 || numericPhone.length > 15) {
            errores.TelefonoCantidadDeDigitos = true;
            return { isValid: false, errores };
        }

        if (!data.mensaje || data.mensaje.trim() === '') {
            errores.MensajeVacio = true;
            return { isValid: false, errores };
        }

        if (!data.pais || data.pais.trim() === '') {
            errores.PaisVacio = true;
            return { isValid: false, errores };
        }

        const { seguridad, servicios, tecnologia } = data.intereses;
        if (!seguridad && !servicios && !tecnologia) {
            errores.InteresVacio = true;
            return { isValid: false, errores };
        }

        try {
            const response = await ConectarBackend.getInstance().enviarDatos(data);
            if (!response.success) {
                errores.ErrorGuardando = true;
                return { isValid: false, errores };
            }
        } catch {
            errores.ErrorDeConexion = true;
            return { isValid: false, errores };
        }

        return { isValid: true, errores };
    }

    private isValidEmail(email: string): boolean {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    }
}
