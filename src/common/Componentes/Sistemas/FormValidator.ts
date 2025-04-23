import { FormularioContacto } from './FormularioContacto.interface';
import ConectarBackend from './ConectarBackend.ts'; // Asegúrate de que la ruta sea correcta

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
        console.log('entro a validador');

        // Validación de campos vacíos
        if (!data.nombre || data.nombre.trim() === '') {
            return { isValid: false, errorMessage: 'El nombre no puede estar vacío' };
        }
        console.log('entro a validador2');
        if (!data.apellido || data.apellido.trim() === '') {
            return { isValid: false, errorMessage: 'El apellido no puede estar vacío' };
        }
        console.log('entro a validador3');
        if (!data.correo || data.correo.trim() === '') {
            return { isValid: false, errorMessage: 'El correo no puede estar vacío' };
        }
        console.log('entro a validador4');
        // Validar formato de correo
        if (!this.isValidEmail(data.correo)) {
            return { isValid: false, errorMessage: 'El formato del correo no es válido' };
        }
        console.log('entro a validado5');
        if (!data.telefono || data.telefono.trim() === '') {
            return { isValid: false, errorMessage: 'El teléfono no puede estar vacío' };
        }
        console.log('entro a validador6');
        if (!data.mensaje || data.mensaje.trim() === '') {
            return { isValid: false, errorMessage: 'El mensaje no puede estar vacío' };
        }
        console.log('entro a validador7');
        if (!data.pais || data.pais.trim() === '') {
            return { isValid: false, errorMessage: 'El país no puede estar vacío' };
        }
        console.log('entro a validador8');
        // Validación de intereses
        const { seguridad, servicios, tecnologia } = data.intereses;
        if (!seguridad && !servicios && !tecnologia) {
            return { isValid: false, errorMessage: 'Debe seleccionar al menos un interés' };
        }
        console.log('entro a validador9');
        /*llamarlo aqui*/
        try {
            const response = await ConectarBackend.getInstance().enviarDatos(data);
            console.log('entro a validador10');
            if (!response.success) {
                return { isValid: false, errorMessage: response.error || 'Error al guardar los datos' };
            }
            console.log('entro a validador11');
        } catch (error) {
            return { isValid: false, errorMessage: error instanceof Error ? error.message : 'Error de conexión con el servidor' };
            console.log('entro a validador12');
        }
        console.log('termino validador');
        return { isValid: true };
    }

    private isValidEmail(email: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
}