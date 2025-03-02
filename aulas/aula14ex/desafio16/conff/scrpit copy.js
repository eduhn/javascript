var fim = 32;
var começo = 3;
var passo = 3;
var vezes = 0

for (começo; começo <= fim; começo = começo + passo) {
    console.log(`${começo}`);
    var vezes = vezes + 1;
}

if(fim%passo == 0){
    var resto = 0
} else{
    resto = fim%passo
}

console.log(`Fim! Foi necessário ${vezes} x ${passo} para ${fim}. Resto = ${resto}`);

//-----------
/*
Este arquivo serve para testar a lógica do código 16..
*/