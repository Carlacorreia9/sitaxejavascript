function calculadora(){
    const operacao = prompt('Escolha uma operação:/n 1 som (+)/n 2 - subtração (-)/n - 3 - multiplicação (*)/n 4 - divisão real (/)/n 5- divisão inteira (%)/n 6 - potenciação (**)');

let n1 = prompt('Insira o primeiro valor:');
let n2 = prompt('Insira o segundo valor:');
let resultado

function soma(){
    resultado = n1 + n2;
    alert("$(n1) + $(n2) $(resultado)")
}
    
}

if (operacao == 1){
    soma();
} else if(operacao == 2){
    subtracao();
} else if (operacao == 3){
    multiplicacao();
} else if (opracao == 4){
    divisao();
} else if (operacao == 5){
    duvisaoImteira();
} else if (operacao == 6){
    potenciacao();
}

calculadora();