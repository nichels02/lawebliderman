import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.CORREO_REMITENTE,
        pass: process.env.CLAVE_APP
    }
});

export async function EnviarLibroDeReclamaciones(datos) {
    const mensaje = `
        Nombre: ${datos.Nombre},
        Apellidos: ${datos.Apellidos},
        Tipo de documento: ${datos.TipoDeDocumento},
        Numero de documento: ${datos.NumeroDeDocumento},
        Telefono: ${datos.Telefono},
        Correo: ${datos.Correo},
        Es menor de edad: ${datos.EsMenorDeEdad},
        Mensaje sugerencia o queja: ${datos.MensajeSugerenciaOQueja},
        Mensaje pedido concreto: ${datos.MensajePedidoConcreto},
        Fecha y hora de envio: ${datos.FechaYHoraDeEnvio}
    `;


    await transporter.sendMail({
        from: process.env.CORREO_REMITENTE,
        to: process.env.CORREO_DESTINO_LibroDeReclamaciones,
        subject: 'Libro de reclamaciones: Nueva queja',
        text: mensaje
    });
}
