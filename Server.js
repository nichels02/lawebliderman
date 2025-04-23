import express from 'express';
import mysql from 'mysql2';
import dotenv from 'dotenv';
import cors from 'cors';


dotenv.config({ path: './datosDeBaseDeDatos.env' });

console.log('HOST:', process.env.DB_HOST);
console.log('USER:', process.env.DB_USER);
console.log('PASS:', process.env.DB_PASSWORD);
console.log('DB:', process.env.DB_NAME);


const app = express();
app.use(cors());
app.use(express.json());

app.use(cors({
    origin: 'http://localhost:5173' // ← usa el puerto donde corre tu Vite
}));

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

db.connect(err => {
    console.log('llego a backend');
    if (err) {
        console.error('Error conectando a MySQL:', err);
        return;
    }
    console.log('llego a backend2');
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