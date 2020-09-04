const conexion_mysql = require('../../db');

const express = require('express');
const router = express.Router();

const colaboradoresTotal = require('./colaboradores');

function removeColaborador(dni, colaboradores) {
    if(dni in colaboradores[1]) {
        delete colaboradores[1][dni];
    } else if(dni in colaboradores[2]) {
        delete colaboradores[2][dni];
    } else if(dni in colaboradores[3]) {
        delete colaboradores[3][dni];
    } else if(dni in colaboradores[4]) {
        delete colaboradores[4][dni];
    } else if(dni in colaboradores[5]) {
        delete colaboradores[5][dni];
    } else if(dni in colaboradores[6]) {
        delete colaboradores[6][dni];
    } else if(dni in colaboradores[7]) {
        delete colaboradores[7][dni];
    }
}

function convertirMes(mes) {
    return new Date(Date.parse(mes + "1, 2020")).getMonth() + 1;
}

router.get('/api/time', (req, res) => {
    const datTime = new Date();
    const time = datTime.toString();

    res.status(200).send({time: time});
});

router.get('/api/interno/rh/validate', (req, res) => {
    const current_date = new Date().toString().split(' ');
    const hora_minima = 8;
    const hora_maxima = 12;
    const current_hora = current_date[4].slice(0,2);

    if(current_hora >= hora_minima && current_hora < hora_maxima) {
        res.send(200, {pass: true})
    } else {
        res.send(200, {pass: false});
    }
});

router.get('/api/interno/rh/ficha/lista', (req, res) => {
    
    const datTime = new Date().toString().split(' ', 5);
    const current_dia =  datTime[3] + convertirMes(datTime[1]) + datTime[2];
    const query_fichas_dia = "SELECT dni FROM ficha INNER JOIN colaborador ON ficha.idColaborador = colaborador.id WHERE ficha.fecha = '" + current_dia + "'";    
    conexion_mysql.query(query_fichas_dia, (err, fichasLlenadas, fields) => {
        if(!err) {
            let colaboradores = colaboradoresTotal.colaboradoresTotal;

            for(let i = 0; i < fichasLlenadas.length; ++i) {
                let dni = fichasLlenadas[i].dni;

                removeColaborador(dni, colaboradores);
            }
            res.status(200).json(colaboradores);
        } else {
            res.status(500).json({ status: 'error' })
        }
    });

});

router.post('/api/interno/rh/ficha', (req, res) => {
    
    const apellidosNombres = req.body.apellidosNombres;
    const dni = req.body.dni;

    const area = req.body.area;
    const direccion = req.body.direccion;
    const celular = req.body.celular;

    const primera = req.body.primera;
    const segunda = req.body.segunda;
    const tercera = req.body.tercera;
    const cuarta = req.body.otrosCuarta;
    const quinta = req.body.textQuinta;
    const sexta = req.body.textSexta;
    const septima = req.body.septima;
    const octava = req.body.octava ? req.body.octava : "";

    const query_add_colaborador = "INSERT INTO colaborador(nombresApellidos, area, dni, direccion, celular) VALUES ('" + apellidosNombres + "','" + area + "','" + dni + "','" + direccion + "','" + celular + "')";
    
    conexion_mysql.query(query_add_colaborador, (err, result) => {
        if (!err) {
            const id_colaborador = result.insertId;
            const datTime = new Date().toString().split(' ', 5);
            const fecha =  datTime[3] + convertirMes(datTime[1]) + datTime[2];
            const query_add_ficha = "INSERT INTO ficha(idColaborador, fecha, detalle) VALUES ('" + id_colaborador + "','" + fecha + "','test')";
            conexion_mysql.query(query_add_ficha, (err, result2) => {
                if(!err) {
                    const id_ficha = result2.insertId;
                    const query_add_respuestas_primera = "INSERT INTO respuesta (idficha, nombrePregunta, detalle) VALUES ('" + id_ficha + "','primera','" + primera + "')";
                    const query_add_respuestas_segunda = "INSERT INTO respuesta (idficha, nombrePregunta, detalle) VALUES ('" + id_ficha + "','segunda','" + segunda + "')";
                    const query_add_respuestas_tercera = "INSERT INTO respuesta (idficha, nombrePregunta, detalle) VALUES ('" + id_ficha + "','tercera','" + tercera + "')";
                    const query_add_respuestas_cuarta = "INSERT INTO respuesta (idficha, nombrePregunta, detalle) VALUES ('" + id_ficha + "','cuarta','" + cuarta + "')";
                    const query_add_respuestas_quinta = "INSERT INTO respuesta (idficha, nombrePregunta, detalle) VALUES ('" + id_ficha + "','quinta','" + quinta + "')";
                    const query_add_respuestas_sexta = "INSERT INTO respuesta (idficha, nombrePregunta, detalle) VALUES ('" + id_ficha + "','sexta','" + sexta + "')";
                    const query_add_respuestas_septima = "INSERT INTO respuesta (idficha, nombrePregunta, detalle) VALUES ('" + id_ficha + "','setpima','" + septima + "')";
                    const query_add_respuestas_octava = "INSERT INTO respuesta (idficha, nombrePregunta, detalle) VALUES ('" + id_ficha + "','octava','" + octava + "')";
                   
                    conexion_mysql.query(query_add_respuestas_primera, (err, result3) => {});

                    conexion_mysql.query(query_add_respuestas_segunda, (err, result3) => {});

                    conexion_mysql.query(query_add_respuestas_tercera, (err, result3) => {});

                    conexion_mysql.query(query_add_respuestas_cuarta, (err, result3) => {});

                    conexion_mysql.query(query_add_respuestas_quinta, (err, result3) => {});

                    conexion_mysql.query(query_add_respuestas_sexta, (err, result3) => {});

                    conexion_mysql.query(query_add_respuestas_septima, (err, result3) => {});

                    conexion_mysql.query(query_add_respuestas_octava, (err, result3) => {});

                    if(!err) {
                        res.status(200).json({finish: 'true'});
                    }
                }              
            });
        } else {
            res.status(500).send();
        }
    });
});

router.get('/api/interno/rh/fichas/faltantesEntrada/:idAgencia', (req, res) => {
    const datTime = new Date().toString().split(' ', 5);
    const currentDia =  datTime[3] + convertirMes(datTime[1]) + datTime[2];
    const currentHora = datTime[4];
    const codigoAgencia = req.params.idAgencia

    const query = "SELECT personal.* FROM personal INNER JOIN agencia ON agencia.codigo = '" + codigoAgencia + "' AND personal.idAgencia = agencia.id WHERE personal.id NOT IN ( SELECT fichaSintomatologica.idPersonal FROM fichaSintomatologica WHERE fichaSintomatologica.fecha = '" + currentDia + "' )";
    
    conexion_mysql.query(query, (err, personalFaltante) => {
        if(!err) {
            res.status(200).send(personalFaltante);
        } else {
            res.status(500).json({ status: 'error' })
        }
    });
});

router.get('/api/interno/rh/fichas/faltantesSalida/:idAgencia', (req, res) => {
    res.send('working dude');
});


router.get('/api/interno/rh/fichas/:idFicha', (req, res) => {
    const idFicha = req.params.idFicha;
    const query_ficha = "SELECT * FROM fichaSintomatologica WHERE fichaSintomatologica.id = '" + idFicha + "'";
    const query_respuestas = "SELECT * FROM respuestaFicha WHERE respuestaFicha.idFicha = '" + idFicha + "'";

    conexion_mysql.query(query_ficha, (err, ficha) => {
        if(!err) {
            conexion_mysql.query(query_respuestas, (err, respuestas) => {
                if(!err){
                    res.status(200).send({
                        ficha: ficha[0],
                        respuestas: respuestas
                    })
                }
            })
        } else {
            res.status(500).json({status: 'error'});
        }
    })
});

router.put('/api/interno/rh/fichas/', (req, res) => {
    const a = req.body.idFicha; //update estado de la ficha
    const b = req.body.idPregunta; //update pregunta de temperatura
});

router.put('/api/interno/rh/empleados/', (req, res) => {
    const a = req.body.numero;
    const b = req.body.direccion;
    const c = req.body.idEmpleado;
})

router.get('/api/interno/rh/empleados/:idEmpleado', (req, res) => {
    const id_empleado = req.params.idEmpleado;
    const query = "SELECT * FROM personal WHERE personal.id = '"+id_empleado+"'";

    conexion_mysql.query(query, (err, personal) => {
        if(!err){
            res.send(personal);
        } else {
            res.status(500).json({status: 'error'});
        }
    })
})

module.exports = router;