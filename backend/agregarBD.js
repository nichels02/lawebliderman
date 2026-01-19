import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
import validarDatosReserva from './validarDatos.js';

dotenv.config();

// 🔹 Pool de conexión (mejor que createConnection)
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10
});

export async function agregarFormularioBD(datos) {

    // 🔹 Validación (misma idea que correo)
    const errores = validarDatosReserva(datos);
    if (errores.length > 0) {
        throw new Error('Datos inválidos: ' + errores.join(', '));
    }

    const query = `
        INSERT INTO formularios_contacto (
            nombre,
            apellido,
            correo,
            telefono,
            interes_seguridad,
            interes_servicios,
            interes_tecnologia,
            mensaje,
            pais
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const valores = [
        datos.nombre,
        datos.apellido,
        datos.correo,
        datos.telefono,
        datos.seguridad ?? false,
        datos.servicios ?? false,
        datos.tecnologia ?? false,
        datos.mensaje,
        datos.pais
    ];

    await pool.execute(query, valores);
}
