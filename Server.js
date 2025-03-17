import express from 'express';
import mysql from 'mysql2';
import dotenv from 'dotenv';
import cors from 'cors';


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
/*
app.use(cors({
    origin: 'http://www.youtube.com'
}));
*/

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

db.connect(err => {
    if (err) {
        console.error('Error conectando a MySQL:', err);
        return;
    }
    console.log('Conectado a MySQL ✅');
});

// 📌 Ruta para agregar un cliente a la base de datos
app.post('/clientes', (req, res) => {
    const { nombre, apellido, correo, telefono, seguridad, servicios, tecnologia, ubicacion, mensaje } = req.body;

    const sql = `INSERT INTO clientes (nombre, apellido, correo, telefono, seguridad, servicios, tecnologia, ubicacion, mensaje)
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    const values = [nombre, apellido, correo, telefono, seguridad, servicios, tecnologia, ubicacion, mensaje];

    db.query(sql, values, (err, result) => {
        if (err) {
            console.error('Error insertando datos:', err);
            return res.status(500).json({ error: 'Error al guardar los datos' });
        }
        res.status(201).json({ message: 'Cliente agregado con éxito', id: result.insertId });
    });
});

app.listen(3001, () => {
    console.log('Servidor corriendo en http://localhost:3001');
});
