    function resul() {
        var ida = document.querySelector('#ano');
        var sex = document.querySelector('#sex');
        var res = document.querySelector('div#saida');
        
        if (sex == 'masc') {
            sex = `Homem`;
        }
            else{
                sex == `Mulher`;
            }

        res.innerHTML(`${ida}. ${sex}`);

}