import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config({ path: './datosDeBaseDeDatos.env' });

export default function enviarCorreo(cliente) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const serviciosSeleccionados = [
        { tipo: 'Servicios', activo: cliente.servicios, correo: process.env.EMAIL_SERVICIOS },
        { tipo: 'Tecnología', activo: cliente.tecnologia, correo: process.env.EMAIL_TECNOLOGIA },
        { tipo: 'Seguridad', activo: cliente.seguridad, correo: process.env.EMAIL_SEGURIDAD }
    ];

    serviciosSeleccionados.forEach(servicio => {
        if (servicio.activo) {
            const mailOptions = {
                from: process.env.EMAIL_USER,
                to: servicio.correo,
                subject: `Nuevo Cliente para ${servicio.tipo}`,
                text: `Se ha registrado un nuevo cliente interesado en ${servicio.tipo}:

Nombre: ${cliente.nombre} ${cliente.apellido}
Correo: ${cliente.correo}
Teléfono: ${cliente.telefono}
Ubicación: ${cliente.ubicacion}
Mensaje: ${cliente.mensaje}

Intereses del cliente:
Servicios: ${cliente.servicios ? 'Sí' : 'No'}
Tecnología: ${cliente.tecnologia ? 'Sí' : 'No'}
Seguridad: ${cliente.seguridad ? 'Sí' : 'No'}

¡Gracias por utilizar nuestros servicios!`
            };

            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.error(`Error al enviar correo de ${servicio.tipo}:`, error);
                } else {
                    console.log(`Correo de ${servicio.tipo} enviado:`, info.response);
                }
            });
        }
    });
}
