const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const morgan = require('morgan');
const app = express();

app.set('port', process.env.PORT || 8000);

app.use(express.json());
app.use(fileUpload({
    createParentPath: true
}))
app.use(cors());
app.use(morgan('dev'))
app.use(require('./routes/precalificador'));
app.use(require('./routes/oportunidad'));
app.use(require('./routes/reclamacion'));
app.use(require('./routes/postulante'));

app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});