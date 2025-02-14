var m = `Bom dia!`
var t = `Boa tarde!`
var n = `Boa noite!`

var a = new Date()
var h = a.getHours()

/*var a = new Date(); var h = a.getHours()
para pegar hora do cliente*/

if(h>=0 && h<12){
    var s = m
}
    else if(h<=18){
        var s = t
    }
        else{
            var s = n
        }

console.log(`${s} Espero que esteja tudo bem! ${h}h`)