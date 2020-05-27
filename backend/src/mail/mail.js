const emails = require('./mailsAdmin');
const nodemailer = require('nodemailer');


function getEmailAdministrador(localidad){
    email = emails[localidad]
    return email
}


exports.sendEmail = (req, res) => {

    var content = "<h1>Nuevo precalificador</h1>" +
                "<p>Nombre: " + req.body.nombre + "</p>" +
                "<p>Apellidos: " + req.body.apellidos + "</p>" +
                "<p>Numero de dni: " + req.body.dni + "</p>" + 
                "<p>Telefono: " + req.body.telefono + "</p>" +
                "<p>Monto solicitado en pagina web: " + req.body.monto + "</p>";

    var administrador = getEmailAdministrador(req.body.localidad)

    var transporter = nodemailer.createTransport({
        service: 'multicoop.com.pe',
        port: 465,
        auth: {
            user: 'ahuayna@multicoop.com.pe',
            pass: 'Alexis13'
        }
    });

    var mailOptions = {
        from: 'ahuayna@multicoop.com.pe',
        to: administrador,
        subject: 'Pre calificador web',
        text: content
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if(err){
            console.log(err)
            res.status(500).send(err.message)
        }else{
            res.status(200).jsonp(req.body)
        }
    });
};