from flask import Flask, request, jsonify
from flask_mysqldb import MySQL

app = Flask(__name__)

app.config['MYSQL_HOST'] = '127.0.0.1'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'ServerMulti321@'
app.config['MYSQL_DB'] = 'multicoop_page'

mysql = MySQL(app)

@app.route('/api/precalificador', methods=['POST'])
def addPrecalificador():
    pre_calificador = request.json

    nombres = pre_calificador['nombres']
    apellidos = pre_calificador['apellidos']
    dni = pre_calificador['dni']
    telefono = pre_calificador['telefono']
    localidad = pre_calificador['localidad']
    monto = pre_calificador['monto']

    sql = "INSERT INTO preCalificador(nombres, apellidos, dni, telefono, localidad, monto) VALUES('{}', '{}', '{}', '{}', '{}', '{}') ".format(nombres, apellidos, dni, telefono, localidad, monto)
    
    cur = mysql.connection.cursor()
    cur.execute(sql)
    mysql.connection.commit()
    
    status = {}

    if cur.rowcount == 1:
        status['precalificador'] = '1'
    else:
        status['precalificador'] = '0'
        return 

    cur.close()
    
    return jsonify(status)


@app.route('/api/bolsatrabajo', methods=['POST'])
def addPostulante():
    status = {}
    return jsonify(status)


@app.route('/api/reclamaciones', methods=['POST'])
def addReclamacion():
    reclamacion = request.json

    es_socio = reclamacion['es_socio']
    codigo_agencia = reclamacion['codigo_agencia']
    nombres = reclamacion['form_input_reclamaciones_nombres']
    apellido_paterno = reclamacion['apellido_paterno']
    apellido_materno = reclamacion['apellido_materno']
    tipo_documento = reclamacion['tipo_documento']
    documento = reclamacion['documento']
    direccion = reclamacion['direccion']
    departamento = reclamacion['departamento']
    provincia = reclamacion['provincia']
    distrito = reclamacion['distrito']
    telefono = reclamacion['telefono']
    correo = reclamacion['correo']
    incidencia = reclamacion['incidencia']
    producto = reclamacion['producto']
    tipo_reclamacion = reclamacion['tipo_reclamacion']
    detalle_reclamacion = reclamacion['detalle_reclamacion']
    codigo_hoja = codigo_agencia + "-"

    sql_libro = "SELECT id, num_hojas FROM libroReclamaciones WHERE libroReclamaciones.id_agencia = (SELECT id FROM sede WHERE sede.cod={}".format(codigo_agencia)

    cur = mysql.connection.cursor()
    cur.execute(sql_libro)

    rv = cur.fetchone()

    sql_reclamacion = "INSERT INTO hojaReclamacion(es_socio, nombre, apellido_pat, \
        apellido_mat, tipo_documento, num_documento, direccion, ubigeo, telefono, correo, \
        fec_incidencia, producto, tipo_reclamacion, detalle_reclamacion, id_libro, codigo_hoja) \
        VALUES ('{}','{}','{}','{}','{}','{}','{}','{}','{}','{}','{}','{}','{}','{}','{}','{}')".format()

    sql_update_libro = "UPDATE libroReclamaciones SET num_hojas='{}' WHERE id={}".format()
   
    cur = mysql.connection.cursor()
    cur.execute(sql_reclamacion)
    mysql.connection.commit()
    cur.execute(sql_update_libro)
    mysql.connection.commit()
    
    status = {}

    if cur.rowcount == 1:
        status['precalificador'] = '1'
    else:
        status['precalificador'] = '0'

    cur.close()

    return jsonify(status)


if __name__ == '__main__':
    app.run(debug=True)
