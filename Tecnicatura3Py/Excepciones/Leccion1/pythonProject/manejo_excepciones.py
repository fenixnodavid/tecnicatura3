resultado = None
a = 7
b = 5
try:

    resultado = a / b # Modificamos
except TypeError as e:
    print(f"TypeError - Ocurrio un Error:{type(e)}")
except ZeroDivisionError as e:
    print(f"ZeroDivisionError - Ocurrio un Error:{type(e)}")
except Exception as e:
    print(f"Exception - Ocurrio un Error:{type(e)}")
print(f"El resultado es: {resultado}")
print("Seguimos...")