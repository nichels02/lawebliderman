import Mailjet from 'node-mailjet';
import dotenv from 'dotenv';
import validarDatos from './validarDatosCotizacion.js';

dotenv.config();

const mailjet = Mailjet.apiConnect(
    process.env.MAILJET_API_KEY,
    process.env.MAILJET_SECRET_KEY
);

export async function EnviarCotizacion(datos) {

    const subject = `Cotización solicitada #${Date.now()}`;

    const errores = validarDatos(datos);
    if (errores.length > 0) {
        throw new Error('Datos inválidos: ' + errores.join(', '));
    }

    const mensaje = `
Nombre: ${datos.nombre}
Apellido: ${datos.apellido}
Correo: ${datos.correo}
Teléfono: ${datos.Codigo}${datos.telefono}

Empresa:
- Razón Social: ${datos.RazonSocialEmpresa}
- RUC: ${datos.RUCEmpresa}
- Región: ${datos.Region}
- Distrito: ${datos.Distrito}
- Dirección: ${datos.Direccion}

Intereses:
- Seguridad Electrónica: ${datos.intereses.SeguridadElectronica}
- Seguridad Física: ${datos.intereses.SeguridadFisica}
- Facility Management: ${datos.intereses.FacilityManagement}
- Outsourcing: ${datos.intereses.Outsourcing}

Requerimiento:
${datos.Requerimiento}

Por dónde contactar:
- Telefónicamente: ${datos.PorDondeContactar.Telefonicamente}
- WhatsApp: ${datos.PorDondeContactar.Whatsapp}
- Email: ${datos.PorDondeContactar.Email}

Permisos:
- Condiciones de privacidad: ${datos.Permisos.condicionesDePrivacidad}
- Acepta contacto: ${datos.Permisos.AceptoQueMeContacte}

Fecha: ${new Date().toLocaleString()}
    `;

    await mailjet
        .post('send', { version: 'v3.1' })
        .request({
            Messages: [
                {
                    From: {
                        Email: process.env.CORREO_REMITENTE,
                        Name: 'Formulario Cotización'
                    },
                    To: [
                        {
                            Email: process.env.CORREO_DESTINO,
                            Name: 'Admin'
                        }
                    ],
                    Subject: subject,
                    TextPart: mensaje
                }
            ]
        });
}
