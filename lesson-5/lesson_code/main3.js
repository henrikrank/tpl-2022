function täisnurkseKolmnurgaLahendamine(a, b) {
    if (!a) {
        a = prompt('Sisesta a');
    }

    if (!b) {
        b = prompt('Sisesta b');
    }

    var c = Math.sqrt(a * a + b * b);
    var S = a * b / 2;
    var P = a + b + c;
    

    alert('Hüpotenuus on ' + c + ', pindala on ' + S + ' ja ümbermõõt on ' + P );

    // return [c, S, P];
}