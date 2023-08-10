class Witch{
    constructor(name, patron, house, colorEyes){
        this.name = name;
        this.patron = patron;
        this.house = house;
        this.colorEyes = colorEyes;
    }
    getName(){
        return `O nome do bruxo(a) é: ${this.name}`;
    }
    getHouse(){
        return `Ela(e) está em casa ${this.house}`;
    }
    getPatron(){
        return `Seu patrono é: ${this.patron}`;
    }
    getColor(){
        return `A cort do seu olho é ${this.colorEyes}`;
    }
}
const witch1 = new Witch('Harry Potter', 'Deer', 'Grynffindor', 'green')

console.log(witch1.getName())

class TypeWitch extends Witch{
    constructor(name, patron, house, colorEyes, typeWitch){
    super(name, patron, house, colorEyes);
    this.typeWitch = typeWitch;
    }
    getTypeWitch() {
        if (this.typeWitch === 'P'){
            return "Este bruxo é sangue puro";
        }else if (this.typeWitch === 'M'){
            return "Este bruxo é Mestiço";
        }else{
            return "você é trouxa."
        }
    }
}
const harry = new TypeWitch ('Harry Potter', 'Cervo', 'Grynffindor', 'Verde/Azul?', 'M')
console.log(harry.getTypeWitch())