#Declaramos una variable
from typing import TextIO

try:
    archivo: TextIO = open('prueba.txt', 'w', encoding='utf8')  #LA w es de write que significa escribir
    archivo.write('Programamos con diferentes tipos de archivos, ahora en txt. \n')
    archivo.write('Los acentos son importantes en las palabras\n')
    archivo.write('como por ejemplo: acción, ejecución y producción \n')
    archivo.write('las letras son:\n r read leer,\n a append anexa,\n w write escribe,\n x excepcion crea un archivo')
    archivo.write('\n t text o texto, \n b binary archivos binarios, \n w+ lee y escribe, \n r+ igual que la w+\n ' )
    archivo.write('Saludos a todos de la tecnicatura\n')
    archivo.write('con esto terminamos')
except Exception as e:
    print(e)
finally:  # siempre se ejecuta
    archivo.close()  # con esto se debe cerrar el archivo
# archivo.write('Todo quedo perfecto') esto es un error no funciona porque queda fuera del archivo despues del  archivo.close()

