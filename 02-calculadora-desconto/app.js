'use strict'

function calcularDesconto() {
    const inputPreco = document.getElementById('preco')
    const inputDesconto = document.getElementById('desconto')
    const resultado = document.getElementById('resultado')

    //Pegando os valores digitados
    const preco = parseFloat(inputPreco.value)
    const desconto = parseFloat(inputDesconto.value)

    //Calculo do valor do desconto
    const valorDesconto = preco * (desconto / 100)
    //Calcula o preço final que o usuário pagará
    const valorFinal = preco - valorDesconto

    removerClasses()
    if (desconto < 5) {
        resultado.classList.add('desconto-baixo') 
        resultado.innerHTML = `Preço Final: R$ ${valorFinal.toFixed(2)} <br>
                               Economia de: R$ ${valorDesconto.toFixed(2)}`

    } else if (desconto <= 10) {
        resultado.classList.add('desconto-medio')
        resultado.innerHTML = `Preço final: R$ ${valorFinal.toFixed(2)} <br> 
                               Economia de: R$ ${valorDesconto.toFixed(2)}`

    } else {
        resultado.classList.add('desconto-alto')
        resultado.innerHTML = `Preço final: R$ ${valorFinal.toFixed(2)} <br> 
                               Economia de: R$ ${valorDesconto.toFixed(2)}`

    }

    // Limpa os campos e coloca o cursor de volta no preço para um novo cálculo
    inputPreco.value = ''
    inputDesconto.value = ''
    inputPreco.focus()

}
function removerClasses(){
    const resultado = document.getElementById('resultado')
    resultado.classList.remove('desconto-baixo', 'desconto-medio', 'desconto-alto')
}

// textContent,Exibe apenas texto (seguro contra ataques).
// innerText,Exibe texto respeitando a formatação visual.
// innerHTML,"Permite usar tags HTML como <br>, <b>, <div>."