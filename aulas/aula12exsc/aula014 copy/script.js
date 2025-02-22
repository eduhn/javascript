function resul() {
    var ida = document.querySelector('#ano');
    var sex = document.querySelector('#sex');
    var res = document.querySelector('#saida');
    var ano = new Date();
    var anor = ano.getFullYear();

    if (sex.value == 'masc') {
        res.innerHTML = `Você é um homem`
    }
}