import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import validarDatos from './validarDatos.js';

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

export async function enviarCorreo(datos) {

    const errores = validarDatos(datos);
    if (errores.length > 0) {
        throw new Error('Datos inválidos: ' + errores.join(', '));
    }

    const mensaje = `
        nombre: ${datos.nombre}
        apellido: ${datos.apellido}
        correo: ${datos.correo}
        telefono: ${datos.telefono}
        intereses: {
            seguridad: ${datos.seguridad}
            servicios: ${datos.servicios}
            tecnologia: ${datos.tecnologia}
        },
        mensaje: ${datos.mensaje}
        pais: ${datos.pais}
    `;

    await transporter.sendMail({
        from: process.env.CORREO_REMITENTE,
        to: process.env.CORREO_DESTINO,
        subject: 'Posible cliente interesado',
        text: mensaje
    });
}
