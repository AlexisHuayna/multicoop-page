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

    const query = "SELECT personal.* FROM personal INNER JOIN agencia ON agencia.codigo = '" + codigoAgencia + "' AND personal.idAgencia = agencia.id WHERE personal.estado = 1 AND personal.id NOT IN ( SELECT fichaSintomatologica.idPersonal FROM fichaSintomatologica WHERE fichaSintomatologica.fecha = '" + currentDia + "' )";
    
    conexion_mysql.query(query, (err, personalFaltante) => {
        if(!err) {
            res.status(200).send(personalFaltante);
        } else {
            res.status(500).json({ status: 'error' })
        }
    });
});

router.get('/api/interno/rh/fichas/faltantesSalida/:idAgencia', (req, res) => {
    const codigoAgencia = req.params.idAgencia;
    const datTime = new Date().toString().split(' ', 5);
    const currentDia =  datTime[3] + convertirMes(datTime[1]) + datTime[2];
    const currentHora = datTime[4];

    const query = "SELECT personal.*, fichaSintomatologica.id AS idFicha FROM personal INNER JOIN agencia ON agencia.codigo = '" + codigoAgencia
            + "' AND personal.idAgencia = agencia.id INNER JOIN fichaSintomatologica ON fichaSintomatologica.idPersonal = personal.id AND fichaSintomatologica.fecha = '" + currentDia
            + "' AND fichaSintomatologica.estado = 1 WHERE personal.estado = 1 ";

    conexion_mysql.query(query, (err, fichas) => {
        if(!err) {
            res.status(200).send(
                fichas
            );
        }else {
            res.status(500).send({err: 'err'});
        }
    })
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

router.post('/api/interno/rh/fichaSintomatologica/u', (req, res) => {
    const datTime = new Date().toString().split(' ', 5);
    const currentDia =  datTime[3] + convertirMes(datTime[1]) + datTime[2];
    const currentHora = datTime[4];
    
    const idFicha= req.body.idFicha; 
    const idRespuesta = req.body.idPregunta;
    const octava = req.body.octava;

    if(idFicha && idRespuesta && octava) {
        const update_ficha = "UPDATE fichaSintomatologica SET estado = '2', detalle = 'completado', hora = '" + currentHora + "' WHERE id = '" + idFicha + "'";
        const update_respuesta = "UPDATE respuestaFicha SET respuestaPregunta = '" + octava + "' WHERE id = '" + idRespuesta + "'";
    
        conexion_mysql.query(update_ficha, (err, ficha) => {
            if (!err) {
                conexion_mysql.query(update_respuesta, (err, respuesta) => {
                    if (!err) {
                        res.status(200).send({end: ''});
                    }
                });
            } else {
                res.status(500).send({err:'error'});
            }
        });
    } else {
        res.status(500).send({err:'error'});
    }

});

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
});

router.post('/api/interno/rh/fichaSintomatologica', (req, res) => {
    const id_personal = req.body.idPersonal;

    const primera = req.body.primera;
    const segunda = req.body.segunda;
    const tercera = req.body.tercera;
    const cuarta = req.body.otrosCuarta;
    const quinta = req.body.textQuinta;
    const sexta = req.body.textSexta;
    const septima = req.body.septima;
    const octava = req.body.octava ? req.body.octava : "";


    const datTime = new Date().toString().split(' ', 5);
    const fecha =  datTime[3] + convertirMes(datTime[1]) + datTime[2];
    const hora = datTime[4];

    const query_add_ficha = "INSERT INTO fichaSintomatologica(idPersonal, estado, hora, fecha, detalle) VALUES ('" + id_personal + "','1','" + hora + "','" + fecha + "','entrada')";
    
    conexion_mysql.query(query_add_ficha, (err, result2) => {
        if(!err) {
            const id_ficha = result2.insertId;

            const query_respuesta_primera = "INSERT INTO respuestaFicha (idficha, nombrePregunta, respuestaPregunta, detalle) VALUES ('" + id_ficha + "','primera','" + primera + "', '')";
            const query_respuesta_segunda = "INSERT INTO respuestaFicha (idficha, nombrePregunta, respuestaPregunta, detalle) VALUES ('" + id_ficha + "','segunda','" + segunda + "', '')";
            const query_respuesta_tercera = "INSERT INTO respuestaFicha (idficha, nombrePregunta, respuestaPregunta, detalle) VALUES ('" + id_ficha + "','tercera','" + tercera + "', '')";
            const query_respuesta_cuarta = "INSERT INTO respuestaFicha (idficha, nombrePregunta, respuestaPregunta, detalle) VALUES ('" + id_ficha + "','cuarta','" + cuarta + "', '')";
            const query_respuesta_quinta = "INSERT INTO respuestaFicha (idficha, nombrePregunta, respuestaPregunta, detalle) VALUES ('" + id_ficha + "','quinta','" + quinta + "', '')";
            const query_respuesta_sexta = "INSERT INTO respuestaFicha (idficha, nombrePregunta, respuestaPregunta, detalle) VALUES ('" + id_ficha + "','sexta','" + sexta + "', '')";
            const query_respuesta_septima = "INSERT INTO respuestaFicha (idficha, nombrePregunta, respuestaPregunta, detalle) VALUES ('" + id_ficha + "','septima','" + septima + "', '')";
            const query_respuesta_octava = "INSERT INTO respuestaFicha (idficha, nombrePregunta, respuestaPregunta, detalle) VALUES ('" + id_ficha + "','octava','" + octava + "', '')";
           
            conexion_mysql.query(query_respuesta_primera, (err, result3) => {})
            conexion_mysql.query(query_respuesta_segunda, (err, result3) => {})
            conexion_mysql.query(query_respuesta_tercera, (err, result3) => {})
            conexion_mysql.query(query_respuesta_cuarta, (err, result3) => {})
            conexion_mysql.query(query_respuesta_quinta, (err, result3) => {})
            conexion_mysql.query(query_respuesta_sexta, (err, result3) => {})
            conexion_mysql.query(query_respuesta_septima, (err, result3) => {})
            conexion_mysql.query(query_respuesta_octava, (err, result3) => {})

            if(!err) {
                res.status(200).json({finish: 'true'});
            }
        } else {
            res.status(500).json({status: 'error'});
        }        
    });

});

router.get('/api/interno/rh/sst/:idAgencia', (req, res) => {
    const codigoAgencia = req.params.idAgencia
    const query = "SELECT personal.* FROM personal INNER JOIN agencia ON agencia.codigo = '" + codigoAgencia + "' AND personal.idAgencia = agencia.id  WHERE personal.estado = 1 AND personal.id NOT IN (SELECT idPersonal FROM evaluacion WHERE evaluacion.tipo = 'sst')";

    conexion_mysql.query(query, (err, personal) => {
        if(!err) {
            res.send(personal);
        }else {
            res.status(500).json({status: 'error'});
        }
    });
});

router.get('/api/interno/rh/rit/:idAgencia', (req, res) => {
    const codigoAgencia = req.params.idAgencia

    const query = "SELECT personal.* FROM personal INNER JOIN agencia ON agencia.codigo = '" + codigoAgencia + "' AND personal.idAgencia = agencia.id  WHERE personal.estado = 1 AND personal.id NOT IN (SELECT idPersonal FROM evaluacion WHERE evaluacion.tipo = 'rit')";
    
    conexion_mysql.query(query, (err, personal) => {
        if(!err) {
            res.send(personal);
        }else {
            res.status(500).json({status: 'error'});
        }
    });
});

router.post('/api/interno/rh/evaluacion', (req, res) => {
    
    const idPersonal = req.body.idPersonal;
    const tipo = req.body.tipo;
    const p1 = req.body.p1;
    const p2 = req.body.p2;
    const p3 = req.body.p3;
    const p4 = req.body.p4;
    const p5 = req.body.p6;
    const p6 = req.body.p6;
    const p7 = req.body.p7;
    const p8 = req.body.p8;
    const p9 = req.body.p9;
    const p10 = req.body.p10;
    const p11 = req.body.p11;
    const p12 = req.body.p12;
    const p13 = req.body.p13;
    const p14 = req.body.p14;
    const p15 = req.body.p15;
    const p16 = req.body.p16;
    const p17 = req.body.p17;
    const p18 = req.body.p18;
    const p19 = req.body.p19;
    const p20 = req.body.p20;

    const query = "INSERT INTO evaluacion (idPersonal, tipo, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17, p18, p19, p20) VALUES ('" + idPersonal + "', '" + tipo + "', '" + p1 + "', '"+ p2 +"', '" + p3 + "', '" + p4 + "', '" + p5 + "', '" + p6 + "', '" + p7 + "', '" + p8 + "', '" + p9 + "', '" + p10 + "', '" + p11 + "', '" + p12 + "', '" + p13 + "', '" + p14 + "', '" + p15 + "', '" + p16 + "', '" + p17 + "', '" + p18 + "', '" + p19 + "', '" + p20 + "')";

    conexion_mysql.query(query, (err, result) => {
        if(!err) {
            res.status(200).json({finish: 'true'});
        }else {
            res.status(500).json({status: 'error'});
        }
    })
});

router.post('/api/interno/rh/declaracion', (req, res) => {
    const nombre = req.body.nombresApellidos;
    const dni = req.body.dni;
    const departamento = req.body.departamento;
    const provincia = req.body.provincia;
    const distrito = req.body.distrito;
    const direccion = req.body.direccion;
    const familiares = req.body.familiares;

    const query = "INSERT INTO personaDeclaracion (nombre, dni, departamento, provincia, distrito, domicilio) VALUES ('" + nombre + "','" + dni + "','" + departamento + "','" + provincia + "','" + distrito + "','" + direccion + "')";
    
    conexion_mysql.query(query, (err, declarante) => {
        if(!err) {
            for(let i = 0; i < familiares.length; ++i) {
                let familiar = familiares[i]
                let famNombres = familiar.nombresApellidos
                let famDni = familiar.dni
                let famOcupacion = familiar.ocupacion
                let famRelacion = familiar.relacion
                let famFamDni = dni
                
                let query_familiar = "INSERT INTO familiar (nombresApellidos, dni, ocupacion, relacion, familiarDNI) VALUES ('" + famNombres + "', '" + famDni + "', '" + famOcupacion + "', '" + famRelacion + "', '" + famFamDni + "')";
    
                conexion_mysql.query(query_familiar, (err, fam) => {
                    if(!err) {
                        res.status(200);
                    } else {
                        res.status(500).json(err);
                    }
                });
            }

            res.status(200).json({finish: 'true'});

        } else {
            res.status(500).json(err);
        }
    })

});


module.exports = router;