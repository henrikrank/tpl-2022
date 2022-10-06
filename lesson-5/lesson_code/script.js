document.addEventListener('DOMContentLoaded', function() {

    var button = document.createElement('button');
    button.innerHTML = 'Arvuta keskmine hinne';
    button.classList.add('Hello')
    button.setAttribute('onclick', 'arvutaKeskmineHinne()')
    document.body.appendChild(button);

});