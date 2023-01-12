var fontElement = document.createElement('style');
fontElement.appendChild(document.createTextNode("\
@font-face {\
    font-family: Permanent Marker;\
    src: url('https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Press+Start+2P&display=swap') format('ttf');\
}\
"));

var backElement = document.createElement('a');
backElement.id = 'back-to-main';
backElement.href = 'https://www.lütseum.ee';
backElement.style = 'position: fixed; top: 0; left: 0; padding: 10px; background: #fff; color: #000; font-size: 16px; font-weight: bold; text-decoration: none; z-index: 9999; font-family: Permanent Marker, Arial, sans-serif;';
backElement.innerHTML = '← Tagasi pealehele';

document.addEventListener('DOMContentLoaded', function(e) {
    document.head.appendChild(fontElement);
    document.body.appendChild(backElement);
})