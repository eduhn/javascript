var r1 = `Você não pode votar!`
var r2 = `Você pode votar, mas não é obrigado!`
var r3 = `Seu voto é obrigatório`
var i = 100

console.log(`Se sua idade é ${i}..`)
if(i<16){console.log(`${r1}`)}
    else if(i>=16 && i<18){console.log(`${r2}`)}
        else if(i>=60 && i<=99){console.log(`${r2}`)}
            else if(i>=100){console.log(`${r2} Qual é seu segredo?`)}
                else{console.log(`${r3}`)}