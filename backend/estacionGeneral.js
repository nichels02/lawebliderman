import path from 'path';
import dotenv from 'dotenv';
//dotenv.config({ path: path.resolve('./backend/.env') });
dotenv.config({ path: path.resolve('./backend/.env') });


import express from 'express';
import cors from 'cors';

import rateLimit from 'express-rate-limit';


import { enviarCorreo } from './EnviarCorreo.js';
import { agregarFormularioBD } from './agregarBD.js';




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
    //origin: process.env.VITE_Frontend_URL,  // Cambia esto por la URL real de Vercel
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
                await enviarCorreo(datos);

                await agregarFormularioBD(datos);

                res.json({ mensaje: 'Formulario recibido' });
            } catch (error) {
                console.error('Error al enviar el correo:', error);
                res.status(500).json({ error: 'Error al enviar formulario' });
            }
            break;




        case 'enviar-cotizacion':
            try {
                await EnviarCotizacion(datos);
                res.json({ mensaje: 'Formulario recibido' });
            } catch (error) {
                console.error('Error al enviar el correo:', error);
                res.status(500).json({ error: 'Error al enviar el formulario.' });
            }
            break;







        case 'otra-accion':
            // Otra lógica...
            res.json({ mensaje: 'Otra acción ejecutada.' });
            break;

        default:
            res.status(400).json({ error: 'Acción no reconocida.' + accion});
    }
});

app.listen(PORT, () => {
    console.log(`Servidor backend escuchando en puerto ${PORT}`);
});
