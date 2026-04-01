import validarDatos from './validarDatos.js';

const API_URL = "https://liderman.lfnservices.com/api/lead";

export async function SubirAPI(datos) {

    const errores = validarDatos(datos);
    if (errores.length > 0) {
        throw new Error('Datos inválidos: ' + errores.join(', '));
    }

    // 🔄 Transformación de datos → formato API
    const services = Object.entries(datos.intereses)
        .filter(([_, value]) => value)
        .map(([key]) => {
            // opcional: formatear bonito
            if (key === "tecnologia") return "Tecnología";
            if (key === "seguridad") return "Seguridad";
            if (key === "servicios") return "Servicios";
            return key;
        })
        .join(",");

    const body = {
        name: `${datos.nombre} ${datos.apellido}`,
        email: datos.correo,
        phone: datos.telefono,
        country: datos.pais, // ⚠️ debe ser EXACTO: "Perú"
        description: datos.mensaje,
        services:services,
        medium: "Formulario Web",
        etiqueta: "Website"
    };

    // 🚀 Envío a la API
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-API-Key": process.env.LIDERMAN_API_KEY
        },
        body: JSON.stringify(body)
    });


    const data = await response.json();

    if (!response.ok) {
        console.error("Error completo de la API:", data);

        let mensajeError = "Error al enviar a la API";

        if (data.detail) {
            if (Array.isArray(data.detail)) {
                mensajeError = data.detail.map(e => e.msg).join(", ");
            } else {
                mensajeError = data.detail;
            }
        } else if (data.message) {
            mensajeError = data.message;
        }

        throw new Error(mensajeError);
    }

    return data; // { success, message, lead_id }
}