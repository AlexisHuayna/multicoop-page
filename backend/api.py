from flask import Flask, request, jsonify
from flask_mysqldb import MySQL

app = Flask(__name__)

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'ServerMulti321@'
app.config['MYSQL_DB'] = 'multicoopp_page'

mysql = MySQL(app)


@app.route('/api/precalificador', methods=['POST'])
def addPrecalificador():
    name = request.json['name']
    print(name)


if __name__ == '__main__':
    app.run(debug=True)
