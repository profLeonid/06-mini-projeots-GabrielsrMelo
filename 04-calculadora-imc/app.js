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

    if(imc < 18.5){
        resultado.textContent = `${nome} seu imc é ${imc.toFixed(2)}. | Você está ABAIXO DO PESO`
        resultado.classList.add('abaixo')
         
    }else if(imc >= 18.5 && imc < 25){
        resultado.textContent = `${nome} seu imc é ${imc.toFixed(2)}. | Você está com o PESO IDEAL`
        resultado.classList.add('peso-ideal')

    }else if(imc >= 25 && imc <30){
        resultado.textContent = `${nome} seu imc é ${imc.toFixed(2)}. | Você está com SOBREPESO`
        resultado.classList.add('sobrepeso')
    
    }else if(imc >= 30 && imc < 35){
        resultado.textContent = `${nome} seu imc é ${imc.toFixed(2)}. | Você está com OBESIDADE I`
        resultado.classList.add('obesidade1')

    }else if (imc >= 35 && imc < 40){
        resultado.textContent = `${nome} seu imc é ${imc.toFixed(2)}. | Você está com OBESIDADE II`
        resultado.classList.add('obesidade2')

    }else{
        resultado.textContent = `${nome} seu imc é ${imc.toFixed(2)}. | Você está com OBESIDADE III`
        resultado.classList.add('obesidade3')
    }



    inputNome.value = ''
    inputAltura.value = ''
    inputPeso.value = ''
    inputNome.focus()

}