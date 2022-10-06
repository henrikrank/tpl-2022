document.addEventListener('DOMContentLoaded', function() {

    function arvutaKeskmineHinne() {
        var hinded = prompt('Sisesta hinded');
        var hinneteSumma = 0;
        var paljuHindeidOn = hinded.length;

        for (i = 0; i < paljuHindeidOn; i++) {
            hinneteSumma = hinneteSumma + parseInt(hinded[i]);
        }

        var keskmineHinne = hinneteSumma / paljuHindeidOn;
        alert('Keskmine hinne on ' + keskmineHinne);
    }

    var button = document.createElement('button');
    button.innerHTML = 'Arvuta keskmine hinne';
    button.classList.add('Hello')
    button.setAttribute('onclick', 'arvutaKeskmineHinne()')
    document.body.appendChild(button);

});