import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import rateLimit from 'express-rate-limit';
import { enviarCorreoReserva } from './EnviarCorreo.js';
import { EnviarLibroDeReclamaciones } from './BackendPrueba/EnviarLibroDeReclamaciones.js';


dotenv.config();

const app = express();

app.set('trust proxy', 1);
// Resto igual...




const PORT = process.env.PORT || 3000;

// 🔹 Rate limit SOLO para este endpoint
const accionLimiter = rateLimit({
    windowMs: 5 * 60 * 1000, // 5 minutos
    max: 5,                 // 3 requests
    message: {
        error: 'Demasiadas solicitudes, intenta más tarde'
    }
});


// 🔹 Middlewares
app.use(cors({
    origin: process.env.VITE_Frontend_URL,  // Cambia esto por la URL real de Vercel
    credentials: true
}));
app.use(express.json());

app.post('/accion-general', accionLimiter, async (req, res) => {
    const { accion, datos } = req.body;


    console.log('Accion recibida:', accion);
    //console.log('Datos recibidos:', datos);

    switch (accion) {




        case 'enviar-formulario':
            try {
                await enviarCorreoReserva(datos);
                res.json({ mensaje: 'Formulario recibido y correo enviado.' });
            } catch (error) {
                console.error('Error al enviar el correo:', error);
                res.status(500).json({ error: 'Error al enviar el correo.' });
            }
            break;





        case 'enviar-LibroDeReclamaciones':
            try {
                await EnviarLibroDeReclamaciones(datos);
                res.json({ mensaje: 'Formulario recibido y correo enviado.' });
            } catch (error) {
                console.error('Error al enviar el correo:', error);
                res.status(500).json({ error: 'Error al enviar el correo.' });
            }
            break;







        case 'otra-accion':
            // Otra lógica...
            res.json({ mensaje: 'Otra acción ejecutada.' });
            break;

        default:
            res.status(400).json({ error: 'Acción no reconocida.' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor backend escuchando en puerto ${PORT}`);
});
