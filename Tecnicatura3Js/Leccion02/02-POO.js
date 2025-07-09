class Empleado{
    constructor(nombre, sueldo){
        this._nombre = nombre;
        this._sueldo = sueldo;
    }

    obtenerDetalles(){
        return `Empleado: nombre: ${this._nombre}, 
        sueldo: ${this._sueldo}`; //Comillas Bastick se hacen con alt+96
    }
}

class Gerente extends Empleado{
    constructor(nombre, sueldo, departamento){
        super(nombre, sueldo);
        this._departamento = departamento;
    }
    //Agregamos la sobreescritura
    obtenerDetalles(){
        return `Gerente: ${super.obtenerDetalles()} depto: ${this._departamento}`; //Comillas Bastick se hacen con alt+96

    }
}

let gerente1  = new Gerente("Carlos", 5000, "Sistemas");
console.log(gerente1); //Objeto de la clase hija

let empleado1 = new Empleado("Juan", 3000);
console.log(empleado1,empleado1);

