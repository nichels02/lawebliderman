const API_BASE_URL = import.meta.env.VITE_BACKEND_URL;

// La T representa el tipo que quien llame a la función va a decidir
export async function enviarAlBackend<T>(accion: string, datos: T) {
    try {
        const response = await fetch(`${API_BASE_URL}/accion-general`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                accion,
                datos
            })
        });

        if (!response.ok) {
            throw new Error(`Error al enviar datos: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error al conectar con el backend:', error);
        throw error;
    }
}
