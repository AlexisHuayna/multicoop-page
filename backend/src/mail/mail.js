const emails = require('./mailsAdmin');
const nodemailer = require('nodemailer');

function getEmailAdministrador(localidad) {
    email = emails['Administradores'][localidad]
    return email
}

exports.sendEmail = (req, res) => {


    var content = "<h1>Nuevo precalificador web</h1>" +
        "<p>Nombre: " + req.body.nombres + "</p>" +
        "<p>Apellidos: " + req.body.apellidos + "</p>" +
        "<p>Numero de dni: " + req.body.dni + "</p>" +
        "<p>Teléfono: " + req.body.telefono + "</p>" +
        "<p>Monto solicitado: " + req.body.monto + "</p>";

    //var administrador = getEmailAdministrador(req.body.localidad)
    var administrador = getEmailAdministrador('test')

    var transporter = nodemailer.createTransport({
        host: 'mail.multicoop.com.pe',
        port: 465,
        secure: true,
        auth: {
            user: 'precalificador@multicoop.com.pe',
            pass: '123456'
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    var mailOptions = {
        from: '"Pre calificador web" <precalificador@multicoop.com.pe>',
        to: administrador,
        subject: 'Pre calificador web',
        text: "Datos del precalificador",
        html: content
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log("Verificar %s en base de datos fecha = %s", req.body.dni, new Date().toLocaleString());
            res.status(500).send({ db: 1, email: 0 })
        } else {
            res.status(200).send({ db: 1, email: 1 })
        }
    });
};