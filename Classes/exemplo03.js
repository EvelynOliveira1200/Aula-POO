class Pizza {
    constructor(base, molho, cobertura, queijo){
        this.base = base
        this.molho = molho
        this.cobertura = cobertura
        this.queijo = queijo
    }
    seApresentar(){
        console.log(`Sua pizza será a ${this.base}, com molho de ${this.molho}, cobertura com  ${this.cobertura} e para finalizar com um queijinho de ${this.queijo}`)
    }
}

const User = new Pizza("Tradicional e grande", "Tomate", "Catupiry", "Mussarela");
const User1 = new Pizza ("Integral e pequena", "Tomate e Maionese temperada", "Catupiry", "Cheedar");

User.seApresentar()
User1.seApresentar()