function Contar() {
    var primeiro = document.querySelector("#inicio")
    var ultimo = document.querySelector("#fim")
    var passo = document.querySelector("#passo")
    var resposta = document.querySelector("#resultado")

    var primeiro = Number(primeiro.value)
    var primeiroR = primeiro
    var ultimo = Number(ultimo.value)
    var passo = Number(passo.value)
    var vezes = -1


    if (passo == 0) {
        resposta.innerHTML = `<strong>..revise os dados..</strong>`
    }
        else {
            resposta.innerHTML = ``

            for (primeiro; primeiro <= ultimo; primeiro += passo) {
                vezes = vezes + 1

                var a = document.createElement("p")
                a.textContent = `${primeiro}; `
                resposta.appendChild(a)
            }

            var vezesR = document.createElement("h3")
            vezesR.textContent=`Saindo de ${primeiroR} para chegar em ${ultimo} temos que dar ${vezes} passos!`
            resposta.appendChild(vezesR)
        }
}
//Texto do commit:
//Alguns ajustes nos arquivos; Correção de objetivo do exercício e execução html, css e js completa e funcional.