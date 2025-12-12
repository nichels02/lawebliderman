import { FormularioContacto } from './FormularioCotizacion.interface';
import { ErroresFormulario } from './ErroresFormularioCotizacion.interface.ts';

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
            nombreVacio: false,
            apellidoVacio:false,
            correoVacio: false,
            FormatoDeCorreo: false,
            RazonSocialEmpresaVacio: false,
            RUCEmpresaVacio: false,
            RegionVacio: false,
            DistritoVacio: false,
            DireccionVacio: false,

            interesesVacio: false,

            RequerimientoVacio: false,
            CodigoVacio:false,
            telefonoVacio: false,
            TelefonoSoloNumeros: false,
            TelefonoCantidadDeDigitos: false,

            PorDondeContactarVacio: false,

            ErrorGuardando: false,
            ErrorDeConexion: false
        };
    }

    public async validateForm(data: FormularioContacto): Promise<{ isValid: boolean; errores: ErroresFormulario }> {
        const errores = this.getErroresDefault();

        if (!data.nombre || data.nombre.trim() === '') {
            errores.nombreVacio = true;
            return { isValid: false, errores };
        }

        if (!data.apellido || data.apellido.trim() === '') {
            errores.apellidoVacio = true;
            return { isValid: false, errores };
        }

        if (!data.correo || data.correo.trim() === '') {
            errores.correoVacio = true;
            return { isValid: false, errores };
        }

        if (!this.isValidEmail(data.correo)) {
            errores.FormatoDeCorreo = true;
            return { isValid: false, errores };
        }

        if (data.telefono && data.telefono.trim() !== '') {
            const numericPhone = data.telefono.replace(/\s+/g, '');

            // Acepta solo números y un "+" solo si está al inicio
            if (!/^\+?\d+$/.test(numericPhone)) {
                errores.TelefonoSoloNumeros = true;
                return { isValid: false, errores };
            }

            // Calcula la longitud del número sin contar el "+"
            const lengthWithoutPlus = numericPhone.startsWith('+')
                ? numericPhone.slice(1).length
                : numericPhone.length;

            if (lengthWithoutPlus < 7 || lengthWithoutPlus > 15) {
                errores.TelefonoCantidadDeDigitos = true;
                return { isValid: false, errores };
            }
        }




        if (!data.RazonSocialEmpresa || data.RazonSocialEmpresa.trim() === '') {
            errores.RazonSocialEmpresaVacio = true;
            return { isValid: false, errores };
        }
        if (!data.RUCEmpresa || data.RUCEmpresa.trim() === '') {
            errores.RUCEmpresaVacio = true;
            return { isValid: false, errores };
        }
        if (!data.Region || data.Region.trim() === '') {
            errores.RegionVacio = true;
            return { isValid: false, errores };
        }
        if (!data.Region || data.Region.trim() === '') {
            errores.RegionVacio = true;
            return { isValid: false, errores };
        }
        if (!data.Distrito || data.Distrito.trim() === '') {
            errores.DistritoVacio = true;
            return { isValid: false, errores };
        }
        if (!data.Direccion || data.Direccion.trim() === '') {
            errores.DireccionVacio = true;
            return { isValid: false, errores };
        }





        if (!Object.values(data.intereses).some(v => v === true)) {
            errores.interesesVacio = true;
            return { isValid: false, errores };
        }

        if (!data.Requerimiento || data.Requerimiento.trim() === '') {
            errores.RequerimientoVacio = true;
            return { isValid: false, errores };
        }

        if (!data.Codigo || data.Codigo.trim() === '') {
            errores.CodigoVacio = true;
            return { isValid: false, errores };
        }

        if (!data.Codigo || data.Codigo.trim() === '') {
            errores.CodigoVacio = true;
            return { isValid: false, errores };
        }

        if (!Object.values(data.PorDondeContactar).some(v => v === true)) {
            errores.PorDondeContactarVacio = true;
            return { isValid: false, errores };
        }











        return { isValid: true, errores };
    }

    private isValidEmail(email: string): boolean {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    }
}
