const nodemailer = require('nodemailer');
const mailPassword = process.env.MAILPASSWORD;
const mailPath = process.env.MAILPATH;

module.exports = {

    trySendMessage: async (req, res) => {
        try{
        const { userMessage } = req.body
        //send mail to client
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: mailPath,
                pass: mailPassword
            },
            tls: {
                rejectUnauthorized: false
            }
            });
            //send mail to client
            const mailOptionsToClient = {
            from: mailPath,
            to: userMessage.email,
            subject: `Confirmation d'envoi de message`,
            text: `Merci Mr ${userMessage.name}. J'ai bien reçu votre message et traitera votre demande dans les plus brefs délais. Bien cordialement. F.BOURIGEAUD`
            };
            transporter.sendMail(mailOptionsToClient, function (error, info) {
            if (error) {
                console.log(error);
                return res.status(500).json('mail failed');
            } else {
                console.log('Email sent: ' + info.response);
            }
            });
            //send mail to us
            const mailOptionsToUs = {
            from: mailPath,
            to: mailPath,
            subject: 'Nouveau méssage de' + ' ' + userMessage.name,
            text: userMessage.message
            };
            transporter.sendMail(mailOptionsToUs, function (error, info) {
            if (error) {
                console.log(error);
                return res.status(500).json('mail failed');
            } else {
                console.log('Email sent: ' + info.response);
                return res.status(200).json('mails send');
            }
            });
        } catch(error) {
            console.error(error);
            return res.status(500);
        }
    },

}