const express = require('express');
const app = express();
const cors = require('cors')

app.set('port', process.env.PORT || 8000);

app.use(express.json());
app.use(cors());

app.use(require('./routes/precalificador'));
app.use(require('./routes/oportunidad'));
app.use(require('./routes/reclamacion'));

app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});