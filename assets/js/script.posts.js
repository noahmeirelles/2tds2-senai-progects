/*
const posts = [];
let postIndex = -1;
function savePost() {
    const title = document.getElementById("title").value;
    const category = document.getElementById("category").value;
    const resume = document.getElementById("resume").value;
    const publisher = document.getElementById("publisher").value;
    const date = document.getElementById("date").value;
    console.log(title, category, resume, publisher, date);

    if (title && category && resume && publisher && date) {
        if (postIndex == -1) {
            storePost(title, category, resume, publisher, date);
            cleanFields();
            showPosts();
        } else {
            posts[postIndex] = {
                title,
                category,
                resume,
                publisher,
                date
            }
        }
        cleanFields();
        showPosts();
        postIndex = -1;
    } else {
        alert("Preencha todos os campos!")
    }
}
function cleanFields() {
    document.getElementById("title").value = "";
    document.getElementById("category").value = "";
    document.getElementById("resume").value = "";
    document.getElementById("publisher").value = "";
    document.getElementById("date").value = "";
}
function storePost(title, category, resume, publisher, date) {
    const post = {
        title,
        category,
        resume,
        publisher,
        date
    };
    posts.push(post)

}

function showPosts() {
    document.getElementById("list").classList.remove("hidden")
    let showContent = "";

    posts.forEach((post, index) => {
        showContent += `
        <div class="itemPost">
        <h2>${post.title}</h2>
        <p><strong>Categoria: </strong>${post.category}</p>
        <p><strong>Resume: </strong>${post.resume}</p>
        <p><strong>Publisher: </strong>${post.publisher}</p>
        <p><strong>Data de publicação: </strong>${post.date}</p>

        <button onclick="editPost(${index})">Editar</button>
        <button onclick="removePost(${index})">Excluir</button>
        </div>
        `
    })
    document.getElementById("list").innerHTML = showContent;
}
function editPost(index) {
    console.log("Entrou no editPost")
    const post = posts[index];

    document.getElementById("title").value = post.title;
    document.getElementById("category").value = post.category;
    document.getElementById("resume").value = post.resume;
    document.getElementById("publisher").value = post.publisher;
    document.getElementById("date").value = post.date;
    postIndex = index;
}
function removePost(index) {
    console.log("Entrou no remove")

    posts.splice(index, 1);
    showPosts();
    if (posts.lenght == 0) {
        document.getElementById("list").classList.add("hidden")
    }
}*/















/*
let personSimple = "John Doe";

const personObject = new Object();
personObject.firstName = "John";
personObject.lastName = "Doe";
personObject.age = 50;
personObject.eyeColor = "blue";

personObject.age = 10;

console.log(personSimple)
console.log(personObject)*/
/*
class User {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    introduce() {
        console.log(`Olá meu nome é ${this.name} e tenho ${this.age} anos`)
    }
}
const user1 = new User('Joao', 30);
user1.introduce()
const user2 = new User('maria', 50);
user2.introduce()*/
/*class Pizza {
    constructor(base, sauce, toppings, cheese){
        this.base = base;
        this.sauce = sauce;
        this.toppings = toppings;
        this.cheese = cheese;
    }
    getDescription(){
        return `A delicious pizza with ${this.base} base, ${this.sauce} sauce, ${this.toppings} toppings, and ${this.cheese} cheese.`;
    }
    getTimerBase(){
        if (this.base == 'traditional'){
            return 15;
        }else if(this.base == 'integral'){
            return 17;
        }else{
            return 'This base does not exist'
        }
    }
    getTimerSauce(){
        if (this.sauce == 'tomato'){
            return 6;
        }else if(this.sauce == 'white'){
            return 5;
        }else{
            return 'This sauce does not exist'
        }
    }
    getTimerToppings(){
        if (this.toppings == 'pepperoni'){
            return 5;
        }else if(this.toppings == 'kiwi'){
            return 3;
        }else{
            return 'This toppings does not exist'
        }
    }
    getTimerCheese(){
        if (this.cheese == 'cow'){
            return 5;
        }else if(this.cheese == 'goat'){
            return 7;
        }else{
            return 'This cheese does not exist'
        }
    }
}

const myPizza = new Pizza('integral', 'white', 'kiwi', 'goat');
console.log(myPizza.getDescription())
let Timepizza = myPizza.getTimerBase() + myPizza.getTimerSauce() + myPizza.getTimerToppings() + myPizza.getTimerCheese();
console.log(`Time to cook the pizza = + ${Timepizza} minutes` );*/

class Calculator {
    add(a, b) {
        return a + b;
    }
    multiply(a, b){
        return a + b;
    }
    subtract(a, b){
        return a +b;
    }
}
const calculator = new Calculator();

const sumResult = calculator.add(5, 3);
console.log("Sum:", sumResult);

const multiplicationResult = calculator.add(4, 2);
console.log("Multiplication:", multiplicationResult);

const subtractionResult = calculator.add(10, 4);
console.log("Subtraction:", subtractionResult);