window.onload = function () {
    let input = document.getElementById('valorSaque')
    input.addEventListener("keypress", enter)

    let pNotasDisponiveis = document.getElementById('notasDisponiveis')
    pNotasDisponiveis.innerHTML = "Notas disponíveis R$50  R$20  R$10"
};

function enter(event) {
    if (event.key == "Enter") {
        sacar()
    }
}
function sacar() {
    let saque = document.getElementById('valorSaque').value;
    let pRetorno = document.getElementById('retorno')

    if (valorSaque.value == "") {
        alert("Campo obrigatório!")
        valorSaque.focus()
        return pRetorno.innerHTML = `Por favor, insira um valor`
    }

    if (isNaN(saque)) {
        window.alert('Apenas numeros')
        return pRetorno.innerHTML = `O valor que você digitou não é válido. </br> 
                                    Tente valores que terminem com 0. </br> Exemplo: 80, 120, 260
                                    `
    } else if(saque[saque.length -1] != '0'){
        
        window.alert(`Valor inválido `)
        return pRetorno.innerHTML = `O valor que você digitou não é válido. </br> 
                                    Tente valores que terminem com 0. </br> Exemplo: 80, 120, 260
                                    `
    }

    let nota50 = parseInt(saque / 50);
    let nota20 = parseInt((saque % 50) / 20);
    let nota10 = parseInt(((saque % 50)% 20) / 10);

    if (
        !Number.isInteger(nota10) && 
        !Number.isInteger(nota20) &&
        !Number.isInteger(nota50) 
    ) {
        return pRetorno.innerHTML = `O valor que você digitou não é válido. </br> 
                                    Tente valores que terminem com 0. Exemplo: 80, 120, 260
                                    `
    }

    pRetorno.innerHTML = `O saque será as seguintes notas: </br> 
                        <strong>${nota50} ${nota50 < 2 ? 'Nota' : 'Notas'} de R$50</strong>  </br>
                        <strong>${nota20} ${nota20 < 2 ? 'Nota' : 'Notas'} de R$20</strong>  </br>
                        <strong>${nota10} ${nota10 < 2 ? 'Nota' : 'Notas'} de R$10</strong>  </br>
                        `
    
}
