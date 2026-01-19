import { FormularioContacto } from './FormularioContacto.interface';
import { ErroresFormulario } from './ErroresFormulario.interface.ts';
//import ConectarBackend from './ConectarBackend.ts';

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

    public async validateForm(data: FormularioContacto) {
        const errores = this.getErroresDefault();

        const language = "es";

        if (!data.nombre || data.nombre.trim() === '') {
            errores.NombreVacio = true;
            return {
                isValid: false,
                errores:
                    [language == "es" ?
                        "El nombre no puede estar vacío" :
                        "Name cannot be empty"
                    ]
            };
        }


        if (!data.apellido || data.apellido.trim() === '') {
            errores.ApellidoVacio = true;
            return {
                isValid: false,
                errores:
                    [language == "es" ?
                        "El apellido no puede estar vacío" :
                        "Last name cannot be empty"
                    ]
            };
        }


        if (!data.correo || data.correo.trim() === '') {
            errores.CorreoVacio = true;
            return {
                isValid: false,
                errores:
                    [language == "es" ?
                        "El correo no puede estar vacío" :
                        "Email cannot be empty"
                    ]
            };
        }

        if (!this.isValidEmail(data.correo)) {
            errores.FormatoDeCorreo = true;
            return {
                isValid: false,
                errores:
                    [language == "es" ?
                        "El formato del correo no es válido" :
                        "Email format is not valid"
                    ]
            };
        }

        if (data.telefono && data.telefono.trim() !== '') {
            const numericPhone = data.telefono.replace(/\s+/g, '');

            // Acepta solo números y un "+" solo si está al inicio
            if (!/^\+?\d+$/.test(numericPhone)) {
                errores.TelefonoSoloNumeros = true;
                return {
                    isValid: false,
                    errores:
                        [language == "es" ?
                            "El teléfono solo debe contener dígitos numéricos" :
                            "Phone number must contain only numeric digits"
                        ]
                };
            }

            // Calcula la longitud del número sin contar el "+"
            const lengthWithoutPlus = numericPhone.startsWith('+')
                ? numericPhone.slice(1).length
                : numericPhone.length;

            if (lengthWithoutPlus < 7 || lengthWithoutPlus > 15) {
                errores.TelefonoCantidadDeDigitos = true;
                return {
                    isValid: false,
                    errores:
                        [language == "es"?
                            "El teléfono debe tener entre 7 y 15 dígitos" :
                            "Phone number must be between 7 and 15 digits long"
                        ]


                };
            }
        } else {
            return {
                isValid: false,
                errores:
                    [language == "es" ?
                        "El teléfono no puede estar vacío" :
                        "Phone number cannot be empty"
                    ]
            };
        }


        if (!data.pais || data.pais.trim() === '') {
            errores.PaisVacio = true;
            return {
                isValid: false,
                errores:
                    [language == "es" ?
                        "El país no puede estar vacío" :
                        "Country cannot be empty"
                    ]
            };
        }

        const {seguridad, servicios, tecnologia} = data.intereses;
        if (!seguridad && !servicios && !tecnologia) {
            errores.InteresVacio = true;
            return {
                isValid: false,
                errores:
                    [language == "es" ?
                        "Debe seleccionar al menos un interés" :
                        "At least one interest must be selected"
                    ]
            };
        }
        {/*
        try {
            const response = await ConectarBackend.getInstance().enviarDatos(data);
            if (!response.success) {
                errores.ErrorGuardando = true;
                return {isValid: false, errores};
            }
        } catch {
            errores.ErrorDeConexion = true;
            return {isValid: false, errores};
        }
        */}

        return {
            isValid: true,
            errores: []
        };
    }

    private isValidEmail(email: string): boolean {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    }
}
