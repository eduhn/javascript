function Contar() {
    var primeiroElem = document.querySelector("#inicio");
    var ultimoElem = document.querySelector("#fim");
    var passoElem = document.querySelector("#passo");
    var resposta = document.querySelector("#resultado");

    var primeiro = Number(primeiroElem.value);
    var primeiroR = primeiro;
    var ultimo = Number(ultimoElem.value);
    var passo = Number(passoElem.value);
    var vezes = 0;

    if (passo <= 0) {
        resposta.innerHTML = `<strong>..revise os dados..</strong>`;
        return;
    }

    resposta.innerHTML = ``;

    if (primeiro < ultimo) {
        for (; primeiro <= ultimo; primeiro += passo) {
            vezes++;

            var a = document.createElement("p");
            a.textContent = `${primeiro}; `;
            resposta.appendChild(a);
        }
    } else {
        for (; primeiro >= ultimo; primeiro -= passo) {
            vezes++;

            var a = document.createElement("p");
            a.textContent = `${primeiro}; `;
            resposta.appendChild(a);
        }
    }
    vezes=vezes-1

    var vezesR = document.createElement("h3");
    vezesR.textContent = `Saindo de ${primeiroR} para chegar em ${ultimo} temos que dar ${vezes} passos!`;
    resposta.appendChild(vezesR);
}