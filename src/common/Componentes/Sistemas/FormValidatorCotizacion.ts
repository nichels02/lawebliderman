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

    public async validateForm(data: FormularioContacto)  {
        const errores = this.getErroresDefault();

        const language = "es";

        if (!data.nombre || data.nombre.trim() === '') {
            errores.nombreVacio = true;
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
            errores.apellidoVacio = true;
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
            errores.correoVacio = true;
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
        }else {
            return {
                isValid: false,
                errores:
                    [language == "es" ?
                        "El teléfono no puede estar vacío" :
                        "Phone number cannot be empty"
                    ]
            };
        }




        if (!data.RazonSocialEmpresa || data.RazonSocialEmpresa.trim() === '') {
            errores.RazonSocialEmpresaVacio = true;
            return {
                isValid: false,
                errores: [
                    language === "es"
                        ? "La razón social de la empresa no puede estar vacía"
                        : "Company name cannot be empty"
                ]
            };
        }
        if (!data.RUCEmpresa || data.RUCEmpresa.trim() === '') {
            errores.RUCEmpresaVacio = true;
            return {
                isValid: false,
                errores: [
                    language === "es"
                        ? "El RUC de la empresa no puede estar vacío"
                        : "Company RUC cannot be empty"
                ]
            };
        }
        if (!data.Region || data.Region.trim() === '') {
            return {
                isValid: false,
                errores: [
                    language === "es"
                        ? "La región no puede estar vacía"
                        : "Region cannot be empty"
                ]
            };
        }

        if (!data.Direccion || data.Direccion.trim() === '') {
            return {
                isValid: false,
                errores: [
                    language === "es"
                        ? "La dirección no puede estar vacía"
                        : "Address cannot be empty"
                ]
            };
        }

        if (!data.Distrito || data.Distrito.trim() === '') {
            return {
                isValid: false,
                errores: [
                    language === "es"
                        ? "El distrito no puede estar vacío"
                        : "District cannot be empty"
                ]
            };
        }





        if (!Object.values(data.intereses).some(v => v === true)) {
            return {
                isValid: false,
                errores: [
                    language === "es"
                        ? "Debe seleccionar al menos un interés"
                        : "You must select at least one interest"
                ]
            };
        }


        if (!data.Requerimiento || data.Requerimiento.trim() === '') {
            return {
                isValid: false,
                errores: [
                    language === "es"
                        ? "Debe especificar lo que desea cotizar"
                        : "You must specify what you want to quote"
                ]
            };
        }



        if (!data.Codigo || data.Codigo.trim() === '') {
            return {
                isValid: false,
                errores: [
                    language === "es"
                        ? "Debe ingresar el código de país del teléfono"
                        : "You must enter the phone country code"
                ]
            };
        }


        if (!Object.values(data.PorDondeContactar).some(v => v === true)) {
            return {
                isValid: false,
                errores: [
                    language === "es"
                        ? "Debe seleccionar al menos una opción de contacto"
                        : "You must select at least one contact method"
                ]
            };
        }





        if (!Object.values(data.Permisos.AceptoQueMeContacte).some(v => v === true)) {
            return {
                isValid: false,
                errores: [
                    language === "es"
                        ? "Debe aceptar que lo contactemos"
                        : "You must agree to be contacted"
                ]
            };
        }



        if (!Object.values(data.Permisos.condicionesDePrivacidad).some(v => v === true)) {
            return {
                isValid: false,
                errores: [
                    language === "es"
                        ? "Debe aceptar las condiciones de privacidad"
                        : "You must accept the privacy terms"
                ]
            };
        }









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
