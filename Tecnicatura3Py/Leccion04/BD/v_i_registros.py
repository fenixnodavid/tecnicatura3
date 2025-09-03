import psycopg2 # Esto es para poder conectarnos a Postgres

conexion=psycopg2.connect(user='postgres',password='33579857',host='127.0.0.1', port='5432',database='test_bd')
try:
    with conexion:
        with conexion.cursor() as cursor:
            sentencia = 'INSERT INTO persona (nombre, apellido, email) VALUES (%s, %s, %s)'
            valores = (
                ('Carlos', 'Lara', 'clara@mail.com'),
                ('Marcos', 'Canto', 'mcantomail.com'),
                ('Marcelo', 'Cuenca', 'cuancaM@mail.com')
            ) # Es una tupla de tuplas
            cursor.executemany(sentencia, valores) # De esta manera ejecutamos la sentencia
            #conexion.commit() esto se utiliza para guardar cambios en la base de datos
            registros_insertados = cursor.rowcount
            print(f'Los registros insertados son: {registros_insertados}')

except Exception as e:
    print(f'Ocurrio un error: {e}')
finally:
    conexion.close()