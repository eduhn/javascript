function carregar(){
    var im = document.querySelector('#mg')
    var data = new Date()
    var hora = data.getHours()
    var r = document.querySelector('#turno')
    
    var h = hora + 'h'
    
    if(hora >= 0 && hora < 12){
        var saudacao = 'Bom dia!'
        document.body.style.background = '#F8F5EC'
        im.src = "midias/Picsart_25-02-17_15-22-45-686.jpg"
    }
    else if(hora >= 12 && hora < 18){
        var saudacao = 'Boa tarde!'
        document.body.style.background = '#B6A648'
        im.src = 'midias/Picsart_25-02-17_15-43-16-584.jpg'
    }
    else{
        var saudacao = 'Boa noite!'
        document.body.style.background = '#2D4150' 
        im.src = 'midias/Picsart_25-02-17_15-42-49-635.jpg'
    }
    r.innerHTML = `${h}<br> Olá, ${saudacao}`
}
