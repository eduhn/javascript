function fc() {
    var dvv = document.querySelector("#nmr1");
    var dvd = document.querySelector("#nmr2");
    var r = document.querySelector("#res");

    var n1 = Number(dvv.value);
    var n2 = Number(dvd.value);
    var n3 = Number(dvd.value);
    var c = 0;

    r.innerHTML = '';

    for (n2; n2 <= n1; n2 = n2 + n3) {
        var p = document.createElement("p")
        p.textContent = `|✔️ ${n2}|`;
        r.appendChild(p);

        var c = c + 1;
    }
    var t = document.createElement('h2');
    t.textContent = `Fim!
    Foi necessário ${c} x ${n3} para ${n1}`;
    r.appendChild(t);
}