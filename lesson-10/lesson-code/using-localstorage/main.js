document.addEventListener('DOMContentLoaded', function() {

    // set body background color from localStorage
    document.body.style.backgroundColor = localStorage.getItem('bgColor');

    document.addEventListener('click', function(e) {
        if (e.target.id === 'changeColor') {
            var bgColor = window.prompt('What color do you want the background to be?');
            document.body.style.backgroundColor = bgColor;
            localStorage.setItem('bgColor', bgColor);
        }
    });

    

});