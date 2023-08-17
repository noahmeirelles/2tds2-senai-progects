
let personSimple = "John Doe"

const personObject = {
 firstname:"John",
   lastname:"doe",
    age:"50",
    eyecolor:"blue"
};

console.log(personSimple)
console.log(personObject)
console.log(`Ola ${personObject + firstname} voce tem ${personObject + lastname}` )

/*atividade nao em lousa*/
/*
function but(){
let name = document.getElementById("name").value;
let lastname= document.getElementById("lastname").value;
let age = document.getElementById("age").value;
let eyecolor = document.getElementById("eyecolor").value;

const noah = {
    name,
    lastname,
    age,
    eyecolor
}
if (noah.age > 130){
alert("sua idade nao funfona")
return;
}
if (noah.age < 12){
    alert("sua idade nao funfona")
    return;
    }
    let a = [];
   let rray = ["verde" || "azul" || "marrom" || "preto"];
   rray.push(a);
   if(noah.eyecolor != a){
    alert("cor inválida")
    return;
   }
console.log(`Ola ${noah.firstname} ${noah.lastname}, sua idade é ${noah.age}anos e a cor dos seus olhos é ${noah.eyecolor}`)
}
*/
/*
class CamaraSecreta {
    constructor(name, pwd){
        this.name = name;
        let _pwd = pwd; //atributo privado

        this.verifyPwd = (pwdInput) =>{
            return pwdInput == _pwd; //True or False
        }
        this.acessToChamber = () =>{
        let pwdInput = prompt("digite a senha");
        if (this.verifyPwd(pwdInput)){
            console.log(`Bem-Vindo a Câmara Secreta`);
        }else{
            console.log("Você não entra Troxa");
        }
        }
    }

    //métodos Públicos
    showName(){
        console.log(`Nome do bruxo ${this.name}`);
    }
}

const myAccess1 = new CamaraSecreta('Harry Potter', 'senha 123')

myAccess1.showName();//top
//metodo privado
myAccess1.name = 'HP';
myAccess1.pwd = '123';
myAccess1.acessToChamber();*/