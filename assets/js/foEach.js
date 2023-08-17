/*const companies = ["Apple", "Google", "Facebook"];

companies.forEach(company => {
    console.log(`Hey, ${company}!`)
});
console.log(companies)


const names = ["Whinds", "Freeway", "Teste", "Maria"];

names.forEach((name) => {
    console.log(`Hi, ${name}!`)
});

*/
/*
const numbers = [1, 2, 3, 4, 5, 6, 8, 9, 10];


numbers.forEach((number, index) => {
    if (number % 2 == 0) {
        console.log(`${number} ${index}`)
    }
});*/


/*
const cars = [
{
    marca: "Ford",
    modelo: "Focus",
},
{
    marca: "8msla",
    modelo: "BMW Z4",
},
{
    marca: "Fiat",
    modelo: "Palio",
},
{
    marca: "Audi",
    modelo: "A3",
},
];

cars.forEach((car) =>{
        console.log(`Marca: ${car.marca} - Modelo: ${car.modelo}`);
}); */

class Car {
    constructor (model, brand){
this.model = model;
this.brand = brand;}
}
class ClassList {
    constructor(){
        this.cars = [];
    }
    addCar(car){
        this.cars.push(car);
    }
}

const listDeCarros = new ClassList();
function addFunction(){
    const model = document.getElementById("Marca").value;
    const brand = document.getElementById("Brand").value;
    const myCars = new Car(model, brand);
    console.log(myCars)
}