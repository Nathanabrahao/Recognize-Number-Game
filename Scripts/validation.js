function verificaSeOChutePossuiValorValido(chute) {
    const numero = +chute


    if (numeroForInvalido()) {
        elementoChute.innerHTML += '<div>valor invalido</div>'
        return
    }

    if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML += `<div>Valor incorreto, o numero precisa estar entre ${menorValor} e ${maiorValor} </div>`
        return
    }

    if(numero === numeroSecreto){
        document.body.innerHTML = `
        <h2>Você Acertou!</h2>
        <h3>O numero é ${numeroSecreto}</h3>
        
        
        <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>`
    }else if(numero > numeroSecreto){
        elementoChute.innerHTML += `
        <div>O numero secreto é menor<i class="fa-solid fa-arrow-down"></i></div>`
    }
    else{
        elementoChute.innerHTML += `
        <div>O numero secreto é maior<i class="fa-solid fa-arrow-up"></i></div>`
    }


    function numeroForInvalido() {
        return Number.isNaN(numero)
    }

    function numeroForMaiorOuMenorQueOValorPermitido() {
        return numero > maiorValor || numero < menorValor
    }
}


document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente'){
        window.location.reload()
    }
})
