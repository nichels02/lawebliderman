import React from 'react';
import { FormularioContacto } from './FormularioContacto.interface'; // Elimina .ts de la importación

interface ValidationResult {
    isValid: boolean;
    errorMessage?: string;
}

interface FormValidatorProps {
    formData: FormularioContacto;
    children: (result: ValidationResult) => React.ReactNode;
}

const FormValidator: React.FC<FormValidatorProps> = ({ formData, children }) => {
    const validateForm = (): ValidationResult => {
        // Validación del nombre
        if (!formData.nombre.trim()) {
            return { isValid: false, errorMessage: 'El nombre es requerido' };
        }

        // Validación del correo
        if (!formData.correo.trim()) {
            return { isValid: false, errorMessage: 'El correo electrónico es requerido' };
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.correo)) {
            return { isValid: false, errorMessage: 'El correo electrónico no es válido' };
        }

        // Validación del teléfono
        if (!formData.telefono.trim()) {
            return { isValid: false, errorMessage: 'El teléfono es requerido' };
        }

        // Validación del mensaje
        if (!formData.mensaje.trim()) {
            return { isValid: false, errorMessage: 'El mensaje es requerido' };
        }

        // Validación de al menos un interés seleccionado
        if (!Object.values(formData.intereses).some(Boolean)) {
            return { isValid: false, errorMessage: 'Selecciona al menos un área de interés' };
        }

        return { isValid: true };
    };

    return <>{children(validateForm())}</>;
};

export default FormValidator;