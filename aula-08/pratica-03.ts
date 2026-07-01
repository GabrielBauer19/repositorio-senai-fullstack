class carro {
marca:string;
modelo:string;
ano:number;

constructor (marca: string, modelo: string, ano: number) {

    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
}

exibirdetalhes(): void {
console.log (`${this.marca} ${this.modelo} - ${this.ano}`);}
}
let carro1 = new carro ('BMW', 'civic', 1870)
carro1.exibirdetalhes ();