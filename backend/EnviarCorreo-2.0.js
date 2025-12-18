const SibApiV3Sdk = require('sib-api-v3-sdk');

// Configuración del cliente
const defaultClient = SibApiV3Sdk.ApiClient.instance;

// API Key
const apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = process.env.BREVO_API_KEY; // ponla en tu .env

// Crear instancia de la API de emails
const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

// Datos del correo
const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail({
    subject: 'Correo de prueba desde Node',
    htmlContent: `
    <h2>Hola 👋</h2>
    <p>Este correo fue enviado usando <b>Brevo</b> desde Node.js</p>
  `,
    sender: {
        name: 'Mi Web',
        email: 'nderiveropuga9802@gmail.com', // DEBE estar verificado en Brevo
    },
    to: [
        {
            email: 'nderiveropuga9802@gmail.com',
            name: 'Usuario',
        },
    ],
});

async function sendEmail() {
    try {
        const response = await apiInstance.sendTransacEmail(sendSmtpEmail);
        console.log('Correo enviado:', response.messageId);
    } catch (error) {
        console.error('Error enviando correo:', error);
    }
}

export default sendEmail;
