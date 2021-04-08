const nodemailer = require('nodemailer');

exports.enviarCorreo = (req, res, mail_content) => {

    var remitentes = mail_content.remitentes
    var subject = mail_content.subject
    var text = mail_content.text
    var html = mail_content.html
    var attachments = mail_content.attachments

    var transporter = nodemailer.createTransport({
        host: 'mail.multicoop.com.pe',
        port: 465,
        secure: true,
        auth: {
            user: 'webmulti@multicoop.com.pe',
            pass: 'x34115624Multi*'
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    var mailOptions = {
        from: '"Correo Servidor" <webmulti@multicoop.com.pe>',
        to: remitentes,
        subject: subject,
        text: text,
        html: html,
        attachments: attachments
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log(err)
            res.status(500).send()
        } else {
            res.status(200).send()
        }
    });
};
