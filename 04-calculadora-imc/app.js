'use strict'

function calcularIMC(){
    const inputNome = document.getElementById('nome')
    const inputAltura = document.getElementById('altura')
    const inputPeso = document.getElementById('peso')
    const resultado = document.getElementById('resultado')

    const nome = inputNome.value
    const altura = parseFloat(inputAltura.value)
    const peso = parseFloat(inputPeso.value)

    const imc = peso / (altura * altura) 
    let status = ''


    if(imc < 18.5){
        resultado.classList.add('abaixo')
        status = 'Abaixo do peso'
        
    }else if(imc >= 18.5 && imc < 25){
        resultado.classList.add('peso-ideal')
        status = 'Peso ideal'

    }else if(imc >= 25 && imc <30){
        resultado.classList.add('sobrepeso')
        status = 'Sobrepeso'

    }else if(imc >= 30 && imc < 35){
        resultado.classList.add('obesidade1')
        status = 'Obesidade I'

    }else if (imc >= 35 && imc < 40){
        resultado.classList.add('obesidade2')
        status = 'Obesidade II'

    }else{
        resultado.classList.add('obesidade3')
        status = 'Obesidade III'

    }

    resultado.textContent = `${nome} você está ${imc.toFixed(2)}`

    inputNome.value = ''
    inputAltura.value = ''
    inputPeso.value = ''
    inputNome.focus()

}


