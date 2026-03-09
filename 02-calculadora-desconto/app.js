'use strict'

function calcularDesconto(){
    const preco = document.getElementById('preco')
    const desconto = document.getElementById('desconto')
    const resultado = document.getElementById('resultado')

    const valorComDesconto  = preco * (desconto / 100)
    const  valorEconomizado = preco - valorComDesconto
    
    if(valorComDesconto < 5){
        resultado.textContent = 'oi'

    }else{

    }
}