import { FormularioContacto } from './FormularioContacto.interface'; // Eliminé la extensión .ts del import

export class FormValidatorSingleton {
    private static instance: FormValidatorSingleton;

    private constructor() {}

    public static getInstance(): FormValidatorSingleton {
        if (!FormValidatorSingleton.instance) {
            FormValidatorSingleton.instance = new FormValidatorSingleton();
        }
        return FormValidatorSingleton.instance;
    }

    public validateForm(data: FormularioContacto): { isValid: boolean; errorMessage?: string } {
        // Verificar campos vacíos (solo campos string)
        if (!data.nombre || data.nombre.trim() === '') {
            return { isValid: false, errorMessage: 'El nombre no puede estar vacío' };
        }

        if (!data.apellido || data.apellido.trim() === '') {
            return { isValid: false, errorMessage: 'El apellido no puede estar vacío' };
        }

        if (!data.correo || data.correo.trim() === '') {
            return { isValid: false, errorMessage: 'El correo no puede estar vacío' };
        }

        // Validar formato de correo
        if (!this.isValidEmail(data.correo)) {
            return { isValid: false, errorMessage: 'El formato del correo no es válido' };
        }

        if (!data.telefono || data.telefono.trim() === '') {
            return { isValid: false, errorMessage: 'El teléfono no puede estar vacío' };
        }

        if (!data.mensaje || data.mensaje.trim() === '') {
            return { isValid: false, errorMessage: 'El mensaje no puede estar vacío' };
        }

        if (!data.pais || data.pais.trim() === '') {
            return { isValid: false, errorMessage: 'El país no puede estar vacío' };
        }

        // Verificar que al menos un interés esté seleccionado
        const { seguridad, servicios, tecnologia } = data.intereses;
        if (!seguridad && !servicios && !tecnologia) {
            return { isValid: false, errorMessage: 'Debe seleccionar al menos un interés' };
        }

        return { isValid: true };
    }

    private isValidEmail(email: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
}