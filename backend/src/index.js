const express = require('express');
const fs = require('fs');
const https = require ('https');
const cors = require('cors');
const fileUpload = require('express-fileupload');

const app = express();

const port = 8000;

const httpsOptions = {
    key: fs.readFileSync('/etc/ssl/private/ssl-cert-snakeoil.key'),
    cert: fs.readFileSync('/etc/ssl/certs/ssl-cert-snakeoil.pem')
}

https.createServer(httpsOptions, app)
    .listen(port, function () {
        console.log("Server on port ", port);
    })

//app.set('port', process.env.PORT || 8000);

app.use(cors());
app.use(express.json());
app.use(fileUpload({
    createParentPath: true
}));

app.use(require('./routes/precalificador'));
app.use(require('./routes/oportunidad'));
app.use(require('./routes/reclamacion'));
app.use(require('./routes/postulante'));
app.use(require('./routes/interno/recursos'));
app.use(require('./routes/interno/control'));
app.use(require('./routes/legal/cartera'));
app.use(require('./routes/interno/sorteo'));

/*
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});
*/