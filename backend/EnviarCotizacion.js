import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import validarDatos from './validarDatosCotizacion.js';

dotenv.config();

const transporter = nodemailer.createTransport({
    host: process.env.HostCorreo,
    port: 465,
    secure: true, // porque es 465
    auth: {
        user: process.env.CORREO_REMITENTE,
        pass: process.env.CLAVE_APP
    }
});

export async function EnviarCotizacion(datos) {

    const errores = validarDatos(datos);
    if (errores.length > 0) {
        throw new Error('Datos inválidos: ' + errores.join(', '));
    }

    const mensaje = `
        nombre: ${datos.nombre}
        apellido: ${datos.apellido}
        correo: ${datos.correo}
        telefono: ${datos.Codigo}${datos.telefono}

        RazonSocialEmpresa: ${datos.RazonSocialEmpresa}
        RUCEmpresa: ${datos.RUCEmpresa}
        Region: ${datos.Region}
        Distrito: ${datos.Distrito}
        Direccion: ${datos.Direccion}

        Intereses:
            Seguridad Electronica: ${datos.intereses.SeguridadElectronica}
            Seguridad Fisica: ${datos.intereses.SeguridadFisica}
            Facility Management: ${datos.intereses.FacilityManagement}
            Outsourcing: ${datos.intereses.Outsourcing}

        Requerimiento: ${datos.Requerimiento}

        Por Donde Contactar:
            Telefonicamente: ${datos.PorDondeContactar.Telefonicamente}
            Whatsapp: ${datos.PorDondeContactar.Whatsapp}
            Email: ${datos.PorDondeContactar.Email}

        Permisos:
            Condiciones de Privacidad: ${datos.Permisos.condicionesDePrivacidad}
            Acepto ser contactado: ${datos.Permisos.AceptoQueMeContacte}
        
    `;

    await transporter.sendMail({
        from: process.env.CORREO_REMITENTE,
        to: process.env.CORREO_DESTINO,
        subject: 'Cliente con peticion de cotizacion',
        text: mensaje
    });
}
