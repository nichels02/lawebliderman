import { FormularioContacto } from './FormularioContacto.interface';
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

    public async validateForm(data: FormularioContacto): Promise<{ isValid: boolean; errorMessage?: string }> {
        // Validar nombre y apellido
        if (!data.nombre || data.nombre.trim() === '') {
            return { isValid: false, errorMessage: 'El nombre no puede estar vacío' };
        }
        if (!data.apellido || data.apellido.trim() === '') {
            return { isValid: false, errorMessage: 'El apellido no puede estar vacío' };
        }

        // Validar correo
        if (!data.correo || data.correo.trim() === '') {
            return { isValid: false, errorMessage: 'El correo no puede estar vacío' };
        }
        if (!this.isValidEmail(data.correo)) {
            return { isValid: false, errorMessage: 'El formato del correo no es válido' };
        }

        // Validar teléfono
        if (!data.telefono || data.telefono.trim() === '') {
            return { isValid: false, errorMessage: 'El teléfono no puede estar vacío' };
        }
        const numericPhone = data.telefono.replace(/\s+/g, '');
        if (/[^0-9]/.test(numericPhone)) {
            return { isValid: false, errorMessage: 'El teléfono solo debe contener dígitos numéricos' };
        }
        if (numericPhone.length < 7 || numericPhone.length > 15) {
            return { isValid: false, errorMessage: 'El teléfono debe tener entre 7 y 15 dígitos' };
        }

        // Validar mensaje y país
        if (!data.mensaje || data.mensaje.trim() === '') {
            return { isValid: false, errorMessage: 'El mensaje no puede estar vacío' };
        }
        if (!data.pais || data.pais.trim() === '') {
            return { isValid: false, errorMessage: 'El país no puede estar vacío' };
        }

        // Validar al menos un interés
        const { seguridad, servicios, tecnologia } = data.intereses;
        if (!seguridad && !servicios && !tecnologia) {
            return { isValid: false, errorMessage: 'Debe seleccionar al menos un interés' };
        }

        // Intentar enviar los datos al backend
        try {
            const response = await ConectarBackend.getInstance().enviarDatos(data);
            if (!response.success) {
                return { isValid: false, errorMessage: response.error || 'Error al guardar los datos' };
            }
        } catch (error) {
            return {
                isValid: false,
                errorMessage: error instanceof Error ? error.message : 'Error de conexión con el servidor'
            };
        }

        // Todo válido
        return { isValid: true };
    }

    private isValidEmail(email: string): boolean {
        // Acepta letras, números, puntos, guiones y dominios válidos
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    }
}
