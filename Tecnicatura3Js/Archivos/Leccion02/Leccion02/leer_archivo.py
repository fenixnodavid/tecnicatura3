
archivo = open('prueba.txt', 'r', encoding='utf8') # las letras son: "r" read ,"a" append, "w" write, "x" excepcion
#print(archivo.read())
#print(archivo.read(16))
#print(archivo.read(10)) #Continuamos con la linea anterior
#print(archivo.readline()) #Lee la primer linea
#print(archivo.readline()) # las veces que lo repitamos lee la linea que sigue

# vamos a iterar el archivo, cada una de las lineas
# for linea in archivo:
   # print(linea) iteramos todos los elementos del archivo
print(archivo.readlines()[1]) # accedemos al archivo como si fuera una lista