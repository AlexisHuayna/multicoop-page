const nodemailer = require('nodemailer');

exports.enviarCorreo = (req, res) => {

    var remitentes = req.body.remitentes
    var subject = req.body.subject
    var text = req.body.text
    var html = req.body.html
    var attachments = req.body.attachments

    var transporter = nodemailer.createTransport({
        host: 'mail.multicoop.com.pe',
        port: 465,
        secure: true,
        auth: {
            user: 'servermulticoop@multicoop.com.pe',
            pass: 'Server123@'
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    var mailOptions = {
        from: '"Correo Servidor" <servermulticoop@multicoop.com.pe>',
        to: remitentes,
        subject: subject,
        text: text,
        html: html,
        attachments: attachments
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            res.status(500).send({ email: 0 })
        } else {
            res.status(200).send({ email: 1 })
        }
    });
};