// Importa os elementos do LWC que serão usados
import { LightningElement, api } from 'lwc';

// Define a classe do componente LWC
export default class CalculoIMC extends LightningElement {

    // Define as propriedades do componente que poderão ser recebidas de outro componente pai
    @api nome='';
    @api peso= 0;
    @api altura = 0;
    @api imc = 0;

    // Função que é ativada quando o valor do campo "Nome" é alterado
    handleNomeChange(event){
        this.nome = event.target.value;
    }

    // Função que é ativada quando o valor do campo "Peso" é alterado
    handlePesoChange(event) {
        this.peso = event.target.value;
    }

    // Função que é ativada quando o valor do campo "Altura" é alterado
    handleAlturaChange(event) {
        this.altura = event.target.value;
    }

    // Função que é ativada quando o botão "Calcular" é clicado
    calcularIMC() {
        // Converte a altura para metros
        const alturaEmMetros = this.altura;
        // Obtém o peso em Kg
        const pesoEmKg = this.peso;
        // Calcula o IMC
        const imc = pesoEmKg / (alturaEmMetros * alturaEmMetros);
        // Define o valor do IMC com duas casas decimais
        this.imc = imc.toFixed(2);
    }
}