var d = new Date()
var d = d.getDay()
//var d = 6

switch(d){
    case(0):
        r = `Domingo`
    break

    case(1):
        r = `Segunda-feira`
    break
    
    case(2):
        r = `Terça-feira`
    break

    case(3):
        r = `Quarta-feira`
    break
    
    case(4):
        r = `Quinta-feira`
    break

    case(5):
        r = `Sexta-feira`
    break

    case(6):
        r = `Sabádo`
    break

    default:
        r = `[erro] Não foi possível localizar sua data.`
    break
}


console.log(`Hoje é ${r}.`)