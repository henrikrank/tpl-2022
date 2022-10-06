function arvutaPaljuRahaOledRaisanud() {
    var mituSuitsuSaTeedPäevas = window.prompt("Sisesta mitu suitsu päevas suitsetad");
    var mituAastatSaSuitsetanud = window.prompt("Sisesta mitu aastat suitsetad");
    var kuiPaljuMaksabPakett = window.prompt("Sisesta suitsupaketi hind (näiteks 4.50)");

    var suitsePakis = 20;

    // arvutame mitu suitsu oled elus teinud
    var mituSuitsuOledElusTeinud = mituSuitsuSaTeedPäevas * mituAastatSaSuitsetanud * 365;

    // arvutame, palju raha sul selle peale on kulunud
    var paljuRahaOledElusKulutanud = mituSuitsuOledElusTeinud * kuiPaljuMaksabPakett / suitsePakis;

    alert("Oled elus suitsetanud " + mituSuitsuOledElusTeinud + " suitsu ja kulutanud selle peale " + paljuRahaOledElusKulutanud + " eurot.");
}
