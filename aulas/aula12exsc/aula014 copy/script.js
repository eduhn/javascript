function resul() {
    var ida = document.querySelector('#ano');
    var sex = document.querySelector('#sex');
    var res = document.querySelector('#saida');
    var ano = new Date();
    var anor = ano.getFullYear();

    if (sex.value == 'masc') {
        var a = document.createElement('p')
        a.textContent = `Você é um Homem`
        res.appendChild(a)
    }
        else{
            alert(`oi`)
        }
}