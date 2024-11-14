/*
PROFESORES-A

En la Universidad se contratan los profesores por categorías (1=Instructor, 2=Asistente,
3=Agregado, 4=Asociado, 5=Titular), también se conoce de cada profesor: su cédula, nombre y
sexo (F - M).
Considerando que los datos de los profesores se cargan en un array de objetos (Ej.
estructura de cada objeto: {categoría: 1, nombre: ‘Ana’, sexo: ‘F’}) se requiere una función que
retorne otro arreglo de objetos con solamente los profesores de una categoría dada.

Función: profesoresCategoria.
Parámetros: profesores (array de objetos profesor), categoria (un número).
Retorno: array de objetos profesor que pertenecen a la categoría indicada.
*/

let profesores = [
    {categoría: 1, nombre: 'Gladys', sexo: 'F'},
    {categoría: 2, nombre: 'Pepito', sexo: 'M'},
    {categoría: 4, nombre: 'Petunia', sexo: 'F'},
    {categoría: 1, nombre: 'Alfredo', sexo: 'M'},
    {categoría: 5, nombre: 'Milagros', sexo: 'F'},
    {categoría: 2, nombre: 'Ricardo', sexo: 'M'},
    {categoría: 3, nombre: 'Cesar', sexo: 'M'},
    {categoría: 4, nombre: 'Luisa', sexo: 'F'},
    {categoría: 2, nombre: 'Luis', sexo: 'M'},
];

function profesoresCategoria(profesores, categoria) {
    return profesores.filter(profesor => profesor.categoría === categoria);
}

let salida = document.getElementById('salida');

salida.innerHTML = "Profesores de la categoría 1: " + profesoresCategoria(profesores, 1).map(profesor => profesor.nombre).join(', ');
salida.innerHTML += "<br>Profesores de la categoría 2: " + profesoresCategoria(profesores, 2).map(profesor => profesor.nombre).join(', ');
salida.innerHTML += "<br>Profesores de la categoría 4: " + profesoresCategoria(profesores, 4).map(profesor => profesor.nombre).join(', ');
salida.innerHTML += "<br>Profesores de la categoría 5: " + profesoresCategoria(profesores, 5).map(profesor => profesor.nombre).join(', ');
salida.innerHTML += "<br>Profesores de la categoría 3: " + profesoresCategoria(profesores, 3).map(profesor => profesor.nombre).join(', ');