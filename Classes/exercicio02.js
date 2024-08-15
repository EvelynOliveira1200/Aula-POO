class Pessoa {
    constructor(nome, idade, altura){
        this.nome = nome
        this.idade = idade
        this.altura = altura
    }
    seApresentar(){
        console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos de idade e ${this.altura} de altura!`)
    }
}

const User = new Pessoa("Evelyn", 16, 1.66);
const User1 = new Pessoa ("Lauryn", 32, 1.63);

User.seApresentar()
User1.seApresentar()

//console.log(User)
//console.log(User1)
