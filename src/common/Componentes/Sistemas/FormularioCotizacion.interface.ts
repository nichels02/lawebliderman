export interface FormularioContacto {
    nombre: string,
    apellido: string,
    correo: string,
    RazonSocialEmpresa: string,
    RUCEmpresa: string,
    Region: string,
    Distrito: string,
    Direccion: string,

    intereses:{
        SeguridadElectronica: boolean,
        SeguridadFisica: boolean,
        FacilityManagement: boolean,
        Outsourcing: boolean
    },

    Requerimiento: string,
    Codigo:string,
    telefono:string,

    PorDondeContactar:{
        Telefonicamente: boolean,
        Whatsapp: boolean,
        Email: boolean
    },
    Permisos:{
        condicionesDePrivacidad: boolean,
        AceptoQueMeContacte: boolean
    }

}