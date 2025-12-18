import SibApiV3Sdk from 'sib-api-v3-sdk';

const sendEmail = async ({ to, subject, html }) => {
    const client = SibApiV3Sdk.ApiClient.instance;
    client.authentications['api-key'].apiKey = process.env.BREVO_API_KEY;

    const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

    const email = {
        subject,
        htmlContent: html,
        sender: {
            name: 'La Web Liderman',
            email: 'nderiveropuga9802@gmail.com', // debe estar verificado
        },
        to: [{ email: to }],
    };

    return apiInstance.sendTransacEmail(email);
};

export default sendEmail;
