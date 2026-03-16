'use strict'

function calcularMedia(){
    const inputNota1 = document.getElementById('nota1')
    const inputNota2 = document.getElementById('nota2')
    const inputNota3 = document.getElementById('nota3')
    const resultado = document.getElementById('resultado')

    const n1 = parseFloat(inputNota1.value)
    const n2 = parseFloat(inputNota2.value)
    const n3 = parseFloat(inputNota3.value)

    const media = (n1 + n2 + n3) / 3

    removerClasses()
    if(media >= 7 ){
        resultado.textContent = 'Aprovado'
        resultado.classList.add('aprovado')
    }else if(media >= 5 && media < 7){
        resultado.textContent = 'Recuperação'
        resultado.classList.add('recuperacao')
    }else{
        resultado.textContent = 'Reprovado'
        resultado.classList.add('reprovado')
    }

    inputNota1.value = ''
    inputNota2.value = ''
    inputNota3.value = ''
    inputNota1.focus()
}

function removerClasses(){
    const resultado = document.getElementById('resultado')
    resultado.classList.remove('aprovado', 'recuperacao', 'reprovado')
}