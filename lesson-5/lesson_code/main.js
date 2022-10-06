// See on kommentaar
// Kasuta kommentaare, et jätta märkmeid tulevikuks ja selleks, et teised mõistaksid, mis sa oled kirja pannud

// Need on muutujad

// var mySistersName = 'Jane';
// var mySistersAge = 16;

var legalDrinkingAge = 18;
var legalGamblingAge = 21;

// See on funktsioon
function getPlacesAPersonCanGoTo(name, age) {
    if (!name) {
        name = prompt('Sisesta nimi');
    }

    if (!age) {
        age = prompt('Sisesta vanus');
    }

    if (age >= legalDrinkingAge) {
        alert(name + ' can go to the bar!');
        if (age >= legalGamblingAge) {
            alert(' ' + name + ' can also go to the casino!');
        }
    } else {
        alert(name + ' can\'t go to the bar!');
    }
}

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