function fc() {
    var dvv = document.querySelector("#nmr1");
    var dvs = document.querySelector("#nmr2");
    var r = document.querySelector("#res");

    var inicio = Number(dvv.value);
    var n2 = Number(dvs.value);
    var n3 = Number(dvs.value);
    var c = 0;

    r.innerHTML = '';

    for (n2; n2 <= inicio; n2 = n2 + n3) {
        var p = document.createElement("p")
        p.textContent = `|✔️ ${n2}|`;
        r.appendChild(p);

        var c = c + 1;
    }
    var t = document.createElement('h2');
    t.textContent = `Fim!
    Foi necessário ${c} x ${n3} para ${inicio}`;
    r.appendChild(t);
}