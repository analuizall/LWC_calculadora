import { LightningElement , track } from "lwc";

export default class App extends LightningElement {
  @track num1;
  @track num2;
  resultado;

  mudouN1(event){
    //console.log(event);   para testar...ver o que o código está fazendo
    //console.log(event.target.value);  para testar...ver o que o código está fazendo
    this.num1 = Number(event.target.value);

}

mudouN2(event){
    this.num2 = Number(event.target.value);

}


  somar(){
    this.resultado = this.num1 + this.num2;
  }

  subtrair(){
    this.resultado = this.num1 - this.num2;
  }

  multiplicar(){
    this.resultado = this.num1 * this.num2;
  }

  dividir(){
    this.resultado = this.num1 / this.num2;
  }
}
