import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
    host: 'dev.liderman.com.pe',
    port: 465,
    secure: true, // porque es 465
    auth: {
        user: process.env.CORREO_REMITENTE,
        pass: process.env.CLAVE_APP
    }

});
{/*
    auth: {
        user: 'web@dev.liderman.com.pe',
        pass: 'LA_CONTRASEÑA_DEL_CORREO'
    }
    */}

export async function enviarCorreoReserva(datos) {
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
