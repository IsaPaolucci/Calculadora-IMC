function calcular(){

    var altura = (document.getElementById('altura').value)// se peso cm (/100)
    var peso = document.getElementById('peso').value
    var resultado = document.querySelector("#resultado")


    var imc = (peso/altura**2).toFixed(2)
    var text =""

    if(imc<18.5){
        text ='Abaixo do peso!'
    }else if (imc<24.9){
        text='Peso normal!'
    }else if(imc<29.9){
        text ='Está com soprepeso'
    }else if(imc<34.9){
        text ='Obesidade'
    }else if(imc>35){
        text= 'Obesidade mórbida'
    }

    if(altura==0 || peso==0){
        alert('[ERRO] Preencha os campos!')
        resultado.innerHTML = ''
    }else {
        resultado.innerHTML = `Seu IMC é ${imc}.<br> ${text}`
    }
 
}