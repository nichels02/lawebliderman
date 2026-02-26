import Mailjet from 'node-mailjet';
import dotenv from 'dotenv';
import validarDatos from './validarDatos.js';

dotenv.config();

const mailjet = Mailjet.apiConnect(
    process.env.MAILJET_API_KEY,
    process.env.MAILJET_SECRET_KEY
);




export async function enviarCorreo(datos) {

    const subject = `Nuevo contacto #${Date.now()}`;

    const errores = validarDatos(datos);
    if (errores.length > 0) {
        throw new Error('Datos inválidos: ' + errores.join(', '));
    }

    const mensaje = `
Nombre: ${datos.nombre}
Apellido: ${datos.apellido}
Correo: ${datos.correo}
Teléfono: ${datos.telefono}

Intereses:
- Seguridad: ${datos.intereses.seguridad}
- Servicios: ${datos.intereses.servicios}
- Tecnología: ${datos.intereses.tecnologia}

Mensaje:
${datos.mensaje}

País: ${datos.pais}
Fecha: ${new Date().toLocaleString()}
    `;

    await mailjet
        .post('send', { version: 'v3.1' })
        .request({
            Messages: [
                {
                    From: {
                        Email: process.env.CORREO_REMITENTE,
                        Name: 'Formulario Web'
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
